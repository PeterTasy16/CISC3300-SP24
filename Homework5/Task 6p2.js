// a. Add a button with an id, when that button is clicked, change the button’s text
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    this.textContent = 'Button clicked';
});

// b. Add a list with several list items, if any list item is clicked, change all list items' color to blue
const listItems = document.querySelectorAll('#myList li');
listItems.forEach(item => {
    item.addEventListener('click', function() {
        listItems.forEach(li => {
            li.style.color = 'blue';
        });
    });
});

// c. Add a div that contains a second button element. When that button element is clicked, append a paragraph element with some text to the containing div after the second button
const parentDiv = document.getElementById('myDiv');
const secondButton = document.getElementById('mySecondButton');

secondButton.addEventListener('click', function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'New line';
    parentDiv.appendChild(paragraph);
});
