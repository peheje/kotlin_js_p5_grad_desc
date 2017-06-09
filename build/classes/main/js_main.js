if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'js_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'js_main'.");
}
var js_main = function (_, Kotlin) {
  'use strict';
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Enum = Kotlin.kotlin.Enum;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var last = Kotlin.kotlin.collections.last_bvy38s$;
  DescentStrategy.prototype = Object.create(Enum.prototype);
  DescentStrategy.prototype.constructor = DescentStrategy;
  function Coordinate(x, y) {
    this.x = x;
    this.y = y;
  }
  Coordinate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Coordinate',
    interfaces: []
  };
  Coordinate.prototype.component1 = function () {
    return this.x;
  };
  Coordinate.prototype.component2 = function () {
    return this.y;
  };
  Coordinate.prototype.copy_lu1900$ = function (x, y) {
    return new Coordinate(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Coordinate.prototype.toString = function () {
    return 'Coordinate(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Coordinate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Coordinate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function CoordinateSystem() {
    this.data_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.w2_0 = width / 2;
    this.h2_0 = height / 2;
    this.xtickNum_0 = 10;
    this.ytickNum_0 = 10;
    this.minX = -10 / 2.0;
    this.maxX = this.xtickNum_0 / 2.0;
    this.xtick_0 = 0;
    this.ytick_0 = 0;
  }
  CoordinateSystem.prototype.drawGrid = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    line(this.w2_0, 0.0, this.w2_0, height);
    line(0.0, this.h2_0, width, this.h2_0);
    tmp$ = until(0, this.xtickNum_0);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2)
      line(i * this.xtick_0, this.h2_0 - 5, i * this.xtick_0, this.h2_0 + 5);
    tmp$_3 = until(0, this.ytickNum_0);
    tmp$_4 = tmp$_3.first;
    tmp$_5 = tmp$_3.last;
    tmp$_6 = tmp$_3.step;
    for (var i_0 = tmp$_4; i_0 <= tmp$_5; i_0 += tmp$_6)
      line(this.w2_0 - 5, i_0 * this.ytick_0, this.w2_0 + 5, i_0 * this.ytick_0);
  };
  CoordinateSystem.prototype.toPixel_yrtduw$ = function (c) {
    return new Coordinate(c.x * this.xtick_0 + this.w2_0, height - c.y * this.ytick_0 - this.h2_0);
  };
  CoordinateSystem.prototype.toCoordinate_yrtduw$ = function (c) {
    return new Coordinate((c.x - this.w2_0) / this.xtick_0, (height - c.y - this.h2_0) / this.ytick_0);
  };
  CoordinateSystem.prototype.drawPoints = function () {
    var tmp$;
    tmp$ = this.data_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var dp = cs.toPixel_yrtduw$(new Coordinate(element.x, element.y));
      ellipse(dp.x, dp.y, 10.0, 10.0);
    }
  };
  CoordinateSystem.prototype.drawPoint_yrtduw$ = function (p) {
    var c = this.toPixel_yrtduw$(p);
    point(c.x, c.y);
  };
  CoordinateSystem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CoordinateSystem',
    interfaces: []
  };
  function CoordinateSystem_init($this) {
    $this = $this || Object.create(CoordinateSystem.prototype);
    CoordinateSystem.call($this);
    $this.xtick_0 = width / $this.xtickNum_0;
    $this.ytick_0 = width / $this.ytickNum_0;
    return $this;
  }
  function DescentStrategy(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DescentStrategy_initFields() {
    DescentStrategy_initFields = function () {
    };
    DescentStrategy$SGD_instance = new DescentStrategy('SGD', 0);
    DescentStrategy$Momentum_instance = new DescentStrategy('Momentum', 1);
    DescentStrategy$Nesterov_instance = new DescentStrategy('Nesterov', 2);
  }
  var DescentStrategy$SGD_instance;
  function DescentStrategy$SGD_getInstance() {
    DescentStrategy_initFields();
    return DescentStrategy$SGD_instance;
  }
  var DescentStrategy$Momentum_instance;
  function DescentStrategy$Momentum_getInstance() {
    DescentStrategy_initFields();
    return DescentStrategy$Momentum_instance;
  }
  var DescentStrategy$Nesterov_instance;
  function DescentStrategy$Nesterov_getInstance() {
    DescentStrategy_initFields();
    return DescentStrategy$Nesterov_instance;
  }
  DescentStrategy.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DescentStrategy',
    interfaces: [Enum]
  };
  function DescentStrategy$values() {
    return [DescentStrategy$SGD_getInstance(), DescentStrategy$Momentum_getInstance(), DescentStrategy$Nesterov_getInstance()];
  }
  DescentStrategy.values = DescentStrategy$values;
  function DescentStrategy$valueOf(name) {
    switch (name) {
      case 'SGD':
        return DescentStrategy$SGD_getInstance();
      case 'Momentum':
        return DescentStrategy$Momentum_getInstance();
      case 'Nesterov':
        return DescentStrategy$Nesterov_getInstance();
      default:Kotlin.throwISE('No enum constant DescentStrategy.' + name);
    }
  }
  DescentStrategy.valueOf_61zpoe$ = DescentStrategy$valueOf;
  function randomBetween($receiver, min, max) {
    return $receiver.random() * (max - min) + min;
  }
  function randomBetween_0($receiver, min, max) {
    var minimum = Math.ceil(min);
    var maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum | 0)) + minimum | 0;
  }
  function binarySearch($receiver, el) {
    var m = 0;
    var n = $receiver.length - 1 | 0;
    while (m <= n) {
      var k = Math.floor((n + m | 0) / 2 | 0);
      if (el > $receiver[k]) {
        m = k + 1 | 0;
      }
       else if (el < $receiver[k]) {
        n = k - 1 | 0;
      }
       else {
        return k;
      }
    }
    return -m - 1 | 0;
  }
  function Genetic() {
  }
  function Genetic$run$lambda(closure$wheel) {
    return function (it) {
      return Pool$Companion_getInstance().pick_d9oydx$(pool, closure$wheel);
    };
  }
  Genetic.prototype.run = function () {
    var wheel = Pool$Companion_getInstance().wheel_1hfzw$(pool);
    pool.data = Kotlin.newArrayF(poolsize, Genetic$run$lambda(wheel));
    pool.data[0] = best.copy();
    var $receiver = pool.data;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (Math.random() < mutateProp)
        element.mutate_lu1900$(mutateFreq, mutateStrength);
    }
    var $receiver_0 = pool.data;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      if (Math.random() < crossoverProp)
        element_0.crossover_lu1900$(crossoverFreq, maxCrossover);
    }
    var $receiver_1 = pool.data;
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
      var element_1 = $receiver_1[tmp$_1];
      element_1.calcfitness();
    }
    return pool.findbest();
  };
  Genetic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Genetic',
    interfaces: []
  };
  function GradientDescent() {
    this.friction = 0;
    this.learningRate = 0;
    this.descentStrategy = null;
  }
  GradientDescent.prototype.run = function () {
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_0 = cs.data_0.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$ = tmp$_0.next();
      var x = tmp$.component1()
      , y = tmp$.component2();
      var error;
      tmp$_1 = until(0, best.poly.betas.length);
      tmp$_2 = tmp$_1.first;
      tmp$_3 = tmp$_1.last;
      tmp$_4 = tmp$_1.step;
      for (var i = tmp$_2; i <= tmp$_3; i += tmp$_4) {
        error = y - best.poly.eval_14dthe$(x);
        tmp$_5 = this.descentStrategy;
        if (Kotlin.equals(tmp$_5, DescentStrategy$Momentum_getInstance())) {
          best.poly.velos[i] = best.poly.velos[i] * this.friction + this.learningRate * best.poly.gradient_12fank$(x, i) * error;
          best.poly.betas[i] = best.poly.betas[i] + best.poly.velos[i];
        }
         else if (Kotlin.equals(tmp$_5, DescentStrategy$SGD_getInstance()))
          best.poly.betas[i] = best.poly.betas[i] + best.poly.gradient_12fank$(x, i) * error * this.learningRate;
      }
    }
  };
  GradientDescent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GradientDescent',
    interfaces: []
  };
  function GradientDescent_init(friction, learningRate, descentStrategy, $this) {
    if (friction === void 0)
      friction = 0.95;
    if (learningRate === void 0)
      learningRate = 1.0E-4;
    if (descentStrategy === void 0)
      descentStrategy = DescentStrategy$Momentum_getInstance();
    $this = $this || Object.create(GradientDescent.prototype);
    GradientDescent.call($this);
    $this.friction = friction;
    $this.descentStrategy = descentStrategy;
    $this.learningRate = learningRate;
    return $this;
  }
  var width;
  var height;
  var order;
  var fps;
  var poolsize;
  var mutateProp;
  var mutateFreq;
  var mutateStrength;
  var crossoverProp;
  var crossoverFreq;
  var maxCrossover;
  var betterThreshold;
  var cs;
  var best;
  var descent;
  var pool;
  var genetic;
  function main(args) {
    println((new Date()).toString());
  }
  function mousePressed() {
    if (mouseX < width && mouseY < height) {
      var coord = cs.toCoordinate_yrtduw$(new Coordinate(mouseX, mouseY));
      cs.data_0.add_11rb$(coord);
    }
  }
  function setup() {
    frameRate(fps);
    noSmooth();
    println('very setup');
    createCanvas(width + 1 | 0, height + 1 | 0);
  }
  function draw() {
    background(153);
    fill(255);
    stroke(0);
    if (cs.data_0.size > 1) {
      var bestGenetic = genetic.run();
      if (bestGenetic.fitness - best.fitness > betterThreshold) {
        println('Best picked from genetic pool. If this happens too often, turn down learning');
        var $receiver = pool.data;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var element = $receiver[tmp$];
          element.poly.resetVelocity();
        }
        best = bestGenetic.copy();
      }
      descent.run();
      best.calcfitness();
      cs.drawGrid();
      cs.drawPoints();
      best.poly.drawPoly_82vlsp$(cs);
    }
     else {
      cs.drawGrid();
      cs.drawPoints();
    }
  }
  function Polynomial() {
    this.order_0 = 0;
    this.betas = null;
    this.velos = null;
  }
  Polynomial.prototype.eval_14dthe$ = function (x) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var sum = 0.0;
    var p = 1.0;
    tmp$ = until(0, this.betas.length);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      sum += this.betas[i] * p;
      p *= x;
    }
    return sum;
  };
  Polynomial.prototype.gradient_12fank$ = function (x, coefficient) {
    return Math.pow(x, coefficient);
  };
  Polynomial.prototype.drawPoly_82vlsp$ = function (cs_0) {
    var min = cs_0.minX;
    var max = cs_0.maxX;
    var drawStep = 0.005;
    var x = min;
    while (x < max) {
      cs_0.drawPoint_yrtduw$(new Coordinate(x, this.eval_14dthe$(x)));
      x += drawStep;
    }
  };
  Polynomial.prototype.resetVelocity = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = until(0, this.velos.length);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2)
      this.velos[i] = 0.0;
  };
  Polynomial.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Polynomial',
    interfaces: []
  };
  function Polynomial_init(order_0, $this) {
    $this = $this || Object.create(Polynomial.prototype);
    Polynomial.call($this);
    $this.order_0 = order_0;
    $this.betas = Kotlin.newArrayF(order_0, Polynomial_init$lambda);
    $this.velos = Kotlin.newArrayF(order_0, Polynomial_init$lambda_0);
    return $this;
  }
  function Polynomial_init$lambda(it) {
    return randomBetween(Math, -5.0, 5.0);
  }
  function Polynomial_init$lambda_0(it) {
    return 0.0;
  }
  function Polynomial_init_0(order_0, betas, velos, $this) {
    $this = $this || Object.create(Polynomial.prototype);
    Polynomial.call($this);
    $this.order_0 = order_0;
    $this.betas = betas.slice();
    $this.velos = velos.slice();
    return $this;
  }
  function Pool() {
    Pool$Companion_getInstance();
    this.data = null;
  }
  Pool.prototype.findbest = function () {
    var tmp$;
    var $receiver = this.data;
    var maxBy$result;
    maxBy$break: {
      var tmp$_0;
      if ($receiver.length === 0) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = $receiver[0];
      var maxValue = maxElem.fitness;
      tmp$_0 = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$($receiver);
      for (var i = 1; i <= tmp$_0; i++) {
        var e = $receiver[i];
        var v = e.fitness;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
    return (tmp$ = maxBy$result) != null ? tmp$ : Kotlin.throwNPE();
  };
  function Pool$Companion() {
    Pool$Companion_instance = this;
  }
  function Pool$Companion$wheel$lambda(closure$pool, closure$sum) {
    return function (i) {
      closure$sum.v += closure$pool.data[i].fitness;
      return closure$sum.v;
    };
  }
  Pool$Companion.prototype.wheel_1hfzw$ = function (pool_0) {
    var sum = {v: 0.0};
    var wheel = Kotlin.newArrayF(pool_0.data.length, Pool$Companion$wheel$lambda(pool_0, sum));
    return wheel;
  };
  Pool$Companion.prototype.pick_d9oydx$ = function (pool_0, wheel) {
    var sum = last(wheel);
    var r = randomBetween(Math, 0.0, sum);
    var idx = binarySearch(wheel, r);
    if (idx < 0) {
      idx = -idx - 1 | 0;
    }
    return pool_0.data[idx].copy();
  };
  Pool$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Pool$Companion_instance = null;
  function Pool$Companion_getInstance() {
    if (Pool$Companion_instance === null) {
      new Pool$Companion();
    }
    return Pool$Companion_instance;
  }
  Pool.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pool',
    interfaces: []
  };
  function Pool_init(poolsize_0, $this) {
    $this = $this || Object.create(Pool.prototype);
    Pool.call($this);
    $this.data = Kotlin.newArrayF(poolsize_0, Pool_init$lambda);
    var $receiver = $this.data;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.calcfitness();
    }
    return $this;
  }
  function Pool_init$lambda(it) {
    return new Specimen(Polynomial_init(order));
  }
  function Specimen(poly) {
    this.poly = poly;
    this.fitness = -1.0;
  }
  Specimen.prototype.calcfitness = function () {
    var tmp$;
    var sum_23 = 0;
    tmp$ = cs.data_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum_23 += Math.pow(this.poly.eval_14dthe$(element.x) - element.y, 2.0);
    }
    var errorSq = sum_23;
    this.fitness = 1.0 / (1.0 + errorSq);
  };
  Specimen.prototype.copy = function () {
    var clone = Polynomial_init_0(order, this.poly.betas, this.poly.velos);
    return new Specimen(clone);
  };
  Specimen.prototype.mutate_lu1900$ = function (mutateFreq_0, strength) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = until(0, this.poly.betas.length);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2)
      if (Math.random() < mutateFreq_0)
        this.poly.betas[i] = this.poly.betas[i] + randomBetween(Math, -strength, strength);
  };
  Specimen.prototype.crossover_lu1900$ = function (crossoverFreq_0, maxCrossover_0) {
    if (maxCrossover_0 === void 0)
      maxCrossover_0 = 0.1;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var mate = pool.data[randomBetween_0(Math, 0, poolsize)];
    tmp$ = until(0, this.poly.betas.length);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      if (Math.random() < crossoverFreq_0)
        this.poly.betas[i] = this.lerp_0(this.poly.betas[i], mate.poly.betas[i], randomBetween(Math, 0.0, maxCrossover_0));
    }
  };
  Specimen.prototype.lerp_0 = function (a, b, p) {
    return a + (b - a) * p;
  };
  Specimen.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Specimen',
    interfaces: []
  };
  _.Coordinate = Coordinate;
  _.CoordinateSystem_init = CoordinateSystem_init;
  _.CoordinateSystem = CoordinateSystem;
  Object.defineProperty(DescentStrategy, 'SGD', {
    get: DescentStrategy$SGD_getInstance
  });
  Object.defineProperty(DescentStrategy, 'Momentum', {
    get: DescentStrategy$Momentum_getInstance
  });
  Object.defineProperty(DescentStrategy, 'Nesterov', {
    get: DescentStrategy$Nesterov_getInstance
  });
  _.DescentStrategy = DescentStrategy;
  _.randomBetween_iht2in$ = randomBetween;
  _.randomBetween_przh2b$ = randomBetween_0;
  _.binarySearch_taaqy$ = binarySearch;
  _.Genetic = Genetic;
  _.GradientDescent_init_la7mwf$ = GradientDescent_init;
  _.GradientDescent = GradientDescent;
  Object.defineProperty(_, 'width', {
    get: function () {
      return width;
    }
  });
  Object.defineProperty(_, 'height', {
    get: function () {
      return height;
    }
  });
  Object.defineProperty(_, 'order', {
    get: function () {
      return order;
    }
  });
  Object.defineProperty(_, 'fps', {
    get: function () {
      return fps;
    }
  });
  Object.defineProperty(_, 'poolsize', {
    get: function () {
      return poolsize;
    }
  });
  Object.defineProperty(_, 'mutateProp', {
    get: function () {
      return mutateProp;
    }
  });
  Object.defineProperty(_, 'mutateFreq', {
    get: function () {
      return mutateFreq;
    }
  });
  Object.defineProperty(_, 'mutateStrength', {
    get: function () {
      return mutateStrength;
    }
  });
  Object.defineProperty(_, 'crossoverProp', {
    get: function () {
      return crossoverProp;
    }
  });
  Object.defineProperty(_, 'crossoverFreq', {
    get: function () {
      return crossoverFreq;
    }
  });
  Object.defineProperty(_, 'maxCrossover', {
    get: function () {
      return maxCrossover;
    }
  });
  Object.defineProperty(_, 'betterThreshold', {
    get: function () {
      return betterThreshold;
    }
  });
  Object.defineProperty(_, 'cs', {
    get: function () {
      return cs;
    }
  });
  Object.defineProperty(_, 'best', {
    get: function () {
      return best;
    },
    set: function (value) {
      best = value;
    }
  });
  Object.defineProperty(_, 'descent', {
    get: function () {
      return descent;
    }
  });
  Object.defineProperty(_, 'pool', {
    get: function () {
      return pool;
    },
    set: function (value) {
      pool = value;
    }
  });
  Object.defineProperty(_, 'genetic', {
    get: function () {
      return genetic;
    }
  });
  _.main_kand9s$ = main;
  _.mousePressed = mousePressed;
  _.setup = setup;
  _.draw = draw;
  _.Polynomial_init_za3lpa$ = Polynomial_init;
  _.Polynomial_init_js5yta$ = Polynomial_init_0;
  _.Polynomial = Polynomial;
  Object.defineProperty(Pool, 'Companion', {
    get: Pool$Companion_getInstance
  });
  _.Pool_init_za3lpa$ = Pool_init;
  _.Pool = Pool;
  _.Specimen = Specimen;
  width = 800.0;
  height = 600.0;
  order = 4;
  fps = 0;
  poolsize = 100;
  mutateProp = 0.5;
  mutateFreq = 0.25;
  mutateStrength = 0.5;
  crossoverProp = 0.4;
  crossoverFreq = 0.8;
  maxCrossover = 0.3;
  betterThreshold = 0.001;
  cs = CoordinateSystem_init();
  best = new Specimen(Polynomial_init(order));
  descent = GradientDescent_init(0.8, 1.0E-6);
  pool = Pool_init(poolsize);
  genetic = new Genetic();
  Kotlin.defineModule('js_main', _);
  main([]);
  return _;
}(typeof js_main === 'undefined' ? {} : js_main, kotlin);
