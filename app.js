const choices = document.querySelector('.sign-choices')
const userChoice = document.getElementsByTagName('input')
const signsImage = document.querySelectorAll('.signsImg')
const confirmBtn = document.querySelector('.confirm-btn')
const rockImgUser = document.querySelector('.rockImg')
const paperImgUser = document.querySelector('.paperImg')
const scissorsImgUser = document.querySelector('.scissorsImg')

///RANDOM SIDE DISPLAY
const rockRandom = document.querySelector('.rockRandom')
const paperRandom = document.querySelector('.paperRandom')
const scissorsRandom = document.querySelector('.scissorsRandom')

choices.addEventListener('click', (e)=>{
    signsImage.forEach((img)=>{
        img.classList.remove('selected-image')
    })
    resetAll()
    document.getElementById(e.target.value).classList.add('selected-image')
    confirmBtn.classList.add('confirm-btnSelected')
})

const resetAll= ()=>{
    rockImgUser.style.display="none"
    paperImgUser.style.display="none"
    scissorsImgUser.style.display="none"
    rockRandom.style.display="none"
    paperRandom.style.display="none"
    scissorsRandom.style.display="none"
    resultContainer.innerHTML=" "


}

confirmBtn.addEventListener('click', ()=>{
//get a random value and display
    const randomValue = generateRandom()
    displayRandomSide(randomValue)

//get input value and display
    const userValue = getInput()
    displayImage(userValue)
//compare
    compareResult(userValue, randomValue)
  
    
    
})

const generateRandom =()=>{
    return Math.floor(Math.random() *3) + 1
}

const getInput = ()=>{
    for (i = 0; i < userChoice.length; i++) {
        if (userChoice[i].type === 'radio' && userChoice[i].checked) {
            return value = userChoice[i].value;       
        }
    }
}

const displayImage =(value)=>{

    if (value === "rock") {
        rockImgUser.style.display="block"
    }

    if (value === "paper") {
         paperImgUser.style.display="block"
     
    }
    if (value === "scrissors"){
       scissorsImgUser.style.display="block"

    }


}

const displayRandomSide = (num)=>{
    random = num
    if (random == 1){
        rockRandom.style.display="block"
    } else if (random == 2){
        paperRandom.style.display="block"
    } else if (random == 3){
        scissorsRandom.style.display="block"
    }
}

const compareResult = (user, random)=>{
    if (user === "rock"){
        if (random == 3){
            return displayResult('User Win')
        } else if (random == 1){
            return displayResult('It is a tie')
        } else {
            return displayResult('User lose')
        }
    }
    if (user === "paper"){
        if (random == 1){
            return displayResult('User Win')
        } else if (random == 2){
            return displayResult('It is a tie')
        } else {
            return displayResult('User lose')
        }
    }
    if (user === "scrissors"){
        if (random == 2){
            return displayResult('User Win')
        } else if (random == 3){
            return displayResult('It is a tie')
        } else {
            return displayResult('User lose')
        }
    }

}

const resultContainer = document.querySelector('.result-container')

const displayResult = (msg)=>{
    resultContainer.innerHTML = `<h2> ${msg} </h2>`
    for (i = 0; i < userChoice.length; i++) {
        userChoice[i].checked = false     
        }
    signsImage.forEach((img)=>{
        img.classList.remove('selected-image')})
    confirmBtn.classList.remove('confirm-btnSelected')
    }