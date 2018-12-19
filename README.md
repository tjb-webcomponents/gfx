# gfx

A collection of handy GFX and Animation functions

## Example

https://tjb-webcomponents.github.io/tjb-gfx/

## Components

### Bounce

Google style circle placed at some elements that grows in size from there:  
[![Bounce Example](/gifs/bounce.gif)](https://tjb-webcomponents.github.io/tjb-gfx/#bounce)

#### Add to project

##### Include via HTML

Include it:

```JavaScript
import { bounce } from 'https://tjb-webcomponents.github.io/tjb-gfx/tjb-gfx.min.js'
```

##### Include via NPM

Console:

```bash
npm i -S tjb-gfx
```

Then in your code:

```JavaScript
import { bounce } from 'tjb-gfx';
```

#### Useage

```JavaScript
/**
 * Creates a circle that fills the entire div
 * Calls a callback after the animation
 * @param {node} element
 * @param {function} callback
 * @param {boolean} cleanup whether or not to remove elements after animation
 */
bounce(element, callback, cleanup);
```

### blink

Blink a node on and off. Useful to draw attention:

<iframe src="https://tjb-webcomponents.github.io/tjb-gfx/#blink">  
https://tjb-webcomponents.github.io/tjb-gfx/#blink

#### Add to project

##### Include via HTML

Include it:

```JavaScript
import { blink } from 'https://tjb-webcomponents.github.io/tjb-gfx/tjb-gfx.min.js'
```

##### Include via NPM

Console:

```bash
npm i -S tjb-gfx
```

Then in your code:

```JavaScript
import { blink } from 'tjb-gfx';
```

#### Useage

```JavaScript
/**
 * Creates a circle that fills the entire div
 * Calls a callback after the animation
 * @param {node} element
 * @param {function} callback
 * @param {boolean} cleanup whether or not to remove elements after animation
 */
blink(element, callback, cleanup);
```

### shake

Shake a node on and off. Useful to draw attention:

<iframe src="https://tjb-webcomponents.github.io/tjb-gfx/#shake">  
https://tjb-webcomponents.github.io/tjb-gfx/#shake

#### Add to project

##### Include via HTML

Include it:

```JavaScript
import { shake } from 'https://tjb-webcomponents.github.io/tjb-gfx/tjb-gfx.min.js'
```

##### Include via NPM

Console:

```bash
npm i -S tjb-gfx
```

Then in your code:

```JavaScript
import { shake } from 'tjb-gfx';
```

#### Useage

```JavaScript
html`
<style>
  ${shake}
</style>
`
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)
