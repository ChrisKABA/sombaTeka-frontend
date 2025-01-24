import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const { email, password } = formData;
        setIsFormValid(email.trim() !== '' && password.trim() !== '');
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password } = formData;   
        try {
        // Ici vous ajouterez la logique de connexion avec votre API Adonis
        console.log('Login attempt:', { email, password });
        
        // Simulons une connexion réussie
        // Remplacez cette partie par votre véritable logique d'authentification
        if (email && password) {
            // Si la connexion est réussie, redirigez vers la page d'accueil
            navigate('/');
        }
        } catch (error) {
        console.error('Erreur de connexion:', error);
        }
    };

  return (
    <div className='h-screen w-full bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: "url('/bacgroundLogin.png')" }}>
        <div className="w-full py-8 px-8 max-w-[330px] bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-3">
                <img src="/logosombateka.png" alt="logo de sombaTeka" className="h-auto" style={{ width: '185px' }}/>
            </div>
            <div className="text-center mb-5">
                <h1 className="text-xl font-semibold mb-1">Bienvenue !</h1>
                <p className="text-gray-600 text-sm">Connectez-vous maintenant</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="sr-only">
                        Adresse E-mail
                    </label>
                    <InputField 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                        placeholder="Adresse E-mail"
                        onChange={handleChange}
                    //    value={credentials.password}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Mot de passe
                    </label>
                    <InputField 
                        id="password"
                        name="password"
                        type="password" 
                        required
                        className="appearance-none  relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                        placeholder="Mot de passe"
                        onChange={handleChange}
                    //    value={credentials.password}
                    />
                </div>
                <div>
                    <Button
                        type='submit'
                        bg="primaryColor" 
                        textColor="white" 
                        fontFamily="inter" 
                        className={`group relative flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor ${isFormValid ? '' :'opacity-50 cursor-not-allowed'}`}
                        width='100%'
                        disabled={!isFormValid}
                    >
                        Continue
                    </Button>
                    {/* <button
                        type="submit"
                        disabled={isLoading}
                        className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded text-white bg-primaryColor hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor ${'opacity-50 cursor-not-allowed'}`}
                    >
                        {isLoading ? 'Connexion...' : 'Continue'} Continue
                    </button> */}
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-sm">
                        <span className="text-gray-500">Vous n'avez pas de compte ? </span>
                        <a href="/signup" className="font-medium text-primaryColor hover:text-secondaryColor">
                            Signup
                        </a>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-50 text-gray-500">OR</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <img
                            className="h-5 w-5 mr-2"
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google logo"
                            />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Login;