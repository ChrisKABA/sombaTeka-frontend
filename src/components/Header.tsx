import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../types/categorieType';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
    const categories: Category[] = [
        { id: 1, name: "Electronics", slug: "electronics" },
        { id: 2, name: "Clothing", slug: "clothing" },
        { id: 3, name: "Books", slug: "books" },
        // Add more categories as needed
    ]

    const handleSearch = (query: string, category: string) => {
        console.log("Search:", { query, category })
        // Implement search functionality
    }
        
    return (
        <header className="text-white">
            <div className="flex justify-between p-3 border-b border-grayCustom bg-grayBacground">
                <div className="flex space-x-4">
                    <img src="/facebook.svg" alt="icon de facebook" width="10" height='9' />
                    <img src="/twitter.svg" alt="icon de twitter" width="15" height='15' />
                    <img src="/linkedln.svg" alt="icon de linkedln" width="15" height='15' />
                    <img src="/wifi.svg" alt="icon de wifi" width="15" height='15' />
                    <img src="/youtube.svg" alt="icon de youtube" width="15" height='15' />
                </div>
                <div className="flex space-x-0 text-grayCustom text-sm">
                    <div className="flex items-center space-x-2 border-r border-grayCustom px-4">
                        <span>$ USD</span>
                        <img src="/arrowDown.svg" alt="icone derouler" width="10" height='10' />
                    </div>
                    <div className="flex items-center space-x-2 border-r border-grayCustom px-4">
                        <span>Francais</span>
                        <img src="/arrowDown.svg" alt="icone derouler" width="10" height='10' />
                    </div>
                    <div className="flex items-center space-x-2 pl-4">
                        <img src="/profil.svg" alt="icon de gestion de compte" />
                        <span>Compte</span>
                        <img src="/arrowDown.svg" alt="icone derouler" width="10" height='10' />
                    </div>
                </div>
            </div>
            <div className="text-black flex">
                <Link to="/">
                    <img src="/logosombateka.png" alt="logo de sombateka" className="w-[20%]"/>
                </Link>
               <SearchBar categories={categories} onSearch={handleSearch} />
            </div>
        </header>
    );
};

export default Header;