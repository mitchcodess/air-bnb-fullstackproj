import React from "react";
import "./SpotPageImageGrid.css";
// import defaultimg from '../../assets/img/default.webp'
function SpotPageImageGrid({ images }) {
  const previewImage = images.find((image) => image.preview === true);
  const supportimages = images.filter((image) => image.preview !== true);

  return (
    <div className="spot-page-image__flex__container">
      <div className="spot-page-image-main">
        <img src={previewImage?.url} alt="main" />
      </div>
      <div className="spot-page-image-support__grid__container">
        {supportimages.map((image) => {
          return (
            <div>
              <img src={image.url} key={image.id} alt="supporting" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SpotPageImageGrid;
