import {createRoot} from 'react-dom/client';
import React from "react";
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "app/providers/ThemeProvider";
import App from "app/App";

import 'shared/config/i18n/i18n';
import {ErrorBoundary} from "app/providers/ErrorBoundary";

const container = document.getElementById('root');
const root = createRoot(container);
root.render (
	<ErrorBoundary>
		<BrowserRouter>
			<ThemeProvider>
				<App/>
			</ThemeProvider>
		</BrowserRouter>
	</ErrorBoundary>

)