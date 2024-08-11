import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

    const loggedIn: User = {
        firstName: "Ali",
        $id: '',
        email: 'contact@ali.com',
        userId: '',
        dwollaCustomerUrl: '',
        dwollaCustomerId: '',
        lastName: '',
        address1: '',
        city: '',
        state: '',
        postalCode: '',
        dateOfBirth: '',
        ssn: ''
    }

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    subtext="Access and manage your account and transactions efficiently"
                    user={loggedIn.firstName || "Guest"}
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>

            RECENT TRANSACTIONS
        </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 155.50}]}
        />
    </section>
  )
}

export default Home