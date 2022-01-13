export default {
  github: 'https://github.com/lolligoo/norcegods',
  docsRepositoryBase: 'https://github.com/lolligoo/norcegods',
  titleSuffix: ' – 北欧众神',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">北欧众神</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      北欧众神
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../public/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="../public/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../public/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="../public/apple-touch-icon.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: '在GitHub上编辑此页面',
  footerText: <>MIT {new Date().getFullYear()} © 北欧众神</>,
  unstable_faviconGlyph: '🦬',
}
