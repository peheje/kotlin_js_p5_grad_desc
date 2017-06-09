import kotlin.js.Math

class Specimen (val poly: Polynomial) {
    var fitness: Double = -1.0

    fun calcfitness() {
        val errorSq = cs.data.sumByDouble { Math.pow(poly.eval(it.x) - it.y, 2.0) }
        fitness = 1.0 / (1.0 + errorSq)
    }

    fun copy(): Specimen {
        val clone = Polynomial(order, poly.betas, poly.velos)
        return Specimen(clone)
    }

    fun mutate(mutateFreq: Double) {
        for (i in 0 until poly.betas.size)
            if (Math.random() < mutateFreq)
                poly.betas[i] += Math.randomBetween(-5.0, 5.0)
    }
}