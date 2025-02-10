// Variables
let leftStart, rightStart;

// Function to move to the staring point 
function startingPoint(){
    // set variables
    leftStart = 10;
    rightStart = 10;
    
    // set left
    document.getElementById("leftDiv").style.left = leftStart + "px";
    document.getElementById("rightDiv").style.left = rightStart + "px";
    
    // set right
    document.getElementById("leftDiv").style.top = "0px";
    document.getElementById("rightDiv").style.top = "150px";
}
startingPoint(); // call function for the first time. 

// If either DIV clicked move to the beggining
document.getElementById("leftDiv").addEventListener("click", startingPoint);
document.getElementById("rightDiv").addEventListener("click", startingPoint);

// Add event listener on keydown
document.addEventListener('keydown', function(event) {
    if (event.key == 'f') {
        leftStart += 10;
        document.getElementById("leftDiv").style.left = leftStart + "px";
    }

    if (event.key == 'j') {
        rightStart += 10;
        document.getElementById("rightDiv").style.left = rightStart + "px";
    }
});


