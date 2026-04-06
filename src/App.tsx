import React, { useState, useEffect } from "react"; // 导入 useEffect
import styles from "./App.module.css"; // CSS Module 导入
import Header from "./components/Header";
import Nav from "./components/Nav";
// import MainContent from './components/MainContent';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // 新建首页
import ArticlesPage from "./pages/ArticlesPage"; // 文章列表页
import ArticleDetailPage from "./pages/ArticleDetailPage"; // 文章详情
import AboutPage from "./pages/AboutPage"; // 关于我
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  // 在顶层组件定义一个状态，管理博客标题
  const [blogTitle] = useState<string>("我的技术博客 test!");

  // 定义接收邮箱的处理函数
  const handleSubscribe = (email: string) => {
    console.log("App 组件收到了订阅邮箱:", email);
    // 这里可以添加发送到后端的逻辑
    alert(`感谢订阅！邮箱 ${email} 已收到。`);
  };

  // 内部组件，用于监听主题并修改 body 类名
  const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const { theme } = useTheme();

    useEffect(() => {
      // 将主题类名添加到 body 上
      document.body.className = theme;
    }, [theme]);

    return <>{children}</>;
  };

  return (
    // 使用 Grid 布局构建页面骨架
    <ThemeProvider>
      {" "}
      {/* 包裹整个应用，让所有子组件都能访问主题 */}
      <ThemeWrapper>
        <div className={styles.pageLayout}>
          {/* 语义化标签：页眉区域 */}
          {/* 通过自定义属性 title 将数据传递给 Header 组件 */}
          <Header title={blogTitle} />
          {/* 语义化标签：导航区域 */}
          <Nav />

          {/* 主要内容区域：路由出口 */}
          <main className={styles.mainArea}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticleDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* 语义化标签：主要内容区域 */}
          {/* <MainContent /> */}
          {/* 语义化标签：侧边栏区域（广告/相关链接） */}
          {/* 将函数作为 prop 传递给 Sidebar */}
          <Sidebar onSubscribe={handleSubscribe} />
          {/* 语义化标签：页脚区域 */}
          {<Footer />}
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default App;
