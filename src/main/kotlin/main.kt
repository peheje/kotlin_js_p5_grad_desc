import kotlin.js.Date

val width: Double = 600.0
val height: Double = 600.0
val order: Int = 3
var best: Specimen = Specimen(Polynomial(order))
val gd: GradientDescent = GradientDescent()
val cs: CoordinateSystem = CoordinateSystem()
val fps = 0
val poolsize = 100

fun main(args: Array<String>) {
    println(Date().toString())
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
        val ge = Genetic(poolsize)
        val bestGenetic = ge.findbest()
        if (bestGenetic.fitness > best.fitness) {
            best = bestGenetic
        }
        gd.run()
        cs.drawGrid()
        cs.drawPoints()
        best.poly.drawPoly(cs)
    } else {
        cs.drawGrid()
        cs.drawPoints()
    }
}