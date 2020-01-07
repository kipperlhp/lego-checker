module.exports = {
  siteMetadata: {
    title: 'LEGO Checker',
    description: 'A checker for Lego sets',
    author: 'H.P.Leung',
    image: 'https://lego-checker.netlify.com/icons/icon-256x256.png',
    siteUrl: 'https://lego-checker.netlify.com',
    googleSiteVerification: 'qJyoN8659E4-MXYQylN9zTS_yAG-JbcuemWKHdQQOcQ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'LEGO Checker',
        short_name: 'LEGO Checker',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/lego-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        exclude: ['/404'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://lego-checker.netlify.com',
        sitemap: 'https://lego-checker.netlify.com/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/',
        }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
