import React, { useEffect, useState } from 'react'
import { Tabs, Label } from './components'
import { Second, Minute, Hour } from './panel';
import type { CronEditorProps } from './interface'


const DEFAULT_CRON = '* * * * * ?';

export default function CronEditor({ value, onChange, style }: CronEditorProps) {
    const [cronArr, setCronArr] = useState<string[]>(DEFAULT_CRON.split(' '));
    const [tab, setTab] = useState<string>('second');

    useEffect(() => {
        if (value === undefined) return;
        handleChangeCron(value)
    }, [value])

    useEffect(() => {
        const newCron = cronArr.join(' ')
        if (onChange && newCron !== value) {
            onChange(newCron)
        }
    }, [cronArr])

    function handleChangeCronArr(index: number, newValue: string) {
        const newArr = [ ...cronArr ];
        newArr[index] = newValue;
        setCronArr(newArr)
    }

    function handleChangeCron(v:string) {
        const newArr = v.split(' ')
        if (newArr.length < 6) {
            for (let i = newArr.length; i < 6; i+=1) {
                newArr.push(i === 5 ? '?' : '*')
            }
        }
        setCronArr(newArr);
    }

    const cron = cronArr.join(' ')
    return (
        <div className='fa-cron-react-editor-main' style={style}>
            <Tabs
                items={[
                    { key: 'second', label: '秒' },
                    { key: 'minute', label: '分钟' },
                    { key: 'hour', label: '小时' },
                    { key: 'day', label: '日' },
                    { key: 'week', label: '月' },
                    { key: 'month', label: '周' },
                    { key: 'year', label: '年' },
                ]}
                activeKey={tab}
                onChange={(v) => { console.log('v',v); setTab(v) }}
            />

            <div style={{ margin: '12px', height: 300 }}>
                <Second value={cronArr[0]} onChange={(v) => handleChangeCronArr(0, v)} visible={tab === 'second'} />
                <Minute value={cronArr[1]} onChange={(v) => handleChangeCronArr(1, v)} visible={tab === 'minute'} />
                <Hour   value={cronArr[2]} onChange={(v) => handleChangeCronArr(2, v)} visible={tab === 'hour'}   />
            </div>

            <div style={{ padding: '12px', borderTop: '1px solid #CCC' }}>
                <div className='fa-cron-react-editor-panel-item'>
                    <div style={{ width: 100 }}>表达式字段</div>
                    <div className='fa-cron-react-editor-flex-row-center'>
                        <Label value={cronArr[0]} title='秒'   />
                        <Label value={cronArr[1]} title='分钟' />
                        <Label value={cronArr[2]} title='小时' />
                        <Label value={cronArr[3]} title='日'   />
                        <Label value={cronArr[4]} title='月'   />
                        <Label value={cronArr[5]} title='周'   />
                        <Label value={cronArr[6]} title='年' style={{ marginRight: 0 }}  />
                    </div>
                </div>
                <div className='fa-cron-react-editor-panel-item'>
                    <div style={{ width: 100 }}>Cron表达式</div>
                    <div className='fa-cron-react-editor-flex-row-center' style={{ width: 632 }}>
                      <input value={cron} onChange={e => handleChangeCron(e.target.value)} style={{ flex: 1 }} />
                    </div>
                </div>
                <div>
                    <div style={{ marginRight: 12 }}>最近5次运行时间</div>
                </div>
            </div>
        </div>
    )
};
