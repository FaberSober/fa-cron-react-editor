import React, { useState } from 'react'
import CronEditor from './lib/CronEditor';
import './lib/CronEditor.css'
import './App.css'

function App() {
    const [cron, setCron] = useState<string>('* * * * * *');

    return (
        <div className='main'>
            <CronEditor 
              value={cron}
              onChange={setCron}
            />
        </div>
    );
}


export default App;
