import React, { useContext, createContext, useState } from 'react';

export const AuthContext = createContext();

// context consumption imported by consumption component
export function useAuthContext() {
	return useContext(AuthContext);
}

// context provider (wraps context consumers)
export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [authState, setAuthState] = useState(false);
	return (
		<AuthContext.Provider value={{ user, setUser, authState, setAuthState }}>
			{children}
		</AuthContext.Provider>
	);
}