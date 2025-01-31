import React from "react";
import type { Product } from "../types/ProductType";
import StarRating from "./layouts/StarRating";

const AsideProduit: React.FC = () => {

    const products: Product[] = [
        {
            id: 1,
            name: "Latest Touch",
            rating: 3,
            oldPrice: 67.00,
            currentPrice: 34.90,
            image: "/imageProduit/phone.png"
        },
        {
            id: 2,
            name: "Modern Bluetooth",
            rating: 3,
            currentPrice: 111.00,
            image: "/imageProduit/bluetooth.png"
        },
        {
            id: 3,
            name: "LG Double Dor",
            rating: 3,
            oldPrice: 88.00,
            currentPrice: 45.00,
            image: "/imageProduit/fridge.jpg"
        },
        {
            id: 4,
            name: "LED Samsung TV",
            rating: 3,
            currentPrice: 101.00,
            image: "/imageProduit/tv.jpg"
        }
    ];
    
    return(
        <aside className="bg-white w-[259px] h-[473px] font-raleway shadow-sm">
            <div className="flex justify-between items-center bg-yellow-400 text-black font-semibold h-[50px] px-4">
                <h2>Prix en baisse</h2>
                <div className="flex gap-1">
                    <div className="flex justify-center items-center w-[28px] h-[28px] rounded-[50%] bg-white">
                        <img src="/Icon-preview.svg" alt="" />
                    </div>
                    <div className="flex justify-center items-center w-[28px] h-[28px] rounded-[50%] bg-white">
                        <img src="/icon-next.svg" alt="" />
                    </div>
                </div>
            </div>
            <div>
                {products.map((product) => (
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