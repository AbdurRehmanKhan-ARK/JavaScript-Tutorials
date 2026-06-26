<div align="center">

![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&duration=3500&pause=1500&color=F7DF1E&center=true&vCenter=true&width=650&lines=JavaScript+Tutorials;Learning+by+writing+real+code.;Variables+%7C+Functions+%7C+Arrays+%7C+Async;One+concept.+One+file.+Every+day.)

<br/>

**A structured JavaScript learning repository | built alongside the Chai aur Code series.**
*Every concept practiced in isolation. Every file committed. Every session tracked.*

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Series](https://img.shields.io/badge/Series-Chai%20aur%20Code-FF6B35?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

</div>

---

## 📖 About

This repository documents a structured, file-per-concept approach to learning JavaScript from the ground up. Each topic from the **Chai aur Code** YouTube series is practiced in its own dedicated file — no combined scripts, no skipped concepts.

> The goal is not just to watch and move on. Every session produces a committed file. The commit history is the learning log.

---

## 🗂️ Structure

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
│   ├── 03_scopes_and_hoisting.js     # hoisting, temporal dead zone
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
│   ├── 01_intro_to_dom.js            # Core DOM window vs document & text extraction
│   ├── 02_index.html                 # Parent-child tree node navigation
│   ├── 03_index.html                 # Programmatic element generation & textNode mapping
│   └── 04_index.html                 # DOM optimization, append vs replace elements
│
├── 📁 07_projects/01_colorChanger/   # 🎨 Real-world color customization project
│   ├── chaiAurCode.js
│   ├── index.html
│   └── style.css
│
├── 📁 08_async/                      # ⏳ Coming soon
├── 📁 09_oop/                        # ⏳ Coming soon
└── 📄 README.md
```

---

## 🗺️ Topics Roadmap

| # | Module | Concepts Covered | Status |
|---|--------|-----------------|--------|
| 01 | **Primitives & Operators** | `var` `let` `const` · Primitives & `typeof` · Type conversion · Arithmetic operators · Strict vs loose equality · Symbols & BigInt · Stack vs heap · String methods · Number & Math · Date objects | ✅ Complete |
| 02 | **Data Structures** | Arrays — `push` `pop` `slice` `splice` · `map` `filter` `reduce` `concat` spread · Object literals · dot & bracket notation · `Object.keys()` `assign` · Destructuring | ✅ Complete |
| 03 | **Functions** | Declarations vs expressions · Scope · Hoisting · Arrow functions · IIFE · Execution context & call stack | ✅ Complete |
| 04 | **Control Flow** | if/else · switch · Ternary · Truthy & falsy values · Nullish coalescing | ✅ Complete |
| 05 | **Iterations** | for · while · do-while · for...of · for...in · forEach · map · filter · reduce · every · some | ✅ Complete |
| 06 | **DOM** | Selectors · Window vs Document · Tree navigation · Element creation & modification · Edit/Remove performance | ✅ Complete |
| 07 | **Async JS** | Callbacks · Promises · `async/await` · `fetch` API · Error handling | ⬜ Upcoming |
| 08 | **OOP** | Classes · Inheritance · Prototypes · `new` keyword · `this` binding | ⬜ Upcoming |
| 09 | **Modules** | `import/export` · ES Modules · Module patterns | ⬜ Upcoming |

---

## ▶️ How to Run

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

## 📝 Commit Convention

Every session follows a consistent commit format:

```
feat(functions): arrow functions, implicit return and closure with lexical scoping
feat(truthyFalsy): falsy values and nullish coalescing operator
feat(iterations): forEach, map, filter and reduce methods
feat(dom): selectors, attributes, textContent vs innerText
```

> The commit history is a readable record of what was learned and when.

---

## 📺 Series Reference

This repository follows the **JavaScript series by [Chai aur Code](https://www.youtube.com/@chaiaurcode)** on YouTube.
Each file corresponds to a video or concept from the series.

---

## 👤 Author

**Abdur Rehman Khan**
BS Computer Science · FAST-NUCES Karachi
📧 abdurrehmankhan0909@gmail.com · 🐙 [GitHub](https://github.com/AbdurRehmanKhan-ARK)

---

<div align="center">

*Consistency over intensity. One file. One commit. Every day.*

Built with ❤️ while learning — Happy JavaScripting! 🚀

</div>
