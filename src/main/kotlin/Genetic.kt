import kotlin.js.Math

class Genetic(val mutateProp: Double = 0.5,
              val mutateFreq: Double = 0.4,
              val mutateStrength: Double = 0.5,
              val crossoverProp: Double = 0.4,
              val crossoverFreq: Double = 0.8,
              val maxCrossover: Double = 0.3) {
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