let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;

        reset();
        });
    }
}

function setupSquares() {
    // connecting the square html to colors
    for(let i = 0; i < squares.length; i++) {

        //add click listeners to squares
        squares[i].addEventListener('click', function() {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;

            console.log(clickedColor, pickedColor);
            // compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);


                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset() {
      //  generate all new colors
      colors = generateRandomColors(numberOfSquares);
      // pick a new random color
      pickedColor = pickColor();
      // change color display to match picked color
      colorDisplay.textContent = pickedColor;
      resetButton.textContent = "New Colors";
      messageDisplay.textContent = "";
      // change colors of squares on the page
      for(let i = 0; i < squares.length; i++) {
          if(colors[i]) {
              squares[i].style.display = "block";
              squares[i].style.background = colors[i];
          } else {
              squares[i].style.display = "none";
          }
          squares[i].style.backgroundColor = colors[i];

          
      }
      h1.style.background = "steelblue";
      
}
/*

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

*/
resetButton.addEventListener('click', function() {
   reset();
});



function changeColors(color) {
    // loop through all squares\
    for(let i = 0; i < squares.length; i++) {
        //changed each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // generate random number
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //  make an array
    let arr = [];

    // add num random colors to arr
    for(let i = 0; i < num; i++) {
        // get random color rand push into arr
        arr.push(randomColor());
    }

    // return that array
    return arr;

}

function randomColor() {
    // pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}