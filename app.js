console.log("Hello I am app");

const answer_box = document.getElementById('robhouseanswer');

let toggle_answer = ()=>{
let robhouseAnswer = document.querySelector('.answer')
	console.log("Hi I am addEventListener");
	robhouseAnswer.style.display = 'block';
}
answer_box.addEventListener('click',toggle_answer)
