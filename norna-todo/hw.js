// console.log('javascript')

const norna_array = [];


function buttonClick() {

// const addTodo = document.getElementById('to-do');
// addTodo.addEventListener('submit', function (event){

    // get input
    // declare get_value
    // event.preventDefault(); //prevent the form from reloading
    const input = document.getElementById('get_value').value
    console.log(input)

    if (input) {
    norna_array.push(input);
    }

    // render elements        

    // creating an element
    var divElement = document.createElement('div');
    divElement.classList.add('input')

    // a span element
    var valueElement = document.createElement('span'); // the value that we got from the input that we append from the text
    valueElement.innerText = input;// we appended the entire div to the render element to the end of the div
    divElement.appendChild(valueElement);

    // declare render_element
    const renderElement = document.getElementById('render_element')
    renderElement.appendChild(divElement);
    renderElement.addEventListener('click', console.log('hello'))
// });

// adding delete button
var deleteButton = document.createElement('i');
deleteButton.className= 'fa-solid fa-trash';
// deleteButton.innerText = 'delete'
divElement.appendChild(deleteButton);
// deleteButton.style.float = 'right';

// adding delete function
deleteButton.addEventListener('click', function(){
    divElement.remove();

    const indexOfElement = norna_array.indexOf(input);
    norna_array.splice(indexOfElement, 1);
    console.log(norna_array)    
})  

    // adding a checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    // checkBox.id = 'render-element';
    divElement.appendChild(checkBox);   
    divElement.prepend(checkBox);   
    // checkBox.style.
    
    // deleteButton.style.position = 'relative';
    // deleteButton.style.left = '300px';
}