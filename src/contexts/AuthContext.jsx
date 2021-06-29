import React, { useContext, createContext, useReducer } from 'react';
import { Auth } from 'aws-amplify';

export const AuthContext = createContext();

// context consumption imported by consumption component
export function useAuthContext() {
	return useContext(AuthContext);
}

const reducer = async (state, action) => {
	switch (action.type) {
		case "SIGNIN":
			await Auth.signIn(action.username, action.password);
			let user = await Auth.currentAuthenticatedUser();
			return { user, authState: "signedIn" };
		case "SIGNOUT":
			return [...state, { ...action.newNote }];
		// case "SIGNUP":
		// 	return state.filter(note => note.noteId !== action.noteId);
		case "CONFIRM":
			return state.map(note =>
				note.noteId === action.noteId ? { ...note, content: action.formContent } : note
			);
		case "TOGGLE":
			return state.map(note =>
				note.noteId === action.noteId ? { ...note, completed: !note.completed } : note
			);
		default:
			return state;
	}
};

// context provider (wraps context consumers)
export function AuthContextProvider({ children }) {
	const [user, userDispatch] = useReducer(reducer);
	// const signIn = async ({ username, password }) => {
	// 	try {
	// 		console.log(password)
	// 		// dispatch({ type: 'SIGNIN', user: username })
	// 		// console.log(userObject)
	// 	} catch (error) {
	// 		error
	// 	}
	// }

	return (
		<AuthContext.Provider value={{ user, userDispatch }}>
			{children}
		</AuthContext.Provider>
	);
}