import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionTable from './TransactionTable'
import { Pagination } from './Pagination'


const RecentTransaction = ({ 
    accounts, 
    transactions=[], 
    appwriteItemId, 
    page=1 
}: RecentTransactionsProps) => {

  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);
  const indexOfLastTransaction = page * rowsPerPage;  
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <section className='recent-transactions'>
        <header className='flex items-center justify-between'>
            <h2 className='recent-transaction-label'>Recent transaction</h2>
            <Link href={`/transaction-history/?id=${appwriteItemId}`}>
                View All
            </Link>
        </header>

        <Tabs defaultValue={appwriteItemId} className="w-full">
            <TabsList className='recent-transactions-tablist'>
                {
                    accounts.map(account => (
                        <TabsTrigger key={account.id} value={account.appwriteItemId}>
                            <BankTabItem
                                key={account.id}
                                account={account}
                                appwriteItemId={appwriteItemId}
                            />
                        </TabsTrigger>
                    ))
                }     
            </TabsList>

            {
                accounts.map(account => (
                    <TabsContent key={account.id} value={account.appwriteItemId} className='space-y-4'>
                       <BankInfo
                            account={account}
                            appwriteItemId={appwriteItemId}
                            type='full'
                       />

                       <TransactionTable transactions={currentTransactions}/>

                        {
                            totalPages > 1 &&
                            <Pagination totalPages={totalPages} page={page} />
                        }
                    </TabsContent>
                ))
            }     
        </Tabs>


        
    </section>
  )
}

export default RecentTransaction