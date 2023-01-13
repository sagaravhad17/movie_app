import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie'
import SearchIcon from '@mui/icons-material/Search'
import TvIcon from '@mui/icons-material/Tv'
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(()=>{
    if(value === 0){
      navigate('/')
    }else if(value === 1){
      navigate('/movies')
    }else if(value === 2){
      navigate('/search')
    }else if(value === 3){
      navigate('/searies')
    }
  },[value,navigate])

  return (
    <Box sx={{ width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    backgroundColor: '#2d313a'
     }}>
      <BottomNavigation
        showLabels
        value={value}
        // style={{backgrounColor: '#2d313a'}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color: '#2d313a'}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: '#2d313a'}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: '#2d313a'}} label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction style={{color: '#2d313a'}} label="Tv Series" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}