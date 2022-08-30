import { useState } from 'react';
import logo from './logo.svg';
import { MyButton } from 'my-lib';
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
