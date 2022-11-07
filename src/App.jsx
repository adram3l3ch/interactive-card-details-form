import { useState } from "react";
import Back from "./components/card/Back";
import Front from "./components/card/Front";
import Form from "./components/form";
import useValidation from "./hooks/useValidation";
import { tick } from "./assets";

const defaultValues = {
	name: "",
	number: "",
	expM: "",
	expY: "",
	cvc: "",
};

function App() {
	const [data, setData] = useState(defaultValues);
	const [didSubmit, setDidSubmit] = useState(false);
	const handleSubmit = () => setDidSubmit(true);
	const { errors, onSubmit, reset: resetValidation } = useValidation(data, handleSubmit);
	const reset = () => {
		setData(defaultValues);
		setDidSubmit(false);
		resetValidation();
	};
	return (
		<main className="main">
			<div className="left">
				<Front data={data} />
				<Back cvc={data.cvc} />
			</div>
			<div className="right">
				{didSubmit ? (
					<div className="success">
						<img src={tick} alt="success" />
						<h2>THANK YOU!</h2>
						<p>We've added your card details</p>
						<btn className="cta" onClick={reset}>
							Continue
						</btn>
					</div>
				) : (
					<Form errors={errors} data={data} setData={setData} handleSubmit={onSubmit} />
				)}
			</div>
		</main>
	);
}

export default App;
