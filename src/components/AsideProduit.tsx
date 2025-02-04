import React, { useState } from 'react';
import { products } from "./mock/Products";
import StarRating from "./layouts/StarRating";

interface AsideProduitProps {
    title?: string
    showOnlySaleItems?: boolean
    maxItems?: number
  }

const AsideProduit: React.FC<AsideProduitProps> = ({
    
    title = "Prix en Solde",
    showOnlySaleItems = true,
    maxItems = 4,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const filteredProducts = products.filter((product) => !showOnlySaleItems || product.onSale)

    const handleNext = () => {
        if (currentIndex + maxItems < filteredProducts.length) {
            setCurrentIndex(currentIndex + maxItems);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - maxItems);
        }
    };

    const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + maxItems);
    
    return(
        <aside className="bg-white w-[259px] h-[472px] font-raleway shadow-sm">
            <div className="flex justify-between items-center bg-secondaryColor text-black font-semibold h-[50px] px-4">
                <h2>{title}</h2>
                <div className="flex gap-1">
                    <button
                    onClick={handlePrev}
                    className="flex justify-center items-center w-[28px] h-[28px] rounded-[50%] bg-white cursor-pointer"
                    disabled={currentIndex === 0}
                    >
                        <img src="/Icon-preview.svg" alt="" />
                    </button>
                    <button 
                    onClick={handleNext}
                    className="flex justify-center items-center w-[28px] h-[28px] rounded-[50%] bg-white cursor-pointer"
                    disabled={currentIndex + maxItems >= filteredProducts.length}
                    >
                        <img src="/icon-next.svg" alt="" />
                    </button>
                </div>
            </div>
            <div>
                {visibleProducts.map((product) => (
                    <div key={product.id} className="flex items-center w-full h-[105.5px] border-b border-grayBacground cursor-pointer">
                        <div>
                            <img 
                            src={product.image} 
                            alt={product.name}
                            className="max-w-[84.5px] max-h-[84.5px]"
                            />
                        </div>
                        <div>
                            <h3 className="text-primaryColor text-[14px] font-semibold">{product.name}</h3>
                            <div className="py-[8px]">
                                <StarRating rating={product.rating} />
                            </div>
                            <div>
                                {product.oldPrice && (
                                    <span className="text-gray-400 line-through text-[13px] font-normal pr-1">
                                        ${product.oldPrice.toFixed(2)}
                                    </span>
                                )}
                                <span className="text-black text-[13px] font-medium">
                                    ${product.currentPrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
export default AsideProduit;