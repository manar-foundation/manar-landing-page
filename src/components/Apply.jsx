import { APPLY, APPLY_URL } from '../content'
import Icon from './Icon'

export default function Apply() {
  return (
    <section className="apply" id="apply">
      <div className="container">
        <div className="apply__panel">
          <div className="apply__mosaic" aria-hidden="true">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} />
            ))}
          </div>

          <div className="apply__content">
            <p className="apply__intro">{APPLY.intro}</p>

            <a
              className="btn btn--lg btn--light"
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {APPLY.cta}
              <Icon name="arrow" size={20} />
            </a>

            <p className="apply__deadline">{APPLY.deadline}</p>
            <p className="apply__note">{APPLY.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
