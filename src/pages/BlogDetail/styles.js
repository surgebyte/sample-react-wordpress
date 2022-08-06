import styled from "styled-components";

export const Container = styled.div``;

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
`;

export const Title = styled.h1.attrs({
  className: "font-sans text-2xl font-bold"
})``;