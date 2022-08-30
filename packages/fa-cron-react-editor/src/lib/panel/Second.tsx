import React, { useEffect, useState } from 'react'
import type { SlotBase } from '../interface'
import { SlotType } from '../interface'


export default function Second({ value, onChange }: SlotBase) {
    const [type, setType] = useState<SlotType>(SlotType.ALL);

    const [range0, setRange0] = useState<string>('1');
    const [range1, setRange1] = useState<string>('2');

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className='fa-cron-react-editor-flex-row-center'>
                <input type="radio" checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)}/>
                <div>每秒 允许的通配符[, - * /]</div>
            </div>

            <div className='fa-cron-react-editor-flex-row-center'>
                <input type="radio" checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)}/>
                <div className='fa-cron-react-editor-flex-row-center'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                </div>
            </div>
        </div>
    )
};
