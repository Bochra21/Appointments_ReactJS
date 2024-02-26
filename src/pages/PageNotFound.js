import React from "react";
import LostImage from './../assets/lost.svg'
const PageNotFound = () => {
  return (
    <div>
      
      <img src={LostImage} alt="Lost" />
      <h2>Looks like you got lost</h2>
    </div>
  );
};

export default PageNotFound;
