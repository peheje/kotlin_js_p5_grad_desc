import kotlin.js.Date
import kotlin.js.Math

val width: Double = 600.0
val height: Double = 600.0

val order: Int = 3
val fps = 0
val poolsize = 1000

val cs: CoordinateSystem = CoordinateSystem()
var best: Specimen = Specimen(Polynomial(order))
val gd: GradientDescent = GradientDescent(learningRate = 0.00001)
var ge: Pool = Pool(poolsize)

fun Math.randomBetween(min: Double, max: Double): Double {
    return Math.random() * (max - min) + min
}

fun DoubleArray.binarySearch(el: Double): Int {
    var m = 0
    var n = this.size - 1
    while (m <= n) {
        var k = (n + m) / 2
        if (el > this[k]) {
            m = k + 1
        } else if (el < this[k]) {
            n = k - 1
        } else {
            return k
        }
    }
    return -m - 1
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
        val bestGenetic = ge.findbest()

        if (bestGenetic.fitness > best.fitness) {
            println("Pool found best")
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