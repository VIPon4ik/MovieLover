import styled from "styled-components";
import { COLORS } from "constants";

export const ThemeButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
`;
export const ThemeButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0;
  vertical-align: top;
  background: ${COLORS.light_red};
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);

  &::after {
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    content: '';

    display: inline-block;
    position: absolute;
    left: 3px;
    top: 1.5px;

    width: 22px;
    height: 22px;
    background-color: ${COLORS.white};
    border-radius: 50%;

    transform: translateX(0);
  }

  &:checked::after {
    transform: translateX(calc(100% + 3px));
    background-color: ${COLORS.light_red};  
  }

  &:checked {
    background-color: ${COLORS.second_white};
  }
`;