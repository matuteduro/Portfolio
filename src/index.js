import App from './App'
import {createRoot} from 'react-dom/client'
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

