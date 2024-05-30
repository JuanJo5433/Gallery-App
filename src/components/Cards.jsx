import React from "react";
import Card from "./Card";
import Loading from "./Loading";
import Masonry from "react-masonry-css";
import "./Masonry.css";
import FormImg from "./FormImg";
import { useFetchImages } from "../hooks/useFetchImages";
import Pagination from "./Pagination";

const Cards = () => {
  const [images, loading, handleSubmit, breakpointColumnsObj, nextPage, prevPage, selectPage, page] = useFetchImages();

  return (
    <div className="text-center">
      <FormImg handleSubmit={handleSubmit} />
      <hr />
      {loading && <Loading />}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        // className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img) => (
          <div key={img.id}>
            <Card img={img.urls.regular} />
          </div>
        ))}
      </Masonry>
      <Pagination prevPage={prevPage} page={page} nextPage={nextPage} selectPage={selectPage  }/>
    </div>
  );
};

export default Cards;
