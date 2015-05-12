
Earl Grey
=========

[![Join the chat at https://gitter.im/breuleux/earl-grey](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/breuleux/earl-grey?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Earl Grey ([website](http://breuleux.github.io/earl-grey/)) is a new
language that compiles to JavaScript (ES6). Here's a quick rundown of
its amazing features:

* Python-like syntax
* Fully compatible with the node.js ecosystem
* Generators and async/await (no callback hell!)
* Powerful, deeply integrated pattern matching
  * Used for assignment, function declaration, looping, exceptions...
* A DOM-building DSL with customizable behavior
* A very powerful hygienic macro system!
  * Define your own control structures or DSLs
  * Macros integrate seamlessly with the language
  * Macro libraries! Test with
    [earl-mocha](https://github.com/breuleux/earl-mocha),
    build with [earl-gulp](https://github.com/breuleux/earl-gulp),
    make dynamic pages with
    [earl-react](https://github.com/breuleux/earl-react), etc.
* And much more!


Resources
---------

* [Website](http://breuleux.github.io/earl-grey/)
* [Installation instructions](http://breuleux.github.io/earl-grey/use.html)
* [Documentation](http://breuleux.github.io/earl-grey/doc.html)
* [Editor support](http://breuleux.github.io/earl-grey/tooling.html)
* [Contributing](http://breuleux.github.io/earl-grey/contrib.html)
* [Try it here!](http://breuleux.github.io/earl-grey/repl)


Examples
--------

Counting all words in a block of test. Note that `count-words` is a
variable name, not a subtraction (it is equivalent to the name
`countWords`, if that's the notation you prefer).

    count-words(text) =
       counts = new Map()
       words = text.split(R"\W+")
       words each word ->
          current-count = counts.get(word) or 0
          counts.set(word, current-count + 1)
       consume(counts.entries()).sort(compare) where
          compare({w1, c1}, {w2, c2}) = c2 - c1

`{x, y, ...}` is the notation for arrays in Earl Grey. Objects are
denoted `{field = value, field2 = value2, ...}`

**Generators**: the following defines a generator for the Fibonacci
sequence and then prints all the even Fibonacci numbers less than
100. It shows off a little bit of everything:

    gen fib() =
       var {a, b} = {0, 1}
       while true:
          yield a
          {a, b} = {b, a + b}

    fib() each
       > 100 ->
          break
       n when n mod 2 == 0 ->
          print n

The `each` operator accepts multiple clauses, which makes it especially
easy to work on heterogenous arrays.


**Asynchronous**: EG has `async` and `await` keywords to facilitate
asynchronous programming, all based on Promises. Existing
callback-based functionality can be converted to Promises using
`promisify`:

    require: request
    g = promisify(request.get)

    async getXKCD(n = "") =
       response = await g('http://xkcd.com/{n}/info.0.json')
       JSON.parse(response.body)

    async:
       requests = await all 1..10 each i -> getXKCD(i)
       requests each req -> print req.alt


**Classes**:

    class Person:
       constructor(name, age) =
          @name = name
          @age = age
       advance-inexorably-towards-death(n > 0 = 1) =
          @age += n
       say-name() =
          print 'Hello! My name is {@name}!'

    alice = Person("alice", 25)


**Pattern matching** acts like a better `switch` or `case`
statement. It can match values, types, extract values from arrays or
objects, etc.

    match thing:
       0 ->
          print "The thing is zero"
       < 0 ->
          print "The thing is negative"
       R"hello (.*)"? x ->
          ;; note: R"..." is a regular expression
          print 'The thing is saying hello'
       Number? x or String? x ->
          print "The thing is a number or a string"
       {x, y, z} ->
          print 'The thing is an array of three things, {x}, {y} and {z}'
       {=> name} ->
          print 'The thing has a "name" field'
       else ->
          print "I don't know what the thing is!"


