import React, { useState, useEffect } from 'react';
import AsideProduit from '../components/AsideProduit';


const HomePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedMarket, setSelectedMarket] = useState<number | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<'Marcher' | 'Autres'>('Marcher');
    const Market = [
            {
                id: 1,
                name: "sombateka",
                image: "/imageMarket/sombateka.png",
                type: 'Marcher'
            },
            {
                id: 2,
                name: "KinMarche",
                image: "/imageMarket/kinMarche.png",
                type: 'Marcher'
            },
            {
                id: 3,
                name: "KinMart",
                image: "/imageMarket/kinMart.png",
                type: 'Marcher'
            },
            {
                id: 4,
                name: "Sk",
                image: "/imageMarket/SK.png",
                type: 'Marcher'
            },
            {
                id: 5,
                name: "logo",
                image: "/logosombateka.png",
                type: 'Autres'
            },
            {
                id: 6,
                name: "GGMart",
                image: "/imageMarket/GGmart.png",
                type: 'Marcher'
            }
        ];

        useEffect(() => {
            if (Market.length > 0) {
                setSelectedMarket(Market[0].id);
            }
        }, []);

        const handleNext = () => {
            if (currentIndex + 4 < Market.length) {
                setCurrentIndex(currentIndex + 1);
            }
        };
    
        const handlePrev = () => {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        };

        const handleMarketSelect = (marketId: number) => {
            setSelectedMarket(marketId);
        };

        const handlePlatformSelect = (platform: 'Marcher' | 'Autres') => {
            setSelectedPlatform(platform);
            setCurrentIndex(0);
        };

        const filteredMarkets = Market.filter(market => market.type === selectedPlatform);
        const visibleMarchers = filteredMarkets.slice(currentIndex, currentIndex + 4);

    return (
        <div className="bg-bodyBacgound w-full pt-[20px]">
            <div className='max-w-[1270px] m-auto'>
                <div className='flex justify-between'>
                    <AsideProduit/>
                    <div className='relative'>
                        <img src="/publicite1.png" alt="publicite1" className='max-w-[725px] m-auto'/>
                        <div className='absolute top-[138px] right-[20px]'>
                            <div className='pb-[10px] m-auto text-center'>
                                <span className='font-bold text-[35px] text-white uppercase'>Up to 80% Off</span>
                            </div> 
                            <div className='bg-[#FFE401] w-[275px] h-[28px] text-center mb-[40px] m-auto rounded-sm'>
                                <span className='text-[12px]'>Brands at never seen before 2025</span>
                            </div>
                            <div className='border border-white rounded-2xl text-center w-[101px] m-auto p-1'>
                                <span className='text-white text-[12px] uppercase'>shop now</span>
                            </div>
                        </div>
                    </div>
                    <AsideProduit/>
                </div>
                <div className='flex pt-[25px] justify-between'>
                    <AsideProduit/>
                    <div>
                        <div className='flex w-full justify-between'>
                            <div className='flex bg-white'>
                                <button
                                onClick={() => handlePlatformSelect('Marcher')}
                                className={`w-[200px] h-[44px] flex justify-center items-center border border-[#E4E4E4] font-medium cursor-pointer
                                    ${selectedPlatform === 'Marcher' ? 'text-primaryColor border-t-2 border-t-primaryColor' : 'text-gray-600 hover:text-primaryColor'}`}
                                >
                                    Super-Marcher
                                </button>
                                <button 
                                onClick={() => handlePlatformSelect('Autres')}
                                className={`w-[200px] h-[44px] flex justify-center items-center border border-[#E4E4E4] font-medium cursor-pointer
                                    ${selectedPlatform === 'Autres' ? 'text-primaryColor border-t-2 border-t-blue-800' : 'text-gray-600 hover:text-primaryColor'}`}
                                >
                                    Autre Platforme
                                </button>
                            </div> 
                            <div className='flex bg-white'>
                                <button
                                onClick={handlePrev} 
                                className={`w-[44px] h-[44px] flex justify-center items-center border border-[#E4E4E4] transition-opacity ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
                                disabled={currentIndex === 0}
                                >
                                    <img src="/Icon-preview.svg" alt="" />
                                </button>
                                <button
                                onClick={handleNext}
                                className={`w-[44px] h-[44px] flex justify-center items-center border border-[#E4E4E4] transition-opacity ${currentIndex + 4 >= Market.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
                                disabled={currentIndex + 4 >= filteredMarkets.length}
                                >
                                    <img src="/icon-next.svg" alt="Suivant" />
                                </button>
                            </div>
                        </div>
                        <div className='bg-white w-[981px] h-[313px] border border-[#E4E4E4]'>
                            <div className='flex justify-between items-center h-full px-8'>
                                    {visibleMarchers.map((market) => (
                                        <div 
                                            key={market.id} 
                                            onClick={() => handleMarketSelect(market.id)}
                                            className={`w-[225px] h-[280px] flex flex-col items-center justify-center p-4 cursor-pointer
                                            ${selectedMarket === market.id ? 'border border-gray-300' : 'border border-transparent'}
                                            hover:border hover:border-borderColor transition-all duration-200 `}
                                        >
                                            <img 
                                                src={market.image} 
                                                alt={market.name}
                                                className='w-full h-full object-contain hover:'
                                            />
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;