
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

You can use the ellipsis `...` to tell `with` where to fill in the
argument(s).

    f{..., z} with y   ;; ==> f{y, z}
    f{a, ..., d} with
       b
       c               ;; ==> f{a, b, c, d}

`with` does *direct* substitution. In the below example the scope for
`x * x` is the scope active where the ellipsis is.

    {1, 2, 3}.map{{x} -> ...} with x * x
    ;; {1, 4, 9}

**Declare variables** with the `=` operator **var** for mutable,
**let** for immutable.

    var x = 12
    let y = 13
    x = -3
    console.log with x + y ;; 10

You can declare a variable directly with `var = value` if there is no
existing variable called `var` in scope. By default, variables
declared that way will be read-only.

    foo = 1234
    foo = 5678 ;; error: the foo variable is read only

Note: for convenience's sake, all variables declared in an interactive
prompt are mutable.


**Blocks** are sequences of statements, the last of which is
returned. Statements are separated by commas or newlines (semicolons
start comments) There are three different ways to make blocks.

Using `[]`:

    f{} = [this_is, a{block}]

Using indent:

    f{} =
       this_is
       also a{block}

Or using "|":

    f{} = | this_is
          | a{block}.too

**Conditionals**: `if` statements:

    if x > 0:
       console.log with "x is positive"

If you need an `else` clause, you have to put it *in* the body of if,
like this:

    if x < 0:
       console.log with "x is positive"
       else:
          console.log with "x is non-positive"

For readability you can encapsulate the positive branch with `then`:

    if x < 0:
       then:
          console.log with "x is positive"
       else:
          console.log with "x is non-positive"

`if` can be written in expression form:

    if{x > 0, "positive", "not positive"}

If you need to write many conditions, you would better use the `match`
construct instead:

    match:
       when x > 0 -> "x is positive"
       when x < 0 -> "x is negative"
       otherwise -> "x is zero"


**Data structures** are defined using braces

    array = {1, 2, 3}
    object = {a = 1, b = 2}
    also_object = {"a" => 1, "b" => 2}
    you_can_mix = {a = 1, "b" => 2, .c => 3}


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

    var x = 3
    while x > 0:
       x--

To loop over lists use the `each` operator:

    {1, 2, 3} each x ->
       console.log{x}

The `each` operator also serves for list comprehensions:

    console.log with {1, 2, 3} each x -> x * x
    ;; {1, 4, 9}

    xs = {-1, 2, -3, 4} each n when n > 0 -> n
    ;; {2, 4}


## Let and where

You can define temporary variables for a block with the following form
of **let**:

    let [x = 1, y = 2]:
       x + y

Alternatively, you can use **where**:

    x + y where
       x = 1
       y = 2

`where` is a good way to define callback functions in the middle of an
expression. For instance, `setTimeout` in JavaScript takes a timeout
argument *after* the callback, which is awkward. `where` makes it look
better (though you can also use `with` in this instance):

    setTimeout{f, 1000} where f{} =
       alert{"I am a good pop-up, don't close me!"}



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

    f{R"^x"? s} = s + " is EXTREME"
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

    {x, rest*} = {1, 2, 3, 4}     ;; x is 1, rest is {2, 3, 4}
    {rest*, x} = {1, 2, 3, 4}     ;; x is 4, rest is {1, 2, 3}
    {x, rest*, y} = {1, 2, 3, 4}  ;; x is 1, y is 4, rest is {2, 3}
    {x, *, y} = {1, 2, 3, 4}      ;; throw away the remainder

You can extract object properties too:

    {=> x, => y} = {y = 1, x = 2} ;; x is 2, y is 1
    {=> x} = {y = 1, x = 2}       ;; x is 2; you don't have to extract all properties
    {foo => x} = {foo = 1234}     ;; x is 1234

You can of course combine deconstruction with type checks and with
coercion, to interesting effects:

    {R"h(.)llo"! {_, m}} = {"hello"} ;; m is now "e"

