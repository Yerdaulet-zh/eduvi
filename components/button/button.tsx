"use client";

type ButtonVariant = 'primary' | 'secondary' | 'highlight' | 'no-style';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none rounded-[10px]';

    // Defined styles for each variant
    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-[#9C4DF4] text-white hover:bg-[#8B3CE3]',
        secondary: 'text-[#9C4DF4] hover:text-[#8c25ff] border-2 border-[#9C4DF4] hover:border-[#8c25ff]',
        highlight: 'bg-[#FF6652] text-white font-semibold hover:bg-[#ff553f] drop-shadow-md',
        'no-style': 'bg-transparent p-0 m-0 border-none text-current hover:opacity-100',
    };

    // Stacking sizes:
    // - 'sm' applies only mobile-first rules (no prefix)
    // - 'md' applies mobile rules, then overrides them at the 'md' breakpoint
    // - 'lg' applies mobile rules, tablet rules, and overrides them at the 'lg' breakpoint
    const sizes: Record<ButtonSize, string> = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base',
        lg: 'px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg',
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};
