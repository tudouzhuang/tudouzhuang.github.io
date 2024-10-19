import React from 'react';
import './Home_maincontent.css';
import CustomComponent from './Preview_article';
import { FiRotateCw, FiMusic, FiHardDrive, FiDownload, FiBook, FiChevronLeft, FiChevronRight } from "react-icons/fi";
function HomeMainContent() {
  return (
    <div className="main_container">
         <div className="header_content">
            <div className="rowbutton_container">
              <button className="row_button">
                 <FiRotateCw size={18}/>
              </button>
            </div>
            <div className="column_container">
              <button className="column_box">
                  <div className="column_icon" >
                    <FiBook size={18}/>
                  </div>
                  <div className="column_words">
                      博客
                  </div>
              </button>
              <div className="column_box">
                  <div className="column_icon" >
                    <FiDownload size={18}/>
                  </div>
                  <div className="column_words">
                      下载
                  </div>
              </div>     
              <div className="column_box">
                  <div className="column_icon" >
                    <FiHardDrive size={18}/>
                  </div>
                  <div className="column_words">
                      网盘
                  </div>
              </div>
              <div className="column_box">
                  <div className="column_icon" >
                    <FiMusic size={18}/>
                  </div>
                  <div className="column_words">
                      音乐
                  </div>
              </div>              
            </div>
            <div className="pages_container">
              <div className="pages_words">
                  第1-50行,共103行
              </div>
              <button className="row_button">
                 <FiChevronLeft size={18}/>
              </button>
              <button className="row_button">
                 <FiChevronRight size={18}/>
              </button>
            </div>
         </div>
        <div className="content_container">
             <div className="main-content">
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />            
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
              <CustomComponent />
            </div>
        </div>
    </div>
  );
}

export default HomeMainContent;
