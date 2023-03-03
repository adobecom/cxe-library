import { getLibs } from '../../scripts/utils.js';

const milolibs = getLibs();
const { html, render, signal, useEffect } = await import(
  `${milolibs}/deps/htm-preact.js`
);

function Hello({ name }) {
  const displayName = name || 'Kevin';
  return html`<h2>Hello, ${displayName}</h2>`;
}

export default function init(el) {
  const embed_idEl = el.querySelector(':scope > div:nth-of-type(1) > div');
  const iframe_idEl = el.querySelector(':scope > div:nth-of-type(2) > div');
  console.log(embed_idEl);
  console.log(iframe_idEl);
  const { textContent: embed_id } = embed_idEl;
  const { textContent: iframe_id } = iframe_idEl;
  embed_idEl.parentElement.remove();
  iframe_idEl.parentElement.remove();
  render(
    html`<div
      style="width: 800px; height: 600px; margin: auto; position: relative;"
    >
      <iframe
        allowfullscreen
        frameborder="1"
        style="width:800px; height:600px"
        src="https://lucid.app/documents/embedded/${embed_id}"
        id="${iframe_id}"
      ></iframe>
    </div>`,
    el
  );
}
