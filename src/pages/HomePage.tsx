import React from 'react';
// import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
    // const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-bodyBacgound">
            <h1 className="text-4xl font-bold mb-3">Bienvenue sur la page d'accueil !</h1>
            <div>
                <a href="/login" className='hover:text-secondaryColor'>Se Conneter a Sombateka</a>
            </div>
        </div>
    );
};

export default HomePage;