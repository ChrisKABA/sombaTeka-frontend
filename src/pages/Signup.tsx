import React, { useState, useEffect } from 'react';
// import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [formData, setFormData] = useState({ email: '', password: '', fullName: '' });
    const [error, setError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { signup } = useAuth();

    useEffect(() => {
        const { email, password } = formData;
        setIsFormValid(email.trim() !== '' && password.trim() !== '');
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password, fullName } = formData;   
        try {
            await signup(email, password, fullName);
            navigate('/');
        } catch (error) {
            setError('Erreur lors de l\'inscription');
            console.error('Erreur d\'inscription:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='h-screen w-full bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: "url('/bacgroundLogin.png')" }}>
            <div className="w-full py-8 px-8 max-w-[330px] bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-3">
                    <div className="flex items-center">
                        <img src="/logosombateka.png" alt="SombaTeka" className="h-auto" style={{ width: '185px' }} />
                    </div>
                </div>
                <h2 className="text-center text-xl font-medium text-gray-900 mb-1">
                    Créer votre compte
                </h2>
                <p className="text-center text-sm text-gray-500 mb-8">
                    Gratuit et ne prend qu'une minute
                </p>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="fullName"
                        required
                        className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                        onChange={handleChange}
                        placeholder="Nom complet"
                        value={formData.fullName}
                        />
                </div>

                    <div>
                        <label className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="appearance-none  relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                            onChange={handleChange}
                            placeholder="Adresse E-mail"
                        />
                    </div>

                    <div>
                        <label className="sr-only">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                className="appearance-none  relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                                onChange={handleChange}
                                placeholder="Mot de passe"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4267B2] hover:bg-[#3b5998] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4267B2] ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
                    >
                        Continue
                    </button>

                    <div className="text-center text-sm">
                        <span className="text-gray-500">Vous avez déjà un compte ? </span>
                        <a href="/login" className="font-medium text-[#4267B2] hover:text-[#3b5998]">
                            Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;