import React from "react";
import "./MainContent.css";

const MainContent = (props) => {
  const { imageUrl, isLoading } = props;
  return <div className="main-content">
    {isLoading && <div className="shimmer" />}
    {!isLoading && imageUrl && <img src={imageUrl} alt="Picsum Output" style={{ maxWidth: '100%', marginTop: '20px' }} />}
  </div>;
};

export default MainContent;
