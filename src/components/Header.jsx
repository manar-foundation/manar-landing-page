import logo from '../assets/manar-logo.png'
import { APPLY, APPLY_URL, ORG, SITE_URL } from '../content'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a
          className="header__brand"
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ORG.name} — الانتقال إلى الموقع الرسمي`}
        >
          <img src={logo} alt={ORG.name} width="405" height="120" />
        </a>

        <a
          className="btn btn--sm btn--primary header__cta"
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {APPLY.ctaShort}
        </a>
      </div>
    </header>
  )
}
