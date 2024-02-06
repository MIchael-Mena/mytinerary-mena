import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo';
import { NavItem } from '../../../../models/NavItem';
import UserAccesssModal from '../../../auth/components/user-access-modal';
import { NavigationItems } from '../navigation-items';

interface NavBarProps {
  navItems: NavItem[];
  handleDrawerToggle: () => void;
  minHeight: string;
}

const NavBar = ({ navItems, handleDrawerToggle, minHeight }: NavBarProps) => {
  return (
    <>
      <AppBar component="nav" position="fixed">
        <Toolbar
          sx={{
            display: 'flex',
            minHeight: minHeight,
            justifyContent: {
              sm: 'space-around',
              xs: 'space-between',
            },
            px: { sm: 0, xs: 2 },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Logo isVisibleInXs={false} sizeSm="small" />

          <div>
            <NavigationItems navItems={navItems} />
            <UserAccesssModal />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ minHeight: minHeight }} />
    </>
  );
};

export default NavBar;
