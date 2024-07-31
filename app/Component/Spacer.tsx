import { FC } from "react";

type Variants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const sizeClasses: Record<Variants, string> = {
    xs: 'h-2',
    sm: 'h-3',
    md: 'h-6',
    lg: 'h-8',
    xl: 'h-12',
};

type SpacerProps = {
    size?: Variants;  // Default to medium size if not provided
}; 


export const Spacer: FC<SpacerProps> = ({ size = 'md' }) => {
    const sizeClass = sizeClasses[size] || sizeClasses['md'];
    return <div className={sizeClass} />;
};
