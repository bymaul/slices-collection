import { Link } from 'react-router-dom';
import Container from './components/Container';
import slices from './data/slices';

export default function App() {
    return (
        <main className='min-h-screen flex justify-center items-center bg-gray-900'>
            <Container className='space-y-12'>
                <div className='text-center space-y-3'>
                    <h1 className='text-4xl font-semibold text-white text-center'>Slices Collection</h1>
                    <p className='text-white/80'>Some landing page design collection from my friend, and I slice it.</p>
                </div>
                <div className='flex justify-start items-center'>
                    <div className='bg-red-500 w-4 h-4 rounded border border-red-400'></div>
                    <span className='ml-2 text-sm text-white/80'>Work in progress</span>
                    <div className='ml-4 bg-gray-800 w-4 h-4 rounded border border-gray-700'></div>
                    <span className='ml-2 text-sm text-white/80'>Done</span>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {slices.map((slice, i) => (
                        <div key={i}>
                            <Link
                                to={slice.url}
                                className={`block py-3 px-5 ${
                                    slice.status === 'wip'
                                        ? 'bg-red-500 hover:bg-red-400'
                                        : 'bg-gray-800 hover:bg-gray-700'
                                } rounded-md shadow-md transition duration-300`}>
                                <h2 className='text-lg font-medium text-white'>{slice.name}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    );
}
