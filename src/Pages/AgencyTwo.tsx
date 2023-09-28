import Container from '../components/Container';

export default function AgencyTwo() {
    return (
        <div className='min-h-screen bg-[#03000A] text-white overflow-hidden'>
            <header className='mb-20'>
                <Container className='flex justify-between py-6'>
                    <div className='flex gap-4'>
                        LOGO
                        <nav>
                            <ul className='flex gap-7'>
                                <li>
                                    <a href=''>Product</a>
                                </li>
                                <li>
                                    <a href=''>Use cases</a>
                                </li>
                                <li>
                                    <a href=''>Developers</a>
                                </li>
                                <li>
                                    <a href=''>Customers</a>
                                </li>
                                <li>
                                    <a href=''>Company</a>
                                </li>
                                <li>
                                    <a href=''>Pricing</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <button>Contact Us</button>
                </Container>
            </header>
            <main>
                <Container>
                    <section className='grid grid-cols-2 gap-16 h-[620px]'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h2 className='text-8xl font-medium mb-4'>Igniting Your Product's Potential</h2>
                                <p className='text-xl text-white/80 mb-7 text-balance'>
                                    AgencyTwo, we are a team of passionate creatives who thrive on crafting unique and
                                    impactful brand experiences.
                                </p>
                                <div className='flex gap-4'>
                                    <button className='py-4 px-12 bg-white text-[#0A0B1E] font-medium text-xl rounded-2xl'>
                                        See Pricing
                                    </button>
                                    <button className='py-4 px-12 bg-white/10 text-white font-medium text-xl rounded-2xl'>
                                        View Project
                                    </button>
                                </div>
                            </div>
                            <div>
                                <ul className='flex justify-between items-center'>
                                    <li>Wikipedia</li>
                                    <li>Traveloka</li>
                                    <li>Sony</li>
                                    <li>AmeriCorps</li>
                                </ul>
                            </div>
                        </div>
                        <div className='relative w-full before:absolute before:-top-12 before:-right-36 before:w-[900px] before:h-[791px] before:rounded-full before:bg-[linear-gradient(66deg,#7C00FF_0%,#FF6700_52.00%,_#FFD400_100%)] before:opacity-50 before:blur-[225px]'>
                            <div className='w-[300px] h-[185px] rounded-3xl bg-[linear-gradient(202deg,rgba(255,255,255,0.10)0%,rgba(255,255,255,0.04)100%)] backdrop-blur p-4 absolute z-10 -top-8 left-0 overflow-hidden border border-gray-500/50'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='90'
                                    height='90'
                                    viewBox='0 0 90 90'
                                    fill='none'
                                    className='absolute top-0 right-0'>
                                    <path
                                        d='M90 -90C66.1305 -90 43.2387 -80.5179 26.3604 -63.6396C9.48212 -46.7613 2.08674e-06 -23.8695 0 -7.62939e-06C-2.08674e-06 23.8695 9.48211 46.7613 26.3604 63.6396C43.2387 80.5179 66.1305 90 90 90L90 28.8C82.3618 28.8 75.0364 25.7657 69.6353 20.3647C64.2343 14.9636 61.2 7.63823 61.2 0C61.2 -7.63824 64.2343 -14.9636 69.6353 -20.3647C75.0364 -25.7657 82.3618 -28.8 90 -28.8V-90Z'
                                        fill='#8EA0FF'
                                    />
                                </svg>
                                <div>
                                    <h3>UI/UX Design</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className='w-[300px] h-[185px] rounded-3xl bg-[linear-gradient(202deg,rgba(255,255,255,0.10)0%,rgba(255,255,255,0.04)100%)] backdrop-blur p-4 absolute z-10 top-20 -right-14 overflow-hidden border border-gray-500/50'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='90'
                                    height='90'
                                    viewBox='0 0 90 90'
                                    className='absolute top-0 right-0'
                                    fill='none'>
                                    <rect y='-90' width='180' height='180' rx='90' fill='#FDD329' />
                                    <path
                                        d='M88.7465 66.96C96.3698 66.96 100.874 61.4068 100.874 53.0769C100.874 38.8468 92.2117 31.2111 91.1721 3.09785C115.082 18.0222 117.161 29.1286 129.289 36.4172C132.407 38.1526 134.833 38.8468 137.605 38.8468C141.763 38.8468 145.228 36.7643 147.654 32.9465C148.693 31.2111 149.04 29.1286 149.04 27.0462C149.04 22.8812 146.268 18.7163 141.417 15.9397C128.942 8.99815 117.507 12.4689 92.9047 -0.37291C117.507 -13.9089 128.942 -10.4382 141.417 -17.3797C146.268 -20.5034 149.04 -24.3212 149.04 -28.8332C149.04 -30.5686 148.693 -32.6511 147.654 -34.7335C145.228 -38.5514 141.763 -40.6338 137.605 -40.6338C134.833 -40.6338 132.407 -39.9397 129.289 -38.2043C117.161 -30.9157 115.082 -18.768 91.1721 -4.19077C91.8652 -32.304 100.874 -40.2868 100.874 -54.864C100.874 -63.1938 96.3698 -68.4 88.7465 -68.4C81.4698 -68.4 76.9651 -63.1938 76.9651 -54.864C76.9651 -40.2868 86.6675 -32.6511 87.3605 -4.19077C62.7581 -19.1151 60.679 -30.9157 48.2045 -38.2043C45.4324 -39.9397 43.0068 -40.6338 40.2347 -40.6338C36.0766 -40.6338 32.6114 -38.5514 30.1859 -34.7335C29.1463 -32.6511 28.7998 -30.5686 28.7998 -28.8332C28.7998 -24.3212 31.5719 -20.5034 36.4231 -17.3797C48.8976 -10.4382 59.6395 -13.9089 84.9349 -0.37291C60.3325 12.816 48.551 8.99815 36.4231 15.9397C31.5719 18.7163 28.7998 22.8812 28.7998 27.0462C28.7998 29.1286 29.1463 31.2111 30.1859 32.9465C32.6114 36.7643 36.0766 38.8468 40.2347 38.8468C43.0068 38.8468 45.4324 38.1526 48.2045 36.4172C60.679 29.1286 62.7581 18.3692 87.014 3.09785C85.9744 31.5582 76.9651 38.4997 76.9651 53.0769C76.9651 61.4068 81.4698 66.96 88.7465 66.96Z'
                                        fill='black'
                                    />
                                </svg>
                                <div>
                                    <h3>UI/UX Design</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className='w-[300px] h-[185px] rounded-3xl bg-[linear-gradient(202deg,rgba(255,255,255,0.10)0%,rgba(255,255,255,0.04)100%)] backdrop-blur p-4 absolute z-10 top-56 left-4 overflow-hidden border border-gray-500/50'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='90'
                                    height='90'
                                    viewBox='0 0 90 90'
                                    fill='none'
                                    className='absolute top-0 right-0'>
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M70 -70C70 -81.0457 78.9543 -90 90 -90C101.046 -90 110 -81.0457 110 -70V-48.7208L125.137 -63.8579C132.948 -71.6684 145.611 -71.6684 153.421 -63.8579C161.232 -56.0474 161.232 -43.3841 153.421 -35.5736L137.848 -20H160C171.046 -20 180 -11.0457 180 0C180 11.0457 171.046 20 160 20H138.284L153.421 35.1371C161.232 42.9476 161.232 55.6109 153.421 63.4214C145.611 71.2319 132.948 71.2319 125.137 63.4214L110 48.2843V70C110 81.0457 101.046 90 90 90C78.9543 90 70 81.0457 70 70V47.8477L54.4264 63.4213C46.6159 71.2318 33.9526 71.2318 26.1421 63.4213C18.3316 55.6108 18.3316 42.9475 26.1421 35.1371L41.2792 20H20C8.95431 20 0 11.0457 0 7.62939e-06C0 -11.0457 8.9543 -20 20 -20H41.7157L26.1421 -35.5736C18.3316 -43.384 18.3316 -56.0473 26.1421 -63.8578C33.9526 -71.6683 46.6159 -71.6683 54.4264 -63.8578L70 -48.2842V-70Z'
                                        fill='#AD279E'
                                    />
                                </svg>
                                <div>
                                    <h3>UI/UX Design</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className='w-[300px] h-[185px] rounded-3xl bg-[linear-gradient(202deg,rgba(255,255,255,0.10)0%,rgba(255,255,255,0.04)100%)] backdrop-blur p-4 absolute z-10 bottom-0 right-0 overflow-hidden border border-gray-500/50'>
                                <div className='flex absolute top-0 -right-12'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='90'
                                        height='90'
                                        viewBox='0 0 90 90'
                                        fill='none'>
                                        <path
                                            d='M0 -90C23.8695 -90 46.7613 -80.5179 63.6396 -63.6396C80.5179 -46.7613 90 -23.8695 90 -7.62939e-06C90 23.8695 80.5179 46.7613 63.6396 63.6396C46.7614 80.5179 23.8695 90 1.52588e-05 90L0 0V-90Z'
                                            fill='#C23776'
                                        />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='90'
                                        height='90'
                                        viewBox='0 0 90 90'
                                        fill='none'>
                                        <path
                                            d='M0 -90C23.8695 -90 46.7613 -80.5179 63.6396 -63.6396C80.5179 -46.7613 90 -23.8695 90 -7.62939e-06C90 23.8695 80.5179 46.7613 63.6396 63.6396C46.7614 80.5179 23.8695 90 1.52588e-05 90L0 0V-90Z'
                                            fill='#C23776'
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3>UI/UX Design</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </div>
    );
}
