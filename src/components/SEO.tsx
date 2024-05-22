import { TypeSEO } from '../types';
import Head from 'next/head';
export const SEO = ({ title, description, keywords, canonicalTag, ogTitle, ogDescription, ogImage, ogUrl, ogType, lang, robotsMetaTag, twitterDescription, twitterImage, twitterTitle }: TypeSEO) => {

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}
            <link rel="canonical" href={canonicalTag} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:locale" content={lang} />
            <meta name="robots" content={robotsMetaTag} />
            <meta name="twitter:title" content={twitterTitle} />
            <meta name="twitter:description" content={twitterDescription} />
            {twitterImage && <meta name="twitter:image" content={twitterImage} />}
        </>
    )

}