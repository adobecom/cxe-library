import { getLibs } from '../../scripts/utils.js';

const milolibs = getLibs();
const { html, render, signal, useEffect } = await import(`${milolibs}/deps/htm-preact.js`);

function Hello({ name }) {
  const displayName = name || 'Kevin';
  return html`<h2>Hello, ${displayName}</h2>`;
}

export default function init(el) {
  const nameEl = el.querySelector(':scope > div > div');
  const { textContent } = nameEl;
  nameEl.parentElement.remove();
  render(html`<${Hello} name=${textContent} />`, el);
}
