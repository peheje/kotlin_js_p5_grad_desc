class Genetic {
    private var pool: Array<Specimen>

    constructor(poolsize: Int) {
        this.pool = Array(poolsize) { Specimen(Polynomial(order)) }
        this.pool.forEach { it.calcfitness() }
    }

    fun findbest(): Specimen {
        return pool.maxBy { it.fitness }!!
    }
}