export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ebbd5cc95b7c4c15a592847',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-th1p9731',
                  apiId: '61baf9a6-6d8e-4db4-ba83-f3296d9b6461'
                },
                {
                  buildHookId: '5ebbd5cdd4d58266a7ad0d43',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hbwpfdtc',
                  apiId: 'f807f6b1-4b73-4a88-a8b8-067c109757db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hyperfocus1337/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hbwpfdtc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
