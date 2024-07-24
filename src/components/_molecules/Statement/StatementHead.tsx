import MoneyIcon from '../../../assets/money-icon.svg'
import ExpensesIcon from '../../../assets/expanses-icon.svg'
import EarningsIcon from '../../../assets/earnings-icon.svg'


export function StatementHead() {
    const simulateApiData = {
        transactions: [
            {
                description: 'Spotify',
                id: '#1371827',
                type: 'Shopping',
                card: '1423 3423',
                date: '26 Jan, 12.30 AM',
                amount: 2500
            },
            {
                description: 'Freepik Sales',
                id: '#1371828',
                type: 'Transfer',
                card: '1423 3423',
                date: '24 Jan, 10.40 AM',
                amount: 750
            }
        ],
        balance: 10,
        expenses: 30,
        earnings: 32
    }

    const accounting = [
        {
            label: 'Money',
            icon: MoneyIcon,
            amount: simulateApiData.balance
        },
        {
            label: 'Expenses',
            icon: ExpensesIcon,
            amount: simulateApiData.expenses
        },
        {
            label: 'Earnings',
            icon: EarningsIcon,
            amount: simulateApiData.earnings
        }
    ]

    return (
        <section className='flex gap-6 overscroll-none rounded-2xl sm:overflow-scroll sm:overflow-scroll sm:w-11/12 md:overflow-hidden'>

            {accounting.map(data =>
                <div key={data.label} className='bg-bgwhite gap-3 p-4 rounded-2xl w-full min-w-52'>

                    <div className='flex items-center gap-4'>
                        <img src={data.icon} />

                        <div className='flex flex-col'>
                            <span>{data.label}</span>
                            <span className='font-semibold text-txtpurple text-xl'>${data.amount}</span>
                        </div>
                    </div>

                </div>)
            }

        </section>
    )
}