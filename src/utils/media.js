const media = (children, min, max) =>
  `@media (min-width: ${min}px) and (max-width: ${max}px) { ${children} }`;

// export const large = (children) => media(children, 979, 5000);

// export const desktop = (children) => media(children, 768, 979);

// export const landscape = (children) => media(children, 481, 467);

export const phone = children => media(children, 0, 485);
