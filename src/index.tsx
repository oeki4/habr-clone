import {createRoot} from 'react-dom/client';
import React from "react";
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "app/providers/ThemeProvider";
import App from "app/App";
import './app/styles/index.scss';

import 'shared/config/i18n/i18n';
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import {StoreProvider} from "app/providers/StoreProvider";

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render (
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
					<ThemeProvider>
						<App/>
					</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
)