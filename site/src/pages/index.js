import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const { company } = useStaticQuery(
    graphql`
      query MyQuery {
        company {
          companies {
            name
            location
            url
          }
        }
      }
    `
  )
  return (
    <Layout>
      <Seo title="Home" />
      <ul>
        {company.companies.map(comp => (
          <li>
            <div>{comp.name}</div>
            <div>{comp.location}</div>
            <div>{comp.url}</div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
