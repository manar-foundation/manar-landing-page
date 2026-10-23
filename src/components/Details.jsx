import { DETAILS, SECTIONS } from '../content'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function Details() {
  return (
    <section className="section section--tint" id="details">
      <div className="container">
        <SectionHead title={SECTIONS.details} />

        <ul className="details">
          {DETAILS.map((item) => (
            <li className="card detail" key={item.label}>
              <span className="detail__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <h3 className="detail__label">{item.label}</h3>
              <p className="detail__value">{item.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
