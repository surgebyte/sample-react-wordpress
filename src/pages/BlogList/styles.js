import styled from "styled-components";

export const Container = styled.div``;

export const ArticlesContainer = styled.div.attrs({
  className: ""
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;