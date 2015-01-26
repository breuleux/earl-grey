
Earl Grey
=========

Earl Grey is a new language that compiles to JavaScript (ES6). Here's
a quick rundown of its amazing features:

* Python-like syntax!
* Fully compatible with the node.js ecosystem!
* Generators and async/await (no callback hell!)
* Powerful, deeply integrated pattern matching!
  * Used for assignment, function declaration, looping, exceptions...
* A DOM-building DSL with customizable behavior!
* A very powerful hygienic macro system that allows you to define:
  * Your own control structures!
  * New kinds of patterns for the pattern matcher!
  * Modifiers that apply to the rest of a block!
  * New kinds of macros!
* And much more!

[Try it here!](http://breuleux.github.io/earl-grey/repl) (this is an
old version that I haven't updated yet)


Install
-------

This won't work at the moment because I'm in the middle of a massive
rehaul:

    npm install -g earlgrey

This will install the `earl` command. Run `earl` with no arguments to
start an interactive interpreter, or run an EG program as:

    earl run file.eg

Compile a program with:

    earl compile file.eg
    earl compile -o dest.js file.eg
    earl -o dest/ src/

Note that the generated JavaScript depends on the `earlgrey-runtime`
package. You will need to `npm install earlgrey-runtime` someplace the
generated code can access it. I suggest using `browserify` to generate
a browser-compatible file.


Basics
------

First note that at the moment EG only supports two bracket types,
square brackets and braces. Instead of writing:

    console.log(myfunc())

you should write:

    console.log{myfunc{}}

Instead of writing:

    x * (y + 1)

write:

    x * [y + 1]

If it confuses you, there is a logic behind it: `{}` defines data
structures: arrays, maps, and yes, argument *lists*. `[]` are just
grouping brackets (`f[x]` and `f x` are equivalent in EG). Note that
indented blocks are equivalent to *square* brackets.


### Comments

    ;; This is a comment.


Variables
---------

Variables can be declared as mutable or immutable

    var x = 123        ;; mutable variable
    let x = "hello"    ;; const variable (immutable)

Scoping is lexical: variables declared in a block are only valid in
that block.

If you simply write:

    x = {1, 2, 3}

Then what happens depends on whether a variable called `x` already
exists in scope.

* It exists and is mutable: the variable is modified.
* It exists and is immutable: compile time error.
* It does not exist: it is declared in the current block as *immutable*.

This means that most of the time you can declare variables without the
`let` keyword, assuming they don't already exist. You only need `let`
if you are shadowing an existing variable. I recommend only using
`var` if absolutely necessary -- if you follow that advice it is
basically impossible to make scoping errors (the compiler will whine
loudly).

Note that the `var` and `let` keywords can be used inside
patterns. For instance:

    {var {x, y}, let z} = {{1, 2}, 3}   ;; x and y are mutable; z isn't

The **`where`** statement is another alternative to declare variables
local to single expressions. Here's a funny example:

    x + y where
       x = 100
       y = 200
       x + y = x - y
    ;; ==> -100

(Yes, you can do that)

### Global variables

Global variables need to be declared to be accessible:

    globals:
       document, google, React

The compiler will complain loudly about undeclared variables.


Literals
--------

Strings are defined using double quotes. **Do not use single quotes**:
they do not define strings (they define AST objects) and the results
will be confusing if you try.

    "this is a string"
    .this_is_also_a_string
    "Escape \" with a backslash"
    """this is a
       "long"
       multiline string"""

Number syntax is as usual save for binary/hex/other radii:

    123                ;; decimal
    16rDEADBEEF        ;; hex
    2r100101011.101    ;; binary

I'm sure you can figure out base 3 numbers.

### Arrays and objects

Both arrays and object literals are defined with curly braces:

    {1, 2, 3}            ;; an array
    {a = 1, b = 2}       ;; an object
    {"a" => 1, "b" => 2} ;; the same object


`if` and `while`
----------------

**If statements** are written as they are in Python:

    if x < 0:
       do_something{}
    elif x > 0:
       do_something_else{}
    else:
       flail_incoherently{}

`if` can also be written as an expression. It's not a ternary operator
because I honestly don't think it's worth it:

    if{x < 0, 0, x}

**While statements**

Again, they look like Python's:

    var i = 10
    while i > 0:
       print i
       i--

If you want to give a label to a `while` loop (or to *any* loop), you
need to use `while.label`, just like this:

    var i = 0
    while.outer true:
       var j = 0
       while.inner true:
          if i * j == 40:
             break outer  ;; this will break out of both while loops!
          j++
       i++


Functions
---------

Functions can be defined using `=` or `->` depending on the situation:

    square{x} = x * x

The same provisions as before apply regarding `let` or `var`: if there
is already a variable named `square`, the above is an error.

Anonymous functions are made with `->`:

    {1, 2, 3}.map{{x} -> x * x}

Note that there are more elegant ways to write the above:

    {1, 2, 3}.map with {x} -> x * x
    {1, 2, 3}.map{f} where f{x} = x * x

`f{x} with y` is equivalent to `f{x, y}`. `where` simply lets you
define variables after the expression that uses them, and their scope
is limited to that expression, which limits name pollution.

Operator applications in EG, such as `a + b`, desugar to the function
call `[+]{a, b}`. You can redefine almost any operator locally and
it's no harder than this:

    bizarro{a, b} =
       let x + y = x * y
       let x - y = x / y
       a + b - c
    bizarro{10, 20, 10}  ;; ==> 20

(Be careful, though: you can't just use the old `+` operator inside
the definition of the new one or it will call itself recursively)

EG's powerful pattern matching engine is fully operational on function
arguments:

    concat1{String? a, String? b} = a + b
    concat1{5, 10} ;; ERROR!

    concat2{String! a, String! b} = a + b
    concat2{5, 10} ;; => "510"

You can define functions in objects easily:

    obj = {toString{} = "Hello!"}
    String{obj}  ;; ==> "Hello!"


Looping
-------

EG defines `for` statements that are a cross between JavaScript's
semantics and Python's syntax, which means that it comes in three
flavors:

    for [var i = 0, i < 10, i++]:
       print i

    for key in object:
       print key

    for element of iterable:
       print element

I'm telling you about them because you are free to use what you see
fit, but in my opinion, **`for` should not be used**:

### `each`

Instead, EG's **`each`** operator should be used, either as a
statement:

    1..10 each i -> print i * i

or as an expression:

    squares = 1..10 each i -> i * i

`each` in a statement position compiles to a straight `for..of` loop,
so it's no less efficient. In expression position, it acts as an array
comprehension.

Besides doubling up as array comprehensions, what makes `each` a more
useful looping method than `for` is that it makes use of EG's built-in
pattern matcher:

    {13, "car", "tramway", 517} each
       Number? n -> n + 1
       String? s -> s + "s"
       else -> throw E.unknown{"I don't know."}
    ;; ==> {14, "cars", "tramways", 518}

You can also use `when` to filter data:

    1..10 each i when i mod 2 == 0 -> i
    ;; ==> {2, 4, 6, 8, 10}

`break` and `continue` work with `each`.

* `break` stops the comprehension. It is the only way to halt
  iteration before the end of the sequence.
* `continue` starts the next iteration but without accumulating a
  value. You can use it as an alternative way to filter.

    1..100 each i ->
       if i > 10:
          break
       elif i mod 2 == 0:
          i
       else:
          continue
    ;; ==> {2, 4, 6, 8, 10}

Note: when using pattern matching with `each`, EG will throw an
exception if a value does not match any of the patterns *unless* the
last pattern contains a `when` clause. In other words:

    {1, "x", 2, 3} each
       Number? n -> n            ;; ERROR! "x" does not match

But these expressions will not throw exceptions:

    {1, "x", 2, 3} each
       n when Number? n -> n     ;; ==> {1, 2, 3}

    {{1}, {2, 3}, {4}, {5, 6}} each
       {x, y} when true -> x + y ;; ==> {5, 11}

    {{1}, {2, 3}, {4}, {5, 6}} each
       {x, y} -> x + y
       else -> continue          ;; ==> {5, 11}

The first form is recommended if it is easy to express the condition
as an expression. However, some filters are best expressed by
patterns, in which case the third form would be preferred (because it
is clearer -- you can use the second form if you insist on writing a
one-liner, though).

`each` is *eager*: it will iterate over all elements and execute the
payload on each, returning an array. The *lazy* version of `each` is
the `each*` operator. See the section on asynchronous code.


Pattern matching
----------------

Pattern matching is the most elaborate part of EG (maybe a fifth of
the language's codebase deals with it). It is pervasive: function
definitions, destructuring assignment, loops, exceptions, etc. I don't
know of any language with more featureful pattern matching.

Basically, the `match` operator feeds an input into a series of
"clauses" and enters the body of the first matching clause. In a
clause, one can check the type of a value, cast or transform it,
deconstruct an array into elements and bind them to variables, and
more:

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

A pattern can also be found on the left side of a declaration or
assignment, for example:

    {String? x, Number? y} = {"apple", 3.14159}


### Checkers

A **checker** verifies that the thing to match satisfies some
predicate, for instance that it is of a certain type.

    Number? n = 123     ;; OK
    Number? n = "hello" ;; ERROR


### Projectors

A **projector** transforms the thing to match, for instance it casts
it to a certain type or applies some kind of transformation. Further
pattern matching can be applied on the transformed value.

    Number! n = "123"          ;; n is the number 123
    Array! a = 5               ;; a is the array {5}
    Array! {Number! a} = "10"  ;; a is the number 10


### Destructuring

An array of patterns matches an array of the same length, and then
tries to match each value with the corresponding pattern:

    {x, y, z} = {1, 2, 3}      ;; x is 1, y is 2, z is 3
    {x, y, z} = {1, 2}         ;; ERROR
    {x, {y, z}} = {1, 2, 3}    ;; ERROR

The `*` operator matches any number of elements:

    {x, *y, z} = {1, 2, 3, 4, 5}   ;; x is 1, y is {2, 3, 4}, z is 5
    {x, *y, z} = {1, 2}            ;; x is 1, y is {}, z is 2

You can assign a default value to a pattern in case it is missing.

    {x, y, z = "absent"} = {1, 2}  ;; x is 1, y is 2, z is "absent"

This also works to define default values for arguments in
functions. Note that the default value will be recomputed every time
it is needed (or not at all, if it is unneeded). For example:

    f{x = [print "missing", 0]} = x
    f{55}     ==> returns 55
    f{}       ==> prints "missing", and returns 0

This means that unlike in Python, if you define an empty array `{}` as
a default value, it will always be a fresh array.


### `when` conditions

The **when** operator lets you write arbitrary conditions for a
clause:

    match command:
        {"move", dx, dy} when dx*dx + dy*dy > threshold ->
            running{}
        {"move", dx, dy}
            walking{}
        ...


### `or` pattern

**or** will try to match one of a series of patterns

    match x:
       ;; match 0, or 1
       0 or 1 -> ...

       ;; match a number or a string
       Number? x or String? x -> ...

       ;; will match {123} or 123, putting 123 in x in both situations
       {x} or x -> ...

Note that **all sub-patterns must contain the same variables**.

Also, patterns are evaluated in the order they are defined, so the
most specific should come first.


### `and` pattern

**and** will try to match every pattern (again, in order):

    Number? n and > 0 = -5     ;; ERROR!

That may not be obvious at first, but `and` is useful to create
aliases:

    {x, y} and z = {1, 2}   ;; x is 1, y is 2, z is {1, 2}

Indeed, `z` as a pattern simply matches anything, which is put in the
variable `z`.


### Operators

**Comparison operators** (`== != < <= > >= in`) can be used partially
(except for `is` which has a different meaning). The left hand side is
a pattern, which will only be matched if the predicate on the current
value is true. In other words:

    n > 0 = 10     ;; n is 10
    n > 0 = -10    ;; ERROR

You can also leave the left hand side empty:

    compare{value, threshold} =
       match value:
          > threshold -> "above"
          < threshold -> "below"
          == threshold -> "equal"


### Embedded control structures

The previous idiom of creating a function and matching one argument is
useful enough to have a **shorthand**:

    compare{match value, threshold} =
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

You can give a name to the match and it will be bound in all clauses:

    fib{match n} =
       0 -> 0
       1 -> 1
       else -> fib{n - 1} + fib{n - 2}

The feature also works for rest arguments:

    concat{*match} =
        {String? a, String? b} -> a + b
        {Array? a, Array? b} -> a ++ b

Other features can be embedded in arguments. For instance, `each` can
be used in a pattern:

    f{each x} = x * x
    f{1..5}                 ;; => {1, 4, 9, 16, 25}

    enhance{match} =
       Number? n -> n * n
       String? s -> s + "s"
       each x -> enhance{x} ;; short for xs -> xs each x -> enhance{x}
    enhance{{1, 2, "cake"}} ;; => {1, 4, "cakes"}

`each` in this case can be anywhere in a pattern, and multiple `each`
found in the same pattern will nest in the order that they are found:

    f{each x, each y} = x + y
    f{{"a", "b"}, {"x", "y"}}
    ;; ==> {{"ax", "ay"}, {"bx", "by"}}

`chain` can be embedded and you get a nice pipeline going on:

    capitalizeWords{chain} =
       @trim{}
       @split{R" +"} each w when w != "" ->
          w[0].toUpperCase{} + w.slice{1}
       @join{" "}
    capitalizeWords{" pulp  fiction "}
    ;; => "Pulp Fiction"


### `is` operator

Sometimes you may need or want to give a value to a variable inside a
pattern. You can do this with `is`:

    x and y is 10 = 5                     ;; x is 5, y is 10
    {x, y} or x is 0 and y is 0 = "blah"  ;; x is 0, y is 0

One use case is to remove one level of nesting in the following code:

    f{match, x} =
       {a, b} ->
          match x:
             ...

The above can be rewritten:

    f{match, x} =
       {a, b} and match is x ->
          ...

### Assignment wrappers

The keywords `get`, `return`, `yield` and `await` may be used in a
pattern on the left hand side of an assignment. Normally, an
assignment returns the variable it declares, or if there is more than
one variable, an array of the declared variables:

    x = 4                       ;; ==> 4
    {x, {y, z}} = {1, {2, 3}}   ;; ==> {1, 2, 3}
    {x, _, y}   = {1, 2, 3}     ;; ==> {1, 2}
    {x, String! y} = {1, 2}     ;; ==> {1, "2"}

You can, however, modify this behavior:

    {x, get, z} = {1, 2, 3}     ;; ==> 2
    {_, return, _} = {1, 2, 3}  ;; immediately returns 2 from the function
    {yield, yield} = {1, 2}     ;; yields 1, then yields 2

Note that it's not particularly useful to declare variables alongside
`return` since there's no way to use them after the function returns.

Combining more than one of these in the same pattern is currently a
bit flaky.


Asynchronous code
-----------------

Much like ES6, EG has generators. Much like ES7, it has async and
await keywords.

### Generators

A generator is a function that can produce (`yield`) an arbitrary
number of values as they are requested by a consumer. For instance,
this is a generator for the Fibonacci numbers:

    gen! fib{} =
       var {a, b} = {0, 1}
       while true:
          yield a
          {a, b} = {b, a + b}

That function is an infinite loop, but at each invocation of `yield
a`, it sends the value of `a` to the consumer and stops until the
consumer asks for the next value. The `consume` function can be used
to retrieve a certain number of values from the generator:

    consume{fib{}, 10} ;; ==> {0, 1, 1, 2, 3, 5, 8, 13, 21, 34}

`each` and `for...of` will consume a generator until a `break`
statement is encountered. `each*` will create a new generator:

    fibsquared = fib{} each* n -> n * n
    consume{fibsquared, 10}
    ;; ==> {0, 1, 1, 4, 9, 25, 64, 169, 441, 1156}

Here the difference between `each` and `each*` is that `each` will
keep accumulating values until it runs out of memory, whereas `each*`
is lazy just like `fib`.

### Promises and async/await

Promises and generators are ES6's answer to callback hell and EG
supports them. `async` and `await` make them even easier to use:

    require: fs
    readFile = promisify{fs.readFile}

    async! cat{*files} =
       try:
          var rval = ""
          files each file ->
             rval += await readFile{file, .utf8}
          print rval
       catch error:
          console.trace{error}
          throw error

    cat{"file1", "file2", "file3"}
    ;; returns immediately

Here's how it works:

* `require: fs` fetches node.js's filesystem module

* `promisify{fs.readFile}` changes `fs.readFile`'s callback-based
  interface to a Promise-baed interface, which is necessary to work
  with async.

  `promisify` should work on any function that implements node's callback
  interface, i.e. where the last argument has the form `{error, result} -> ...`

* `await readFile{file, .utf8}` reads the file *asynchronously*, in
  the background. At that moment, the execution of `cat` stops and
  other tasks can be executed while waiting for the file to be read.

* Once the file is read, the result is given back to `cat`. It keeps
  going until all the files have been read, and then it prints them.

* Exceptions raised in `cat` are not printed by default hence the
  added try/catch block.



Module system
-------------

`require` is used to import functionality from other
modules. `provide` is used to export functionality.

### `require`

Ideally, all of a module's imports should be in a single `require`
block.

    require:
       fs, path
       react as React
       "./mymodule" ->
          someFunction, otherFunction as blah

This is roughly equivalent to the following JavaScript:

    fs = require("fs");
    path = require("path");
    React = require("react");
    _temp = require("./mymodule");
    someFunction = _temp.someFunction;
    blah = _temp.otherFunction;

### `provide`

`provide` fills the module's exports:

    provide:
       fn1, fn2
       fn3 as xyz

It is recommended to put it at the beginning of the file so that it is
clear what symbols the module provides.

### `inject`

TODO



Features I think are novel
--------------------------

This section is for fellow language designers and enthusiasts and is
meant to answer the following question: what's _new? Like, what
features does EG have that no other language does? So here are some
features in EG that I haven't seen in any other language (that I know
of):


### Nested matching

The `match` keyword can be used inside patterns to tell the language
to match the result of the pattern using sub-clauses.

Basically, this:

    f{match} =
       {"enhance", match x} ->
          Number? -> x + 1
          String? -> x + "s"
       {"identity", x} ->
          x

desugars to this:

    f{_temp} =
       match _temp:
          {"enhance", x} ->
             match x:
                Number? -> x + 1
                String? -> x + "s"
          {"identity", x} ->
             x

In my opinion, that feature is a godsend: you can split open and
operate on complicated data structure without any fluff, temporary
variable names, or unnecessary nesting.

I have generalized the feature to other control structures, such as
`each`, `each*` and `chain`. For instance, this:

    f{each x, each y} =
       x + y

desugars to this:

    f{xs, ys} =
       xs each x ->
          ys each y ->
             x + y

There is an internal API to define more of these things, but I haven't
made it public. I will eventually.


### Exception factories

I believe that every `throw` statement should throw a distinctive
error, and that this distinctive error should be easy to catch
specifically. In a lot of languages, one ends up creating subclasses
of `Error` or `Exception`, but that's time consuming and unless you
are adding methods on these errors, it's a waste of code.

In EG I have what I call "error factories", which you would use a bit
like this:

    throw E.auth.login.wrong_password{
             "Authentication failed because of a wrong login password."
             {user = user}
          }

The resulting error will match `Error?`, `E.auth?`, `E.login?`,
`E.auth.wrong_password?`, and so on. This means you can easily
identify and match the errors you get. This is ad hoc and there is no
need to define new classes of error, or to import error classes from
dependencies to check against.


### Function calls as a special case of indexing

A certain number of OO languages desugar `f x` to `f(x)`. With EG I
opted to desugar to `f[x]` instead. The reason why is that indexing is
a more general mechanism.

Indeed, in EG, `f{x} == f[{x}]`: indexing a function with an array
simply calls that function, whereas indexing it with a string or a
number has the usual meaning. This means that splicing arguments to a
function like `f{*args}` can also be written `f[args]` or `f args`.

This design choice may appear a bit less useful, but it is more
syntactically consistent and internal representation is much
simplified: there is only *one* operation on objects.

