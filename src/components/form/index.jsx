import React from "react";
import Input from "../input";
import "./styles.css";

const Form = ({ errors, data, setData, setDidSubmit, setShowRequire, showRequire }) => {
	const checkLengths = input => {
		if (input.name === "name" && input.value.length > 21) return true;
		else if (input.name === "cvc" && input.value.length > 3) return true;
		else if ((input.name === "expM" || input.name === "expY") && input.value.length > 2) return true;
	};

	const updateNumber = input => {
		const original = [...input.value.replaceAll(" ", "")];
		if (original.length > 16) return;
		const positions = [4, 8, 12];
		const modified = [];
		original.forEach((v, i) => {
			modified.push(v);
			if (positions.includes(i + 1) && i !== original.length - 1) modified.push(" ");
		});

		setData({ ...data, number: modified.join("") });
	};

	const handleChange = e => {
		const target = e.target;
		if (checkLengths(target)) return;
		if (target.name === "number") updateNumber(target);
		else setData({ ...data, [target.name]: target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!showRequire && !Object.values(data).every(Boolean)) return setShowRequire(true);
		if (Object.values(errors).some(Boolean)) return;
		setDidSubmit(true);
	};

	return (
		<form className="card__details" onSubmit={handleSubmit}>
			<Input
				name="name"
				label="CARDHOLDER NAME"
				errors={errors}
				onChange={handleChange}
				placeholder="e.g. Jane Appleseed"
				data={data}
			/>
			<Input
				name="number"
				label="CARD NUMBER"
				errors={errors}
				onChange={handleChange}
				placeholder="e.g. 1234 5678 9123 0000"
				data={data}
			/>
			<Input
				name="expiry"
				label="EXP. DATE (MM/YY)"
				errors={errors}
				onChange={handleChange}
				data={data}
			/>
			<Input
				name="cvc"
				label="CVC"
				errors={errors}
				onChange={handleChange}
				placeholder="e.g. 123"
				data={data}
			/>
			<button className="cta">Confirm</button>
		</form>
	);
};

export default Form;
