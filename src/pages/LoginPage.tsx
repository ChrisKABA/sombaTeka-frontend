import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    // const [showPassword, setShowPassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [debugInfo, setDebugInfo] = useState<any>(null);
    const navigate = useNavigate();
    const { login, error, clearError, user } = useAuth();

    useEffect(() => {
        // Rediriger si déjà connecté
        if (user) {
          navigate('/');
        }
      }, [user, navigate])

    useEffect(() => {
        const { email, password } = formData;
        setIsFormValid(email.trim() !== '' && password.trim() !== '');
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        clearError();
        setDebugInfo(null);
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid || isLoading) return;
            setIsLoading(true);
        try {
          const { email, password } = formData;
          await login(email, password);
          navigate('/');
        } catch (error) {
            // setDebugInfo(error.response?.data?.debug || {
            //     message: 'Erreur de connexion',
            //     providedPassword: password,
            //     error: error.message
            // });
          console.error('Erreur de connexion:', error);
        } finally {
          setIsLoading(false);
        }
      };
   
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

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
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
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
                            value={formData.email}
                            className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                            placeholder="Adresse E-mail"
                            onChange={handleChange}
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
                            value={formData.password}
                            className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                            placeholder="Mot de passe"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <CustomButton
                            type='submit'
                            bg="primaryColor" 
                            textColor="white" 
                            fontFamily="inter" 
                            className={`group relative flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor ${isFormValid ? '' :'opacity-50 cursor-not-allowed'}`}
                            width='100%'
                            disabled={!isFormValid || isLoading}
                        >
                            {isLoading ? 'Connexion...' : 'Se connecter'}
                        </CustomButton>
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
                                <span className="px-2 bg-white text-gray-500">OU</span>
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
                                Continuer avec Google
                            </button>
                        </div>
                    </div>
                </form>
                {debugInfo && (
                    <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded text-sm">
                        <h3 className="font-semibold mb-2">Informations de débogage :</h3>
                        <pre className="whitespace-pre-wrap break-words">
                            {JSON.stringify(debugInfo, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;