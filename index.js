const nextBtn = document.getElementById("nextBtn")
const backBtn = document.getElementById("backBtn")
const steps = document.querySelectorAll("sidebar .circle")


nextBtn.addEventListener('click', () => {
    let currActive = 0
    //loop through each step
   steps.forEach((step, i) => {
        if(step.classList.contains("active")){
            currActive = i
        }
   })
   
   if(currActive + 1 !== steps.length){
        updateActiveStep(currActive+1)
        backBtn.classList.remove("hidden")
   }
})


backBtn.addEventListener('click', () => {
    let currActive = 0
    steps.forEach((step, i) => {
        if(step.classList.contains("active")){
            currActive = i
        }
    })
    if(currActive !== 0){
        if(currActive - 1 === 0){
            backBtn.classList.add("hidden")
        }
        updateActiveStep(currActive - 1)
    }
})

const updateActiveStep = (idx) => {
    steps.forEach(step => step.classList.remove("active"))
    steps[idx].classList.add("active");
    if(idx === steps.length-1){
        nextBtn.innerText = "Submit"
       }else{
        nextBtn.innerText = "Next Step"
       }
}