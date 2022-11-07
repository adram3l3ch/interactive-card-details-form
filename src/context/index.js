import { createContext, useState } from "react";
import useValidation from "../hooks/useValidation";

export const AppContext = createContext();

const defaultValues = {
	name: "",
	number: "",
	expM: "",
	expY: "",
	cvc: "",
};

export const AppContextProvider = ({ children }) => {
	const [data, setData] = useState(defaultValues);
	const [didSubmit, setDidSubmit] = useState(false);
	const handleSubmit = () => setDidSubmit(true);
	const { errors, onSubmit, reset: resetValidation } = useValidation(data, handleSubmit);
	const reset = () => {
		setData(defaultValues);
		setDidSubmit(false);
		resetValidation();
	};
	const value = { data, setData, didSubmit, onSubmit, errors, reset };
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
