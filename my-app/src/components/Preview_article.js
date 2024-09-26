import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Preview_article.css';

function CustomComponent({ link, imagePath, presetText }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Article');
  };

  return (
    <div className="custom-component" onClick={handleClick}>
      <div className="image-display">
        <img src={imagePath} className="img_custom" alt="Custom" />
        <div className="gradient-background"></div>
      </div>
      <div className="text-display">
        <p>{presetText}</p>
      </div>
    </div>
  );
}

export default CustomComponent;
