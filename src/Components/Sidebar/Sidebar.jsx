import React from 'react';
import './Sidebar.css';
import LogoNordfx from '../../Assets/Logos/logo_nordfx.png';
import { Link } from "react-router-dom";
import { userSidebarData } from './SidebarData/SidebarData.jsx';

export default function Sidebar({ children }) {

    return (
        <div>
            <div className='sidebar-container'>
                <div className='d-flex align-items-center justify-content-center py-0 py-lg-5'>
                    <img className='logo' src={LogoNordfx} alt='logo' />
                </div>
                <div className='pt-3 sidebar-item-container d-flex justify-content-center'>
                    <div>
                        {
                            userSidebarData?.map((sidebar, index) => {
                                return (
                                    <div key={index} className={`sidebar-item d-flex align-items-center justify-content-left ${index == 0 ? 'active' : ''}`}>
                                        <div>{sidebar.icon}</div>
                                        <Link className='pl-3 py-1' to={sidebar.path}>{sidebar.title}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}
