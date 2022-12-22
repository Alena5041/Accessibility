export default function Card() {
  const data = [
    {
      title: "Perceivable",
      text: "Information and user interface components must be presentable to users in ways they can perceive.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable",
      alt: "Mock for Perceivable",
    },
    {
      title: "Operable",
      text: "User interface components and navigation must be operable.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable",
      alt: "Mock for Perceivable",
    },
    {
      title: "Understandable",
      text: "Information and the operation of the user interface must be understandable.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable",
      alt: "Mock for Operable",
    },
    {
      title: "Robust",
      text: "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust",
      alt: "Mock for Robust",
    },
  ];

  return (
    <div className="a-cards">
      {data.map(({ title, text, url, alt }, index) => (
        <a key={title} href={url} className="a-card" aria-labelledby={index}>
          <img
            src="https://satyr.dev/450x200"
            alt={alt}
            className="a-card__image"
          />
          <div className="a-card__content-wrapper">
            <h3 className="a-card__title">{title}</h3>
            <p className="a-card__text">{text}</p>
            <a href={url} className="a-card__link" id={index}>
              Read more about {title}
            </a>
          </div>
        </a>
      ))}
    </div>
  );
}
