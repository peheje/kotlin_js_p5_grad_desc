import kotlin.js.Math

class GradientDescent(val friction: Double = 0.95,
                      val learningRate: Double = 0.0001,
                      val descentStrategy: DescentStrategy = DescentStrategy.Momentum) {

    fun run() {
        val eps = 1e-4
        for ((x, y) in cs.data) {
            var error: Double
            for (i in 0 until best.poly.betas.size) {
                error = y - best.poly.eval(x)

                // pow(x, i) will be the gradient for the i'th coefficient:
                when (descentStrategy) {
                    DescentStrategy.Momentum -> {
                        // Momentum
                        best.poly.velos[i] = best.poly.velos[i] * friction + learningRate * best.poly.gradient(x, i) * error
                        best.poly.betas[i] += best.poly.velos[i]
                    }
                    DescentStrategy.SGD -> {
                        best.poly.betas[i] += best.poly.gradient(x, i) * error * learningRate
                    }
                    DescentStrategy.Adagrad -> {
                        val dx = best.poly.gradient(x, i)
                        best.poly.cache[i] += dx*dx
                        best.poly.betas[i] += - (dx * error * learningRate) / (Math.sqrt(best.poly.cache[i]) + eps)
                    }
                }

            }
        }
    }
}