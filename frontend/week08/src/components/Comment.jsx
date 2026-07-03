import { useMemo } from "react";
import styled from "styled-components";
import LionIcon from "./LionIcon";

const lionColors = [
  {
    bgColor: "var(--lion-bg-orange)",
    lionColor: "var(--lion-orange)",
  },
  {
    bgColor: "var(--lion-bg-blue)",
    lionColor: "var(--lion-blue)",
  },
  {
    bgColor: "var(--lion-bg-green)",
    lionColor: "var(--lion-green)",
  },
  {
    bgColor: "var(--lion-bg-purple)",
    lionColor: "var(--lion-purple)",
  },
];

const Comment = ({ comment }) => {
  const randomColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * lionColors.length);
    return lionColors[randomIndex];
  }, []);

  return (
    <CommentContainer>
      <HeaderContainer>
        <LionIcon
          bgColor={randomColor.bgColor}
          lionColor={randomColor.lionColor}
        />
        <HeaderInfo>
          <Author>{comment.author}</Author>
          <DateTime>{comment.timestamp}</DateTime>
        </HeaderInfo>
      </HeaderContainer>
      <CommentText>{comment.comment}</CommentText>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  padding: 2.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.4375rem;
  background-color: var(--bg-white);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

const Author = styled.p`
  margin: 0;
  color: var(--text-black);
  font-size: 1.25rem;
  font-weight: 500;
`;

const DateTime = styled.p`
  margin: 0;
  color: var(--text-grey);
  font-size: 0.9375rem;
  font-weight: 400;
`;

const CommentText = styled.p`
  margin: 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  color: var(--text-black);
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-weight: 400;
`;
