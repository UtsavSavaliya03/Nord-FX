import React from 'react';
import './Dashboard.css';
import Header from './Components/Header.jsx';
import GreetingsCard from './Components/GreetingsCard.jsx';
import AccountStatisticsCard from './Components/AccountStatisticsCard.jsx';
import CoinImg from '../../../Assets/Vectors/Coin.png';
import BarIcon from '../../../Assets/Vectors/Bar.png';
import FundInfoCard from './Components/FundInfoCard';
import { FundsData } from '../../../Constant/FundsData.jsx';
import LineChart from '../../../Components/Common/LineChart';
import BarChart from '../../../Components/Common/BarChart';
import PieChart from '../../../Components/Common/PieChart';
import EarningData from '../../../Constant/EarningData.json';
import TradeZonData from '../../../Constant/TradeZonData.json';

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Header />
      <GreetingsCard />
      <div className='pt-1 row m-0'>
        {/* --- Balance Details --- */}
        <div className='col-lg-6 col-md-12 p-0 pl-2'>
          <div className='balance-info-card d-flex justify-content-between px-4'>
            <div className='d-flex align-items-center'>
              <div className='pt-4'>
                <img src={CoinImg} alt="coin" height={100} />
              </div>
              <div className='pl-5'>
                <p className='m-0 balance-title'>My Balance</p>
                <p className='m-0 mt-2 balance-value'>$ 5025.00</p>
              </div>
            </div>
            <div className='pt-3'>
              <img src={BarIcon} className='bar-icon' alt="Bar Icon" />
            </div>
          </div>
          <div className='row m-0 pt-3'>
            {
              FundsData?.map((item, index) => (
                <FundInfoCard key={index} fundsInfo={item} index={index} />
              ))
            }
          </div>
        </div>
        {/* --- Account Details --- */}
        <div className='col-lg-6 col-md-12 p-0'>
          <div className='row m-0 p-0'>
            <AccountStatisticsCard title={'Live Account'} buttonName={'Open Live Account'} />
            <AccountStatisticsCard title={'Demo Account'} buttonName={'Open Demo Account'} />
          </div>
        </div>
      </div>
      <div className='row px-2 m-0 pt-3 pt-md-0'>
        <div className='pr-md-2 pr-0 pl-0 col-md-8 m-0 col-12 pb-3 pb-md-0'>
          <div className='earnings-container p-3'>
            <div className='d-flex justify-content-between'>
              <p className='chart-title pl-2'>My Earning - Last 7 Day</p>
              <div>
                <div className='d-flex align-items-center'>
                  <div className='profit-mark'></div>
                  <p className='m-0 p-0 pl-2'>Profit</p>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='loss-mark'></div>
                  <p className='m-0 p-0 pl-2'>Loss</p>
                </div>
              </div>
            </div>
            <BarChart data={EarningData} />
          </div>
        </div>
        <div className='pl-md-2 pl-0 pr-0 col-md-4 m-0 col-12'>
          <div className='portfolio-container p-3'>
            <div className='d-flex justify-content-between'>
              <p className='portfollio-title pl-2'>My Portfolio</p>
              <div>
                <div className='d-flex align-items-center'>
                  <div className='deposite-mark'></div>
                  <p className='m-0 p-0 pl-2'>Deposite</p>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='withdrow-mark'></div>
                  <p className='m-0 p-0 pl-2'>Withdrow</p>
                </div>
              </div>
            </div>
            <div className='pie-chart-container d-flex justify-content-center pt-5'>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
      <div className='row px-2 pb-5 pt-3 m-0'>
        <div className='pr-1 pl-0 col-12 m-0'>
          <div className='earnings-container p-3'>
            <div className='d-flex justify-content-between'>
              <p className='chart-title pl-2'>My Trade Zone - Last 10  Day</p>
              <div className='d-flex'>
                <div className='d-flex align-items-center pr-3'>
                  <div className='profit-mark'></div>
                  <p className='m-0 p-0 pl-2'>Profit</p>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='loss-mark'></div>
                  <p className='m-0 p-0 pl-2'>Loss</p>
                </div>
              </div>
            </div>
            <BarChart data={TradeZonData} />
          </div>
        </div>
      </div>
    </div>
  )
}