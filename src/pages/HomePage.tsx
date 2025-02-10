import React, { useState, useEffect } from 'react';
import AsideProduit from '../components/AsideProduit';
import StarRating from '../components/layouts/StarRating';
import Carousel from '../components/carousel';
import { products } from '../components/mock/Products';
import { partners } from '../components/mock/partners';

const HomePage: React.FC = () => {
    const [marketIndex, setMarketIndex] = useState(0);
    const [productsIndex, setProductsIndex] = useState(0);
    const [partnersIndex, setPartnersIndex] = useState(0);
    const [selectedMarket, setSelectedMarket] = useState<number | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<'Marcher' | 'Autres'>('Marcher');
    const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
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

    const handleAddToCart = (productId: number) => {
        // Logique pour ajouter au panier
        console.log('Produit ajouté au panier:', productId);
    };

    const handleMarketSelect = (marketId: number) => {
        setSelectedMarket(marketId);
    };

    const handlePlatformSelect = (platform: 'Marcher' | 'Autres') => {
        setSelectedPlatform(platform);
        setMarketIndex(0);
    };

    const calculateDiscount = (oldPrice: number, currentPrice: number) => {
        return Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
    };

    const filteredMarkets = Market.filter(market => market.type === selectedPlatform);

    const marketHeaderButtons = [
        {
            label: 'Super-Marcher',
            value: 'Marcher',
            selected: selectedPlatform === 'Marcher',
            onClick: () => handlePlatformSelect('Marcher')
        },
        {
            label: 'Autre Platforme',
            value: 'Autres',
            selected: selectedPlatform === 'Autres',
            onClick: () => handlePlatformSelect('Autres')
        }
    ];

    const renderMarket = (market: typeof Market[0]) => (
        <div 
            onClick={() => handleMarketSelect(market.id)}
            className={`w-[225px] h-[280px] flex flex-col items-center justify-center p-4 cursor-pointer
            ${selectedMarket === market.id ? 'border border-gray-300' : 'border border-transparent'}
            hover:border hover:border-borderColor transition-all duration-200`}
        >
            <img 
                src={market.image} 
                alt={market.name}
                className="w-full h-full object-contain hover:"
            />
        </div>
    );

    const renderProduct = (product: typeof products[0]) => (
        <div
            key={product.id}
            className="relative group flex flex-col items-center w-[244px] h-[317px] hover:border"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
        >
            <div className="relative aspect-square mb-3 w-[221px] h-[221px]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />
            </div>
            {product.oldPrice && (
                <div className="absolute top-2 right-1 w-[60px] h-[26px] bg-secondaryColor px-2 py-1 rounded-tl-[20px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[0px] text-[12px] text-center">
                    -{calculateDiscount(product.oldPrice, product.currentPrice)}%
                </div>
            )}
            <div className="mb-2">
                <StarRating rating={product.rating} />
            </div>
            <div>
                {hoveredProductId === product.id ? (
                    <button
                        onClick={() => handleAddToCart(product.id)}
                        className="w-[175px] h-[35px] bg-primaryColor text-white text-[12px] py-2 px-4 rounded-md hover:bg-primaryColor/90 transition-colors duration-200"
                    >
                        Ajouter au panier
                    </button>
                ) : (
                    <h3 className="text-sm font-medium text-primaryColor">
                        {product.name}
                    </h3>
                )}
            </div>
            <div className="flex items-center gap-2">
                {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                        ${product.oldPrice.toFixed(2)}
                    </span>
                )}
                <span className="font-semibold">
                    ${product.currentPrice.toFixed(2)}
                </span>
            </div>
        </div>
    );

    const renderPartner = (partner: typeof partners[0]) => (
        <div className="flex flex-col items-center justify-center w-[150px] h-[180px] p-4 hover:border hover:border-borderColor transition-all duration-200">
            <div className="w-[133px] h-[170px]">
                <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );

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
                    <div>
                        <AsideProduit/>
                        <div className='mt-[20px]'>
                            <AsideProduit/>
                        </div>
                        <div className='mt-[20px]'>
                            <AsideProduit/>
                        </div>
                    </div>
                    <div>
                        <Carousel
                            items={filteredMarkets}
                            currentIndex={marketIndex}
                            itemsPerPage={4}
                            renderItem={renderMarket}
                            onNext={() => setMarketIndex(prev => prev + 1)}
                            onPrev={() => setMarketIndex(prev => prev - 1)}
                            headerButtons={marketHeaderButtons}
                            containerClassName="flex flex-col"
                            itemsContainerClassName="flex justify-between items-center h-full px-8 bg-white w-[981px] h-[313.3px] border border-[#E4E4E4]"
                         />
                        <div className='flex justify-between w-[981px] h-[244px] bg-white p-[20px] mt-[20px]'>
                            <img src="/publicite2.png" alt="publicite" className='w-[460px] h-[212px]'/>
                            <img src="/publicite3.png" alt="publicite" className='w-[460px] h-[212px]' />
                        </div>
                        <div className='mt-[20px]'>
                            <Carousel
                                items={products}
                                currentIndex={productsIndex}
                                itemsPerPage={8}
                                renderItem={renderProduct}
                                onNext={() => setProductsIndex(prev => prev + 8)}
                                onPrev={() => setProductsIndex(prev => prev - 8)}
                                title="Articles"
                                containerClassName="flex flex-col justify-center"
                                itemsContainerClassName="flex flex-wrap bg-white w-[981px] h-[650px] border border-[#E4E4E4] pt-1 pl-[2px]"
                            />
                        </div>
                        <div className='mt-[20px] mb-[20px]'>
                            <Carousel
                                items={partners}
                                currentIndex={partnersIndex}
                                itemsPerPage={6}
                                renderItem={renderPartner}
                                onNext={() => setPartnersIndex(prev => prev + 6)}
                                onPrev={() => setPartnersIndex(prev => prev - 6)}
                                title="Nos Partenaires"
                                containerClassName="flex flex-col"
                                itemsContainerClassName="flex flex-wrap bg-white w-[981px] h-[190px] border border-[#E4E4E4] pt-1 justify-between item-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;