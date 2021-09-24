module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/index.html',
        permanent: true
      }
    ]
  }
}
