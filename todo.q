
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
IRRELEVANT try to make #x{y, z} [nearly] as efficient as {.x, y, z}
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

* Make unconditional transformers for String!, Number! and Boolean!
* Upgrade product to standard lib
* maybe use \ for unquote?
* Use ES6 classes
* Use ES6 splats
* Make `each` iterate over iterables
* try: catch:
* Handle mix of array and object
* Compare for equality when the same variable is found multiple times
  in a pattern
* timeit macro
* revamp the blocktest macro (rename to tests?)
* match_error could use being more precise
* fix emacro's interaction with ! when not in a pattern
* emacro --> macro; macro --> cmacro?
* change macro{ctx, scope, form, expr} to cmacro{ctx, expr}
  and make scope and form available in this (only for user code)
* make sure macros fail in non-supported contexts and don't have blanket
  [match context: ..., else -> blah] clauses
* let macros insert setup code at their definition site
* find a way to make macros more importable
  idea: macro_require inserts also require(package), which is used to
        resolve symbols in the macro's namespace (requires what the macro
        is using to be provided, though)
* allow break/continue in list-building `each` by unhoisting the
  accum.push(...) as much as possible
* experiment with changing the priority of wide juxtaposition
* make it possible to do "earl compile src -o lib" instead of having
  to do "earl compile -o lib src"
* print x
* string interpolation, perhaps I"a \[x] b" ==> "a " + x + " b"
* x[1..10] instead of x.slice{1, 10}
* add long strings: """xyz"""
* fix nested each so that inner each is evaluated with #expr{.ignore}
  if outer each is
* "::check" => Symbol.check, etc.

* f{each x} = x + 1 ==> f{xs} = xs each x -> x + 1
* f{chain} = @replace{.a, .b} ==> f{x} -> chain x: @replace{.a, .b}
* f{match.0, match.1} = a -> b -> c ==> f{x, y} = match x: a -> match y: b -> c


* try! f{...} = ... ==> f{...} = try: ...

* Review how `with works: could it be a prefix operator?
* Add a where... or with... operator instead of with, when ... is used?

* '[...] should annotate the result with location information,
  otherwise embedded R"..." or S[...] do not work.

* fix obj[m]{...} so that it binds the function to this...

* index.eg

* language definition via: ||||| lang
* scope.gettext{node}
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

