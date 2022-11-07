import { useCallback, useEffect, useState } from "react";
import validationSchema from "./validationSchema";

const useValidation = (data, handleSubmit) => {
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	const onSubmit = e => {
		e.preventDefault();
		setTouched(true);
		setSubmitting(true);
	};

	const reset = useCallback(() => {
		setTouched(false);
		setSubmitting(false);
		setErrors({});
	}, []);

	const checkForError = useCallback(async () => {
		if (!touched) return;
		let schema = validationSchema;
		if (typeof validationSchema === "function") {
			schema = validationSchema();
		}
		try {
			await schema.validate(data, { abortEarly: false });
			setErrors({});
			submitting && handleSubmit();
		} catch (err) {
			setSubmitting(false);
			const errors = {};
			err.inner.forEach(error => (errors[error.path] = error.message));
			setErrors(errors);
		}
		//eslint-disable-next-line
	}, [data, touched, submitting]);

	useEffect(() => {
		checkForError();
	}, [checkForError]);
	return { errors, onSubmit, reset };
};

export default useValidation;
