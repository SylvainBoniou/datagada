module.exports = {
  SiteTitle: 'DATADAGA',
  Sitelogo: '#',
  SiteLogoText: 'DATADAGA',
  SiteAuthor: 'Sylvain Boniou',
  SiteDescription: 'Full Stack Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteAddress: {
    city: 'Lorient',
    region: 'Bretagne',
    country: 'France',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'sylvain.boniou@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2025',
};
