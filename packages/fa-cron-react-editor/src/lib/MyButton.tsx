import React from 'react'

export interface MyButtonProps {
    children?: any;
}

export default function MyButton({ children }: MyButtonProps) {
    return (
        <div>
            {children}
        </div>
    )
};
