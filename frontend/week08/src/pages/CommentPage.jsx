import styled from "styled-components";
import CommentList from "../components/CommentList";
import Header from "../components/Header";

const CommentPage = () => {
  return (
    <Container>
      <Header
        title="숙멋 프론트의 TMI 게시판 🦁"
        description="사자들의 코멘트를 자유롭게 남겨주세요"
        button={true}
      />
      <CommentSection>
        <CommentList />
      </CommentSection>
    </Container>
  );
};

export default CommentPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-brown);
`;

const CommentSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 0.4375rem;
`;
