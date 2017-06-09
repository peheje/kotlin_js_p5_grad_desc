import kotlin.js.Math

class GradientDescent {

    val friction: Double
    val learningRate: Double
    val descentStrategy: DescentStrategy

    constructor(friction: Double = 0.95, learningRate: Double = 0.0001, descentStrategy: DescentStrategy = DescentStrategy.Momentum) {
        this.friction = friction
        this.descentStrategy = descentStrategy
        this.learningRate = learningRate
    }

    fun run() {
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
                        best.poly.betas[i] += best.poly.gradient(x, i) * error * learningRate;
                    }
                }

            }
        }
    }
}