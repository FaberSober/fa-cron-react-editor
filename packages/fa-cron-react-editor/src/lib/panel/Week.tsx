import React, { useEffect, useState } from 'react'
import { Checkbox, Radio } from '../components'
import { genArray } from '../utils/utils'
import type { PanelBase } from '../interface'
import { SlotType } from '../interface'


const WEEK_MAP:{[key:number]:string} = {
    1: 'SUN',
    2: 'MON',
    3: 'TUE',
    4: 'WED',
    5: 'THU',
    6: 'FRI',
    7: 'SAT',
}

export default function Week({ visible, value, onChange }: PanelBase) {
    const [type, setType] = useState<SlotType>(SlotType.ALL);

    const [range0, setRange0] = useState<string>('1');
    const [range1, setRange1] = useState<string>('2');

    const [step0, setStep0] = useState<string>('1');
    const [step1, setStep1] = useState<string>('1');

    const [weekL, setWeekL] = useState<string>('1');

    const [arr, setArr] = useState<number[]>([2]);

    useEffect(() => {
        let newValue = '';
        if (type === SlotType.ALL) {
            newValue = '*';
        } else if (type === SlotType.NO_SPEC) {
            newValue = '?';
        } else if (type === SlotType.RANGE) {
            newValue = `${range0}/${range1}`;
        } else if (type === SlotType.STEP) {
            newValue = `${step0}#${step1}`;
        } else if (type === SlotType.ITERATOR) {
            newValue = arr.length === 0 ? '?' : arr.join(',');
        } else if (type === SlotType.WEEK_L) {
            newValue = `${weekL}L`;
        }
        
        if (newValue !== value) {
            onChange(newValue)
        }
    }, [type, range0, range1, step0, step1, arr, weekL])

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
                <Radio label='每周 允许的通配符[, - * /]' checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)} />
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='不指定' checked={type === SlotType.NO_SPEC} onChange={(e) => setType(SlotType.NO_SPEC)} />
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='周期从星期' checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)} />
                <div className='fa-cron-react-editor-panel-label'>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到星期</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                </div>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='第' checked={type === SlotType.STEP} onChange={(e) => setType(SlotType.STEP)} />
                <div className='fa-cron-react-editor-panel-label'>
                    <input className='fa-cron-react-editor-input' value={step0} onChange={(e) => setStep0(e.target.value)} />
                    <div>周的星期</div>
                    <input className='fa-cron-react-editor-input' value={step1} onChange={(e) => setStep1(e.target.value)} />
                </div>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='本月最后一个星期' checked={type === SlotType.WEEK_L} onChange={(e) => setType(SlotType.WEEK_L)} />
                <div className='fa-cron-react-editor-panel-label'>
                    <input className='fa-cron-react-editor-input' value={weekL} onChange={(e) => setWeekL(e.target.value)} />
                </div>
            </div>
            
            <div className='fa-cron-react-editor-panel-item' style={{ alignItems: 'flex-start' }}>
                <Radio label='指定' checked={type === SlotType.ITERATOR} onChange={(e) => setType(SlotType.ITERATOR)} />
                <div className='fa-cron-react-editor-panel-label' style={{ alignItems: 'flex-start' }}>
                    <div className='fa-cron-react-editor-panel-checkbox-group' style={{ width: 420 }}>
                        {[2,3,4,5,6,7,1].map((i) => (
                            <Checkbox key={i} label={WEEK_MAP[i]} checked={arr.indexOf(i) > -1} onChange={() => handleChangeArrChecked(i)} style={{ width: 60 }} />
                        ))}
                    </div>
                    <div>（1~7,1=SUN ）</div>
                </div>
            </div>
        </div>
    )
};
