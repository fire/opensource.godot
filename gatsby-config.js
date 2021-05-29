module.exports = {
  siteMetadata: {
    title: `Opensource.godot`,
    author: `K. S. Ernest (iFire) Lee`,
    description: `Find open-source Godot Engine contributions`,
    siteUrl: `https://github.com/fire/opensource.godot`,
    social: {
      github: `fire`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: [
          "gatsby-tinacms-git",
          "gatsby-tinacms-remark",
          "gatsby-tinacms-json",
        ],
        sidebar: {
          enabled: process.env.NODE_ENV !== "production",
          position: "displace",
        },
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/alts`,
        name: `alts`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Opensource.godot`,
        short_name: `Opensource.godot`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
