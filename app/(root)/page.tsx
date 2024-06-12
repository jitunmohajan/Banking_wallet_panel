import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'John', lastName: 'Doe', email:'john@gmail.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user= {loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transaction efficiently.'
          />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 503.50}]}
      />
    </section>
  )
}

export default Home