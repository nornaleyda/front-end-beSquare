// console.log('javascript')

const norna_array = [];


function buttonClick() {

    // get input
    // declare get_value
    const input = document.getElementById('get_value').value
    console.log(input)

    if (input) {
    norna_array.push(input);
    }
    console.log(norna_array, 'norna_array')

    // render elements

    // creating an element
    var divElement = document.createElement('div');
    divElement.classList.add('input')
    // a span element
    var valueElement = document.createElement('span');
    // the value that we got from the input that we append from the text
    valueElement.innerText = input;
    // we appended the entire div to the render element to the end of the div
    divElement.appendChild(valueElement);

    // declare render_element
    const renderElement = document.getElementById('render_element')
    renderElement.appendChild(divElement);

    // adding delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete'
    divElement.appendChild(deleteButton);

    // adding delete function
    deleteButton.addEventListener('click', function(){
        divElement.remove();
        console.log('delete button click');
        console.log(norna_array)

        const indexOfElement = norna_array.indexOf(input);
        norna_array.splice(indexOfElement, 1);
        console.log(norna_array)
    })

}