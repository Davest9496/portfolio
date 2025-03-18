import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const defaultMeta = {
  title: "Dave Ejezie | Full-Stack Web Developer",
  description:
    "Experienced Full-Stack Web Developer based in London specializing in web development, React, Next.js, and TypeScript.",
  ogImage: "/images/social-banner.jpg",
  ogType: "website",
};

const SEO: React.FC<SEOProps> = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  canonical,
  ogImage = defaultMeta.ogImage,
  ogType = defaultMeta.ogType,
  noindex = false,
}) => {
  const router = useRouter();
  const siteUrl = "https://www.duejezie.dev";
  const fullUrl = canonical || `${siteUrl}${router.asPath}`;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Dave Ejezie" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DuEjezie" />
      <meta name="twitter:creator" content="@DuEjezie" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Dave Ejezie" />
      <meta name="publisher" content="Dave Ejezie" />
      <meta name="theme-color" content="#0A6B28" />
    </Head>
  );
};

export default SEO;
