/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://duejezie.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "./public",
  // Exclude pages you don't want in sitemap
  exclude: ["/404", "/500", "/api/*"],
  // Additional configuration
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://duejezie.dev/sitemap.xml",
      // Add additional sitemaps if needed
    ],
  },
};
