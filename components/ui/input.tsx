"use client";
import { cn, Input as InputUi } from '@nextui-org/react';
import React from 'react';
interface InputProps {
    type?: string;
    label?: string;
    placeholder?: string;
    labelPlacement?: "outside" | "outside-left";
    startContent?: React.ReactNode;
    className?: string;
    props?: any;
    children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
    type,
    label,
    placeholder,
    labelPlacement = "outside",
    startContent,
    className,
    children,
    ...props
}) => {
    return (
        <InputUi
            type={type}
            label={label}
            placeholder={placeholder}
            labelPlacement={labelPlacement}
            startContent={startContent}
            className={cn(className)}
            {...props}
        />
    )
}

export default Input