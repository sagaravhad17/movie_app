import React from "react";
import { img_300, unavailable } from "../../config/Config";
import "./SingleContent.css";
import { Badge } from "@mui/material";
import ContentModal from "../ContentModal/ContentModal";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average >7 ? "primary" : "secondary"}/>
      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
      </span>
      <span className="subTitle">{date}</span>
    </ContentModal>
  );
};

export default SingleContent;
