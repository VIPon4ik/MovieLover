import styled from 'styled-components';

export const MovieTitle = styled.h2`
  color: ${({ theme }) => theme.light_red};
  text-align: center;
  font-size: 16px;
  margin: 10px;
  text-decoration: none;
`;


export const MovieListItem = styled.li`
  background-color: ${({ theme }) => theme.second_black};
  border-radius: 8px;

  &:hover ${MovieTitle},
  &:focus ${MovieTitle} {
    color: ${({ theme }) => theme.dark_red};
  }
`;

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 280px;
  height: 420px;
`