module.exports = {
  i18n: {
    locales: ['en'], // Add your languages here
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
}
