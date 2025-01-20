import React from 'react';
import { ThemeProvider } from './container/Context/Theme/Context';

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    return <>
        <ThemeProvider>
            <>{children}</>
        </ThemeProvider></>;
};

export default ProtectedRoute;
