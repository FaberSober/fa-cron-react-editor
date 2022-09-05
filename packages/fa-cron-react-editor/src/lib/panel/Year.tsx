import React, { useEffect, useState } from 'react'
import { Radio } from '../components'
import { getSlotTypeYear } from '../utils/utils'
import type { PanelBase } from '../interface'
import { SlotType } from '../interface'


export default function Year({ visible, value, onChange }: PanelBase) {
    const [innerValue, setInnerValue] = useState<string|undefined>(value);
    const [type, setType] = useState<SlotType>(getSlotTypeYear(value));

    const [range0, setRange0] = useState<string>('2022');
    const [range1, setRange1] = useState<string>('2023');

    useEffect(() => {
        let newValue = undefined;
        if (type === SlotType.ALL) {
            newValue = '*';
        } else if (type === SlotType.NO_SPEC) {
            newValue = undefined;
        } else if (type === SlotType.RANGE) {
            newValue = `${range0}-${range1}`;
        }
        
        if (newValue !== value) {
            setInnerValue(newValue)
            onChange(newValue || '')
        }
    }, [type, range0, range1])

    useEffect(() => {
        if (value === undefined || value === '') {
            setType(SlotType.NO_SPEC)
            return;
        }
        if (value === innerValue) return;

        setInnerValue(value);
        if (value === '*') {
            setType(SlotType.ALL)
        } else if (value === '') {
            setType(SlotType.NO_SPEC)
        } else if (value.indexOf('-') > -1) {
            setType(SlotType.RANGE)
            const ss = value.split('-')
            setRange0(ss[0])
            setRange1(ss[1])
        }
    }, [value])

    return (
        <div style={{ display: visible ? 'block' : 'none' }}>
            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='不指定 允许的通配符[, - * /]' checked={type === SlotType.NO_SPEC} onChange={(e) => setType(SlotType.NO_SPEC)} />
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='每年' checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)} />
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='周期从' checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)} />
                <div className='fa-cron-react-editor-panel-label'>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                </div>
            </div>
        </div>
    )
};
