# Starter

This starter will ultimately feature a blog, wiki and glossary. All 3 post types will work with Netlify CMS.

## Quick Start

### Pre Requistes

Before running the site, you will need to install the following:

-   [Node 18](https://nodejs.org/en/download/current/)
    -   NPM (installed with node)
-   [GatsbyCLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)

### Run Locally

1. Clone repo
2. In project root, run `npm install`
3. In project root, run `npm run start`
4. In your browser, visit http://localhost:8000/
  - For CMS: http://localhost:8000/admin

## Tech

-   [Gatsby v4](https://www.gatsbyjs.com/docs)
-   [NetlifyCMS](https://www.netlifycms.org/docs/intro/)
-   [React 18](https://reactjs.org/docs/getting-started.html)
-   [Typescript](https://www.typescriptlang.org/docs/)
-   [Bulma](https://bulma.io/documentation/)
-   [Font Awesome v6](https://fontawesome.com/docs)

## Features

-   **CMS**: This starter utilizes the Netlify's opensource CMS. NetlifyCMS leverages git repos to store markdown files and doesn't require a server to run. This allows the site to remain static and cost effective, while delivering a light-weight CMS experience.
-   **SiteMap**: The [`gatsby-plugin-sitemap`](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/) plugin generates a site map for production builds.
-   **Responsive Images**: The starter takes advantage of Gatsby's responsive image plugins to implement responsive images. See [`gatsby-plugin-image`](https://www.gatsbyjs.com/plugins/gatsby-plugin-image//) for more info.
-   **Mobile Friendly**: Because most modern users are on mobile, every page is designed with the mobile user in mind.## Resources

## Resources

-   **Bulma**
    -   [Helpers](https://bulma.io/documentation/helpers/)
    -   [Variables](https://bulma.io/documentation/customize/variables/)
-   [Gatsby Docs](https://www.gatsbyjs.com/docs)
-   **NetlifyCMS**:
    -   [NetlifyCMS Docs](https://www.netlifycms.org/docs/gatsby/)
    -   [Netlify CMS/Gatsby Setup](https://www.netlifycms.org/docs/gatsby/)
-   **Font Awesome**:
    -   [Font Awsome React Setup](https://fontawesome.com/docs/web/use-with/react/)
    -   [Font Awesome Free Search](https://fontawesome.com/search?o=r&m=free)
-   **Misc**:
    -   [Generate placeholder images](https://placeholder.com/)



## Operational Notes

-   Modifying Bulma styles usually requires you to restart server. Limited hot reload.
-   NetlfiyCMS has known issues using React 18. The workaround is including the React packages under `overrides` block in `package.json`.
    -   [See Github Issue](https://github.com/netlify/netlify-cms/issues/6499)

### Commit Message Style

-   `chore`: minor maintenance tasks like README updates, package upgrades, etc.
-   `update`: larger tech debt tasks that are more involved than a chore. Ex: test package upgrade involving extensive breaking changes.
-   `add`: feature additions
-   `fix`: bug fixes
