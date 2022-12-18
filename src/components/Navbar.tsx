import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = '100%';

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: '50px' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: '#28282B' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            KODIGO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button>
              <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                HOME
              </Link>
            </Button>
            <Button>
              <Link
                to="/frontend"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                FRONTEND
              </Link>
            </Button>
            <Button>
              <Link
                to="/backend"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                BACKEND
              </Link>
            </Button>
            <Button>
              <Link
                to="/tech"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                TECH
              </Link>
            </Button>
            <Button>
              <Link
                to="/blog"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                BLOG
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              textAlign: 'center',
              bgcolor: '#28282B',
              height: '100vh',
            }}
          >
            <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
              KODIGO
            </Typography>
            <Divider />
            <List>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>HOME</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link
                to="/frontend"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>FRONTEND</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>{' '}
              <Link
                to="/backend"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>BACKEND</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link
                to="/tech"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>TECH</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link
                to="/blog"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>BLOG</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
