function sliceHtml(html, start, end) {
  if (end <= start) {
    return "";
  }

  const doc = new DOMParser().parseFromString(
    `<body>${html}</body>`,
    "text/html",
  );
  let index = 0;

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const value = node.textContent ?? "";
      const from = Math.max(0, start - index);
      const to = Math.max(0, end - index);
      const sliced = value.slice(from, Math.min(to, value.length));
      index += value.length;
      return sliced ? document.createTextNode(sliced) : null;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const clone = node.cloneNode(false);
    for (const child of Array.from(node.childNodes)) {
      const kept = walk(child);
      if (kept) {
        clone.appendChild(kept);
      }
    }

    return clone.childNodes.length ? clone : null;
  }

  const wrapper = document.createElement("div");
  for (const child of Array.from(doc.body.childNodes)) {
    const kept = walk(child);
    if (kept) {
      wrapper.appendChild(kept);
    }
  }

  return wrapper.innerHTML;
}

const root = document.querySelector(".typewriter");

if (root) {
  const htmlEl = root.querySelector(".typewriter-html");
  const typedEl = root.querySelector(".typewriter-typed");
  const restEl = root.querySelector(".typewriter-rest");
  const html = htmlEl.innerHTML;
  const total = htmlEl.textContent?.length ?? 0;
  const typeSpeed = parseInt(root.dataset.typeSpeed || "100", 10);
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let charIndex = 0;

  function render() {
    typedEl.innerHTML = sliceHtml(html, 0, charIndex);
    restEl.innerHTML = sliceHtml(html, charIndex, total);
  }

  function type() {
    charIndex += 1;
    render();

    if (charIndex < total) {
      setTimeout(type, typeSpeed);
    }
  }

  if (total > 0) {
    if (reduceMotion) {
      charIndex = total;
      render();
    } else {
      type();
    }
  }
}
