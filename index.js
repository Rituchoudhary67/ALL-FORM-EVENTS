//1.FOCUS :- when the user focuses on an element.

const focus_ex = document.getElementById("input_id1");

focus_ex.addEventListener("focus",(ex1) => {
    ex1.target.style.backgroundColor = "green"
})

//2.BLUR :- when the focus is away from a orm element.


const blur_ex = document.getElementById("input_id2");

blur_ex.addEventListener("blur", (ex2) => {
    ex2.target.style.backgroundColor = "yellow"
})

//3.CHANGE :- when the user modifies or changes the value of a form element.

const change_ex = document.getElementById("input_id3");

change_ex.addEventListener("change", (ex3) => {
    ex3.target.style.backgroundColor = "pink"
    
})


//4.SUBMIT :- when the user submit the form
const submit_ex = document.getElementById("input_id4");

submit_ex.addEventListener("submit",() => {
    alert("The form was submitted");
})