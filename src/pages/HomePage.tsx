import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Pages.module.css";
import { getArticles } from "../data/articles"; // 稍后创建数据模块

const HomePage: React.FC = () => {
  const articles = getArticles().slice(0, 2); // 只取两篇作为首页展示

  return (
    <>
      <Helmet>
        <title>首页 | 我的技术博客</title>
        <meta
          name="description"
          content="分享前端开发技巧、React实战经验，每周更新。"
        />
      </Helmet>

      <div className={styles.page}>
        <h1 className={styles.pageTitle}>最新文章</h1>
        {articles.map((article) => (
          <article key={article.id} className={styles.articleCard}>
            <h2>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </h2>
            <div className={styles.meta}>
              {article.date} · {article.author}
            </div>
            <p>
              {article.summary ||
                article.contentSections[0]?.text.substring(0, 100)}
              ...
            </p>
            <Link to={`/articles/${article.id}`} className={styles.readMore}>
              阅读全文 →
            </Link>
          </article>
        ))}
        
        {/* 营销高亮 CTA 区域保持不变 */}
        <div className={styles.highlightCta}>
          <p>
            <mark className={styles.mark}>🔥 热门教程：</mark>{" "}
            想要掌握更多前端技巧？<a href="#">点击这里订阅我的 newsletter</a>
            ，每周推送干货！
          </p>
        </div>

      </div>
    </>
  );
};

export default HomePage;
