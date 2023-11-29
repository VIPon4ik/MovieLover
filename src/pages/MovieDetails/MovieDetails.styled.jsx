import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImageContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  grid-template-rows: 450 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr;
  }
`

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  width: 300px;
  height: 450px;

  background-color: ${({ theme }) => theme.black};
`

export const RatingText = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const MovieLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MovieLink = styled(Link)`
  color: #fff;
  background-color: ${({ theme }) => theme.light_red};
  max-width: 100px;
  height: 100%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.dark_red};
  }
`