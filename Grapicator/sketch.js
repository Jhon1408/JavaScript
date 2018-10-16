WEIGHT = 500;
HEIGHT = 500;

function graphicLine() {

}

function setup() {
    createCanvas(WEIGHT, HEIGHT);
}

function draw() {
    option = prompt("Please select equatión type:\n"+"0: Exit.\n"+"1: Line.\n");
    switch (option) {
        case '0':
            window.alert("Exiting...");
            remove();
            break;
        case '1':
            window.alert("Line equation at form y = bx + c.");
            b = prompt("b:");
            b = prompt("c:");
            from = prompt("Range from:");
            to = prompt("Range to:");
            steps = prompt("Steps:");
            break;   
        default:
            console.log("Invalid option.");
            break;
    }
}