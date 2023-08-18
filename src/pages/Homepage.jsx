import React, { useState, useEffect } from 'react';
import Navbar from '../components/subcomponents/HomeNavbar';
import HeroSection from '../components/subcomponents/HeroSection';
import HomeFooter from '../components/subcomponents/HomeFooter';

const getThemeData = () => {
  const applicableTheme = localStorage.getItem("PageTheme");
  if (applicableTheme) {
    return applicableTheme;
  } else {
    return "light";
  }
};

const Homepage = () => {
  const [theme, setTheme] = useState(getThemeData);

  useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("PageTheme", theme);
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

  
  return (
    <main className={`${theme === 'dark' ? 'bg-slate-950 text-white' : ''}`}>
        <Navbar theme={theme} getThemeData={getThemeData} handleThemeSwitch={handleThemeSwitch}/>
        <hr/>
        <HeroSection theme={theme} getThemeData={getThemeData} handleThemeSwitch={handleThemeSwitch}/>
        <hr/>
        <HomeFooter theme={theme} getThemeData={getThemeData} handleThemeSwitch={handleThemeSwitch}/>
    </main>
  )
}

export default Homepage