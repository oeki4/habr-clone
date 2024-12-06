import {createRoot} from 'react-dom/client';
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router";
import ThemeProvider from "./theme/ThemeProvider";

const container = document.getElementById('root');
const root = createRoot(container);
root.render (
	<BrowserRouter>
		<ThemeProvider>
			<App/>
		</ThemeProvider>
	</BrowserRouter>
)