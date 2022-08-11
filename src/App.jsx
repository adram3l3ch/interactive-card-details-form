import { useState } from "react";
import Back from "./components/card/Back";
import Front from "./components/card/Front";
import Form from "./components/form";
import useError from "./hooks/useError";
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
	const [showRequire, setShowRequire] = useState(false);
	const { errors } = useError(data, showRequire);
	const reset = () => {
		setData(defaultValues);
		setDidSubmit(false);
		setShowRequire(false);
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
					<Form
						errors={errors}
						data={data}
						setData={setData}
						setDidSubmit={setDidSubmit}
						setShowRequire={setShowRequire}
						showRequire={showRequire}
					/>
				)}
			</div>
		</main>
	);
}

export default App;
