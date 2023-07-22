import React, { useState, useContext } from 'react';
import { useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// const [loading, setLoading] = useState(true);
    const [values, setValues] = useState({
			firstName: '',
			lastName: '',
			email: '',
			clinicID: '',
			condition: '',
		});
		const [loggedIn, setLoggedIn] = useState()

		useEffect(()=>{
			if(window.localStorage.getItem('student')){
				setValues(JSON.parse(window.localStorage.getItem('student')));
				setLoggedIn(JSON.parse(window.localStorage.getItem('loggedIn')));
			}

			if(window.localStorage.getItem('student') === null){
				setLoggedIn(false)
				// window.location.reload()
			}
			console.log(window.localStorage.getItem('loggedIn'));
		}, [])

	return (
		<AppContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
                values,
                setValues,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobal = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };