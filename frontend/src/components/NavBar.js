import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import logo from './logos/flaskpy.png';


const  NavBar = () => {

    const history = useHistory();
    const handleItemClick = (e, {name}) =>{
        e.preventDefault();
        if (name === 'Home'){
            history?.push("/");
        }else if(name === 'Dashboard'){
            history?.push("/dashboard");
        }
    }


    return (
            <Menu size="large" stackable borderless fixed='top' >
                <Menu.Item>
                    <a  href='/'>
                    <Image src={logo} width='60px'/>
                    </a>
                </Menu.Item>
                <Menu.Item
                    name='Home'
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Dashboard'
                    onClick={handleItemClick}
                />
            </Menu>
    )
}
export default NavBar;