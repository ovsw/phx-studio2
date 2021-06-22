export default {
  widgets: [
    // {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7242951f833c28ac4b3f7b',
                  title: 'PHXHomeloan.com Front-End Website',
                  name: 'phxhomeloan',
                  apiId: '78b72c7d-9105-4a02-9193-4a8287bfbc0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'Front-End GitHub repo',
            value: 'https://github.com/ovsw/phx-web2',
            category: 'Code'
          },
          {
            title: 'Back-End GitHub repo',
            value: 'https://github.com/ovsw/phx-studio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://phx-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
