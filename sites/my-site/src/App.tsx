import { useState } from 'react';
import logo from './logo.svg';
import { CronEditor } from 'fa-cron-react-editor';
import 'fa-cron-react-editor/dist/index.css'
import './App.css';

function App() {
    const [cron, setCron] = useState<string>('* * * * * ?');

    return (
        <div>
            <div className='main'>
                <CronEditor 
                    value={cron}
                    onChange={setCron}
                />
            </div>

            <div className='main'>cron: {cron}</div>
        </div>
    );
}

export default App;
