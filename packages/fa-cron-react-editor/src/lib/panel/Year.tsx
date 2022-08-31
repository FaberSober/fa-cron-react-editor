import React, { useEffect, useState } from 'react'
import { Checkbox } from '../components'
import { genArray } from '../utils/utils'
import type { PanelBase } from '../interface'
import { SlotType } from '../interface'


export default function Year({ visible, value, onChange }: PanelBase) {
    const [type, setType] = useState<SlotType>(SlotType.ALL);

    const [range0, setRange0] = useState<string>('2022');
    const [range1, setRange1] = useState<string>('2023');

    useEffect(() => {
        let newValue = '';
        if (type === SlotType.ALL) {
            newValue = '*';
        } else if (type === SlotType.NO_SPEC) {
            newValue = '';
        } else if (type === SlotType.RANGE) {
            newValue = `${range0}-${range1}`;
        }
        
        if (newValue !== value) {
            onChange(newValue)
        }
    }, [type, range0, range1])

    return (
        <div style={{ display: visible ? 'block' : 'none' }}>
            <div className='fa-cron-react-editor-panel-item'>
                <input id='year1' type="radio" checked={type === SlotType.NO_SPEC} onChange={(e) => setType(SlotType.NO_SPEC)}/>
                <label htmlFor='year1' className='fa-cron-react-editor-panel-label'>不指定 允许的通配符[, - * /]</label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='yearNoSpec' type="radio" checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)}/>
                <label htmlFor='yearNoSpec' className='fa-cron-react-editor-panel-label'>每年</label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='year2' type="radio" checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)}/>
                <label htmlFor='year2' className='fa-cron-react-editor-panel-label'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                </label>
            </div>
        </div>
    )
};
