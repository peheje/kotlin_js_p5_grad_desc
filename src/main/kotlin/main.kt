import kotlin.js.Date
import kotlin.js.Math

val width: Double = 600.0
val height: Double = 600.0

val order: Int = 3
val fps = 0
val poolsize = 1000
val mutateProp = 0.1
val mutateFreq = 0.1

val cs: CoordinateSystem = CoordinateSystem()
var best: Specimen = Specimen(Polynomial(order))
val gd: GradientDescent = GradientDescent(learningRate = 0.0001, friction = 0.99)
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
        pool = Pool(Array(poolsize) { Pool.pick(pool, wheel) })
        pool.data.forEach { if (Math.random() < mutateProp) it.mutate(mutateFreq) }
        //pool.data.forEach { if (Math.random() < crossoverProp) it.crossover() }
        pool.data.forEach { it.calcfitness() }

        val bestGenetic = pool.findbest()
        if (bestGenetic.fitness > best.fitness) {
            println("Best picked from genetic pool.")
            best = bestGenetic
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
