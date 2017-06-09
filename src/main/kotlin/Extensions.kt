import kotlin.js.Math

fun Math.randomBetween(min: Double, max: Double): Double {
    return random() * (max - min) + min
}

fun Math.randomBetween(min: Int, max: Int): Int {
    val min = Math.ceil(min)
    val max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
fun DoubleArray.binarySearch(el: Double): Int {
    var m = 0
    var n = this.size - 1
    while (m <= n) {
        var k: Int = Math.floor((n + m) / 2)
        if (el > this[k]) {
            m = k + 1
        } else if (el < this[k]) {
            n = k - 1
        } else {
            return k
        }
    }
    return -m - 1
}