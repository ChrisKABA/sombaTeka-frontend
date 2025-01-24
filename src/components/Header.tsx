//import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white px-4">
            <div className="flex justify-between ">
                <div className="flex space-x-4">
                    <img src="/facebook.svg" alt="icon de facebook" width="10" height='9' />
                    <img src="/twitter.svg" alt="icon de twitter" width="15" height='15' />
                    <img src="/linkedln.svg" alt="icon de linkedln" width="15" height='15' />
                    <img src="/wifi.svg" alt="icon de wifi" width="15" height='15' />
                    <img src="/youtube.svg" alt="icon de youtube" width="15" height='15' />
                </div>
                <div className="flex space-x-5">
                    <div className="flex items-center">
                        <span>$ USD</span>
                        <img src="/arrowDown.svg" alt="icone derouler" width="12" height='12' />
                    </div>
                    <div className="flex items-center">
                        <span>Francais</span>
                        <img src="/arrowDown.svg" alt="icone derouler" width="12" height='12' />
                    </div>
                    <div className="flex items-center">
                        <img src="/profil.svg" alt="icon de gestion de compte" />
                        <span>Francais</span>
                        <img src="/arrowDown.svg" alt="icone derouler" width="12" height='12' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;