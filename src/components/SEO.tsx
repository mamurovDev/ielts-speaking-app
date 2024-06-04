import { TypeSEO } from '../types';

export const SEO = ({ title, description, keywords, canonicalTag, ogTitle, ogDescription, ogImage, ogUrl, ogType, lang, robotsMetaTag, twitterDescription, twitterImage, twitterTitle }: TypeSEO) => {

    return (
        <>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}
            {canonicalTag && <link rel="canonical" href={canonicalTag} />}
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && <meta property="og:description" content={ogDescription} />}
            {ogUrl && <meta property="og:url" content={ogUrl} />}
            {ogType && <meta property="og:type" content={ogType} />}
            {lang && <html lang={lang} />}
            {robotsMetaTag && <meta name="robots" content={robotsMetaTag} />}
            {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
            {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
            {twitterImage && <meta name="twitter:image" content={twitterImage} />}
        </>
    )
}
