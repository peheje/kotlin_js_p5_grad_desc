import kotlin.js.Math

class GradientDescent {
    private val p: Polynomial

    constructor(pl: Polynomial) {
        this.p = pl
    }
    val descentStrategy = DescentStrategy.Momentum
    val friction = 0.9
    val learningRate = 0.0001
    fun run() {
        for ((x, y) in cs.data) {
            var error: Double
            for (i in 0 until p.betas.size) {
                error = y - p.eval(x)

                // pow(x, i) will be the gradient for the i'th coefficient:
                when (descentStrategy) {
                    DescentStrategy.Momentum -> {
                        // Momentum
                        p.velocities[i] = p.velocities[i] * friction + learningRate * Math.pow(x, i.toDouble()) * error
                        p.betas[i] += p.velocities[i]
                    }
                    DescentStrategy.SGD -> {
                        p.betas[i] += Math.pow(x, i.toDouble()) * error * learningRate;
                    }
                }

            }
        }
    }
}