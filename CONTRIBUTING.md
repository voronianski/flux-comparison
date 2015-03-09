# Coding style

> All code in any code-base should look like a single person typed it, no matter how many people contributed.

This section describes coding style guide of the repo. You might not agree with it and that's fine but if you're going to send PRs treat this guide as a law.

You're free to choose whether you want to use latest _ECMAScript6_ features (then we already have [Babel transpiler](http://babeljs.io/) as a dependency for you) or just "old-plain" _ECMAScript5_.

##### There are not too much of rules to follow:

- indent style is 4 spaces
- always use single quotes 
- one space after `if`, `for`, `while`, etc.
- no spaces between `(`,`)` and statement content
- use one `var`/`let`/`const` per variable unless you don't assign any values to it (and it's short enough)
- always `'use strict'` mode in ES5
- always use strict comparisons: `===` and `!==`
- use semicolons
- don't use comma-first notation

##### These tools will help your IDE to remind you with some of the rules listed above:

- [EditorConfig](http://editorconfig.org)
- [JSHint](http://jshint.com)
- [JSXHint](https://github.com/STRML/JSXHint)
- [ESLint](http://eslint.org)
