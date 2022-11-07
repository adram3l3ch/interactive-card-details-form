import * as Yup from "yup";

Yup.addMethod(Yup.string, "minMax", function () {
	return this.test("minMax", function (value) {
		const { createError, path } = this;
		const currentYear = new Date().getFullYear().toString().substring(2);
		if (!+value || +value > +currentYear + 10) return createError({ path, message: "Invalid Year" });
		if (+value < +currentYear) return createError({ path, message: "Expired Card" });
		return true;
	});
});

export default Yup.object().shape({
	name: Yup.string()
		.max(20, "Max length reached")
		.matches(/^[a-zA-Z\s]+$/, "Invalid Name")
		.required("Name is required"),
	number: Yup.string()
		.length(19, "Invalid card number")
		.matches(/^[\d\s]+$/, "Invalid card number")
		.required("Card number is required"),
	expM: Yup.string()
		.matches(/^(0[1-9])|(1[12])$/, "Invalid Month")
		.required("Expiry date is required"),
	expY: Yup.string().minMax([12, 15]).required("Expiry date is required"),
	cvc: Yup.string().length(3, "CVC is invalid").required("CVC is required"),
});
