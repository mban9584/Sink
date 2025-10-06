export default defineAppConfig({
  title: 'Short',
  email: 'admin@ixoooo.com',
  github: 'https://github.com/mban9584',
  twitter: '?',
  telegram: '?',
  mastodon: '?',
  blog: 'https://www.vivcic.com',
  description: '简单/快速/安全的链接缩短器，可进行分析，100% 在 Cloudflare 上运行。',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
