import React from 'react';
import AsideProduit from '../components/AsideProduit';
// import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
    // const navigate = useNavigate();

    return (
        <div className=" h-screen bg-bodyBacgound w-full pt-[20px]">
            <div className='flex justify-between max-w-[1270px] m-auto'>
                <AsideProduit/>
                <div className='relative'>
                    <img src="/publicite1.png" alt="publicite1" className='max-w-[725px] m-auto'/>
                    <div className='absolute top-[138px] right-[20px]'>
                        <div className='pb-[10px] m-auto text-center'>
                            <span className='font-bold text-[35px] text-white uppercase'>Up to 80% Off</span>
                        </div> 
                        <div className='bg-[#FFE401] w-[285px] h-[28px] text-center mb-[40px] m-auto rounded-sm'>
                            <span className='text-[12px]'>Brands at never seen before 2025</span>
                        </div>
                        <div className='border border-white rounded-2xl text-center w-[101px] m-auto p-1'>
                            <span className='text-white text-[12px] uppercase'>shop now</span>
                        </div>
                    </div>
                </div>
                <AsideProduit/>
            </div> 
        </div>
    );
};

export default HomePage;