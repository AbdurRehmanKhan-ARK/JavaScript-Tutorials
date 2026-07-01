<div align="center">

![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&duration=3500&pause=1500&color=F7DF1E&center=true&vCenter=true&width=650&lines=JavaScript+Tutorials;Learning+by+writing+real+code.;Variables+%7C+Functions+%7C+Arrays+%7C+Async;One+concept.+One+file.+Every+day.)

<br/>

**A structured JavaScript learning repository | built alongside the Chai aur Code series.**
_Every concept practiced in isolation. Every file committed. Every session tracked._

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Series](https://img.shields.io/badge/Series-Chai%20aur%20Code-FF6B35?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

</div>

---

## About

This repository documents a structured, file-per-concept approach to learning JavaScript from the ground up. Each topic from the **Chai aur Code** YouTube series is practiced in its own dedicated file - no combined scripts, no skipped concepts.

> The goal is not just to watch and move on. Every session produces a committed file. The commit history is the learning log.

---

## Why the Comments Matter

Almost every file in this repository contains commented-out code alongside the working code - and that is intentional.

Most of these mistakes were written first, run, broken on purpose, then left in as comments with an explanation of exactly why they failed - wrong selector syntax, missing the `new` keyword, forgetting `await`, confusing `this` context, and so on. The working fix sits right next to the wrong attempt.

This means the repository isn't just a record of correct syntax - it is a record of *reasoning*. Reading any file end to end shows not only what the right answer is, but why the obvious wrong answer doesn't work, which is usually the part that actually sticks.

---

## Structure

```
JavaScript-Tutorials/
│
├── 📁 01_primitives_and_operators/
│   ├── 01_variables.js               # var, let, const, scoping rules
│   ├── 02_dataTypes.js               # primitives, typeof, type checking
│   ├── 03_conversionOperator.js      # type conversion, coercion
│   ├── 04_operators.js               # arithmetic, unary, assignment
│   ├── 05_comparison.js              # equality, strict vs loose, NaN
│   ├── 06_dataTypesII.js             # symbols, bigInt, advanced types
│   ├── 07_memory.js                  # stack vs heap, value vs reference
│   ├── 08_strings.js                 # string methods, template literals
│   ├── 09_nums_and_maths.js          # number properties, math utilities
│   └── 10_dates.js                   # date objects, formatting, timestamps
│
├── 📁 02_data_structures/
│   ├── 01_arrays_I.js                # push, pop, shift, unshift, slice, splice
│   ├── 02_arrays_II.js               # map, filter, reduce, concat, spread
│   ├── 03_objects_I.js               # literals, dot notation, bracket notation, nesting
│   └── 04_objects_II.js              # Object.keys(), values(), assign, destructuring
│
├── 📁 03_functions/
│   ├── 01_functions_fundamentals.js  # declarations, expressions, parameters
│   ├── 02_scopes.js                  # global, function, block scope
│   ├── 03_scopes_and_hoisting.js     # hoisting, temporal dead zone, closure and lexical scoping
│   ├── 04_arrow_func.js              # arrow functions, implicit return, this
│   ├── 05_iife.js                    # immediately invoked function expressions
│   └── 06_execution_in_javaScript.js # execution context, call stack
│
├── 📁 04_control_flow/
│   ├── if_and_switch.js              # if/else, switch, ternary
│   └── truthy_falsy.js               # falsy values, nullish coalescing
│
├── 📁 05_iterations/
│   ├── 01_basic_loops.js             # for, while, do-while
│   ├── 02_high_order_loops.js        # forEach, for...of, for...in
│   └── 03_array_methods.js           # map, filter, reduce, every, some
│
├── 📁 06_DOM/
│   ├── 01_index.html                 # HTML baseline layout for basic selectors
│   ├── 01_intro_to_dom.js            # Core DOM - window vs document & text extraction
│   ├── 02_index.html                 # Parent-child tree node navigation
│   ├── 03_index.html                 # Programmatic element generation & textNode mapping
│   └── 04_index.html                 # DOM optimization, append vs replace elements
│
├── 📁 07_projects/
│   ├── index.html                    # Project home - links to all mini projects
│   │
│   ├── 📁 01_colorChanger/           # DOM events and style manipulation
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   │
│   ├── 📁 02_BMI_calculator/         # Form handling and input validation
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   │
│   ├── 📁 03_digital_clock/          # setInterval and Date object
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   │
│   ├── 📁 04_guess_the_number/       # Game logic, DOM manipulation, event handling
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   │
│   ├── 📁 05_keyboard_check/         # Keyboard events and event object properties
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   │
│   └── 📁 06_unlimited_colors/       # setInterval, clearInterval, random hex colors
│       ├── index.html
│       ├── script.js
│       └── style.css
│
├── 📁 08_events/
│   ├── events.html                   # onclick vs addEventListener, event object, bubbling, capturing, stopPropagation, preventDefault, event delegation
│   ├── async.js                      # sync vs async model, call stack, Web APIs, callback queue, microtask queue, event loop
│   ├── 01_async_projects.html        # setTimeout and clearTimeout - stop button cancels pending timer
│   └── 02_async_projects.html        # setInterval and clearInterval - start/stop buttons control repeated execution
│
├── 📁 09_API/
│   ├── 01_API_intro.js               # API fundamentals, REST, HTTP methods, status codes, JSON
│   ├── 01_API_request.html           # XMLHttpRequest, readyState tracking, GitHub API, DOM rendering
│   └── 02_github_pfp_analyzer.html   # Mini project - search GitHub users and render profile card
│
├── 📁 10_promises/
│   └── 01_promises.js                # Promise states, chaining, async/await, try/catch, fetch API, microtask vs callback queue
│
├── 📁 11_fetch/
│   └── fetch.js                      # fetch() fundamentals, Response object, 404 vs network error, response.ok pattern
│
├── 📁 12_OOP/
│   ├── oop_intro.js                  # Object literals, 'this' keyword, this in global vs function context
│   └── oop.js                        # Constructor functions, the 'new' keyword, instance creation
│
├── 📁 13_prototype/
│   └── proto.js                      # Prototype chain, new keyword internals, custom prototype methods, Object.setPrototypeOf, prototypal inheritance
│
├── 📁 14_call_and_this/
│   └── call.js                       # call(), apply(), bind() — this injection across function scopes
│
├── 📁 15_class_constructor/
│   ├── classes.js                    # ES6 class syntax vs prototype under the hood
│   ├── inheritance.js                # extends, super, instanceof chain, method overriding
│   └── static.js                     # static methods and properties, class vs instance access
│
├── 📁 16_bind/
│   └── bind.js                       # bind() to preserve class instance context in DOM event listeners
│                  
├── 📁 17_objects_advanced/
│   └── objects.js                    # check Math.PI property descriptors and object defineProperty configurations
│
├── 📁 18_getters_setters/            # ⏳ Coming soon — getters, setters, stack overflow pitfalls
├── 📁 19_closures/                   # ⏳ Coming soon — lexical scoping and closures
├── 📁 20_array_internals/            # ⏳ Coming soon — packed vs holey arrays, V8 internals
└── 📄 README.md
```

---

## Topics Roadmap

| Folder | Module | Files | Concepts Covered | Status |
|--------|--------|-------|-----------------|--------|
| `01_primitives_and_operators/` | **Primitives & Operators** | 10 files | `var` `let` `const` · Primitives & `typeof` · Type conversion & coercion · Arithmetic operators · Strict vs loose equality · Symbols & BigInt · Stack vs heap · String methods · Number & Math · Date objects | ✅ Complete |
| `02_data_structures/` | **Data Structures** | 4 files | Arrays - `push` `pop` `slice` `splice` · `map` `filter` `reduce` `concat` spread · Object literals · dot & bracket notation · `Object.keys()` `assign` · Destructuring | ✅ Complete |
| `03_functions/` | **Functions** | 6 files | Declarations vs expressions · Scope (closure and lexical scoping) · Hoisting & TDZ · Arrow functions · IIFE · Execution context & call stack | ✅ Complete |
| `04_control_flow/` | **Control Flow** | 2 files | if/else · switch · Ternary · Truthy & falsy · Nullish coalescing | ✅ Complete |
| `05_iterations/` | **Iterations** | 3 files | `for` `while` `do-while` · `for...of` `for...in` · `forEach` · `map` `filter` `reduce` `every` `some` | ✅ Complete |
| `06_DOM/` | **DOM** | 5 files | Selectors · Window vs Document · Tree navigation · Element creation & modification · Append vs replace performance | ✅ Complete |
| `07_projects/` | **Projects** | 6 projects | Color Changer · BMI Calculator · Digital Clock · Guess the Number · Keyboard Check · Unlimited Colors | ✅ Complete |
| `08_events/` | **Events & Async Foundations** | 4 files | `onclick` vs `addEventListener` · Event object · Bubbling & capturing · `stopPropagation` · `preventDefault` · Event delegation · Sync vs async model · Call stack · Web APIs · Callback queue · Microtask queue · Event loop · `setTimeout` · `setInterval` · `clearTimeout` · `clearInterval` | ✅ Complete |
| `09_API/` | **APIs** | 3 files | REST fundamentals · HTTP methods & status codes · JSON parsing · `XMLHttpRequest` · `readyState` tracking · GitHub API · Rendering API data to DOM · Mini project - GitHub Profile Analyzer | ✅ Complete |
| `10_promises/` | **Promises** | 1 file | Promise states · `.then()` `.catch()` `.finally()` · Chaining · `async/await` · `try/catch` · `fetch()` · Microtask vs callback queue priority | ✅ Complete |
| `11_fetch/` | **Fetch** | 1 file | `fetch()` fundamentals · Response object · `response.status` & `response.ok` · 404 vs true network error · `async/await` error handling | ✅ Complete |
| `12_OOP/` | **OOP** | 2 files | Object literals · `this` keyword in object vs global context · Constructor functions · `new` keyword · Instance creation and the bug of forgetting `new` | ✅ Complete |
| `13_prototype/` | **Prototypes** | 1 file | Prototype chain · `new` keyword internals · Custom prototype methods · `Object.setPrototypeOf` · Prototypal inheritance | ✅ Complete |
| `14_call_and_this/` | **Call & this** | 1 file | `call()` · `apply()` · `bind()` · `this` injection across function scopes · Borrowing methods between objects | ✅ Complete |
| `15_class_constructor/` | **Classes** | 3 files | ES6 `class` syntax vs prototype under the hood · `extends` · `super` · `instanceof` chain · Method overriding · `static` methods and properties · Class vs instance access | ✅ Complete |
| `16_bind/` | **Bind** | — | `bind()` in depth · Permanently binding `this` · Partial application | ⬜ Upcoming |
| `17_objects/` | **Objects (Advanced)** | — | Deeper object patterns and real-world object design | ⬜ Upcoming |
| `18_getters_setters/` | **Getters & Setters** | — | `get` / `set` syntax · Computed properties · Stack overflow pitfalls with recursive setters | ⬜ Upcoming |
| `19_closures/` | **Closures** | — | Lexical scoping · Closures · Practical closure use cases | ⬜ Upcoming |
| `20_array_internals/` | **Array Internals** | — | Packed vs holey arrays · V8 engine internals · Performance implications | ⬜ Upcoming |

---

## How to Run

**Requirements:** Node.js v18+

```bash
# Clone the repo
git clone https://github.com/AbdurRehmanKhan-ARK/JavaScript-Tutorials.git
cd JavaScript-Tutorials

# Run any file
node 01_primitives_and_operators/01_variables.js
node 03_functions/04_arrow_func.js
node 05_iterations/02_high_order_loops.js
```

> No dependencies. No setup. Just Node and a terminal.

---

## Commit Convention

Every session follows a consistent commit format:

```
feat(functions): arrow functions, implicit return and closure with lexical scoping
feat(truthyFalsy): falsy values and nullish coalescing operator
feat(iterations): forEach, map, filter and reduce methods
feat(dom): selectors, attributes, textContent vs innerText
```

> The commit history is a readable record of what was learned and when.

---

## Series Reference

This repository follows the **JavaScript series by [Chai aur Code](https://www.youtube.com/@chaiaurcode)** on YouTube.
Each file corresponds to a video or concept from the series.

---

## Feedback & Contributions 🙌

Found a bug in one of the projects? Have a cleaner implementation in mind?
All feedback, corrections, and suggestions are genuinely welcome.

- 🐛 **Bug or mistake** - open an issue
- 💡 **Better approach** - start a discussion
- 🤝 **Want to collaborate** - reach out via email

This is a learning repo, not a perfect one. Every correction makes it better.

---

## Author

**Abdur Rehman Khan** <br>
BS Computer Science · FAST-NUCES Karachi <br>
abdurrehmankhan0909@gmail.com · [GitHub](https://github.com/AbdurRehmanKhan-ARK)

---

<div align="center">

**If this repository helped you understand a concept or saved you time, consider leaving a ⭐ , it genuinely means a lot.**
<br/>
_Built in public. Imperfect by design. Improving every commit._

</div>
