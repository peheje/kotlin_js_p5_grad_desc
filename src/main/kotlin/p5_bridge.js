// Bridge between p5 and Kotlin
// Simply declare p5 global functions and call the correct kotlin function.

function setup() {
    js_main.setup()
}

function draw() {
    js_main.draw()
}

function mousePressed() {
    js_main.mousePressed()
}