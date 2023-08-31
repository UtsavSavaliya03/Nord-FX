import React from 'react';
import './AccountStatisticsCard.css';
import LineChart from '../../../../Components/Common/LineChart.jsx';

export default function AccountStatisticsCard(props) {

    return (
        <div className='col-md-6 p-0 m-md-0 px-2 py-md-0 py-2'>
            <div className='account-statistics-card-container'>
                <div className='header px-3 py-2'>
                    {props?.title}
                </div>
                <div className='d-flex justify-content-center'>
                <div className='line-chart-container'>
                    <LineChart />
                </div>
                </div>
                <div className='px-2'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">A/c No</th>
                                <th scope="col">Balance</th>
                                <th scope="col">Platform</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2515661</td>
                                <td>$ 500</td>
                                <td>MT4</td>
                            </tr>
                            <tr>
                                <td>5624831</td>
                                <td>$ 150</td>
                                <td>MT5</td>
                            </tr>
                            <tr>
                                <td>6732148</td>
                                <td>$ 367</td>
                                <td>MT4</td>
                            </tr>
                            <tr>
                                <td>5871264</td>
                                <td>$ 823</td>
                                <td>MT5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='text-center pt-4 pb-3'>
                    <button className='btn-blue py-1'>{props?.buttonName}</button>
                </div>
            </div>
        </div>
    )
}
