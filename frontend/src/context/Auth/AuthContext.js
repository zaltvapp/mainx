import React, { createContext } from "react";

import useAuth from "../../hooks/useAuth.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const { loading, user, isAuth, handleLogin, handleImpersonate, handleLogout } = useAuth();

	return (
		<AuthContext.Provider
			value={{ loading, user, isAuth, handleLogin, handleImpersonate, handleLogout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
