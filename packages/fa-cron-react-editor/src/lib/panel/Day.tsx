import React, { useEffect, useState } from 'react'
import { Checkbox, Radio } from '../components'
import { genArray, getSlotTypeDay } from '../utils/utils'
import type { PanelBase } from '../interface'
import { SlotType } from '../interface'


export default function Day({ visible, value, onChange }: PanelBase) {
    const [innerValue, setInnerValue] = useState<string>(value);
    const [type, setType] = useState<SlotType>(getSlotTypeDay(value));

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
            setInnerValue(newValue)
            onChange(newValue)
        }
    }, [type, range0, range1, step0, step1, arr, dayW])

    useEffect(() => {
        if (value === undefined || value === '') return;
        if (value === innerValue) return;

        setInnerValue(value);
        if (value === '*') {
            setType(SlotType.ALL)
        } else if (value === '?') {
            setType(SlotType.NO_SPEC)
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
        } else if (value.indexOf('W') > -1) {
            setType(SlotType.DAY_W)
            setDayW(value.replaceAll('W', ''))
        } else if (value.indexOf('L') > -1) {
            setType(SlotType.DAY_L)
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
                <Radio label='每日 允许的通配符[, - * /]' checked={type === SlotType.ALL} onChange={(e) => setType(SlotType.ALL)} />
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='不指定' checked={type === SlotType.NO_SPEC} onChange={(e) => setType(SlotType.NO_SPEC)} />
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='周期从' checked={type === SlotType.RANGE} onChange={(e) => setType(SlotType.RANGE)} />
                <div className='fa-cron-react-editor-panel-label'>
                    <input className='fa-cron-react-editor-input' value={range0} onChange={(e) => setRange0(e.target.value)} />
                    <div>到</div>
                    <input className='fa-cron-react-editor-input' value={range1} onChange={(e) => setRange1(e.target.value)} />
                    <div>日</div>
                </div>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='周期从' checked={type === SlotType.STEP} onChange={(e) => setType(SlotType.STEP)} />
                <div className='fa-cron-react-editor-panel-label'>
                    <input className='fa-cron-react-editor-input' value={step0} onChange={(e) => setStep0(e.target.value)} />
                    <div>日开始，每</div>
                    <input className='fa-cron-react-editor-input' value={step1} onChange={(e) => setStep1(e.target.value)} />
                    <div>日执行一次</div>
                </div>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='每月' checked={type === SlotType.DAY_W} onChange={(e) => setType(SlotType.DAY_W)} />
                <div className='fa-cron-react-editor-panel-label'>
                    <input className='fa-cron-react-editor-input' value={dayW} onChange={(e) => setDayW(e.target.value)} />
                    <div>号最近的那个工作日</div>
                </div>
            </div>

            <div className='fa-cron-react-editor-panel-item'>
                <Radio label='本月最后一天' checked={type === SlotType.DAY_L} onChange={(e) => setType(SlotType.DAY_L)} />
            </div>

            <div className='fa-cron-react-editor-panel-item' style={{ alignItems: 'flex-start' }}>
                <Radio label='指定' checked={type === SlotType.ITERATOR} onChange={(e) => setType(SlotType.ITERATOR)} />
                <div className='fa-cron-react-editor-panel-label' style={{ alignItems: 'flex-start' }}>
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
