import React, { useState, useContext, useEffect } from 'react';


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
	

	// const fetchDrinks = useCallback(async () => {
	// 	setLoading(true);
	// 	try {
	// 		const response = await fetch(`${url}${keyword}`);
	// 		const data = await response.json();
	// 		const { drinks } = data;
	// 		if (drinks) {
	// 			const newDrinks = drinks.map((item) => {
	// 				const {
	// 					idDrink,
	// 					strDrink,
	// 					strDrinkThumb,
	// 					strAlcoholic,
	// 					strGlass,
	// 					strCategory,
	// 				} = item;
	// 				return {
	// 					id: idDrink,
	// 					name: strDrink,
	// 					img: strDrinkThumb,
	// 					info: strAlcoholic,
	// 					glass: strGlass,
	// 					category: strCategory,
	// 				};
	// 			});
	// 			setCocktails(newDrinks);
	// 			// console.log({drinks});
	// 		} else {
	// 			setCocktails([]);
	// 		}
	// 		setLoading(false);
	// 	} catch (error) {
	// 		console.log(error);
	// 		setLoading(false);
	// 	}
	// }, [keyword]);

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