import kotlin.js.Math

class Pool {
    var data: Array<Specimen>

    constructor(poolsize: Int) {
        this.data = Array(poolsize) { Specimen(Polynomial(order)) }
        this.data.forEach { it.calcfitness() }
    }

    constructor(data: Array<Specimen>) {
        this.data = data
    }

    fun findbest(): Specimen {
        return data.maxBy { it.fitness }!!
    }

    companion object {
        fun wheel(pool: Pool): DoubleArray {
            var sum = 0.0
            val wheel = DoubleArray(pool.data.size) { i -> sum += pool.data[i].fitness; sum }
            return wheel
        }

        fun pick(pool: Pool, wheel: DoubleArray): Specimen {
            val sum = wheel.last()
            val r = Math.randomBetween(0.0, sum)
            var idx = wheel.binarySearch(r)
            if (idx < 0) {
                idx = -idx - 1
            }
            return pool.data[idx].copy()
        }
    }
}