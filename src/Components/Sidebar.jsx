import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import logo from '../assets/Svgs/Logo.svg'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


import {
    IoMap,
    IoMapOutline,
    IoNotificationsOutline,
    IoNotificationsSharp,
    IoPeople,
    IoPeopleOutline,
    IoPerson,
    IoPersonOutline,
    IoSettingsSharp,
    IoTime,
    IoTimeOutline
} from "react-icons/io5";

import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';



//  new icons :
import { TbMovie } from "react-icons/tb";
import { MdLocalMovies } from "react-icons/md";
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";
import { BiTrendingUp } from "react-icons/bi";
import { FaCalendarDays } from 'react-icons/fa6';
const useStyles = makeStyles({
    container: {

        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        gap:'100px',
        alignItems: 'center',
        paddingTop: '40px',
        borderRight: '1px solid #000',
        height: '100vh',
        backgroundColor: '#000',
        boxShadow: '2px 0px 90px 0px rgba(97, 0, 194, 0.40)',


    },
    navigation_center: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    }

})


function Sidebar() {

    const [Selected, setSelected] = useState(0)


    const navigation = [
        {
            name: 'home',
            icon: <TbMovie size={'24px'} color='#FFF' />,
            selectedIcon: <MdLocalMovies size={'24px'}
                color='#FFF' />,
            path: '/home'
        },
        {
            name: 'Favourites',
            icon: <TiHeartOutline size={'24px'} color='#FFF' />,
            selectedIcon: <TiHeartFullOutline size={'24px'}
                color='#FFF' />,
            path: '/home/Favor'
        },
        {
            name: 'Trending',
            icon: <BiTrendingUp size={'24px'} color='#FFF' />,
            selectedIcon: <BiTrendingUp size={'24px'}
                color='#FFFfff' />,
            path: 'home/trending'
        },
        {
            name: 'Coming soon',
            icon: <FaCalendarDays size={'24px'} color='#FFF' />,
            selectedIcon: <FaCalendarDays size={'24px'}
                color='#FFF' />,
            path: '/Dashboard/Soon'
        },
        //  {
        //     name: 'Coming soon',
        //     icon: <IoNotificationsOutline size={'24px'} />,
        //     selectedIcon: <IoNotificationsSharp size={'24px'}
        //         color='#00414A' />,
        //     path: '/Dashboard/Soon'
        // }, {
        //     name: 'paramètre',
        //     icon: <IoSettingsOutline size={'24px'} />,
        //     selectedIcon: <IoSettingsSharp size={'24px'}
        //         color='#00414A' />,
        //     path: '/Dashboard/paramètre'
        // }, {
        //     name: 'deconnexion',
        //     icon: <FiLogOut size={'24px'} color='#FF001F' />,
        //     path: '/Dashboard/LogOut'
        // },


    ]


    const classes = useStyles();
    return (
        <div className={
            classes.container
        }>
            <img src={logo}
                alt="logo" />


            <div className="navigation_center">
                <List sx={
                    {
                        width: '100%',
                        maxWidth: 500
                    }
                }>
                    {
                        navigation.slice(0, 6).map((item, index) => (

                            <Link style={{
                                textDecoration: 'none',
                                color: Selected === index ? '#fff' : '#cccccc',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                            }}
                                key={index} to={
                                    item.path
                                }><ListItem button

                                    sx={
                                        {
                                            width: '250px',
                                            margin: '10px 0',

                                        }
                                    }
                                    onClick={
                                        () => setSelected(index)
                                    }>


                                    <ListItemIcon style={{ width: '30px' }} > {
                                        Selected === index ? item.selectedIcon : item.icon
                                    } </ListItemIcon>
                                    <ListItemText sx={
                                        {
                                            fontSize: '16px',
                                            fontWeight: 'bold'
                                        }
                                    }
                                        primary={
                                            item.name
                                        } />
                                </ListItem>
                            </Link>
                        ))
                    } </List>
            </div>

           


        </div>
    )
}

export default Sidebar
