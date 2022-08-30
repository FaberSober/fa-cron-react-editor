import { useState } from 'react';
import logo from './logo.svg';
import { MyButton } from 'fa-cron-react-editor';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <MyButton onClick={() => setCount((count) => count + 1)}>Click here!</MyButton>
        </div>
    );
}

export default App;
