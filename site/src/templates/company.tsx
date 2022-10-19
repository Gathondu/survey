import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { startCase } from "lodash"

const Company = ({
  data: {
    company: { company },
  },
}) => {
  const { name, location, website } = company
  return (
    <Layout>
      <SEO title={startCase(name)} />
      <div>
        <div>{name}</div>
        <div>{location}</div>
        <div>{website}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: ID!) {
    company {
      company(id: $id) {
        name
        location
        website
      }
    }
  }
`

export default Company
