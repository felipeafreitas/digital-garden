import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "~/utils/contexts/theme"
import IconButton from "../Base/IconButton"
import { Box, Menu, Link } from "./styles";

export default function Header() {
  const [theme, toggleTheme] = useTheme();

  const menuItems = [
    'about',
    'work',
    'project',
    'contact'
  ]

  return (
    <header style={{display: 'flex', width: '100%', maxWidth: 1100}}>
      <Box>
        <Menu>
          {menuItems.map((item) => <Link href={`#${item}`} key={item}>{item}</Link>)}
        </Menu>
        <IconButton 
          onClick={toggleTheme} 
          icon={theme === '' 
            ? <SunIcon />
            : <MoonIcon />
          } 
        />
      </Box>
    </header>
  )
}