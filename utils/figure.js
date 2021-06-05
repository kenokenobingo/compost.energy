module.exports = (image, caption, className) => {
  const classMarkup = className ? ` class="${className}"` : "";
  const captionMarkup = caption ? `<figcaption>${caption}</figcaption>` : "";
  return `<figure${classMarkup}><img src="/img/${image}" />${captionMarkup}</figure>`;
  // the line below does all this in one line, but is more confusing:
  // return `<figure${className ? ` class="${className}"` : ''}><img src="/img/${image}" />${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
};