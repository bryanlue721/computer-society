module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '39508952247945abbbd427ec0dcc1308',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '隆中华电脑学会 CHKL Computer Society',
  domain: 'computersociety.my',
  author: '电脑学会执委团',

  // open graph metadata (optional)
  description: '吉隆坡中华独立中学电脑学会 CHKL Computer Society',
  socialImageTitle: '吉隆坡中华独立中学电脑学会 CHKL Computer Society',
  socialImageSubtitle: '吉隆坡中华独立中学电脑学会 CHKL Computer Society',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'cschklorg/utterances',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
     '/about': '4cad3f99069247c0a8c5e375d679922e',
     '/courses': 'f1991cc8eb4c482f98ff4da7e632dbb5',
     '/committee': '8d653ed977d44fa4a45a3affbf376c2d',
     '/contact': 'e6e08532d6c045c7a78cdee4602ac730',
     '/posts': 'ded7835d32074c708bdaa043c5ad8726',
    }
}
