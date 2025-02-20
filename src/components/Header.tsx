import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { Category } from '../types/categorieType';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const { totalItems, totalPrice } = useCart();
    const { user, logout } = useAuth();

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

    const isActivePath = (path: string) => {
        return currentPath === path ? 'bg-secondaryColor' : '';
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };
        
    return (
        <header className="bg-grayBacground font-raleway w-full h-[179px] relative">
            <div className='border-b border-borderColor'>
                <div className="flex justify-between max-w-[1270px] m-auto h-[40px]">
                    <div className="flex space-x-4">
                        <img src="/facebook.svg" alt="icon de facebook" width="10" height='9' />
                        <img src="/twitter.svg" alt="icon de twitter" width="15" height='15' />
                        <img src="/linkedln.svg" alt="icon de linkedln" width="15" height='15' />
                        <img src="/wifi.svg" alt="icon de wifi" width="15" height='15' />
                        <img src="/youtube.svg" alt="icon de youtube" width="15" height='15' />
                    </div>
                    <div className="flex items-center space-x-0 text-grayCustom text-sm">
                        <div className="flex items-center space-x-2 border-r-2 border-borderColor cursor-pointer  px-4 h-[20px]">
                            <span className='hover:text-secondaryColor'>$ USD</span>
                            <img src="/arrowDown.svg" alt="icone derouler" width="10" height='10' />
                        </div>
                        <div className="flex items-center space-x-2 border-r-2 border-borderColor cursor-pointer px-4 h-[20px]">
                            <span className='hover:text-secondaryColor'>Francais</span>
                            <img src="/arrowDown.svg" alt="icone derouler" width="10" height='10' />
                        </div>
                        <div className="flex items-center space-x-2 pl-4 h-[20px] cursor-pointer">
                            {/* <img src="/profil.svg" alt="icon de gestion de compte" /> */}
                            {user ? (
                            <div className="flex items-center space-x-2">
                            <img 
                                src={user.image} 
                                alt={user.fullName}
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="hover:text-secondaryColor">{user.fullName}</span>
                            <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-secondaryColor">
                                Déconnexion
                            </button>
                        </div>
                        ) : (
                            <Link to="/login">
                                <span className='hover:text-secondaryColor'>Connexion</span>
                            </Link>
                        )}
                            <img src="/arrowDown.svg" alt="icone derouler" width="10" height='10' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black flex justify-between max-w-[1270px] mx-auto py-6">
                <Link to="/" className='w-[20%]'>
                    <img src="/logosombateka.png" alt="logo de sombateka" className='w-[240px]'/>
                </Link>
               <SearchBar categories={categories} onSearch={handleSearch} />
               <Link to="/panier" className='flex justify-center items-center bg-white w-[10%]'>
                    <div className='relative'>
                        <img src="/panier-header.svg" alt="" />
                        <div className='flex justify-center items-center absolute top-0 right-0 bg-secondaryColor rounded-full text-[11px] w-4 h-4'>
                            {totalItems}
                        </div>
                    </div>
                    <span className='text-xs'>(${totalPrice.toFixed(2)})</span>
               </Link>
            </div>
            <div className='bg-bodyBacgound h-[25px] absolute bottom-0 left-0 w-full'></div>
            <div className='relative z-10'>
                <div className='flex items-center bg-primaryColor max-w-[1270px] mx-auto text-white font-bold h-[50px] text-[17.4px]'>
                    <Link to='/' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor ${isActivePath('/')}`}>
                        <img src="/icon_home.svg" alt="icone home" />
                    </Link>
                    {/* <Link to='/Accuiel' className={`flex items-center flex-1 h-[50px] hover:bg-secondaryColor ${isActivePath('/Accuiel')}`}>
                        <span>Accuiel</span>
                    </Link> */}
                    <Link to='/Favoris' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor transition duration-200 ${isActivePath('/Favoris')}`}>
                        <span>Favoris</span>
                    </Link>
                    <Link to='/Promotions' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor transition duration-200 ${isActivePath('/Promotions')}`}>
                        <span>Promotions</span>
                    </Link>
                    <Link to='/commandes' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor transition duration-200 ${isActivePath('/commandes')}`}>
                        <span>Commandes</span>
                    </Link>
                    <Link to='/Vendre' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor transition duration-200 ${isActivePath('/Vendre')}`}>
                        <span>Vendre</span>
                    </Link>
                    <Link to='/Aides & Support' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor transition duration-200 ${isActivePath('/Aides & Support')}`}>
                        <span>Aides & Support</span>
                    </Link>
                    <Link to='/Blog & Conseils' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor transition duration-200 ${isActivePath('/Blog & Conseils')}`}>
                        <span>Blog & Conseils</span>
                    </Link>
                    <Link to='/A propos de nous' className={`flex items-center px-[2%] h-[50px] hover:bg-secondaryColor transition duration-200 ${isActivePath('/A propos de nous')}`}>
                        <span>A propos de nous</span>
                    </Link>
                    <Link to='/' className='flex items-center h-[50px] px-[2%]'>
                        <div className='relative'>
                            <div className='flex justify-center items-center absolute top-0 right-0 bg-secondaryColor border-b-2 border-l-2 border-b-primaryColor border-l-primaryColor rounded-full text-[11px] w-3 h-3'></div>
                            <img src="/notification.svg" alt="icon de notification"/>
                        </div>   
                    </Link>
                </div>
            </div>

        </header>
    );
};

export default Header;