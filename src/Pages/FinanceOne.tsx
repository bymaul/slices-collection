import Container from '../components/Container';

export default function FinanceOne() {
    return (
        <div className='h-screen overflow-hidden'>
            <header className='py-4 border-b border-slate-200'>
                <Container className='flex md:flex-row flex-col justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-semibold'>FinanceOne</h1>
                    </div>
                    <nav>
                        <ul className='flex justify-center items-center gap-4'>
                            <li className='px-3 py-2 text-slate-800'>Personal</li>
                            <li className='px-3 py-2 text-slate-800'>Business</li>
                            <li className='px-3 py-2 text-slate-800'>Product</li>
                            <li className='px-3 py-2 text-slate-800'>Company</li>
                        </ul>
                    </nav>
                    <div className='flex items-center gap-4'>
                        <button className='px-3 py-2 font-semibold'>Login</button>
                        <button className='px-4 py-1 bg-slate-900 text-white rounded-full font-semibold'>
                            Sign Up
                        </button>
                    </div>
                </Container>
            </header>
            <main className='mt-24'>
                <Container>
                    <section className='flex flex-col items-center justify-center'>
                        <h2 className='text-6xl font-bold text-center'>
                            Discover of FinanceOne, your comprehensive financial solution.
                        </h2>
                        <p className='mt-4 text-center text-xl text-slate-800/80 w-2/3'>
                            With years of expertise and a customer-centric approach, we strive to deliver innovative
                            solutions that simplify and enhance your financial journey.
                        </p>
                        <div className='mt-8 flex items-center gap-x-3'>
                            <button className='py-3 px-12 text-xl bg-slate-900 text-white rounded-full'>
                                Get Started
                            </button>
                            <button className='py-3 px-8 text-xl bg-gray-200 text-slate-800 rounded-full inline-flex items-center gap-x-2'>
                                Contact Sales
                                <svg
                                    width='25'
                                    height='24'
                                    viewBox='0 0 25 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <g id='vuesax/linear/arrow-right'>
                                        <g id='arrow-right'>
                                            <path
                                                id='Vector'
                                                d='M14.9297 5.93005L20.9997 12.0001L14.9297 18.0701'
                                                stroke='black'
                                                stroke-width='1.5'
                                                stroke-miterlimit='10'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            />
                                            <path
                                                id='Vector_2'
                                                d='M4 12H20.83'
                                                stroke='black'
                                                stroke-width='1.5'
                                                stroke-miterlimit='10'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </section>
                </Container>
                <section>
                    <Container>
                        <img src='../../FinanceOne/dashboard.png' alt='Dashboard' />
                    </Container>
                </section>
            </main>
        </div>
    );
}
