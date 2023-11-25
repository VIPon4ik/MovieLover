import styled from "styled-components";

export const CastList = styled.ul`
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