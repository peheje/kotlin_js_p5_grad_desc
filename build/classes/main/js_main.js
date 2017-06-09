if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'js_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'js_main'.");
}
var js_main = function (_, Kotlin) {
  'use strict';
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Enum = Kotlin.kotlin.Enum;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
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
    this.xtickNum = 10;
    this.ytickNum_0 = 10;
    this.xtick_0 = 0;
    this.ytick_0 = 0;
  }
  CoordinateSystem.prototype.drawGrid = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    line(this.w2_0, 0.0, this.w2_0, height);
    line(0.0, this.h2_0, width, this.h2_0);
    tmp$ = until(0, this.xtickNum);
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
    $this.xtick_0 = width / $this.xtickNum;
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
  function Genetic() {
    this.pool_0 = null;
  }
  Genetic.prototype.findbest = function () {
    var tmp$;
    var $receiver = this.pool_0;
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
  Genetic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Genetic',
    interfaces: []
  };
  function Genetic_init(poolsize_0, $this) {
    $this = $this || Object.create(Genetic.prototype);
    Genetic.call($this);
    $this.pool_0 = Kotlin.newArrayF(poolsize_0, Genetic_init$lambda);
    var $receiver = $this.pool_0;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.calcfitness();
    }
    return $this;
  }
  function Genetic_init$lambda(it) {
    return new Specimen(Polynomial_init(order));
  }
  function GradientDescent() {
    this.descentStrategy = DescentStrategy$Momentum_getInstance();
    this.friction = 0.95;
    this.learningRate = 1.0E-4;
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
          best.poly.velos[i] = best.poly.velos[i] * this.friction + this.learningRate * Math.pow(x, i) * error;
          best.poly.betas[i] = best.poly.betas[i] + best.poly.velos[i];
        }
         else if (Kotlin.equals(tmp$_5, DescentStrategy$SGD_getInstance()))
          best.poly.betas[i] = best.poly.betas[i] + Math.pow(x, i) * error * this.learningRate;
      }
    }
  };
  GradientDescent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GradientDescent',
    interfaces: []
  };
  var width;
  var height;
  var order;
  var best;
  var gd;
  var cs;
  var fps;
  var poolsize;
  function main(args) {
    println((new Date()).toString());
  }
  function mousePressed() {
    println('mouse pressed');
    if (mouseX < width && mouseY < height) {
      var coord = cs.toCoordinate_yrtduw$(new Coordinate(mouseX, mouseY));
      cs.data_0.add_11rb$(coord);
    }
  }
  function setup() {
    frameRate(fps);
    println('very setup');
    var canvas = createCanvas(width + 1 | 0, height + 1 | 0);
  }
  function draw() {
    background(153);
    fill(255);
    stroke(0);
    if (cs.data_0.size > 1) {
      var ge = Genetic_init(poolsize);
      var bestGenetic = ge.findbest();
      if (bestGenetic.fitness > best.fitness) {
        best = bestGenetic;
      }
      gd.run();
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
  Polynomial.prototype.drawPoly_82vlsp$ = function (cs_0) {
    var min = -10 / 2 | 0;
    var max = cs_0.xtickNum / 2 | 0;
    var drawStep = 0.001;
    var x = min;
    while (x < max) {
      cs_0.drawPoint_yrtduw$(new Coordinate(x, this.eval_14dthe$(x)));
      x += drawStep;
    }
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
    return Math.random();
  }
  function Polynomial_init$lambda_0(it) {
    return 0.0;
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
    this.fitness = 1.0 / (1.0 + sum_23);
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
  _.Genetic_init_za3lpa$ = Genetic_init;
  _.Genetic = Genetic;
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
  Object.defineProperty(_, 'best', {
    get: function () {
      return best;
    },
    set: function (value) {
      best = value;
    }
  });
  Object.defineProperty(_, 'gd', {
    get: function () {
      return gd;
    }
  });
  Object.defineProperty(_, 'cs', {
    get: function () {
      return cs;
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
  _.main_kand9s$ = main;
  _.mousePressed = mousePressed;
  _.setup = setup;
  _.draw = draw;
  _.Polynomial_init_za3lpa$ = Polynomial_init;
  _.Polynomial = Polynomial;
  _.Specimen = Specimen;
  width = 600.0;
  height = 600.0;
  order = 3;
  best = new Specimen(Polynomial_init(order));
  gd = new GradientDescent();
  cs = CoordinateSystem_init();
  fps = 0;
  poolsize = 100;
  Kotlin.defineModule('js_main', _);
  main([]);
  return _;
}(typeof js_main === 'undefined' ? {} : js_main, kotlin);
