import kotlin.js.Date

val width: Double = 800.0
val height: Double = 600.0

val order: Int = 4
val fps = 0
val poolsize = 1000
val betterThreshold = 0.001

val cs: CoordinateSystem = CoordinateSystem()
var best: Specimen = Specimen(Polynomial(order))
val descent: GradientDescent = Momentum(1e-5, 0.95)
var pool: Pool = Pool(poolsize)
val genetic: Genetic = Genetic()

fun main(args: Array<String>) {
    println(Date().toString())
}

fun mousePressed() {
    if (mouseX < width && mouseY < height) {
        val coord = cs.toCoordinate(Coordinate(mouseX, mouseY))
        cs.data.add(coord)
    }
}

fun setup() {
    frameRate(fps)
    noSmooth()
    println("very setup")
    createCanvas((width + 1).toInt(), (height + 1).toInt())
}

fun draw() {
    background(153)
    fill(255)
    stroke(0)

    if (cs.data.size > 1) {

        val bestGenetic = genetic.run()
        if (bestGenetic.fitness - best.fitness > betterThreshold) {
            println("Best picked from genetic pool. If this happens too often, turn down learning")
            best = bestGenetic.copy()
        }

        descent.run()
        best.calcfitness()

        // Draw
        cs.drawGrid()
        cs.drawPoints()
        best.poly.draw()
    } else {
        cs.drawGrid()
        cs.drawPoints()
    }
}
