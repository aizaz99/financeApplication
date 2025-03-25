import React, { Suspense } from 'react';
import DashboardPage from './page';
import {BarLoader} from 'react-spinners'

const Dashboard = () => {
  return <div>
  
        <h1 className='text-6xl font-bold tracking-tight gradient-title'>Dashboard</h1>
   
  <Suspense fallback={<BarLoader  className="mt-4" width={"100%"} color="#9333ea" />}>
    {/*Dashboard Page*/}
    <DashboardPage/>
    </Suspense>
  </div>;
};

export default Dashboard;