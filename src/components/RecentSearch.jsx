/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 12px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const RecentSearch = ({ searches, onSelect }) => {
  return (
    <Container>
      <Title>최근 검색</Title>
      <List>
        {searches.map((search, index) => (
          <Item key={index} onClick={() => onSelect(search)}>
            {search}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default RecentSearch;
