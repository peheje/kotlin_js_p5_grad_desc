import kotlin.js.Math

class GradientDescent {

    val descentStrategy = DescentStrategy.Momentum
    val friction = 0.95
    val learningRate = 0.0001
    fun run() {
        for ((x, y) in cs.data) {
            var error: Double
            for (i in 0 until best.poly.betas.size) {
                error = y - best.poly.eval(x)

                // pow(x, i) will be the gradient for the i'th coefficient:
                when (descentStrategy) {
                    DescentStrategy.Momentum -> {
                        // Momentum
                        best.poly.velos[i] = best.poly.velos[i] * friction + learningRate * Math.pow(x, i.toDouble()) * error
                        best.poly.betas[i] += best.poly.velos[i]
                    }
                    DescentStrategy.SGD -> {
                        best.poly.betas[i] += Math.pow(x, i.toDouble()) * error * learningRate;
                    }
                }

            }
        }
    }
}