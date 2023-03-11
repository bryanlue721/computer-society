import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '39508952247945abbbd427ec0dcc1308',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'd720531f-5391-43c8-bb8e-61334bd09b91',

  // basic site info (required)
  name: '隆中华电脑学会 CHKL Computer Society',
  domain: 'www.computersociety.my',
  author: '电脑学会执委团',

  // open graph metadata (optional)
  description: 'Join the CHKL Computer Society (CHKL ComSoc) - a community of tech enthusiasts and learners! Explore the latest trends in computer science, enhance your skills, and participate in exciting events and projects. Connect with like-minded individuals and expand your horizons with us! 加入隆中华电脑学会，一起探索电脑科学的奥秘！',

  // social usernames (optional)
  github: 'cschklorg',
  instagram: 'cs.chkl',
  facebook: 'cs.chkl',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
     '/about': '4cad3f99069247c0a8c5e375d679922e',
     '/courses': 'f1991cc8eb4c482f98ff4da7e632dbb5',
     '/committee': '8d653ed977d44fa4a45a3affbf376c2d',
     '/contact': 'e6e08532d6c045c7a78cdee4602ac730'
   },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'default',
  // navigationLinks: [
  //   {
  //     title: '关于学会',
  //     pageId: '4cad3f99069247c0a8c5e375d679922e'
  //   },
  //   {
  //     title: '课程内容',
  //     pageId: 'f1991cc8eb4c482f98ff4da7e632dbb5'
  //   },
  //   {
  //    title: '执委名单',
  //    pageId: '8d653ed977d44fa4a45a3affbf376c2d'
  //   },
  //   {
  //    title: '联系我们',
  //    pageId: 'e6e08532d6c045c7a78cdee4602ac730'
  //   }
  // ]
})