Note: "_" in a pattern matches anything but does not declare any
variables.


## Pattern matching

The `match` operator feeds an input into a series of "clauses" and
enters the body of the first matching clause. It is a switch statement
on steroids:

    match command:
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

    match command:
        {"move", dx, dy} when [dx*dx + dy*dy] > threshold ->
            running{}
        {"move", dx, dy}
            walking{}
        ...

**or** will try to match one of a series of patterns

    match x:
       ;; match 0, or 1
       0 or 1 -> ...

       ;; match a number or a string
       Number? x or String? x -> ...

       ;; will match {123} or 123, putting 123 in x in both situations
       {x} or x

Note that **all sub-patterns must contain the same variables**.

**and** will try to match every pattern. That may not be obvious at
first, but this is very useful to create aliases!

    match {1, {2, 3}}:
       {a, {b, c} and d} ->
          ;; a is 1, b is 2, c is 3, d is {2, 3}
          ;; Note how we aliased d to the whole list while also
          ;; putting its elements in individual variables.

**Comparison operators** can be used partially. The left hand side is
implicitly filled in by the value we are matching against.

    compare{value, threshold} =
       match value:
          > threshold -> "above"
          < threshold -> "below"
          == threshold -> "equal"

The above idiom of creating a function and matching one argument is
useful enough to have a **shorthand**:

    compare{match, threshold} =
       > threshold -> "above"
       < threshold -> "below"
       == threshold -> "equal"

Using the word `match` in *any* pattern will cause the body associated
to the pattern to become a list of clauses, matching in `match`'s
place. To illustrate:

    match expr: {x, {y, {z}}} -> ...

can also be written:

    match expr: {x, match} -> {y, match} -> {z} -> ...

Here's naive fibonacci using the shorthand:

    fib{match} =
       0 -> 0
       1 -> 1
       n -> fib{n - 1} + fib{n - 2}

The feature also works for rest arguments:

     concat{*match} =
        {String? a, String? b} -> a + b
        {Array? a, Array? b} -> a ++ b


## Exception handling

**Exceptions** are thrown with the `throw` operator, and caught with
`try`:

    bad{} = throw TypeError{"I'm bad!"}

    x =
       try:
          bad{}
          error ->
             555
    ;; x is 555

Alternatively, you can use the `!!` operator.

    x = bad{} !! error -> 555
    ;; x is 555

The full power of EG's pattern matcher is at your disposal. This means
you can easily catch a specific kind of error:

    x =
       try:
          bad{}
          TypeError? e -> e
          ReferenceError? e -> e
          finally:
             ;; code to execute no matter what
    ;; x is a reference to a TypeError


### Ad hoc exceptions

Earl Grey offers a facility by which you can construct error objects
on the spot that are perfectly tailored to your situation. The syntax
is `E.tag1.tag2.[...]{message, *arguments}`

    never_happy{match} =
       String? ->
          throw E.string{"I don't want a string!"}
       Number? ->
          throw E.number{"I hate math"}
       {} ->
          throw E.array[0]{"Why is there nothing in this array?"}
       {_} ->
          throw E.array[1]{"Only one thing?"}
       {_, _} ->
          throw E.array[2]{"The number two is my least favorite."}
       {_, _, _} ->
          throw E.array[3]{"What am I going to do with all this stuff?"}
       some_other_nonsense ->
          throw E["?!?"]{"WHAT IS THIS"}

    never_happy{"take this"} !!
       E.string? e ->
          console.log with e.message

To match an error type, an error needs to contain all the required
tags, but it can contain more. For instance, `E.array?` will match
`E.array{...}`, but also `E.array[2]{...}` and even
`E.bah.humbug.array{...}`.

Ideally, every single exception thrown by your code should have a
unique set of tags.


## Chaining

