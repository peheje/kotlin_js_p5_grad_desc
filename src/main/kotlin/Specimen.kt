import kotlin.js.Math

class Specimen (val poly: Polynomial) {
    var fitness: Double = -1.0

    fun calcfitness() {
        val errorSq = cs.data.sumByDouble { Math.pow(poly.eval(it.x) - it.y, 2.0) }
        fitness = 1.0 / (1.0 + errorSq)
    }

    fun copy(): Specimen {
        val clone = Polynomial(order, poly.betas, poly.velos, poly.cache)
        return Specimen(clone)
    }

    fun mutate(mutateFreq: Double, strength: Double) {
        for (i in 0 until poly.betas.size)
            if (Math.random() < mutateFreq)
                poly.betas[i] += Math.randomBetween(-strength, strength)
    }

    fun crossover(crossoverFreq: Double, maxCrossover: Double = 0.1) {
        val mate: Specimen = pool.data[Math.randomBetween(0, poolsize)]
        for (i in 0 until poly.betas.size) {
            if (Math.random() < crossoverFreq)
                poly.betas[i] = lerp(poly.betas[i], mate.poly.betas[i], Math.randomBetween(0.0, maxCrossover))
        }
    }

    private fun lerp(a: Double, b: Double, p: Double): Double {
        return a + (b - a) * p
    }
}