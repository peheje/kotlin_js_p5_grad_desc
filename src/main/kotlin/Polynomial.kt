import kotlin.js.Math

class Polynomial {
    private val order: Int
    val betas: DoubleArray
    val velocities: DoubleArray

    constructor(order: Int) {
        this.order = order
        this.betas = DoubleArray(order) { Math.random() }
        this.velocities = DoubleArray(order) { 0.0 }
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