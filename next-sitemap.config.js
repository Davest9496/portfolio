/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://your-domain.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "./public",
  // Exclude pages you don't want in sitemap
  exclude: ["/404", "/500", "/api/*"],
  // Additional configuration
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://your-domain.com/sitemap.xml",
      // Add additional sitemaps if needed
    ],
  },
};
