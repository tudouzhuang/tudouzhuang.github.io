import React from 'react';
import './Home_maincontent.css';
import CustomComponent from './Preview_article';

function HomeMainContent() {
  return (
    <div className="main_container">
        <div className="content_container">
             <div className="main-content">
              <CustomComponent />
                <h1>Main Content</h1>
                <p>This is the main content area.</p>
            </div>
        </div>
    </div>
  );
}

export default HomeMainContent;
