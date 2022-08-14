import "./styles.css";

const AlphaNumeric = ({ length, value, defaultValue = "0000", chars = [] }) => {
	const _value = (value || "") + defaultValue.slice(value?.length);

	const isActive = (ind, _ind) => {
		if (chars.indexOf(_value[ind]?.toUpperCase()) === -1 && _ind === 0) return true;
		return chars.indexOf(_value[ind]?.toUpperCase()) === _ind;
	};

	return (
		<div className="alphanumeric">
			{Array(length)
				.fill(0)
				.map((_, ind) => chars.map((char, i) => isActive(ind, i) && <div key={i}>{char}</div>))}
		</div>
	);
};

export default AlphaNumeric;
