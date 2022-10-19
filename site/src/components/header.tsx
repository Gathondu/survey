import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({
  siteTitle,
  menuLinks,
}: {
  siteTitle: string
  menuLinks: Array<{ link: string; name: string }>
}) => (
  <header>
    <div className="flex space-x-10">
      <div>
        <Link to="/" className="text-lg">
          {siteTitle}
        </Link>
      </div>
      <div>
        <nav>
          <ul className="flex space-x-2">
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Header
