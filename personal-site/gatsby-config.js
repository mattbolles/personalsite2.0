module.exports = {
  siteMetadata: {
    title: `Matt Bolles`,
    description: `New computer science graduate, ready to get out into the world, available for work any time. I love music, exploring the unknown, and experiencing everything.`,
    author: `Matt Bolles`,
    menuLinks: [
      {
        name: 'About',
        link: '#about'
      },
      {
        name: 'Projects',
        link: '#projects'
      },
      {
        name: 'Contact',
        link: '#contact'
      }
    ],
    projectData:[
      {
        name: "Test Project",
        description: "Test Project Description",
        link: "http://github.com/mattbolles",
        image: "../images/projects/testproject.png",
        technologies: "React, Test, Cool"
      }
  ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