The **chain** macro lets you do method chaining easily. An expression
is bound to the `@` operator, and `@` is set, in turn, to the result
of evaluating each statement in the body:

    chain {1, 2, 3}:
        @concat with {4, 5}
        @reverse{}
        {7, 6}.concat{@}
    ;; {7, 6, 5, 4, 3, 2, 1}

is equivalent to

    [var _temp = {1, 2, 3}
     _temp = _temp.concat with {4, 5}
     _temp = _temp.reverse{}
     _temp = {7, 6}.concat{_temp}
     _temp]


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

    let x + y = x - y
    88 + 18 ;; 70

This change won't leak outside of the scope of the declaration, so
addition in other code will not be affected.


## "Structs"

`#name{*args}` is equivalent to `{"name", *args}`, and `#name` is
equivalent to `{"name"}`. These can act like ad hoc "structs" of
sorts. Here's an example use:

    calc{match} =
        Number? n -> n
        #add{m, n} -> calc{m} + calc{n}
        #sub{m, n} -> calc{m} - calc{n}
        #mul{m, n} -> calc{m} * calc{n}
        #div{m, n} -> calc{m} / calc{n}
        #sub{n} -> -calc{n}

    calc with #div{#add{1, 13}, #sub{2}}       ;; -7
    calc with {.div, {.add, 1, 13}, {.sub, 2}} ;; -7, same thing


## Classes

The **class** macro declares a class.

* The class constructor must be given by the `constructor` field.
* The self can be accessed using `@`.
* Subclassing is not supported yet.

Example:

    class Person:
       constructor{String? name, Number! age} =
          @name = name
          @age = age
       describe{} =
          @name + ":" + [String! @age]
       describe2{} =
          @describe{}.replace{":", "~"}

    p1 = new Person{.peter, 12}
    p1.describe2{}               ;; "peter~12"

The `new` keyword is optional when creating instances of classes
declared with `class`:

    p2 = Person{.igor, "34"}     ;; valid
    Person? p2                   ;; yes

Static methods can be declared with a **static** block in the body.

One good use of static blocks is customizing the way your class
behaves with respect to pattern matching.

    class Person:
       static:
          ;; duck typing
          "::check"{p} = p.name and p.age
          ;; convert to Person
          "::project"{p} = Person{p.name, p.age}
       constructor{@name, @age} =
          ;; The line above is a shortcut for setting @name and @age to
          ;; the arguments of the constructor.
          pass ;; pass means: "do nothing"

    Person? {name = .quentin, age = 91}   ;; yes
    Person? Person{null, null}            ;; nope
    Person! {name = .quentin, age = 91}   ;; creates a Person


## Regular expressions

`R"regexp"` specifies a regular expression using the same semantics as
JavaScript. `R.gi"regexp"` is equivalent to JS's `/regexp/gi`.

Earl Grey also provides a regular expression sub-language used like
`R'[expr]` where:

* `any` matches one arbitrary character
* `start` and `end` match the beginning/end of the string
* `x` is equivalent to the regular expression `/\x/`, for most x
* `*expr` ==> `/expr*/`
* `+expr` ==> `/expr+/`
* `?expr` ==> `/expr?/`
* `e1 or e2` ==> `/e1|e2/`
* `in "..."` ==> `/[...]/`
* `not in "..."` ==> `/[^...]/`
* `[e1, e2, ...]` ==> `(?:e1e2...)` (non-capturing)
* `{...}` ==> `(...)` (capturing)
* `raw <regexp>` inserts a regular expression verbatim

Examples:

    R'any                      ==> /./
    R'[start, *"a", end]       ==> /^a*$/
    R'["'", * not in "'", "'"] ==> /'[^']*'/
    R'[start, [raw "."] or end]  ==> /^(?:.|$)/

The operators are prefix to make blocks more natural to write. Note
that `|` does not mean "or".

    R' | start
       | + in "0-9_"
       | ? [".", {+ digit}]
       | ? | in "eE"
           | {? in "+-", + digit}
    ==> /^[0-9_]+(?:\.(\d+))(?:[eE]([+\-]\d+))?/

