import React, { useEffect, useState } from 'react'
import { Checkbox } from '../components'
import { genArray } from '../utils/utils'
import type { PanelBase } from '../interface'
import { SlotType } from '../interface'


export default function Minute({ visible, value, onChange }: PanelBase) {
    const [type, setType] = useState<SlotType>(SlotType.ALL);

    const [range0, setRange0] = useState<string>('1');
    const [range1, setRange1] = useState<string>('2');

    const [step0, setStep0] = useState<string>('0');
    const [step1, setStep1] = useState<string>('1');

    const [arr, setArr] = useState<number[]>([0]);

    useEffect(() => {
        let newValue = '';
        if (type === SlotType.ALL) {
            newValue = '*';
        } else if (type === SlotType.RANGE) {
            newValue = `${range0}-${range1}`;
        } else if (type === SlotType.STEP) {
            newValue = `${step0}/${step1}`;
        } else if (type === SlotType.ITERATOR) {
            newValue = arr.length === 0 ? '?' : arr.join(',');
        }
        
        if (newValue !== value) {
            onChange(newValue)
        }
    }, [type, range0, range1, step0, step1, arr])

    function handleChangeArrChecked(s: number) {
        let newArr = [ ...arr, s ];
        if (arr.indexOf(s) > -1) {
            newArr = arr.filter((i) => i !== s);
        }
        newArr.sort();
        setArr(newArr);
    }

    return (
        <div style={{ display: visible ? 'block' : 'none' }}>
            <div className='fa-cron-react-editor-panel-item'>
                <input id='minute1' type="radio" checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)}/>
                <label htmlFor='minute1' className='fa-cron-react-editor-panel-label'>每分钟 允许的通配符[, - * /]</label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='minute2' type="radio" checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)}/>
                <label htmlFor='minute2' className='fa-cron-react-editor-panel-label'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                    <div>分钟</div>
                </label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='minute3' type="radio" checked={type === SlotType.STEP} onChange={(e) => setType(SlotType.STEP)}/>
                <label htmlFor='minute3' className='fa-cron-react-editor-panel-label'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={step0} onChange={(e) => setStep0(e.target.value)} />
                    <div>分钟开始，每</div>
                    <input className='fa-cron-react-editor-input' value={step1} onChange={(e) => setStep1(e.target.value)} />
                    <div>分钟执行一次</div>
                </label>
            </div>

            <div className='fa-cron-react-editor-panel-item' style={{ alignItems: 'flex-start' }}>
                <input id='minute4' type="radio" checked={type === SlotType.ITERATOR} onChange={(e) => setType(SlotType.ITERATOR)}/>
                <div className='fa-cron-react-editor-panel-label' style={{ alignItems: 'flex-start' }}>
                    <label htmlFor='minute4'>指定</label>
                    <div className='fa-cron-react-editor-panel-checkbox-group'>
                        {genArray(0, 59).map((i) => (
                            <Checkbox key={i} label={i < 10 ? `0${i}` : `${i}`} checked={arr.indexOf(i) > -1} onChange={() => handleChangeArrChecked(i)} style={{ width: 60 }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
