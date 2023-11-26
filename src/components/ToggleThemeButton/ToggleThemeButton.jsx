import React, { useState } from 'react';
import { ThemeButtonContainer, ThemeButton } from './ToggleThemeButton.styled';

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) ?? false
  );

  const handleThemeChange = () => {
    localStorage.setItem('theme', JSON.stringify(!theme));
    setTheme(!theme);
    window.location.reload();
  };
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
