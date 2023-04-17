let button = document.querySelector('button')
let result = document.querySelector('h2')
let questionOne = document.querySelector('q1')
let questionTwo = document.querySelector('q2')
let questionThree = document.querySelector('q3')
let questionFour = document.querySelector('q4')
let questionFive = document.querySelector('q5')


button.addEventListener('click', findAName)
function findAName(){
    let questionOne = document.querySelector('#q1').value
    let questionTwo = document.querySelector('#q2').value
    let questionThree = document.querySelector('#q3').value
    let questionFour = document.querySelector('#q4').value
    let questionFive = document.querySelector('#q5').value

    let pickAName = [questionOne,questionTwo,questionThree,questionFour,questionFive]
    let firstName = [Math.floor(Math.random()* 5)]
    let lastName = [Math.floor(Math.random()* 5) ]

    let newFirstName = pickAName [firstName]
    let newLastName = pickAName [lastName]

    result.innerText = `Your Wu-Tang Name is: ${newFirstName} ${newLastName}`
} 