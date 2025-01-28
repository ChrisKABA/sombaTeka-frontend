import React from 'react';

interface InputFieldProps {
    id: string;
    name: string;
    type?: string; // Défaut sur 'text'
    value?: string | number; // Pour accepter des valeurs numériques si nécessaire
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    type = 'text',
    value,
    onChange,
    placeholder = "",
    required = false,
    className = ""
}) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            required={required}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default InputField;