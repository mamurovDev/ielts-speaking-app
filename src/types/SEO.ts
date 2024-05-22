export interface TypeSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalTag: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string | undefined;
  ogUrl: string;
  ogType: string;
  lang: "en-US";
  robotsMetaTag: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string | undefined;
}
