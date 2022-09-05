import React, { useState } from 'react'
import CronEditor from './lib/CronEditor';
import './lib/CronEditor.css'
import './App.css'

function App() {
    // const [cron, setCron] = useState<string>('3-5 2-7 4-8 * * ?');
    const [cron, setCron] = useState<string>('1,2 3,4,5 10,11 * * ?');

    return (
        <div>
            <div className='main'>
                <CronEditor 
                    value={cron}
                    onChange={(v) => {
                        console.log('onChange', cron, v)
                        setCron(v)
                    }}
                />
            </div>

            <div className='main'>cron: {cron}</div>
        </div>
    );
}


export default App;
