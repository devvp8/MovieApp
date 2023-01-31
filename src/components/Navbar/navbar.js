import * as React from 'react';
import { useState,useEffect } from 'react';
import './navbar.css';
import {useNavigate} from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { yellow } from '@mui/material/colors';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = {
      width:'100%',
      bottom:0,
      backgroundColor: '#2d313a',
      zIndex:100,
  }

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(0);
  // const navigate= useNavigate();

  // useEffect(() => {
  //   if (value === 0) {
  //     navigate.push("/");
  //   } else if (value === 1) {
  //     navigate.push("/movies");
  //   } else if (value === 2) {
  //     navigate.push("/search");
  //   }
  // }, [value, navigate]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
     
      <BottomNavigation
      value={value}
      style={useStyles}
      onChange={handleChange}>
    
      <BottomNavigationAction
        label="Movie"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction 
        
      label="Trending" 
      icon={<WhatshotIcon />} />
    </BottomNavigation>
  );
}