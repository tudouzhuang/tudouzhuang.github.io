import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiStar } from "react-icons/fi";
import './Preview_article.css';

function CustomComponent({ link, imagePath, presetText }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Article');
  };

  return (
    <div className="custom-component" onClick={handleClick}>
      <div className="preview_img_container">
          <img className="preview_img_box" src={require('../img/mxl.jpg')} />
      </div>
      <div className="preview_content_container" >
        <div className="preview_content_title">
            eueini's story:
        </div>
        <div className="preview_content_words">
            This is the story about mxl. Once upon a time there was a sbmxl ,one day...
        </div>
      </div>
      <div className="preview_button_container" >
        <div className="preview_img_container">
            <FiStar size={24} />
        </div>
        <div className="preview_img_container">
            <FiStar size={24} />
        </div>
      </div>
    </div>
  );
}

export default CustomComponent;
