import React from "react"
import { Link } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"

const Companies = ({ pageContext: { companies } }) => {
  return (
    <Layout>
      <SEO title="Companies" />
      <div>
        <ul className="text-sm list-decimal">
          {companies.map(comp => (
            <li key={comp.name}>
              {comp.name.toUpperCase()}
              <ul className="list-disc list-inside">
                <li>
                  <Link to={`${comp.url}`}> {comp.url}</Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Companies
