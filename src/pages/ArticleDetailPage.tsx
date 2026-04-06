import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Pages.module.css";
import { getArticleById } from "../data/articles";
import styles2 from "../components/MainContent.module.css";

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(Number(id));

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | 我的技术博客</title>
        <meta
          name="description"
          content={
            article.summary || article.contentSections[0]?.text.slice(0, 150)
          }
        />
      </Helmet>
      <div className={styles.articleDetail}>
        <h1>{article.title}</h1>
        <div className={styles.meta}>
          {article.date} · {article.author}
        </div>
        {article.contentSections.map((section, idx) => (
          <section key={idx} className={styles.section}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
            {section.code && (
              <pre className={styles.codeBlock}>{section.code}</pre>
            )}
          </section>
        ))}

        <footer className={styles2.articleFooter}>
          <p>
            标签:{" "}
            {article.tags.map((tag, tagIndex) => (
              // 为每个标签生成一个链接，用条件判断是否添加逗号
              <span key={tagIndex}>
                <a href="#">{tag}</a>
                {tagIndex < article.tags.length - 1 && ", "}
              </span>
            ))}
          </p>
        </footer>
      </div>
    </>
  );
};

export default ArticleDetailPage;
