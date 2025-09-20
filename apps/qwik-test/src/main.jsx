import '@repo/styles/globals.css';
import '@repo/styles/theme.css';

import '@builder.io/qwik/qwikloader.js';

import { render } from '@builder.io/qwik';
import { App } from './app.jsx';
import './index.css';

render(document.getElementById('app'), <App />);
