import { useContext } from "react";
import Back from "./components/card/Back";
import Front from "./components/card/Front";
import Form from "./components/form";
import { tick } from "./assets";
import { AppContext } from "./context";

function App() {
	const { data, didSubmit, reset } = useContext(AppContext);
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
					<Form />
				)}
			</div>
		</main>
	);
}

export default App;
