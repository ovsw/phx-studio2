export default {
  widgets: [
    // {name: 'structure-menu'},
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
                  buildHookId: "60d9df9533e20c0bac8e5bbb",
                  title: "PHXHomeloan.com Front-End Development Copy",
                  name: "phxhomeloan",
                  apiId: "1708813a-617f-4ba6-ae15-0674e6bbb6f6",
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
            value: "https://phxhomeloan2.netlify.app",
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
  ],
};
