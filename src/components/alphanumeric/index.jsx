import "./styles.css";

const AlphaNumeric = ({ length, value, defaultValue = "0000", chars = [] }) => {
	const _value = (value || "") + defaultValue.slice(value?.length);
	const isActive = (ind, _ind) => {
		if (chars.indexOf(_value[ind]?.toUpperCase()) === -1 && _ind === 0) return true;
		return chars.indexOf(_value[ind]?.toUpperCase()) === _ind;
	};

	const className = (ind, i) =>
		isActive(ind, i) && i === 0 ? "active error" : isActive(ind, i) ? "active" : "";

	return (
		<div className="alphanumeric">
			{Array(length)
				.fill(0)
				.map((_, ind) => {
					return (
						<ul key={ind}>
							{chars.map((char, i) => (
								<li key={i} className={className(ind, i)}>
									{char}
								</li>
							))}
						</ul>
					);
				})}
		</div>
	);
};

export default AlphaNumeric;
