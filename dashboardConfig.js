export default {
  widgets: [
    // {name: 'structure-menu'},

    {
      name: "gatsby",
      options: { sites: [{ siteUrl: "https://preview-phxhomeloan.gtsb.io/" }] },
    },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "6102834e33ffc7aaf1e4b020",
                  title: "PHXHomeloan.com Front-End",
                  name: "phxhomeloan",
                  apiId: "78b72c7d-9105-4a02-9193-4a8287bfbc0a",
                },
              ],
            },
          },
        ],
        data: [
          // {
          //   title: 'Front-End GitHub repo',
          //   value: 'https://github.com/ovsw/phx-web2',
          //   category: 'Code'
          // },
          // {
          //   title: "Back-End GitHub repo",
          //   value: "https://github.com/ovsw/phx-studio",
          //   category: "Code",
          // },
          {
            title: "Frontend",
            value: "https://phxhomeloan.com",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    // {
    //   name: 'document-list',
    //   options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
    //   layout: {width: 'medium'}
    // }
    {
      name: "gatsby-cloud-start-preview",
      options: { sites: [{ siteUrl: "https://preview-phxhomeloan.gtsb.io/" }] },
    },
  ],
};
