import logo from '../assets/manar-logo.png'
import { ORG, SITE_URL } from '../content'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a
          className="footer__brand"
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ORG.name} — الانتقال إلى الموقع الرسمي`}
        >
          <img src={logo} alt={ORG.name} width="405" height="120" />
        </a>

        <ul className="footer__links">
          <li>
            <a href={ORG.websiteUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="globe" size={18} />
              <span dir="ltr">{ORG.website}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${ORG.email}`}>
              <Icon name="mail" size={18} />
              <span dir="ltr">{ORG.email}</span>
            </a>
          </li>
          <li>
            <span className="footer__handle">
              <Icon name="users" size={18} />
              <span dir="ltr">{ORG.handle}</span>
            </span>
          </li>
        </ul>
      </div>

      <div className="footer__bar" aria-hidden="true" />
    </footer>
  )
}
