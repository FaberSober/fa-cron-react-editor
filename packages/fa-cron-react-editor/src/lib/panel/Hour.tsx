import React, { useEffect, useState } from 'react'
import { Checkbox } from '../components'
import { genArray } from '../utils/utils'
import type { PanelBase } from '../interface'
import { SlotType } from '../interface'


export default function Hour({ visible, value, onChange }: PanelBase) {
    const [innerValue, setInnerValue] = useState<string>(value);
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
            setInnerValue(newValue)
            onChange(newValue)
        }
    }, [type, range0, range1, step0, step1, arr])

    useEffect(() => {
        if (value === undefined || value === '') return;
        if (value === innerValue) return;

        setInnerValue(value);
        if (value === '*') {
            setType(SlotType.ALL)
        } else if (value.indexOf('-') > -1) {
            setType(SlotType.RANGE)
            const ss = value.split('-')
            setRange0(ss[0])
            setRange1(ss[1])
        } else if (value.indexOf('/') > -1) {
            setType(SlotType.STEP)
            const ss = value.split('/')
            setStep0(ss[0])
            setStep1(ss[1])
        } else {
            setType(SlotType.ITERATOR)
            const ss = value.split(',')
            const newArr:number[] = ss.filter(i => (new Number(1) instanceof Number)).map(i => parseInt(i))
            setArr(newArr)
        }
    }, [value])

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
                <input id='hour1' type="radio" checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)}/>
                <label htmlFor='hour1' className='fa-cron-react-editor-panel-label'>每小时 允许的通配符[, - * /]</label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='hour2' type="radio" checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)}/>
                <label htmlFor='hour2' className='fa-cron-react-editor-panel-label'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                    <div>小时</div>
                </label>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <input id='hour3' type="radio" checked={type === SlotType.STEP} onChange={(e) => setType(SlotType.STEP)}/>
                <label htmlFor='hour3' className='fa-cron-react-editor-panel-label'>
                    <div>周期从</div>
                    <input className='fa-cron-react-editor-input' value={step0} onChange={(e) => setStep0(e.target.value)} />
                    <div>小时开始，每</div>
                    <input className='fa-cron-react-editor-input' value={step1} onChange={(e) => setStep1(e.target.value)} />
                    <div>小时执行一次</div>
                </label>
            </div>

            <div className='fa-cron-react-editor-panel-item' style={{ alignItems: 'flex-start' }}>
                <input id='hour4' type="radio" checked={type === SlotType.ITERATOR} onChange={(e) => setType(SlotType.ITERATOR)}/>
                <div className='fa-cron-react-editor-panel-label' style={{ alignItems: 'flex-start' }}>
                    <label htmlFor='hour4'>指定</label>
                    <div className='fa-cron-react-editor-panel-checkbox-group' style={{ width: 720 }}>
                        {genArray(0, 23).map((i) => (
                            <Checkbox key={i} label={i < 10 ? `0${i}` : `${i}`} checked={arr.indexOf(i) > -1} onChange={() => handleChangeArrChecked(i)} style={{ width: 60 }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
