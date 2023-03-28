import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../App.sass';
import logo from '../images/logo.png';
import profile from '../images/profile.png';

function Menu() {
	return (
		<div className="Menu">
			<Box sx={{ flexGrow: 1, m: -1 }}>
      			<AppBar position="static" sx={{ color: "black" }} color="transparent" elevation={0}>
        			<Toolbar>
        				<img alt="logo" src={logo} />
          				<Button>О нас</Button>
          				<Button>Акции</Button>
          				<Button>Поиск</Button>
          				<Button>Регистрация на рейс</Button>
          				<img alt="profile" src={profile} />
        			</Toolbar>
      			</AppBar>
    		</Box>
		</div>
	);
}

export default Menu;