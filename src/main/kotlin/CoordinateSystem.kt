class CoordinateSystem {
    internal val data: MutableList<Coordinate> = mutableListOf()
    private val w2: Double = width / 2
    private val h2: Double = height / 2
    val xtickNum: Int = 10
    val minX = -xtickNum / 2.0
    val maxX = xtickNum / 2.0
    private val ytickNum: Int = 10
    private val xtick: Double
    private val ytick: Double

    constructor() {
        xtick = width / xtickNum
        ytick = width / ytickNum
    }

    fun drawGrid() {
        // Cross
        line(w2, 0.0, w2, height)
        line(0.0, h2, width, h2)
        // Ticks X
        for (i in 0 until xtickNum)
            line(i * xtick, h2 - 5, i * xtick, h2 + 5)
        // Ticks Y
        for (i in 0 until ytickNum)
            line(w2 - 5, i * ytick, w2 + 5, i * ytick)
    }

    fun toPixel(c: Coordinate): Coordinate {
        return Coordinate(c.x * xtick + w2, height - c.y * ytick - h2)
    }

    fun toCoordinate(c: Coordinate): Coordinate {
        return Coordinate((c.x - w2) / xtick, (height - c.y - h2) / ytick)
    }

    fun drawPoints() {
        data.forEach {
            val dp = cs.toPixel(Coordinate(it.x, it.y))
            ellipse(dp.x, dp.y, 10.0, 10.0)
        }
    }
    fun drawPoint(p: Coordinate) {
        val c = toPixel(p)
        point(c.x, c.y)
    }
}