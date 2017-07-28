console.log("let's grow this tree!");


//docutment.get the input fields, calculate them to create appropriately-sized rows, 
//output them to the console, 
//add an event listener to the button when on click, it outputs the formula in a tree 
//add an event listener to each field so the pressed enter key will do the same as the grow button

//visualize a block of text that needs to allow for _ _ _ _ $ _ _ _ _ 
//                                                _ _ _ _ _ $$ _ _ _ _ _ (etcetera)


//define the fields and buttons to get by id:
let growButton = document.getElementById("growButton");
let rowsInput = document.getElementById("rowsHigh");
let charInput = document.getElementById("charBranches");

let space = " ";

// Add a button listener to trigger the treeGrow function on click:

// Also allow the enter button to do the same as the grow button 
// clickEnter.which tells javascript which key. 13 = Enter.

rowsInput.addEventListener('keyup', function(clickEnter) {
    if (clickEnter.which === 13) {
        treeGrow();
    }
});
charInput.addEventListener('keyup', function(pushEnter) {
    if (pushEnter.which === 13) {
        treeGrow();
    }
});

//Now we define the function to console the tree:

growButton.addEventListener("click", treeGrow);

function treeGrow() {
    for (i = 0; i < rowsInput.value; i++) {
        let currentNum = i + 1;
        let numberSpaces = space.repeat(rowsInput.value - currentNum);
        let grownBy = charInput.value.repeat(i + 1 + currentNum - 1);
        console.log("", numberSpaces, grownBy);

    }
};