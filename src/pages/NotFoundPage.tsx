import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './Pages.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - 页面未找到</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={styles.page} style={{ textAlign: 'center' }}>
        <h1>404</h1>
        <p>哎呀，页面走丢了～</p>
        <Link to="/">返回首页</Link>
      </div>
    </>
  );
};

export default NotFoundPage;