import styled from "styled-components";

export const Title = styled.h1`
  margin: 20px auto;
  display: block;
  text-align: center;
  text-transform: capitalize;
`

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: 280px;
  gap: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: 280px 280px;
  }

  @media (min-width: 920px) {
    grid-template-columns: 280px 280px 280px;
  }

  @media (min-width: 1240px) {
    grid-template-columns: 280px 280px 280px 280px;
  }
`;
