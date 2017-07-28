// Bridge between p5 and Kotlin
// Simply declare p5 global functions and call the correct kotlin function.

var name = "GitRepos-js_main";

function setup() {
    window[name].setup()
}

function draw() {
    window[name].draw()
}

function mousePressed() {
    window[name].mousePressed()
}