import styled from "styled-components";
import { getColors } from "constants";

const COLORS = getColors(JSON.parse(localStorage.getItem('theme')));

export const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  color: ${COLORS.black};
  margin-left: 10px;
  gap: 6px;
`

export const ReviewListItem = styled.li`
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
  padding: 10px;
  margin-bottom: 10px;
`