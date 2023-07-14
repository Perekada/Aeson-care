import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
    const [values, setValues] = useState({
			firstName: '',
			lastName: '',
			gender: '',
			matNo: '',
			condition: '',
			report: '',
		});
        const loader = () =>{
            setLoading(!loading)
        }

	return (
		<AppContext.Provider
			value={{
                loading,
                loader,
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