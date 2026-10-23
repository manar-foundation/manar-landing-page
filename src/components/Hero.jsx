import { APPLY, APPLY_URL, DETAILS, HERO } from '../content'
import Icon from './Icon'

// أبرز ثلاث معلومات من "تفاصيل المهمة" تُعرض كشارات سريعة في الواجهة
const HIGHLIGHTS = [DETAILS[0], DETAILS[2], DETAILS[4]]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__mosaic" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="container hero__inner">
        <p className="hero__eyebrow">{HERO.eyebrow}</p>
        <h1 className="hero__title">{HERO.title}</h1>
        <p className="hero__lead">{HERO.lead}</p>

        <ul className="hero__badges">
          {HIGHLIGHTS.map((item) => (
            <li key={item.label}>
              <Icon name={item.icon} size={18} />
              <span>{item.value.replace(/\.$/, '')}</span>
            </li>
          ))}
        </ul>

        <div className="hero__actions">
          <a
            className="btn btn--lg btn--light"
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {APPLY.cta}
            <Icon name="arrow" size={20} />
          </a>
          <p className="hero__deadline">{APPLY.deadline}</p>
        </div>
      </div>
    </section>
  )
}
