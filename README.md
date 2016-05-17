# modularity.js [![Modularity](https://img.shields.io/badge/modularity-v0.1.3-orange.svg)](https://github.com/modly) [![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT) 

Modularity is a JavaScript tool that gives you the power to simplify your HTML and CSS code.  It allows you to declare custom HTML element tags and embed them into your code.
It can replace this:
```html
<button id="foo" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Click Me!</button>
```
...with this:
```html
<stylishbutton>Click Me!</stylishbutton>
```
...or this:
```html
<ui class="modly-button">Click Me!</ui>
```
...or really, anything you want.  Modularity is a flexible interface.  With simply the insertion of a few lines of code, you can create sexy UIs in minutes- maybe even seconds if you type really, really fast.
Modularity is a next-generation coding tool.

# Using Modularity

Modularity is completely and utterly useless without modularity packs.  Modularity packs define [..To be continued]

# Building a Modularity Pack

###Modularity Pack Parameters:

```html
<script>
var pack = ["pack-name","pack-version","class-prefix",[
  ["element-pseudo-tag",
    ["class-suffix","new-element-tag","style",[ ["custom-parameter","custom-string-value"] ]],
    ["class-suffix","new-element-tag","style",[]],
    ["class-suffix","new-element-tag","style",[]]
  ],
  ["element-pseudo-tag",
    "&unit","new-element-tag","style",[]
  ],
  ["element-pseudo-tag",
    ["class-suffix","new-element-tag","style",[]],
    ["class-suffix","new-element-tag","style",[]]
  ],
]];
</script>
```

###Example Pack:

```html
<script>
var pack = ["myAwesomePack","v0.0.1","awesome",[
  ["green",
    ["button-green","button","color:green;",[]]
  ],
  ["red",
    "&unit","button","color:red;",[]
  ]
]];
</script>
```

###Example Usage:

```html
<green class="awesome-button-green">I am a green button!</green>
<red>I am a red button!</red>
```

