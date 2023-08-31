import React from 'react';
import './FundInfoCard.css';
import Bar from '../../../../Assets/Vectors/BarBlack.png';

export default function FundInfoCard(props) {

    const fundsInfo = props.fundsInfo;
    const index = props.index;

    return (
        <div className={`col-md-6 p-0 m-0 pb-3 ${index % 2 == 0 ? 'pr-md-2' : 'pl-md-2'}`}>
            <div className='fund-info-card-container p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0 title'>
                        {fundsInfo?.title}
                    </p>
                    <div className='rounded-bg' style={{ backgroundColor: `${fundsInfo?.color}` }}>
                        {fundsInfo?.icon}
                    </div>
                </div>
                <div className='value'>
                    $ {fundsInfo?.value}
                </div>
                <div className='text-right mr-2 mb-1 bar-icon'>
                    <img src={Bar} alt="Bar Icon" />
                </div>
            </div>
        </div>
    )
}