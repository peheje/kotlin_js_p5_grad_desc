import kotlin.js.Math

class Specimen (val poly: Polynomial) {
    var fitness: Double = -1.0

    fun calcfitness() {
        fitness = 1.0 / (1.0 + cs.data.sumByDouble { Math.pow(poly.eval(it.x) - it.y, 2.0) })
    }
}