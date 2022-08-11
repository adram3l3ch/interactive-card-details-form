import React from "react";

const Input = ({ placeholder, label, onChange, name, errors, data }) => {
	if (name === "expiry")
		return (
			<div className="card__details__input">
				<label>{label}</label>
				<div className="expiry">
					<input type="text" name="expM" onChange={onChange} placeholder="MM" value={data.expM} />
					<input type="text" name="expY" onChange={onChange} placeholder="YY" value={data.expY} />
				</div>
				{(errors.expM || errors.expY) && <div className="error">{errors.expM || errors.expY}</div>}
			</div>
		);
	return (
		<div className="card__details__input">
			<label>{label}</label>
			<input type="text" name={name} onChange={onChange} placeholder={placeholder} value={data[name]} />
			{errors[name] && <div className="error">{errors[name]}</div>}
		</div>
	);
};

export default Input;
