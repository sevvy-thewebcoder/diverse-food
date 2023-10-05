import "@styles/App.css"
import Navbar from "@header/Navbar"
import { Wrapper } from "@components/PresetComposables"
import SiteLogo from "@components/SiteLogo";
import { IconButton } from "@mui/material";
import { DisabledByDefaultRounded, Window } from "@mui/icons-material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Header () {

  const ref = useRef( null )
  
  const [ headerHeight, setHeaderHeight ] = useState( 0 )
  const [ headerBG, setHeaderBG ] = useState( false )
  const [ menuActive, setMenuActive ] = useState( false )

  function toggle () {
    setMenuActive( prev => !prev )
    if (window.scrollY < 80) {
      setHeaderBG(true)
    }
  }

  function closeNavMenu () {
    setMenuActive((prev) => !prev)
  }

  

  useLayoutEffect( () => {

    setHeaderHeight(ref.current.offsetHeight)

  }, [])

  useEffect( () => {

    function onScrollChangeBG () {
      if (window.scrollY >= 80) {
        setHeaderBG(true)
      } else if (menuActive && window.scrollY < 80) {
        setHeaderBG(true)
      } else if (!menuActive && window.scrollY < 80) {
        setHeaderBG(false)
      } else {
        setHeaderBG(false)
      }
    }
    
    window.addEventListener( 'scroll', onScrollChangeBG )

    return () => {

      window.removeEventListener("scroll", onScrollChangeBG)

    }

  }, [menuActive])

  
  console.log(headerBG)
  console.log(headerHeight)

  const styles = {
    top: (menuActive ? (headerHeight - 1) : ("-100dvh") ),
    height: `calc(100dvh - ${headerHeight}px)`
  }

  return (
    <>
      <header ref={ref} className={`header ${headerBG && "header__bg"}`}>
        <Wrapper className={"header__wrapper"}>
          <SiteLogo />
          <Navbar className={ "navbar" } />
          <IconButton onClick={toggle}>
            {menuActive ? ( <DisabledByDefaultRounded /> ) : ( <Window /> )}
          </IconButton>
        </Wrapper>  
      </header>
      <section onClick={closeNavMenu} style={styles} className="navMenu__slider">
        <Wrapper className={"navMenu__slider_wrapper"}>
          <Navbar className={"navBar__active"} />
        </Wrapper>
      </section>
    </>
  )
}
