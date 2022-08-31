import React, { useEffect, useState } from 'react'
import { Checkbox } from '../components'
import { genArray } from '../utils/utils'
import type { PanelBase } from '../interface'
import { SlotType } from '../interface'


export default function Day({ visible, value, onChange }: PanelBase) {
    const [type, setType] = useState<SlotType>(SlotType.ALL);

    const [range0, setRange0] = useState<string>('1');
    const [range1, setRange1] = useState<string>('2');

    const [dayW, setDayW] = useState<string>('1');

    const [step0, setStep0] = useState<string>('1');
    const [step1, setStep1] = useState<string>('1');

    const [arr, setArr] = useState<number[]>([1]);

    useEffect(() => {
        let newValue = '';
        if (type === SlotType.ALL) {
            newValue = '*';
        } else if (type === SlotType.NO_SPEC) {
            newValue = '?';
        } else if (type === SlotType.RANGE) {
            newValue = `${range0}-${range1}`;
        } else if (type === SlotType.STEP) {
            newValue = `${step0}/${step1}`;
        } else if (type === SlotType.ITERATOR) {
            newValue = arr.length === 0 ? '?' : arr.join(',');
        } else if (type === SlotType.DAY_W) {
            newValue = `${dayW}W`;
        } else if (type === SlotType.DAY_L) {
            newValue = 'L';
        }
        
        if (newValue !== value) {
            onChange(newValue)
        }
    }, [type, range0, range1, step0, step1, arr, dayW])

    function handleChangeArrChecked(s: number) {
        let newArr = [ ...arr, s ];
        if (arr.indexOf(s) > -1) {
            newArr = arr.filter((i) => i !== s);
        }
        newArr.sort((a,b) => a-b);
        setArr(newArr);
    }

    return (
        <div style={{ display: visible ? 'block' : 'none' }}>
            <div className='fa-cron-react-editor-panel-item'>
                <input id='day1' type="radio" checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)}/>
                <label htmlFor='day1' className='fa-cron-react-editor-panel-label'>每日 允许的通配符[, - * /]</label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='dayNoSpec' type="radio" checked={type === SlotType.NO_SPEC} onChange={(e) => setType(SlotType.NO_SPEC)}/>
                <label htmlFor='dayNoSpec' className='fa-cron-react-editor-panel-label'>不指定</label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='day2' type="radio" checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)}/>
                <label htmlFor='day2' className='fa-cron-react-editor-panel-label'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                    <div>日</div>
                </label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='day3' type="radio" checked={type === SlotType.STEP} onChange={(e) => setType(SlotType.STEP)}/>
                <label htmlFor='day3' className='fa-cron-react-editor-panel-label'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={step0} onChange={(e) => setStep0(e.target.value)} />
                    <div>日开始，每</div>
                    <input className='fa-cron-react-editor-input' value={step1} onChange={(e) => setStep1(e.target.value)} />
                    <div>日执行一次</div>
                </label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='dayW' type="radio" checked={type === SlotType.DAY_W} onChange={(e) => setType(SlotType.DAY_W)}/>
                <label htmlFor='dayW' className='fa-cron-react-editor-panel-label'>
                    <div>每月</div>
                    <input className='fa-cron-react-editor-input' value={dayW} onChange={(e) => setDayW(e.target.value)} />
                    <div>号最近的那个工作日</div>
                </label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='dayL' type="radio" checked={type === SlotType.DAY_L} onChange={(e) => setType(SlotType.DAY_L)}/>
                <label htmlFor='dayL' className='fa-cron-react-editor-panel-label'>本月最后一天</label>
            </div>

            <div className='fa-cron-react-editor-panel-item' style={{ alignItems: 'flex-start' }}>
                <input id='day4' type="radio" checked={type === SlotType.ITERATOR} onChange={(e) => setType(SlotType.ITERATOR)}/>
                <div className='fa-cron-react-editor-panel-label' style={{ alignItems: 'flex-start' }}>
                    <label htmlFor='day4'>指定</label>
                    <div className='fa-cron-react-editor-panel-checkbox-group'>
                        {genArray(1, 31).map((i) => (
                            <Checkbox key={i} label={i < 10 ? `0${i}` : `${i}`} checked={arr.indexOf(i) > -1} onChange={() => handleChangeArrChecked(i)} style={{ width: 60 }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
