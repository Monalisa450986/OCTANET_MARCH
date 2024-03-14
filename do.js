let ListContainer= document.getElementById('list-container');
let inputBox = document.getElementById('input-box');

function addtask(){
    if(inputBox.value === ''){
        alert('please enter your task!');
    }
    else{
        let task = document.createElement('li');
        task.textContent = inputBox.value;
       ListContainer.appendChild(task);

let span = document.createElement('span')
span.textContent = '\u00d7';
task.appendChild(span);
    }
    inputBox.value = '';

}
ListContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked');
    }
    else if(el.target.tagName =='SPAN'){
        el.target.parentElement.remove();
    }
})