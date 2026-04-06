import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://peizhengcgz28.github.io/personal-blog'; // 替换为你的实际域名

// 获取所有文章id（可以从data/articles.ts中读取，但脚本是node环境，简单手动列出）
// 更严谨的做法是读取编译后的路由配置，但为了演示，我们手动列出
const articleIds = [1, 2];  // 根据实际文章id修改

const pages = [
  '/',
  '/articles',
  '/about',
  ...articleIds.map(id => `/articles/${id}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemap);
console.log('✅ sitemap.xml 已生成在 public/ 目录');