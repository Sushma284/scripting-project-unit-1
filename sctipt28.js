// Function to change the year color every second
function changeYearColor() {
    const h1 = document.querySelector('h1');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    let colorIndex = 0;

    setInterval(() => {
        h1.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Loop through colors
    }, 1000);
}

// Function to change the background color of the challenges every second
function changeDateTimeBackgroundColor() {
    const listItems = document.querySelectorAll('#challenge-list li');
    const colors = ['lightblue', 'lightgreen', 'lightyellow', 'lightcoral'];
    let colorIndex = 0;

    setInterval(() => {
        listItems.forEach((item, index) => {
            item.style.backgroundColor = colors[colorIndex % colors.length];
        });
        colorIndex++;
    }, 1000);
}

// Call functions
changeYearColor();
changeDateTimeBackgroundColor();
