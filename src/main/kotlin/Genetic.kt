import kotlin.js.Math

class Genetic {
    fun run(): Specimen {
        val wheel = Pool.wheel(pool)
        pool.data = Array(poolsize) { Pool.pick(pool, wheel) }
        pool.data[0] = best.copy()

        pool.data.forEach { if (Math.random() < mutateProp) it.mutate(mutateFreq, mutateStrength) }
        pool.data.forEach { if (Math.random() < crossoverProp) it.crossover(crossoverFreq, maxCrossover) }
        pool.data.forEach { it.calcfitness() }
        return pool.findbest()
    }
}