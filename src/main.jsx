import { createRoot } from 'react-dom/client'
import './index.css'
import Component from './Component.jsx'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Component />,
);
