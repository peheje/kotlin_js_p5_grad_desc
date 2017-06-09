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
        val min = -cs.xtickNum / 2
        val max = cs.xtickNum / 2
        val drawStep = 0.001

        var x: Double = min.toDouble()
        while (x < max) {
            cs.drawPoint(Coordinate(x, eval(x)))
            x += drawStep
        }
    }
}