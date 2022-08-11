import { logo } from "../../assets";
import AlphaNumeric from "../alphanumeric";
import { alphabets, numbers } from "../../chars";
import "./styles.css";

const Front = ({ data }) => {
	const { name, number, expM, expY } = data;

	const getNumber = () => {
		const sections = number.split(" ");
		const remaining = new Array(4 - sections.length).fill(0);
		return [...sections, ...remaining].map((item, i) => (
			<AlphaNumeric length={4} value={item} chars={numbers} key={i} />
		));
	};

	const getName = () => {
		let names = name.split(" ");
		if (!names.join("")) names = ["Jane", "Appleseed"];
		const firstName = names[0];
		const middleName = names[1];
		const lastName = names[2];
		return (
			<>
				<AlphaNumeric
					length={firstName?.length}
					value={firstName}
					defaultValue={firstName}
					chars={alphabets}
				/>
				<AlphaNumeric
					length={middleName ? middleName?.length : 0}
					value={middleName}
					defaultValue={middleName}
					chars={alphabets}
				/>
				<AlphaNumeric
					length={lastName ? lastName?.length : 0}
					value={lastName}
					defaultValue={lastName}
					chars={alphabets}
				/>
			</>
		);
	};

	const getDate = () => (
		<>
			<AlphaNumeric length={2} value={expM} defaultValue="00" chars={numbers} />
			/
			<AlphaNumeric length={2} value={expY} defaultValue="00" chars={numbers} />
		</>
	);

	return (
		<div className="card-front card">
			<img src={logo} alt="logo" className="card__logo" />
			<div className="card__number">{getNumber()}</div>
			<div className="card__footer">
				<div className="card__holderName">{getName()}</div>
				<div className="card__expiry">{getDate()}</div>
			</div>
		</div>
	);
};

export default Front;
