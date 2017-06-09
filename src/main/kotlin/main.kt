import kotlin.js.Date
import kotlin.js.Math

val width: Double = 600.0
val height: Double = 600.0

val order: Int = 4
val fps = 0
val poolsize = 1000
val mutateProp = 0.2
val mutateFreq = 0.25
val mutateStrength = 1.0

val crossoverProp = 0.4
val crossoverFreq = 0.2
val maxCrossover = 0.1

val betterThreshold = 0.01

val cs: CoordinateSystem = CoordinateSystem()
var best: Specimen = Specimen(Polynomial(order))
val gd: GradientDescent = GradientDescent(learningRate = 0.000001, friction = 0.95)
var pool: Pool = Pool(poolsize)

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
    println("very setup")
    val canvas = createCanvas((width + 1).toInt(), (height + 1).toInt())
}


fun draw() {
    background(153)
    fill(255)
    stroke(0)

    if (cs.data.size > 1) {
        val wheel = Pool.wheel(pool)
        pool.data = Array(poolsize) { Pool.pick(pool, wheel) }
        pool.data[0] = best.copy()

        pool.data.forEach { if (Math.random() < mutateProp) it.mutate(mutateFreq, mutateStrength) }
        pool.data.forEach { if (Math.random() < crossoverProp) it.crossover(crossoverFreq, maxCrossover) }
        pool.data.forEach { it.calcfitness() }

        val bestGenetic = pool.findbest()
        if (bestGenetic.fitness - best.fitness > betterThreshold) {
            println("Best picked from genetic pool. If this happens too often, turn down learning")
            pool.data.forEach { it.poly.resetVelocity() }
            best = bestGenetic.copy()
        }
        gd.run()
        best.calcfitness()

        // Draw
        cs.drawGrid()
        cs.drawPoints()
        best.poly.drawPoly(cs)
    } else {
        cs.drawGrid()
        cs.drawPoints()
    }
}
