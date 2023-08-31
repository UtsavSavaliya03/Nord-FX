import React from 'react';
import './Header.css';
import Avatar from 'react-avatar';
import ProfilePicture from '../../../../Assets/Images/Profile.jpg';
import NotVerifiedIcon from '../../../../Assets/Vectors/NotVerified.png';
import NotificationIcon from '../../../../Assets/Vectors/Notification.png';
import MessageIcon from '../../../../Assets/Vectors/Message.png';
import LogoNordfx from '../../../../Assets/Logos/logo_nordfx.png';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header py-3 pr-5 px-lg-5'>
        <div className='d-flex align-items-center logo-container'>
          <img className='logo' src={LogoNordfx} alt='logo' />
        </div>
        <div className='pl-lg-5 pl-4'>
          <button className='btn-blue btn-bg'>IB Dashboard</button>
        </div>
        <div className='d-flex ml-2 ml-md-5 mr-5 mr-md-0'>
          <Avatar size={50} round src={ProfilePicture} alt='profile picture' />
          <div className='ml-3'>
            <div className='user-name'>
              Erik Scholander
            </div>
            <div className='status d-flex align-items-center'>
              <img src={NotVerifiedIcon} alt="Verification Icon" />
              <p className='m-0 text-danger ml-2'>Not Verified</p>
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center ml-2 ml-md-4'>
          <img src={NotificationIcon} alt="Notification Icon" />
          <img className='ml-3' src={MessageIcon} alt="Message Icon" />
        </div>
      </div>
      <div className='main-title-container d-flex justify-content-between align-items-center'>
        <p className='main-title m-0'>DASHBOARD</p>
        <button className='btn-blue btn-sm'>IB Dashboard</button>
      </div>
    </div>
  )
}
