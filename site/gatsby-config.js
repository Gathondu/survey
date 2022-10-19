module.exports = {
  siteMetadata: {
    title: `Review taking app`,
    description: `Take review from customers for different company services.`,
    author: `@gathondu`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Companies",
        link: "/companies",
      },
    ],
    trailingSlash: "never",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "CompanyType",
        fieldName: "company",
        url: "http://localhost:3000/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@styles": "src/styles",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
  ],
}
