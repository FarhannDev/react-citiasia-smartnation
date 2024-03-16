import { Button } from 'react-bootstrap';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useTheme } from '../../../hooks/useTheme';

const ToggleColorMode = () => {
  const { theme, toggleTheme } = useTheme();

  const lightMode = (
    <>
      <Button
        onClick={toggleTheme}
        title={theme}
        type="button"
        variant="outline-none"
        className="btn border-0"
      >
        <HiOutlineSun fontSize={26} color="5d5d5d" />
      </Button>
    </>
  );

  const darkMode = (
    <>
      <Button
        onClick={toggleTheme}
        title={theme}
        type="button"
        variant="outline-none"
        className="btn border-0"
      >
        <HiOutlineMoon fontSize={26} color="fff" />
      </Button>
    </>
  );

  return theme === 'dark' ? darkMode : lightMode;
};

export default ToggleColorMode;
