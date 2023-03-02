import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from "react-router-dom"
import 'antd/dist/reset.css';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
