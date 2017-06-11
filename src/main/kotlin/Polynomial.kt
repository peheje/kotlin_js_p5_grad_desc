import kotlin.js.Math

class Polynomial {
    private val order: Int
    val betas: DoubleArray
    val velos: DoubleArray

    constructor(order: Int) {
        this.order = order
        this.betas = DoubleArray(order) { Math.randomBetween(-5.0, 5.0) }
        this.velos = DoubleArray(order) { 0.0 }
    }

    constructor(order: Int, betas: DoubleArray, velos: DoubleArray) {
        this.order = order
        this.betas = betas.copyOf()
        this.velos = velos.copyOf()
    }

    fun eval(x: Double): Double {
        var sum = 0.0
        var p = 1.0
        for (i in 0 until betas.size) {
            sum += betas[i] * p
            p *= x
        }
        return sum
    }

    fun gradient(x: Double, coefficient: Int): Double {
        return Math.pow(x, coefficient.toDouble())
    }

    fun drawPoly(cs: CoordinateSystem) {
        val min = cs.minX
        val max = cs.maxX
        val drawStep = 0.1

        var x: Double = min
        var y: Double
        val list = mutableListOf<Coordinate>()

        while (x < max) {
            y = eval(x)
            x += drawStep
            list.add(Coordinate(x, y))
        }
        for (i in 0 until list.size-1 step 1) {
            val p1 = cs.toPixel(list[i])
            val p2 = cs.toPixel(list[i+1])
            line(p1.x, p1.y, p2.x, p2.y)
        }
    }

    fun resetVelocity() {
        for (i in 0 until velos.size) velos[i] = 0.0
    }
}