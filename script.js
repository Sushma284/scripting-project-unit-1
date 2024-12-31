// a. Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');
console.log('First paragraph:', firstParagraph.textContent);

// b. Get each paragraph using document.querySelector('#id') and by their id
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');

console.log('Paragraph with ID "para1":', para1.textContent);
console.log('Paragraph with ID "para2":', para2.textContent);
console.log('Paragraph with ID "para3":', para3.textContent);
console.log('Paragraph with ID "para4":', para4.textContent);

// c. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allParagraphs = document.querySelectorAll('p');

// d. Loop through the nodeList and get the text content of each paragraph
allParagraphs.forEach((para, index) => {
    console.log(`Paragraph ${index + 1} text:`, para.textContent);
});

// e. Set a text content to the fourth paragraph
para4.textContent = 'Fourth Paragraph';

// f. Set id and class attribute for all the paragraphs using different attribute setting methods
allParagraphs.forEach((para, index) => {
    para.setAttribute('id', `newId${index + 1}`);
    para.setAttribute('class', `newClass${index + 1}`);
});

// g. Change style of each paragraph using JavaScript
allParagraphs.forEach((para) => {
    para.style.color = 'blue';
    para.style.backgroundColor = 'lightgrey';
    para.style.border = '1px solid black';
    para.style.fontSize = '16px';
    para.style.fontFamily = 'Georgia, serif';
});
// h. Select all paragraphs and apply styles: 
allParagraphs.forEach((para, index) => {
    if (index === 0 || index === 2) {
        para.style.color = 'green';
    } else if (index === 1 || index === 3) {
        para.style.color = 'red';
    }
});

// i. Set text content, id, and class for each paragraph
allParagraphs.forEach((para, index) => {
    para.textContent = `Paragraph ${index + 1} (Updated)`;
    para.setAttribute('id', `finalId${index + 1}`);
    para.setAttribute('class', `finalClass${index + 1}`);
});

