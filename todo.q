
This is an ad hoc todo list I keep since the beginning. There's no
order to it and some of the remaining entries may be obsolete or
irrelevant.

X Change behavior of a[b]
X "when" clauses for pattern matching
X Define Struct?
X Support project: String! s
X Define #struct! and #struct?
X Translate == to === and != to !==
X "else" clause for cond
X Support deconstruct: String? {a, b, c}
X Splicing in arrays
X `[f{|>} = ...] ==> `[f{tmp} = tmp |> ...]
X `[f{|>*} = ...] ==> `[f{tmp*} = tmp |> ...]
X each operator
X quote
X true? matches all true things, false? matches all false things
X Define Rx[...]? and Rx[...]!
X !! should re-raise error
X require: macro
X chain: macro
X % macro for html generation
X range operator
X with should seek "..."
X New regular expression syntax
X class: macro
X test: macro (find a better name) (blocktest)
X use .duck for the projector with "?"
X items{...}
X enumerate{...}
X "expr as var"
X rest arguments!
X field extraction in pattern matching: {=> name} = {name = "Peter"}
X default values for arguments in p.m.
X IRRELEVANT try to make #x{y, z} [nearly] as efficient as {.x, y, z}
X Replace [aslist! args] with [#multi! {*args}]
X avoid generating spurious ifs when one of the patterns can't fail
X Change chain to use let
X zip{...}
X add provide:
X unquote in require:
X error when each fails to find a pattern
X add each?
X &+ --> &
X clone operator
X Make & clone first object, so that #a{b} & {env = env} works
X Move == to ===, and implement proper equality for ==
X Change % to accept [prop = value] as children [done for React]
X remove instanceof operator
X ? and ! as infix operators
X splice: macro
X product{...}
X revamp the current operator priority mechanism with groups and named "tracks"
X Modify the priority of wide juxtaposition
X Indent regexp should consume comments (I think it's fixed, didn't bother to test)
X Track variable mutability at declaration
X "=" does mutation
X Remove the generation of spurious ";;"
X Error for mismatched brackets
X Make = valid in more contexts
X Fix paths when doing eval
X pass, else
X earlgrey.register
X Document with comments: src/opt.eg
X Document with comments: src/util.eg
X match in the arguments list of class members
X Change exception syntax
X Support single inheritance


X Make ::check etc. non-enumerable
X [require:] inside [macros:]

X Upgrade neighbours to standard lib
X Make zip work with any number of arguments
X Make neighbours take a `n argument (it is currently only valid for n=2)
X investigate bug where some locations cannot be found
  (may be related to a mixup with the new version of ! and ?)
  (well, it looks like... it fixed itself? can't reproduce it anymore)
X `if` in expressions should generate ?:
X remove the if{x, y, else{z}} form
X remove `each?`
X improve gensym to be less heavy-handed; one counter per variable
  name, perhaps
X make unconditional #project more robust
X FIX: f! x = g{y} will include the code for g{y} twice (once in the
  success branch, once in the failure branch)
X Upgrade product to standard lib
X timeit macro
X Make `each` iterate over iterables
X x[1..10] instead of x.slice{1, 10}
X print x
X "::check" => Symbol.check, etc.
X add long strings: """xyz"""
X try: catch:
X f{each x} = x + 1 ==> f{xs} = xs each x -> x + 1
X f{chain} = @replace{.a, .b} ==> f{x} -> chain x: @replace{.a, .b}
X WONTFIX: Compare for equality when the same variable is found multiple times
  in a pattern
  REASON: it's easy enough to do {x, == x} -> ...
X each* as a generator alternative to each
X [x = [a, b, c]] can be translated as [a, b, c = x]; treat this case
  the same way expressions in return positions are treated.
X allow break/continue in list-building `each` by unhoisting the
  accum.push(...) as much as possible
  NOTE: the solution was simpler: [x = ..., accum.push{x}], and push
        the assignment in when translating

X Declare values in if, e.g. if [x = f{y}]: x
  OH: Turns out that already works? I guess it would.
X change the in operator to actually be useful
X Allow declaring variables like "n > 0 = 3"
X Figure out what `{x, y} = {1, 2}` should return
X expression `{x, get, y} = {1, 2, 3}` has value 2
X expression `{x, return, y} = {1, 2, 3}` returns 2
X expression `{x, yield, y} = {1, 2, 3}` yields 2
X info.gettext{node}
X emacro --> macro; macro --> cmacro?
X change macro{ctx, scope, form, expr} to cmacro{ctx, expr}
  and make scope and form available in this (only for user code)
X info.mark{*nodes}
X fix emacro's interaction with ! when not in a pattern


* left-priority of `each` should be higher
* quote with 'a + b' instead of '[a + b]
* maybe replace ... with ??? and make ... an exclusive range
* outer
* tag scope and restore scope
* `macro` should generate #restmacro to allow for its use below its
  definition in the same scope
* `require` should fail when importing symbols that were not exported
  by a module
* {[^Symbol.project]{x} = ...}
* `[x >> x + 1] = 5` ==> x is 6
* A wrapper to print stack traces when calling an async functions
* `global x = 123`?
* Extend functions, e.g. `extend.top! f{x} = ...` and
  `extend.bottom! f{x} = ...`, or bind previous function to super...
* New macros should extend existing macros


* Come up with a reliable way to mix multiple wrapping handlers in
  patterns and prevent nonsensical combinations.
* f{each x, match} will complain that it cannot resolve each; figure
  out why that happens *exactly* and fix it.

* Produce an error when the same variable is found multiple times in a
  pattern
* '[...] should annotate the result with location information,
  otherwise embedded R"..." or S[...] do not work.
* Embed promisify
* Make unconditional transformers for String!, Number! and Boolean!
* maybe use \ for unquote?
* Use ES6 classes
* Use ES6 splats
* Handle mix of array and object
* revamp the blocktest macro (rename to tests?)
* match_error could use being more precise
* make sure macros fail in non-supported contexts and don't have blanket
  [match context: ..., else -> blah] clauses
* let macros insert setup code at their definition site
* find a way to make macros more importable
  idea: macro_require inserts also require(package), which is used to
        resolve symbols in the macro's namespace (requires what the macro
        is using to be provided, though)
* experiment with changing the priority of wide juxtaposition
* make it possible to do "earl compile src -o lib" instead of having
  to do "earl compile -o lib src"
* string interpolation, perhaps I"a \[x] b" ==> "a " + x + " b"
* fix nested each so that inner each is evaluated with #expr{.ignore}
  if outer each is

* f{match.0, match.1} = a -> b -> c ==> f{x, y} = match x: a -> match y: b -> c


* try! f{...} = ... ==> f{...} = try: ...

* Review how `with works: could it be a prefix operator?
* Add a where... or with... operator instead of with, when ... is used?

* fix obj[m]{...} so that it binds the function to this...

* index.eg

* language definition via: ||||| lang
* Create closures for variables inside loops
* define super for subclasses
* @@ for static methods

* set a function or arbitrary object as the main export for provide

* Support this projector: [-> String?] f{String?, String?} = ...

* Detect circular references in repr
* pure ASCII repr{...}
* ditch pp submodule?
* print errors properly to a normal console

* stuff macro helpers in macro.[helper_name] or somesuch

* Track types at declaration

* Preserve names for functions
* Remove :=

* @prelude
* Importing macros
* Register and auto-compilation

* Eliminate ++ and -- for increment/decrement?

* IDEA: ~f{a, b, _} <=> {X} -> {a, b, X}

* Support: [String? or Number?] x
* Defaults for keyword arguments

* fix nested chain

* set up a priority matrix

* support [x each String?] [maybe not...]
* empty lhs for ->
* throw actual Error objects...

* add way to inject additional behavior to macros

* treat operator at beginning of line as a continuation

* Document with comments: src/earl-grey.eg
* Document with comments: src/expand.eg
* Document with comments: src/lex.eg
* Document with comments: src/location.eg
* Document with comments: src/parse.eg
* Document with comments: src/pattern.eg
* Document with comments: src/pp.eg
* Document with comments: src/register.eg
* Document with comments: src/run.eg
* Document with comments: src/stdenv.eg
* Document with comments: src/translate-js.eg

* Bug: first line in the file starts with spaces => should produce INDENT token

