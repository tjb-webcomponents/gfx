import html from "https://tjb-webcomponents.github.io/html-template-string/html-template-string.js";

/**
 * Creates a circle that fills the entire div
 * Resolves promise after the animation
 * @param {node} element
 * @param {boolean} cleanup whether or not to remove elements after animation
 */
export const bounce = (element, cleanup = true) => new Promise((resolve, reject) => {
  const bounceStyles = html `
    <style>
      .tjb-bounce {
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        position: absolute;
        background-color: #1a2980;
        border-radius: 50%;
        z-index: 1000;
        transform: translate(-50%, -50%) scale(1, 1);
        animation: tjb-bounce 600ms linear 1 forwards;
      }

      @keyframes tjb-bounce {
        100% {
          background-color: #fff;
          transform: translate(-50%, -50%) scale(800, 800);
        }
      }
    </style>
  `;

  const bounce = document.createElement("span");
  bounce.appendChild(bounceStyles);
  element.style.position = "relative";
  element.appendChild(bounce);
  bounce.classList.add("tjb-bounce");
  bounce.addEventListener("animationend", e => {
    resolve(e);
    if (cleanup) setTimeout(() => element.removeChild(bounce), 1000);
  });
});

/**
 * Exports a CSS animation that blinks a node
 * @param {node} element
 * @param {boolean} [cleanup] whether or not to remove elements after animation
 */
export const blink = (element, cleanup = true) => new Promise((resolve, reject) => {
  const name = 'blink';
  const styles = html `
    <style>
      .tjb-${name} {
        animation: tjb-${name} 600ms linear 3 forwards;
      }

      @keyframes tjb-${name} {
        50% {
          opacity: 0;
        }
      }
    </style>
  `;

  element.appendChild(styles);
  element.classList.add(`tjb-${name}`);
  element.addEventListener("animationend", e => {
    resolve(e);
    if (cleanup) setTimeout(() => element.removeChild(styles), 1000);
  });
});


/**
 * Exports a CSS animation that shakes a node
 * @param {node} element
 * @param {boolean} [cleanup] whether or not to remove elements after animation
 * @return {promise}
 */
export const shake = (element, cleanup = true) => new Promise((resolve, reject) => {

  const name = 'shake';
  const styles = html `
    <style>
      .tjb-${name} {
        animation: tjb-${name} 300ms linear 3 forwards;
      }

      @keyframes tjb-${name} {
        25% {
          transform: translateX(-6%);
        }

        50% {
          transform: translateX(6%);
        }
      }
    </style>
  `;

  element.appendChild(styles);
  element.classList.add(`tjb-${name}`);
  element.addEventListener("animationend", e => {
    if (cleanup) setTimeout(() => element.removeChild(styles), 1000);
    resolve(e);
  });
});
