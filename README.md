
Earl Grey
=========



Basics
------

**Literals**

* **Strings** use double quotes: `"hello"`, `"abc def"`, `"I said: \"hello\""`
* Single-word strings can be written with a dot: `.xyz == "xyz"`
* **Numbers**: `123`, `1e10`, `0.1`; but not `.1` or `1.`
* **Other radii**: `2r1110 == 14`, `16rFF == 255`

**Comments** start with `;;` and go all the way to the end of the line

    console.log{1234} ;; this is a comment

**Function calls** use curly brackets. You can avoid the braces using
the **with** operator

    console.log{1234}
    console.log with 1234 ;; same thing

    f{x, y}
    f{x} with y ;; same thing

**Declare variables** with the `=` operator. **Assign** to them with
the `:=` operator

    x = 12
    y = 13
    x := -3
    console.log with x + y ;; 10

**Blocks** are defined three different ways. Using `[]`:

    f{} = [this_is, a{block}]

Using indent:

    f{} =
       this_is
       also a{block}

Or using "|":

    f{} = | this_is
          | a{block}.too

**Conditionals**: there is no if/else; instead you have to use the `?`
operator. The "|" form is recommended

    ? | x > 0 => "x is positive"
      | x < 0 => "x is negative"
      | else  => "x is zero"

You can also use `[]`, of course:

    ?[x > 0 => "pos", x < 0 => "neg", else => "zero"]


**Data structures** are defined using braces

    array = {1, 2, 3}
    object = {a = 1, b = 2}


**Functions** can be defined using `=`, if you care to give them a
name. **Anonymous functions** are declared with `->`

    ;; These two lines are equivalent
    double{x} = x + x
    double = {x} -> x + x

    ;; These two lines too, notice the "with" idiom
    xs.forEach{{x} -> console.log{x}}
    xs.forEach with {x} -> console.log{x}

Functions in objects can also be defined in a shorthand way:

    obj = {toString{} = "foo"}
    obj.toString{} ;; "foo"


**Properties** are accessed using dot notation, like in JavaScript:

    obj = {x = 1, y = 2}
    obj.x + obj.y ;; 3

There are a few alternative notations:

    obj.x
    obj "x"
    obj["x"]
    obj[.x]

In general, `obj[msg] <=> obj msg <=> [obj]msg`. In particular,
`f{x} <=> f[{x}]`


For **looping** there is `while`:

    x = 3
    while [x > 0]:
       x--

To loop over lists use the `each` operator:

    {1, 2, 3} each x ->
       console.log{x}

The `each` operator also serves for list comprehensions:

    console.log with {1, 2, 3} each x -> x * x
    ;; {1, 4, 9}

    xs = {-1, 2, -3, 4} each n when n > 0 -> n
    ;; {2, 4}


## Optional type annotations

You can declare variables with types. The annotations *will be
enforced*.

    String? s = "hello"  ;; OK
    String? s = 1234     ;; error!

This is of course valid for function arguments as well

    f{String? s, Number? n} =
       s + n.toString{}

    f{"abc", 1} ;; "abc1"
    f{1, 2}     ;; error!

Regular expressions are valid annotations

    f{R"x"? s} = s + " is EXTREME"
    f{"xtreme frisbee"} ;; "xtreme frisbee is EXTREME"
    f{"frisbee"}        ;; error!

Outside of a declaration, you can write `String? expr` to do an
instance check:

    console.log{String? "abc"}  ;; true
    console.log{String? 12345}  ;; false

Also useful:

    true? x       ;; check for a truthy value
    false? x      ;; check for a falsey value
    null? x       ;; check for null *specifically*
    undefined? x  ;; check for undefined *specifically*


## Coercion

While `String?` checks for a string, `String!` *coerces* into a
string:

    String! s = 123  ;; s is "123"

    f{String! s, Number? n} =
       s + n.toString{}
    f{1, 2}  ;; "12"

Coercion is type-specific. `Number!` calls `parseFloat`, as you would
expect:

    Number! "1.5"  ;; 1.5

`Array! x` returns `x` if `x` is an array, otherwise it returns `{x}`
(a one-element list).

    Array! {1, 2}  ;; {1, 2}
    Array! 1       ;; {1}

Regular expressions return the list of matched groups where the first
element of the list is the whole match.

    R"h(.)llo"! "hello"  ;; {"hello", "e"}


## Deconstruction

Earl Grey supports argument deconstruction:

    {a, b} = {1, 2}           ;; a is 1, b is 2
    {a, {b, c}} = {1, {2, 3}} ;; a is 1, b is 2, c is 3
 
Note that EG requires an exact argument count:

    {a, b, c} = {1, 2}   ;; error!
    {a, b} = {1, 2, 3}   ;; error!

`var*` can be used to catch the remainder of arguments regardless of
where it is located

    {x, rest*} = {1, 2, 3, 4}    ;; x is 1, rest is {2, 3, 4}
    {rest*, x} = {1, 2, 3, 4}    ;; x is 4, rest is {1, 2, 3}
    {x, rest*, y} = {1, 2, 3, 4} ;; x is 1, y is 4, rest is {2, 3}
    {x, *, y} = {1, 2, 3, 4}     ;; throw away the remainder

