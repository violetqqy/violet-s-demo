const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require("terser-webpack-plugin"); // js 文件压缩

module.exports = merge(common, {
  // 环境 - development | production | none
  mode: 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
      'environment': path.resolve(__dirname, './src/environment/environment.js')
    },
    extensions: ['.mjs', '.js', '.json', '.vue'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 抽离 node_modules
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
          priority: 20,
          enforce: true,
        },
        // 抽离公共组件
        common: {
          chunks: 'initial',
          minSize: 0,
          name: 'common',
          minChunks: 2,
          priority: 10,
        },
      },
    },
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        ecma: 5, // (default undefined) - pass 5, 2015, 2016, etc to override compress and format's ecma options
        parse: { // (default {})
          bare_returns: true, // (default false) -- support top level return statements
          html5_comments: false, // (default true)
          shebang: true, // (default true) -- support #!command as the first line
        },
        compress: { // (default {}) — pass false to skip compressing entirely. 
          defaults: true, // (default: true) -- Pass false to disable most default enabled compress transforms. Useful when you only want to enable a few compress options while disabling the rest.
          arrows: true, // (default: true) -- Class and object literal methods are converted will also be converted to arrow expressions if the resultant code is shorter: m(){return x} becomes m:()=>x. To do this to regular ES5 functions which don't use this or arguments, see unsafe_arrows.
          arguments: false, // (default: false) -- replace arguments[index] with function parameter name whenever possible.
          booleans: false, // (default: true) -- various optimizations for boolean context, for example !!a ? b : c → a ? b : c
          booleans_as_integers: false, // (default: false) -- Turn booleans into 0 and 1, also makes comparisons with booleans use == and != instead of === and !==.
          collapse_vars: true, // (default: true) -- Collapse single-use non-constant variables, side effects permitting.
          comparisons: true, // (default: true) -- apply certain optimizations to binary nodes, e.g. !(a <= b) → a > b (only when unsafe_comps), attempts to negate binary nodes, e.g. a = !b && !c && !d && !e → a=!(b||c||d||e) etc.
          computed_props: true, // (default: true) -- Transforms constant computed properties into regular ones: {["computed"]: 1} is converted to {computed: 1}.
          conditionals: true, // (default: true) -- apply optimizations for if-s and conditional expressions
          dead_code: true, // (default: true) -- remove unreachable code
          directives: true, // (default: true) -- remove redundant or non-standard directives
          drop_console: true, // (default: false) -- Pass true to discard calls to console.* functions. If you wish to drop a specific function call such as console.info and/or retain side effects from function arguments after dropping the function call then use pure_funcs instead.
          drop_debugger: true, // (default: true) -- remove debugger; statements
          ecma: 5, // (default: 5) -- Pass 2015 or greater to enable compress options that will transform ES5 code into smaller ES6+ equivalent forms.
          evaluate: true, // (default: true) -- attempt to evaluate constant expressions
          expression: false, // (default: false) -- Pass true to preserve completion values from terminal statements without return, e.g. in bookmarklets.
          global_defs: {}, // (default: {}) -- see conditional compilation
          hoist_funs: true, // (default: false) -- hoist function declarations
          hoist_props: true, // (default: true) -- hoist properties from constant object and array literals into regular variables subject to a set of constraints. For example: var o={p:1, q:2}; f(o.p, o.q); is converted to f(1, 2);. Note: hoist_props works best with mangle enabled, the compress option passes set to 2 or higher, and the compress option toplevel enabled.
          hoist_vars: false, // (default: false) -- hoist var declarations (this is false by default because it seems to increase the size of the output in general)
          if_return: true, // (default: true) -- optimizations for if/return and if/continue
          inline: true, // (default: true) -- inline calls to function with simple/return statement: false -- same as 0 | 0 -- disabled inlining | 1 -- inline simple functions | 2 -- inline functions with arguments | 3 -- inline functions with arguments and variables | true -- same as 3
          join_vars: true, // (default: true) -- join consecutive var statements
          keep_classnames: false, // (default: false) -- Pass true to prevent the compressor from discarding class names. Pass a regular expression to only keep class names matching that regex. See also: the keep_classnames mangle option.
          keep_fargs: true, // (default: true) -- Prevents the compressor from discarding unused function arguments. You need this for code which relies on Function.length.
          keep_fnames: false, // (default: false) -- Pass true to prevent the compressor from discarding function names. Pass a regular expression to only keep function names matching that regex. Useful for code relying on Function.prototype.name. See also: the keep_fnames mangle option.
          keep_infinity: false, // (default: false) -- Pass true to prevent Infinity from being compressed into 1/0, which may cause performance issues on Chrome.
          loops: true, // (default: true) -- optimizations for do, while and for loops when we can statically determine the condition.
          module: false, // (default false) -- Pass true when compressing an ES6 module. Strict mode is implied and the toplevel option as well.
          negate_iife: true, // (default: true) -- negate "Immediately-Called Function Expressions" where the return value is discarded, to avoid the parens that the code generator would insert.
          passes: 1, // (default: 1) -- The maximum number of times to run compress. In some cases more than one pass leads to further compressed code. Keep in mind more passes will take more time.
          properties: true, // (default: true) -- rewrite property access using the dot notation, for example foo["bar"] → foo.bar
          pure_funcs: null, // (default: null) -- You can pass an array of names and Terser will assume that those functions do not produce side effects. DANGER: will not check if the name is redefined in scope. An example case here, for instance var q = Math.floor(a/b). If variable q is not used elsewhere, Terser will drop it, but will still keep the Math.floor(a/b), not knowing what it does. You can pass pure_funcs: [ 'Math.floor' ] to let it know that this function won't produce any side effect, in which case the whole statement would get discarded. The current implementation adds some overhead (compression will be slower).
          pure_getters: 'strict', // (default: "strict") -- If you pass true for this, Terser will assume that object property access (e.g. foo.bar or foo["bar"]) doesn't have any side effects. Specify "strict" to treat foo.bar as side-effect-free only when foo is certain to not throw, i.e. not null or undefined.
          // reduce_funcs (legacy option, safely ignored for backwards compatibility).
          reduce_vars: true, // (default: true) -- Improve optimization on variables assigned with and used as constant values.
          sequences: true, // (default: true) -- join consecutive simple statements using the comma operator. May be set to a positive integer to specify the maximum number of consecutive comma sequences that will be generated. If this option is set to true then the default sequences limit is 200. Set option to false or 0 to disable. The smallest sequences length is 2. A sequences value of 1 is grandfathered to be equivalent to true and as such means 200. On rare occasions the default sequences limit leads to very slow compress times in which case a value of 20 or less is recommended.
          side_effects: true, // (default: true) -- Remove expressions which have no side effects and whose results aren't used.
          switches: true, // (default: true) -- de-duplicate and remove unreachable switch branches
          toplevel: false, // (default: false) -- drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default, true to drop both unreferenced functions and variables)
          top_retain: null, // (default: null) -- prevent specific toplevel functions and variables from unused removal (can be array, comma-separated, RegExp or function. Implies toplevel)
          typeofs: true, // (default: true) -- Transforms typeof foo == "undefined" into foo === void 0. Note: recommend to set this value to false for IE10 and earlier versions due to known issues.
          unsafe: false, // (default: false) -- apply "unsafe" transformations (details).
          unsafe_arrows: false, // (default: false) -- Convert ES5 style anonymous function expressions to arrow functions if the function body does not reference this. Note: it is not always safe to perform this conversion if code relies on the the function having a prototype, which arrow functions lack. This transform requires that the ecma compress option is set to 2015 or greater.
          unsafe_comps: false, // (default: false) -- Reverse < and <= to > and >= to allow improved compression. This might be unsafe when an at least one of two operands is an object with computed values due the use of methods like get, or valueOf. This could cause change in execution order after operands in the comparison are switching. Compression only works if both comparisons and unsafe_comps are both set to true.
          unsafe_Function: false, // (default: false) -- compress and mangle Function(args, code) when both args and code are string literals.
          unsafe_math: false, // (default: false) -- optimize numerical expressions like 2 * x * 3 into 6 * x, which may give imprecise floating point results.
          unsafe_symbols: false, // (default: false) -- removes keys from native Symbol declarations, e.g Symbol("kDog") becomes Symbol().
          unsafe_methods: false, // (default: false) -- Converts { m: function(){} } to { m(){} }. ecma must be set to 6 or greater to enable this transform. If unsafe_methods is a RegExp then key/value pairs with keys matching the RegExp will be converted to concise methods. Note: if enabled there is a risk of getting a "<method name> is not a constructor" TypeError should any code try to new the former function.
          unsafe_proto: false, // (default: false) -- optimize expressions like Array.prototype.slice.call(a) into [].slice.call(a)
          unsafe_regexp: false, // (default: false) -- enable substitutions of variables with RegExp values the same way as if they are constants.
          unsafe_undefined: false, // (default: false) -- substitute void 0 if there is a variable named undefined in scope (variable name will be mangled, typically reduced to a single character)
          unused: true, // (default: true) -- drop unreferenced functions and variables (simple direct variable assignments do not count as references unless set to "keep_assign")
        },
        mangle: true, // (default true) — pass false to skip mangling names, or pass an object to specify mangle options (see below).
        module: false, // (default false) — Use when minifying an ES6 module. "use strict" is implied and names can be mangled on the top scope. If compress or mangle is enabled then the toplevel option will be enabled.
        // format or output (default null) — pass an object if you wish to specify additional format options. The defaults are optimized for best compression.
        format: {
          ascii_only: false, // (default false) -- escape Unicode characters in strings and regexps (affects directives with non-ascii characters becoming invalid)
          beautify: true, // (default false) -- whether to actually beautify the output. Passing -b will set this to true, but you might need to pass -b even when you want to generate minified code, in order to specify additional arguments, so you can use -b beautify=false to override it.
          braces: true, // (default false) -- always insert braces in if, for, do, while or with statements, even if their body is a single statement.
          comments: 'some', // (default "some") -- by default it keeps JSDoc-style comments that contain "@license" or "@preserve", pass true or "all" to preserve all comments, false to omit comments in the output, a regular expression string (e.g. /^!/) or a function.
          ecma: 5, // (default 5) -- set desired EcmaScript standard version for output. Set ecma to 2015 or greater to emit shorthand object properties - i.e.: {a} instead of {a: a}. The ecma option will only change the output in direct control of the beautifier. Non-compatible features in your input will still be output as is. For example: an ecma setting of 5 will not convert modern code to ES5.
          indent_level: 2, // (default 4)
          indent_start: 0, // (default 0) -- prefix all lines by that many spaces
          inline_script: true, // (default true) -- escape HTML comments and the slash in occurrences of </script> in strings
          keep_numbers: false, // (default false) -- keep number literals as it was in original code (disables optimizations like converting 1000000 into 1e6)
          keep_quoted_props: false, // (default false) -- when turned on, prevents stripping quotes from property names in object literals.
          max_line_len: false, // (default false) -- maximum line length (for minified code)
          preamble: null, // (default null) -- when passed it must be a string and it will be prepended to the output literally. The source map will adjust for this text. Can be used to insert a comment containing licensing information, for example.
          quote_keys: false, // (default false) -- pass true to quote all keys in literal objects
          quote_style: 0, // (default 0) -- preferred quote style for strings (affects quoted property names and directives as well): 0 -- prefers double quotes, switches to single quotes when there are more double quotes in the string itself. 0 is best for gzip size. | 1 -- always use single quotes | 2 -- always use double quotes | 3 -- always use the original quotes
          preserve_annotations: false, // -- (default false) -- Preserve Terser annotations in the output.
          safari10: true, // (default false) -- set this option to true to work around the Safari 10/11 await bug. See also: the safari10 mangle option.
          semicolons: true, // (default true) -- separate statements with semicolons. If you pass false then whenever possible we will use a newline instead of a semicolon, leading to more readable output of minified code (size before gzip could be smaller; size after gzip insignificantly larger).
          shebang: true, // (default true) -- preserve shebang #! in preamble (bash scripts)
          webkit: true, // (default false) -- enable workarounds for WebKit bugs. PhantomJS users should set this option to true.
          wrap_iife: false, // (default false) -- pass true to wrap immediately invoked function expressions. See #640 for more details.
          wrap_func_args: true, // (default true) -- pass false if you do not want to wrap function expressions that are passed as arguments, in parenthesis. See OptimizeJS for more details.
        },
        sourceMap: false, // (default false) - pass an object if you wish to specify source map options.
        toplevel: false, // (default false) - set to true if you wish to enable top level variable and function name mangling and to drop unused variables and functions.
        nameCache: null, // (default null) - pass an empty object {} or a previously used nameCache object if you wish to cache mangled variable and property names across multiple invocations of minify(). Note: this is a read/write property. minify() will read the name cache state of this object and update it during minification so that it may be reused or externally persisted by the user.
        ie8: true, // (default false) - set to true to support IE8.
        keep_classnames: undefined, // (default: undefined) - pass true to prevent discarding or mangling of class names. Pass a regular expression to only keep class names matching that regex.
        keep_fnames: false, // (default: false) - pass true to prevent discarding or mangling of function names. Pass a regular expression to only keep class names matching that regex. Useful for code relying on Function.prototype.name. If the top level minify option keep_classnames is undefined it will be overridden with the value of the top level minify option keep_fnames.
        safari10: true, // (default: false) - pass true to work around Safari 10/11 bugs in loop scoping and await. See safari10 options in mangle and format for details.
      },
    })],
  },
})