This domain specific language should be primarily used in situations
where standard regular expression syntax becomes unwieldy (long
regular expressions, or that require a lot of escaping).


## Testing

Earl Grey comes with a powerful testing sub-language,
**blocktest**. That language is not yet complete and the format of the
results is subject to change (it's lacking a lot of useful information
for the time being).

In its simplest form, you can simply write one condition per line:

    test_results = blocktest "test":
       1 + 2 == 3
       .test == "test"
       1 == 2           ;; surely not!

`test_result` will contain a flat array of test results. Here I
annotate a series of tests with what each test will produce. Note that
`test_results` is *flat*: there is no nested structure, which makes
writing reports more straightforward.

    test_results = blocktest "test":

       ;; simple tests
       1 + 2 == 3       ;; #result{{"test"}, #success{true}}
       1 == 2           ;; #result{{"test"}, #failure{false}}
       bachi-bouzouk    ;; #result{{"test"}, #error{<ReferenceError: bachi>}}

       ;; you can group and label tests
       "more tests" =>
          1 == 1        ;; #result{{"test", "more tests"}, #success{true}}

       ;; preparation code
       do:
          ;; the statements are executed but produce no test results
          x = 10 + 10

       ;; test generation
       {10, 20, 30} each x -> x == 20
       ;; produces:
       ;; #result{{"test", 0}, #failure{false}}
       ;; #result{{"test", 1}, #success{true}}
       ;; #result{{"test", 2}, #failure{false}}

       "prep" =>
          do:
             bachi-bouzouk ;; #error{{"test", "prep"}, <ReferenceError: bachi>}
          ;; Errors in preparation code aborts the rest of the tests
          ;; in the group
          1 == 1           ;; #aborted{{"test", "prep"}}

       ;; Not affected by the failure in "prep"
       true



It is up to you to choose how to report the results. Here's a simple
report:

    yay and nay and errs and notrun = 0
    test_results each
       ;; note: a bug currently prevents match from being used here
       #test_result{path, match} ->
          ;; A test was run
          #success{_} ->
             ;; The test was a success :)
             yay++
          #failure{_} ->
             ;; The test yielded a wrong result
             nay++
             console.log with "Test: " + path.join{"/"} + " failed."
          #error{String! err} ->
             ;; The test failed by throwing an exception
             nay++
             console.log with
                "Test: " + path.join{"/"} + " raised an error " + err
       #error{String! err} ->
          ;; Non-test code (e.g. preparation code) raised an error
          errs++
          console.log with
             "Code for: " + path.join{"/"} + " raised an error " + err
       #aborted{_} ->
          ;; Tests that depend on preparation code that failed are
          ;; not run, but they produce #aborted tokens
          notrun++
          console.log with
             "Test: " + path.join{"/"} + " could not be run"
    console.log{"Succeeded: ", yay}
    console.log{"Failed: ", yay + errs}
    console.log{"Not run: ", notrun}


## Macros

NOTE: the interface might be subject to change.

Macros can be defined using the `macro` directive. Earl Grey's macro
system is fairly powerful, and it's important to understand how it
works.

First off, it does *not* let you change the language's syntax --
essentially, a macro lets you define a token called, say, `mac` so
that when `mac xyz` is seen, `mac` receives the *code* for `xyz`,
manipulates it in arbitrary ways, and then returns new code to execute
where the macro was found. To this purpose, note that:

    mac: xyz      ==> mac {xyz}
    mac abc: xyz  ==> mac {abc, xyz}
    mac with xyz  ==> mac {xyz}

Now, a macro is a function that takes four arguments:

* **context**: this tells you where the macro was found. For instance,
  `#expr{.data}` means it was found inside `{...}`, whereas
  `#pattern{}` means it was found in a pattern (for instance on the
  left of `=`).