You can of course combine deconstruction with type checks and with
coercion, to interesting effects:

    {R"h(.)llo"! {_, m}} = {"hello"} ;; m is now "e"

Note: "_" in a pattern matches anything but does not declare any
variables.


## Pattern matching

The `|>` operator feeds an input into a series of "clauses" and enters
the body of the first matching clause. It is a switch statement on
steroids:

    command |>
       {"move", Number! dx, Number! dy} ->
          ;; Isn't this nicer than calling parseFloat manually?
          this.x += dx
          this.y += dy
       {"rest", Number! nhours} ->
          this.hp += nhours
       {"attack", Grue?} ->
          ;; We can special-case commands but they have to come before
          ;; the generic version.
          this.die_horribly{}
       {"attack", enemy} ->
          enemy.hp -= this.attack
          this.hp -= enemy.attack

The **when** operator lets you write arbitrary conditions for a
clause.

    command |>
        {"move", dx, dy} when [dx*dx + dy*dy] > threshold ->
            running{}
        {"move", dx, dy}
            walking{}
        ...

**or** will try to match one of a series of patterns

    x |>
       ;; match 0, or 1
       0 or 1 -> ...

       ;; match a number or a string
       Number? x or String? x -> ...

       ;; will match {123} or 123, putting 123 in x in both situations
       {x} or x

Note that **all sub-patterns must contain the same variables**.

**and** will try to match every pattern. That may not be obvious at
first, but this is very useful to create aliases!

    {1, {2, 3}} |>
       {a, {b, c} and d} ->
          ;; a is 1, b is 2, c is 3, d is {2, 3}
          ;; Note how we aliased d to the whole list while also
          ;; putting its elements in individual variables.

**Comparison operators** can be used partially. The left hand side is
implicitly filled in by the value we are matching against.

    compare{value, threshold} =
       value |>
          > threshold -> "above"
          < threshold -> "below"
          == threshold -> "equal"

The above idiom of creating a function and matching one argument is
useful enough to have a **shorthand**:

    compare{|>, threshold} =
       > threshold -> "above"
       < threshold -> "below"
       == threshold -> "equal"

Using `|>` in *any* pattern will cause the body associated to the
pattern to become a list of clauses, matching in `|>`'s place. To
illustrate:

    expr |> {x, {y, {z}}} -> ...

can also be written:

    expr |> {x, |>} -> {y, |>} -> {z} -> ...

Here's naive fibonacci using the shorthand:

    fib{|>} =
       0 -> 0
       1 -> 1
       n -> fib{n - 1} + fib{n - 2}


## Exception handling

**Exceptions** are thrown with the `throw` operator, and caught with
the `!!` operator.

    bad{} = throw TypeError{"I'm bad!"}

    x = bad{} !! 555
    ;; x is 555

The full power of EG's pattern matcher is at your disposal. This means
you can easily catch a specific kind of error:

    x = bad{} !! TypeError? e -> e
    ;; x is a reference to a TypeError

You can have multiple catch clauses to catch multiple kinds of error

    bad{} !!
       TypeError? e -> ...
       ReferenceError? e -> ...


## Chaining

The **chain** macro lets you do method chaining easily. An expression
is bound to the `@` operator, and `@` is set, in turn, to the result
of evaluating each statement in the body:

    chain {1, 2, 3}:
        @concat with {4, 5}
        @reverse{}
        {7, 6}.concat{@}
        @pop{}
    ;; {7, 6, 5, 4, 3, 2}

is equivalent to

    _temp = {1, 2, 3}
    _temp := _temp.concat with {4, 5}
    _temp := _temp.reverse{}
    _temp := {7, 6}.concat{_temp}
    _temp := _temp.pop{}
    _temp

If this is more practical for you, you can choose a different operator
or variable for the chaining (the square brackets are needed):

    chain [{1, 2, 3} as /]:
        /concat with {4, 5}
        /reverse{}
        {7, 6}.concat{/}
        /pop{}
    ;; {7, 6, 5, 4, 3, 2}

    chain [{1, 2, 3} as x]:
        x.concat with {4, 5}
        x.reverse{}
        {7, 6}.concat{x}
        x.pop{}
    ;; {7, 6, 5, 4, 3, 2}


## Defining operators

Defining new operators is trivial. Earl Grey works with a set of
reasonable default priorities, which you can check for yourself by
typing `'[expr]` in the REPL for various combinations of operators.

First, it might be useful to know how operators map to function
applications:

* **Infix**: `[a + b]` is equivalent to `[+]{a, b}`
* **Prefix**: `[+ a]` is equivalent to `[+]{null, a}`
* **Postfix**: `[a +]` is equivalent to `[+]{a, null}`

From EG's perspective, it doesn't matter whether you write `a + b` or
`[+]{a, b}`. They produce the same AST, and the same code.

To define a prefix operator that converts its argument to a string,
simply write:

    &x = String! x
    ;; alternatively: [&]{null?, x} = String! x

    &123              ;; "123"
    &10 + 10          ;; "1010"
    &Math.log{Math.E} ;; "1"

(Not as of yet) you can redefine virtually any operator. For instance,
you can change the meaning of addition:

    x + y = x - y

    88 + 18 ;; 70

This change won't leak outside of the scope of the declaration, so
addition in other code will not be affected.

