console.log(document);

// question1.addEventListener('submit');
// console.log(question1)


// let assessment = document.getElementsByName('assessment');
// console
// let correctAnswer = document.querySelector('#form-control');
const quizQuestions = document.getElementById('Questions')
const submitButton = document.getElementById('submit')
const rightAnswers = 0
const thisQuiz = 0


let eachQuestion = [
{
    question: 'The sun is a star?',
    answer: 'True'
},
{
    question: 'Zebras are black with white stripes?',
    answer: 'True'
},
{
    question: 'Pink is a primary color?',
    answer: 'False'
},
{
    question: 'Yellow and blue make white?',
    answer: 'False'
},
{
    question: 'Fish are mammals?',
    answer: 'False'
},
{
    question: 'Cold is the opposite of hot?',
    answer: 'True'
},
{
    question: 'Water is essential to live?',
    answer: 'True'
},
{
    question: 'The opposite of closed is open?',
    answer: 'True'
},
{
    question: 'Six is greater than eleven?',
    answer: 'False'
},
{
    question: 'Rain boots keep your feet dry when you walk in the rain?',
    answer: 'True'
}]

for (let i = 0; i < eachQuestion.length; i++); {
    var theAnswer = eachQuestion[i].question
    if (theAnswer == eachQuestion[i].answer){
        rightAnswers++

    }
}
submitButton.addEventListener('click')
function answerQuiz(){

    // const quizQuestion = questions.thisQuiz
    console.log('You scored '+ rightAnswers + "/" + eachQuestion.length)
}
