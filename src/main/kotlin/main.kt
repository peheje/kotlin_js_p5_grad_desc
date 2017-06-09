import kotlin.js.Date
import kotlin.js.Math

val width: Double = 600.0
val height: Double = 600.0
val order: Int = 3
var best: Specimen = Specimen(Polynomial(order))
val gd: GradientDescent = GradientDescent(learningRate = 0.00001)
val cs: CoordinateSystem = CoordinateSystem()
val fps = 0
val poolsize = 1000

fun Math.randomBetween(min: Double, max: Double): Double {
    return Math.random() * (max - min) + min
}

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
            println("Genetic found best")
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