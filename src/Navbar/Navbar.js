import { useState } from 'react';
import './Navbar.css';
import navLogo from '../assests/images/favicon.jpg';

const Navbar = () => {

    const getNavBarItems = ()=>{ 
        let navBarItems =
        [
            {
                id:1,
                item:'Home'
            },
            {
                id:2,
                item:'Services'
            },
            {
                id:3,
                item:'Address'
            },
            {
                id:4,
                item:'Contact Us'
            },
            {
                id:5,
                item:'Bookings'
            },
        ]

        return navBarItems;
}
    // eslint-disable-next-line
    const [navItems,setNavItems] = useState(getNavBarItems());

    function scrollToElement(btnName){
        if(btnName === 'Services' && document.getElementById('serviceCardComponent')){
            document.getElementById('serviceCardComponent').scrollIntoView({behavior: 'smooth'})
        }
    }

    const [selectLiItem,setSelectLiItem] = useState(1);
    function handleSelectLiItem(id){
        setSelectLiItem(id);
    }

    window.addEventListener("scroll", function(){
        if(window.scrollY===0){
          setSelectLiItem(1);
        } 
      });

    return(
        <div className='topNavBar'>
            <img src={navLogo} alt="" className='navBarLogo'/>
            <ul>
                {
                    navItems.map(item =>(
                        <li key={item.id} className={selectLiItem === item.id ? 'selectLiClass' : ''}
                        onClick={
                                ()=>{
                                    scrollToElement(item.item)
                                    handleSelectLiItem(item.id)
                                }
                            }
                        >
                            {item.item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Navbar;