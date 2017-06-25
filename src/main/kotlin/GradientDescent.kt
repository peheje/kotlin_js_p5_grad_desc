interface GradientDescent {
    fun run()
}

class SGD(val learningRate: Double) : GradientDescent {
    override fun run() {
        for ((x, y) in cs.data) {
            var error: Double
            for (i in 0 until best.poly.betas.size) {
                error = y - best.poly.eval(x)
                best.poly.betas[i] += best.poly.gradient(x, i) * error * learningRate
            }
        }
    }
}

class Momentum(val learningRate: Double, val friction: Double) : GradientDescent {
    private val velos: DoubleArray = DoubleArray(order, { 0.0 })
    override fun run() {
        for ((x, y) in cs.data) {
            var error: Double
            for (i in 0 until best.poly.betas.size) {
                error = y - best.poly.eval(x)
                velos[i] = velos[i] * friction + learningRate * best.poly.gradient(x, i) * error
                best.poly.betas[i] += velos[i]
            }
        }
    }
}