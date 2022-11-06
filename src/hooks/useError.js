import { useCallback, useDeferredValue, useEffect, useState } from "react";

const useError = (data, showRequire) => {
	const deferredData = useDeferredValue(data);
	const [errors, setErrors] = useState({});
	const setError = (name, error) => setErrors(errors => ({ ...errors, [name]: error }));

	const checkForError = useCallback(() => {
		if (deferredData.cvc?.match(/\D/) || (deferredData.cvc && deferredData.cvc?.length !== 3))
			setError("cvc", "Invalid CVC");
		else setError("cvc", "");
		if (deferredData.name?.match(/[^a-zA-Z\s]/)) setError("name", "Invalid Name");
		else if (deferredData.name?.length > 20) setError("name", "Too long");
		else setError("name", "");
		if (deferredData.number?.match(/[^\d\s]/)) setError("number", "Wrong format, numbers only");
		else if (deferredData.number && deferredData.number?.length !== 19)
			setError("number", "Invalid card number");
		else setError("number", "");
		if (deferredData.expM?.match(/\D/) || +deferredData.expM > 12 || deferredData.expM === "00")
			setError("expM", "Invalid Month");
		else if (deferredData.expM && (deferredData.expM + "").length !== 2)
			setError("expM", "Invalid format");
		else setError("expM", "");
		if (deferredData.expY && deferredData.expY < +`${new Date().getFullYear()}`.slice(2))
			setError("expY", "Expired Card");
		else if (deferredData.expY && (deferredData.expY + "").length !== 2)
			setError("expM", "Invalid format");
		else if (
			deferredData.expY?.match(/\D/) ||
			deferredData.expY > +`${new Date().getFullYear()}`.slice(2) + 10
		)
			setError("expY", "Invalid Year");
		else setError("expY", "");
		if (showRequire) {
			Object.keys(data).forEach(item => {
				if (!data[item]) setError(item, "Cant be empty");
			});
		}
	}, [data, showRequire, deferredData]);

	useEffect(() => {
		checkForError();
	}, [checkForError]);
	return { errors };
};

export default useError;
