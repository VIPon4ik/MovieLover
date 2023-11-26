import styled from "styled-components";
import { COLORS } from "constants";

export const Rating = styled.span`
  dispaly: flex;
  align-items: center;
  font-size: 14px;
  color: ${COLORS.black};
  margin-left: 10px;
`

export const ReviewListItem = styled.li`
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
  padding: 10px;
  margin-bottom: 10px;
`