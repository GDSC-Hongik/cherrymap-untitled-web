/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import BookmarkInactive from "../../icons/bookmark-inactive.png";
import BookmarkActive from "../../icons/bookmark-active.svg";

const BookmarkButton = styled.button`
  position: absolute;
  top: 21px;
  left: 324px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const BookmarkIcon = styled.img`
  width: 20px;
  height: 17px;
`;

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <BookmarkButton onClick={toggleBookmark}>
      <BookmarkIcon src={isBookmarked ? BookmarkActive : BookmarkInactive} alt="Bookmark" />
    </BookmarkButton>
  );
};

export default Bookmark;