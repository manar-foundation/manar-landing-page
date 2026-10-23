export default function SectionHead({ title }) {
  return (
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      <span className="section__rule" aria-hidden="true" />
    </div>
  )
}
