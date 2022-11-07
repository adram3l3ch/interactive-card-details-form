import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { AppContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</ErrorBoundary>
	</React.StrictMode>
);
