/* @refresh reload */
import '@repo/styles/globals.css';
import '@repo/styles/theme.css';

import { render } from 'solid-js/web';

import App from './App';

const root = document.getElementById('root');

render(() => <App />, root);
