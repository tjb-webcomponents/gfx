import html from "https://tjb-webcomponents.github.io/html-template-string/html-template-string.js";

/**
 * Creates a circle that fills the entire div
 * Calls a callback after the animation
 * @param {node} element
 * @param {function} callback
 * @param {boolean} cleanup whether or not to remove elements after animation
 */
export function bounce(element, callback, cleanup) {
  const bounceStyles = html`
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
    callback(e);
    if (cleanup) setTimeout(() => element.removeChild(bounce), 1000);
  });
}