* **scope**: this is an object representing the scope in which the
  macro is going to be evaluated. It also contains handy methods, for
  instance `gensym{}` to generate new symbols, `expand{}` to run the
  macro expander, and `step{}` to run a single expansion step.

* **form**: this is the complete expression for the macro, including
  the macro itself and its argument if it has any.

* **arg**: this is the argument for the macro. As a special case, it
  may be the expression `#void{}`. That expression means that the
  macro was found in a position where it does not have an argument at
  all.

Here's how some uses of the `mac` macro will translate into calls to
its macro function:

    mac 1          ==> mac{#expr{.expr}, <scope>, '[mac 1], '1}
    {mac}          ==> mac{#expr{.data}, <scope>, 'mac, #void{}}
    [mac{1, 2}, 3] ==> mac{#expr{.multi}, <scope>, 'mac{1, 2}, '{1, 2}}
    4 + mac        ==> mac{#expr{.expr}, <scope>, 'mac, #void{}}
    mac x = 55     ==> mac{#pattern{}, <scope>, '[mac x], 'x}
    {mac} = 77     ==> mac{#pattern{}, <scope>, 'mac, #void{}}


The first three arguments you might want to ignore most of the
time. For instance, here's a straightforward definition of `unless`:

    macro unless{*, #data{cond, body}}:
       'if{^cond, null, ^body}

    unless [x < 0]:
       console.log with "positive"

Note that `#data{cond, body}` will match the code generated by `{cond,
body}` (as explained before, `a b: c` is shorthand for `a{b, c}`). If
`unless` gets something different, the system will throw an exception.

As for the generated code:

    'if{^cond, null, ^body}

Let me explain what it means. The single quote is a prefix operator
that "quotes" its argument and produces an AST. So, for instance:

    '{a, b} <==> #data{#symbol{"a"}, #symbol{"b"}}

(whew!) The caret, on the other hand, "unquotes" its argument and
splices it inside the AST. For instance:

    x = 123
    '{a, ^x} <==> #data{#symbol{"a"}, 123}

Be careful, though, because `123` is not actually a valid AST
node. You can check this yourself by producing an AST that contains a
literal:

    '{a, 123} <==> #data{#symbol{"a"}, #value{123}}

There are a few equivalent solutions (also required to embed strings,
`null`, etc):

    x = #value{123}
    '{a, ^x}

    x = '123
    '{a, ^x}

    x = 123
    '{a, ^=x}


### Environments

Earl Grey's macro system is *hygienic*. What this means is that the
variables found in a macro are distinct from the variables found in
user code: even if they have the same names, they are invisible to
each other. For instance, the following macro swaps two variables:

    macro [<=>]{*, #data{a, b}}:
       '[temp = ^a, ^a = ^b, ^b = temp]

You can use the macro like this:

    var temp = 1
    var z = 2
    temp <=> z
    ;; temp is now 2, z is now 1

Now, if it was only a matter of straight subsitution, the above would
translate to

    temp = temp
    temp = temp
    z = temp

Of course, that wouldn't work. Thankfully, EG keeps track of the
environment each variable is defined and produces something like this
instead, which will work just fine.

    temp$0 = temp
    temp = z
    z = temp$0

Essentially, every node in the AST is associated to an
*environment*. All of the user's source code belongs to the specific
"user" environment, whereas the macro's productions belong to
another. This means that a macro will work the same regardless of
whatever unholy ways you might mangle your own namespace (and vice
versa).

On the other hand, it means that if you want your macro to define
variables for the user, you'll have to jump through a few hoops (not
too many, I promise). Imagine you want to create a macro that defines
the variable "one" to 1, "two" to 2, and so on, and expose these new
variables to the user. In other words, you want this

    numbers:
       console.log with three + four

to print "7".

In order for the `numbers` macro to create these variables, it needs
to do three things:

1. Get a reference to the user environment.
2. Bind the AST nodes for the new variables to this environment.
3. Generate proper declarations for these doctored variables.

Step 1 is easy, because `form.env` and `arg.env` will typically
contain the environment you want. Step 2 is easy as well: just set the
`env` field of your new variables. Step 3 is just a matter of
generating `var = value`.

    macro numbers{*, #data{body}}:
       nums = {'zero, 'one, 'two, 'three, 'four
               'five, 'six, 'seven, 'eight, 'nine}
       decls = enumerate{nums} each {i, v} ->
          v.env = body.env
          '[^v = ^=i]
       '[^*decls, ^body]

Feel free to play around with the code, and notice that removing the
`v.env = body.env` line causes a reference error on the variable
`three`. That is because by default our variables would be
instantiated in a fresh environment that user code cannot see.


### Contexts

Each macro expansion is done in a certain *context*, and macros can
have different semantics in different contexts. A macro can also
*pass* on expanding in some context. In some situations, the expander
will try *again* with a different context. For instance, if a macro
refuses to expand in the `#expr{.data}` context, the expander will try
again later with `#expr{.array}` or `#expr{.object}` once it figures
out whether `{...}` defines one or the other. If that fails, it will
try `#expr{.expr}`. That's the last resort, so make sure you do
something then.

In order to *pass* on a context, you must return:

    #nostep{form}

If you throw an exception, the expander will fail right then and
there.

It can be important to expand at the right time. For instance, the
`#expr{.multi}` context accepts `#declare` nodes that declare
variables, leading to the creation of a new scope. *Then*, with that
new scope, the expander tries again -- this time with
`#expr{.expr}`. So consider the following code:

    if{x, y, z} = x + y + z
    if{1, 2, 3}

What does it return? Well, it depends on two things:

* What `if` does in the `#pattern` context. If it returns itself, then
  it lets the system override its binding.

* But even then, it also depends on *when* `if` decides to expand. If
  it expands when `#expr{.multi}` then the result is `2`. If it
  expands when `#expr{.expr}`, then by that time `if` is now bound to
  something else, so the result is 6.

Here is a list of contexts you may run into. The arrow indicates what
the expander will try next, if you return `#nostep{form}`.

    #expr{.expr}
       Generic "you are in an expression"
    #expr{.head}
       Whatever you return will be applied on an argument
    #expr{.data} -> #expr{.array} OR #expr{.object}
       You are in `{...}`
    #expr{.array} -> #expr{.expr}
       You are in `{...}`, when the system figures out it's an array
    #expr{.object} -> #expr{.expr}
       You are in `{...}`, when the system figures out it's an object
    #expr{.multi} -> #expr{.ignore} OR #expr{.expr}
       You are in `[...]`. This is not triggered by `[x]`, only by `[x, y, ...]`.
    #expr{.ignore} -> #expr{.expr}
       Happens when the macro is not at the end of a `[...]` block. It
       means that your return value won't be needed. Note that the
       expander, at this point, knows in what order the expressions
       are -- and it only knows this after trying `#expr{.multi}` on
       all of them.

    #pattern{}
       You are in a pattern (left of "=", or left of "->")
       Passing here means that users can define variables with the
       name of your macro. The expander will not try anything else.

    #clause{}
       You are in the body of "match"


### Special AST nodes

Macros are not limited to produce AST nodes that are found in the
wild. For instance, it can return special `#splice`, `#sink` and
`#float` directives. These directives respectively splice nodes into
the parent, float them to the beginning of the parent, and sink them
to the end. To illustrate:

    macro up{*, x}:
       #float{x}
    
    macro down{*, x}:
       #sink{x}
    
    macro all{*, #data{*xs}}:
       #splice{*xs}
    
    console.log with
       {1, 2, up 3, down 4, up 5, down 6, all{7, 8, 9}, 10}

    ;; ==> {3, 5, 1, 2, 7, 8, 9, 10, 4, 6}

These work recursively, so you can also do this:

    macro updown{*, #data{x, y}}:
       #splice{#float{x}, #sink{y}}

    console.log with
       {1, 2, updown{3, 4}, 5, 6}

    ;; ==> {3, 1, 2, 5, 6, 4}

To give you an idea of the uses, `provide` uses `#sink` to make sure
that the exports are evaluated at the end. That way, you can put the
provide directives at the top of the file, and it'll work just fine.

This is a bit more advanced, but you can also return anonymous macros
with `#macro{macro_function}`. They will be applied like any normal
macro:

    macro addnums{*, expr}:
       f{accum, match} =
          #void{} ->
             #value{accum}
          #value{Number? n} ->
             #macro{m} where
                m{*, expr} = f{accum + n, expr}
       f{0, expr}
   
    console.log with
       addnums[1][2][3][4][5][6][7][8][9][10]

`addnums[1]` will return a macro, which will take `[2]` as its own
argument, and so on. `#void{}` is the special value the expander gives
when there is no argument to apply the macro to, so it can be used as
the stopping condition.

Note: `addnums 1 2 3 ...` won't work, but that's simply because wide
spacing between arguments is right-associative :)

Here's an incomplete list of the special nodes you can return, and in
what context:

    Any context that involves a sequence of instructions
       #splice, #float, #sink

    #expr{.data} context:
       #assoc{x, y}  ==> define a key/value pair
       #dynsplice{x} ==> splice the result of the evaluation of x
       #objsplice{x} ==> same as above, but for objects

    #expr{.head} context:
       #macro{m}

    #expr:
       #if{test, iftrue, iffalse} ==> this produces an if statement directly
       #js_while{test, body} ==> produces a JavaScript while loop
       #js_for{start, test, recur, body} ==> produces a JavaScript for loop
       #js_for_in{x, y, body} ==> produces a JavaScript for(x in y) loop
       #js_break, #js_continue, #js_new, #js_return, #js_throw, etc.

    #pattern{} context:
       #check{checker, subp} ==> #pattern context, instruct to produce
          '[^checker]{^value_to_match}
          and then check the subpattern (the "?" macro returns this)
       #project{projector, subp} ==> #pattern, instruct to produce
          '[^projector]{^value_to_match}
          take the result, and check subpattern on result (the "!" macro returns this)
          Note, the projector must return `{bool, value}`; the boolean
          is used to match
       #all{*patterns}
       #any{*patterns}
       #special{.placeholder} ==> this is what `match` evaluates to in a pattern

    #clause{} context:
       #clause{pattern, body}
       #block{stmt}

Note that you can define your own contexts if you feel like it,
although the default implementations won't acknowledge them (I'm still
working on an elegant way to extend them). `scope.step{context, expr}`
will do one step of expansion with the given context. That leaves with
you the responsibility to manipulate the result, including nodes with
semantics specific to your context. `scope.step_all{context,
list_of_exprs}` is also very practical: it steps all the expressions
in the list and takes care of #splice, #sink and #float for you.


### Error reporting

Ideally, to give users the best feedback, you should handle your own
errors. They should look like this:

    throw E.syntax.macro_name{message, {node1 = ..., node2 = ..., ...}}

`node1`, `node2`, etc. can be any label. Each piece of information you
give, if it is associated to a source code location (don't worry about
it -- the parser and expander keep track of this for you), will be
highlighted.

This being said, the expander will *try* to figure out what went
wrong, and this will often be sufficient, so you don't necessarily
need to put a lot of effort into it.

Tip: use pattern matching to filter the correct context/expressions
for your macro. Match errors always contain a reference to what didn't
match and Earl Grey can exploit the information. For instance, if you
try to match some specific context, it will see that the value that
failed to match is the same one that it gave you as the "context"
argument and it will infer that "the macro was used in the wrong
context".

Similarly, pattern matching on the AST will tell the expander what it
is, exactly, that you failed to match, so that it can highlight the
correct location in the error report, even if it's deeply nested.

