import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // 使用 useNavigate 钩子

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/')}>返回主页</button> {/* 点击按钮返回主页 */}
    </div>
  );
}

export default Home;
