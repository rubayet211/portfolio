export default function SectionHeading({ eyebrow, title, children, as = "h2" }) {
  const Title = as;

  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Title className={`${eyebrow ? "mt-3" : ""} text-3xl font-semibold tracking-tight text-foreground sm:text-4xl`}>
        {title}
      </Title>
      {children ? <div className="section-copy mt-4 max-w-xl">{children}</div> : null}
    </div>
  );
}
