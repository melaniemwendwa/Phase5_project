import React, { createContext, useState, useContext,useEffect } from 'react';
import api from '../services/api';
const UserContext = createContext(null);

export const useAuth = () => {
    return useContext(UserContext);
};
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        try {
        return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Failed to parse user from localStorage:", error);
            return null;
        }
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);
    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            const data = response.data;
            const userData = {
                id: "mock-user-123",
                email: email,
                token: "mock'-TOKEN-abc-123"
            };
            setUser(userData);
            return { success: true };
        } catch (error) {
            console.error("Login failed:", error);
            const message = error.response?.data?.message || error.message;
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        setUser(null);
    };
    const  value = {
        user,
        isLoggedIn: !!user,
        login,
        logout,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
};




    








