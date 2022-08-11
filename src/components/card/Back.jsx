import React from "react";
import { alphanumerics } from "../../chars";
import AlphaNumeric from "../alphanumeric";

const Back = ({ cvc }) => {
	return (
		<div className="card card-back">
			<div className="cvv">
				<AlphaNumeric length={3} value={cvc} defaultValue="000" chars={alphanumerics} />
			</div>
		</div>
	);
};

export default Back;
