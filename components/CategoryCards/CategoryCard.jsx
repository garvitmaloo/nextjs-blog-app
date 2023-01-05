import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import classes from "./category-card.module.css";

const CategoryCard = ({ catDetails, flexReverse }) => {
  const router = useRouter();

  const reqClass = flexReverse
    ? `${classes["cards-container"]} ${classes.reverse}`
    : `${classes["cards-container"]}`;

  function categoryClickHandler() {
    router.push(`/${catDetails.categoryId}`);
  }

  return (
    <div className={reqClass}>
      <Image
        src={catDetails.categoryImage}
        alt="Category image"
        width={800}
        height={400}
      />
      <div className={classes["text-container"]}>
        <h4>{catDetails.categoryTitle}</h4>
        <h2>{catDetails.categoryHeading}</h2>
        <p>{catDetails.categoryDesc}</p>
        <button onClick={categoryClickHandler} className={classes["card-btn"]}>
          See All {catDetails.categoryTitle} Posts
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
