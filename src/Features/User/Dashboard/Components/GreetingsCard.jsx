import React from 'react';
import './GreetingsCard.css';
import ChartScreen from '../../../../Assets/Images/chart-screen.png';

export default function GreetingsCard() {
  return (
    <div className='p-2'>
      <div className='greetings-card-container row m-0'>
        <div className='px-2 px-md-5 py-3 col-md-6'>
          <p className='greetings-msg m-0'>
            Hello, Good Morning!
          </p>
          <p className='m-0 greetings-description break-line-3'>
            You have some very important Message and Notifications
            from the Bankmania. Please check it out Here.
          </p>
        </div>
        <div className='greetings-bg d-flex justify-content-end align-items-center col-md-6'>
          <div className='pr-lg-5 pl-md-5'>
            <p className='m-0 title-line-1 pl-md-5'>
              Profitable
            </p>
            <p className='m-0 title-line-2 pl-md-5'>
              Savings For Loan
            </p>
          </div>
          <div className='pl-lg-5 pr-lg-4'>
            <img className='pl-lg-3' src={ChartScreen} alt="chart screen" />
          </div>
        </div>
      </div>
    </div>
  )
}
