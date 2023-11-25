import styled from "styled-components";
import { COLORS } from "constants";

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  margin-top: 20px;
`

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  width: 300px;
  height: 450px;

  background-color: ${COLORS.black};
`