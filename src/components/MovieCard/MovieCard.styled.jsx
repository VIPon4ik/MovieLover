import styled from 'styled-components';
import { COLORS } from 'constants';

export const MovieTitle = styled.h2`
  color: ${COLORS.light_red};
  text-align: center;
  font-size: 16px;
  margin: 10px;
  text-decoration: none;
`;


export const MovieListItem = styled.li`
  background-color: ${COLORS.black};
  border-radius: 8px;

  &:hover ${MovieTitle},
  &:focus ${MovieTitle} {
    color: ${COLORS.dark_red};
  }
`;

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  width: 280px;
  height: 420px;
`