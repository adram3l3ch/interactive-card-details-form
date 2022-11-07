import React, { useContext } from "react";
import { alphanumerics } from "../../chars";
import { AppContext } from "../../context";
import AlphaNumeric from "../alphanumeric";

const Back = () => {
	const {
		data: { cvc },
	} = useContext(AppContext);

	return (
		<div className="card card-back">
			<div className="cvv">
				<AlphaNumeric length={3} value={cvc} defaultValue="000" chars={alphanumerics} />
			</div>
		</div>
	);
};

export default Back;
