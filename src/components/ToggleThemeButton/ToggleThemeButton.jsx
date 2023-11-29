import React from 'react';
import { ThemeButtonContainer, ThemeButton } from './ToggleThemeButton.styled';

const ToggleThemeButton = ({ handleThemeChange, theme }) => {

  return (
    <ThemeButtonContainer>
      <ThemeButton
        type="checkbox"
        onChange={handleThemeChange}
        checked={theme}
      />
    </ThemeButtonContainer>
  );
};

export default ToggleThemeButton;
