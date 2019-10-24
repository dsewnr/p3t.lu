module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Code Me, dsewnr`,
    author: `dsewnr`,
    description: `軟體工程師．大 Linux 神教教徒`,
    siteUrl: `https://p3t.lu/`,
    social: {
      email: `dsewnr@gmail.com`,
      twitter: `dsewnr`,
      github: `dsewnr`,
      linkedin: `dsewnr`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-images`,
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 720,
          //     linkImagesToOriginal: false,
          //   }
          // },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              username: 'dsewnr',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-77038091-8`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + 'posts' + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + 'posts' + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Gatsby RSS Feed'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Me, dsewnr`,
        short_name: `Code Me`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#debe1d`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-html2amp',
      options: {
        files: ['posts/**/index.html', 'index.html'],
        gaConfigPath: 'gaConfig.json',
        dist: 'public/amp',
        serviceWorker: {
          src: 'https://p3t.lu/sw.js',
          'data-iframe-src': 'https://p3t.lu/amp-install-serviceworker.html',
          layout: 'nodisplay'
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-sitemap`
  ]
};
