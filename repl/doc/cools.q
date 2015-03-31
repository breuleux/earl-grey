

arith ---> Redefining arithmetic --->
  doc =

    You may redefine arithmetic operators as you see fit. The
    modifications are only valid in the scope where they are defined.

  code =
    ;; Look! I'm redefining addition! (locally)
    100 + 10 where
       a + b = a - b

curry ---> Currying --->
  doc =

    Currying

  code =
    ;; Currying a function using an external library
    ;; This could take a few seconds to load, be patient    
    require: lodash -> curry
    curry! add(x, y) =
       x + y
    {1, 2, 3}.map(add(10))


markdown ---> Markdown --->
  doc =

    Let's display some Markdown@@{L1}~! It is really quite simple,
    first import the `markdown package, generate the HTML with `parse,
    and use `[raw % html] to render it.

    L1 => http://daringfireball.net/projects/markdown/syntax

  code =
    ;; Parsing and displaying Markdown
    ;; This could take a few seconds to load, be patient
    require: markdown -> parse
    grocery-list = """
    Grocery list
    ------------
    * Potatoes
    * Rice
    * SPAM
    """
    div[raw] % parse(grocery-list)


multiplication ---> A multiplication table --->
  doc =

    The `[%] operator in Earl Grey can be used to build HTML. So let's
    generate a multiplication table!

  code =

    ;; Multiplication table
    table % 1..10 each i ->
       tr % 1..10 each j ->
          td % i * j


flot ---> Plotting with flot --->
  doc =

    This code will draw a nice plot using flot@@{L1}.
    `require will not work here, unfortunately, but
    we can still load the scripts.

    L1 => http://www.flotcharts.org/

  code =

    ;; Plotting with flot
    ;; This could take a few seconds to load, be patient
    load "https://code.jquery.com/jquery-2.1.3.min.js"
    load "http://www.flotcharts.org/flot/jquery.flot.js"
    globals: $
    $out.elem.style.height = "500px" ;; making room
    $.plot($out.elem) with {
       1..100 each i -> {i, Math.sin(i / 10)}
       1..100 each i -> {i, Math.sin(i / 10 - 1)}
       1..100 each i -> {i, Math.sin(i / 10) + 0.25}
    }
    undefined


paint ---> Crappy Paint --->

  doc =

    Haven't you always dreamed to be an artist?

    .tip %
      You can change the color with /[ctx.stroke-style = "red"]~.

  code =

    ;; Trivial canvas-based paint app
    ;; Try setting the color with ctx.stroke-style = "red"
    require: offset
    var active = false
    offx(e) = e.client-x - offset(canvas).left
    offy(e) = e.client-y - offset(canvas).top
    canvas = DOM with canvas %
       width and height = "300px"
       style = "border:2px solid black; cursor:crosshair"
       onmousedown(e) =
          active = true
          ctx.begin-path()
          ctx.move-to(offx(e), offy(e))
       (onmouseup and onmouseout)(e) =
          active = false
       onmousemove(e) =
          if active:
             ctx.line-to(offx(e), offy(e))
             ctx.stroke()
    ctx = canvas.get-context("2d")
    ctx.line-width = 3
    print canvas
    undefined



game ---> A simple game --->
  doc =
    Simple game.

  code =
    ;; A simple game: eat blue things and crap out black things that
    ;; you need to avoid. I... uh... code-golfed this a bit. Sorry!
    game(len, tl, interval) =
       map = 1..len each x -> 1..len each y -> null
       r() = Math.floor(Math.random() * len)
       spwn(color and {x, y} is {r(), r()}) =
          if{map[x][y], spwn(color), (map[x][y] = color, {x, y})}
       var {{px, py}, dx, dy, score, ate} = {spwn{.red}, 0, 0, 0, false}
       1..5 each i -> spwn(.blue)
       canvas = DOM with canvas %
          width and height = '{len * tl}px'
          tabindex = 1000
          onkeydown(e) =
             e.prevent-default()
             {dx, dy} = {39={1,0},37={-1,0},40={0,1},38={0,-1}}[e.which]
       ctx = canvas.get-context("2d")
       loop = set-interval(f, interval) where f() =
          map[px][py] = if{ate, .black, null}
          {px, py} = {u(px,dx), u(py,dy)} where u(p,d) = (p+d+len) mod len
          match map[px][py]:
             .blue  -> (spwn(.blue), score += 1, ate = true)
             .black -> (print 'Game Over! {score} points!', clear-interval(loop))
             else   -> ate = false
          map[px][py] = .red
          ctx.clear-rect(0, 0, canvas.width, canvas.height)
          0...len each x -> 0...len each y when map[x][y] ->
             ctx.begin-path()
             ctx.arc(tl*(x+0.5), tl*(y+0.5), tl/2, 0, 2*Math.PI)
             ctx.fill-style = map[x][y]
             ctx.fill()
       set-timeout(-> canvas.focus(), 10)
       print "GLUB! Use arrow keys. Eat blue. Avoid black. (My high score is 62)"
       print canvas
    game(15, 30, 150)
    undefined
