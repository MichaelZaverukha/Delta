import React, {useState} from 'react'
import { ImCross } from 'react-icons/im'
import { CgMenu } from 'react-icons/cg'
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from '../../data/NavbarData';

export default function Navbar() {
   const [show, setShow] = useState(false);

   let navigate = useNavigate();
   let location = useLocation();

   const handleClick = () => {
      setShow(!show)
   };

   const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};


   const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};
  return (
    <IconContext.Provider value={{color:"fff"}}>
      <Nav>
         <NavbarContainer>
            <NavLogo to ='/'>
               <NavIcon src = './assets/logo (3).png' alt = 'logo'/>
                Delta
            </NavLogo>
            <MobileIcon onClick={handleClick}>
						{show ? <ImCross /> : <CgMenu />}
				</MobileIcon>
            <NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
         </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}
