import kotlin.js.Date

val width: Double = 600.0
val height: Double = 600.0
val pl: Polynomial = Polynomial(3)
val gd: GradientDescent = GradientDescent(pl)
val cs: CoordinateSystem = CoordinateSystem()
val fps = 1

fun main(args: Array<String>) {
    println(Date().getTime())
}

fun mousePressed() {
    println("mouse pressed")
    if (mouseX < width && mouseY < height) {
        val coord = cs.toCoordinate(Coordinate(mouseX, mouseY))
        cs.data.add(coord)
    }
}

fun setup() {
    frameRate(fps)
    println("very setup")
    val canvas = createCanvas((width + 1).toInt(), (height + 1).toInt())
}

fun draw() {
    background(153)
    fill(255)
    stroke(0)

    if (cs.data.size > 1) {
        gd.run()
        cs.drawGrid()
        cs.drawPoints()
        pl.drawPoly(cs)
    } else {
        cs.drawGrid()
        cs.drawPoints()
    }
}

