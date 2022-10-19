exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    data: {
      company: { companies: companies },
    },
  } = await graphql(`
    {
      company {
        companies {
          id
          url
          name
        }
      }
    }
  `)

  createPage({
    path: "/companies",
    component: require.resolve("./src/components/company/companies.tsx"),
    context: {
      companies,
    },
  })

  companies.map(company => {
    const { id, url } = company
    createPage({
      path: `${url}`,
      component: require.resolve("./src/templates/company.tsx"),
      context: {
        id,
      },
    })
  })
}
