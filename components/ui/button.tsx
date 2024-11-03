"use client";
import { Button as ButtonUi } from "@nextui-org/react";

interface ButtonProps {
    color?: "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "solid" | "light" | "flat" | "faded" | "shadow";
    className?: string;
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    props?: any;
}

const Button: React.FC<ButtonProps> = ({ children,
    color = "primary",
    variant = "flat",
    className = "",
    size = "sm",
    ...props
}) => {
    return (
        <ButtonUi
            color={color}
            variant={variant}
            className={`${className}`}
            size={size}
            {...props}
        >
            {children}
        </ButtonUi>
    );
}

export default Button;