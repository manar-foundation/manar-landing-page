import { QUALIFICATIONS, SECTIONS } from '../content'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function Qualifications() {
  return (
    <section className="section section--tint" id="qualifications">
      <div className="container">
        <SectionHead title={SECTIONS.qualifications} />

        <ul className="quals">
          {QUALIFICATIONS.map((item) => (
            <li className="card qual" key={item}>
              <span className="qual__check">
                <Icon name="check" size={16} strokeWidth={2.4} />
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
