import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: 'John'};

  return (
    <section className='home'>
      <div className='home-content'>
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
        
      </div>
    </section>
  )
}

export default Home