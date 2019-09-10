export default ({ app: { head, router, context } }, inject) => {
  head.scripts.push({
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
    async: false,
    defer: true
  })
}
