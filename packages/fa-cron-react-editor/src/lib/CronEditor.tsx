import React, { useEffect, useState } from 'react'
import { Tabs, Label } from './components'
import { Second, Minute, Hour, Day, Month, Week, Year } from './panel';
import type { CronEditorProps } from './interface'
import './CronEditor.css'


const DEFAULT_CRON = '* * * * * ?';

export default function CronEditor({ value, onChange, style }: CronEditorProps) {
    const [ready, setReady] = useState<boolean>(false);
    const [cronArr, setCronArr] = useState<string[]>(DEFAULT_CRON.split(' '));
    const [tab, setTab] = useState<string>('second');

    useEffect(() => {
        // console.log('value.change', value)
        if (value === undefined || value.trim() === '') {
            if (!ready) setReady(true);
            return;
        }
        handleChangeCron(value)
        if (!ready) setReady(true);
    }, [value])

    useEffect(() => {
        // console.log('cronArr.change', cronArr)
        const newCron = cronArr.join(' ').trim()
        if (onChange && newCron !== value) {
            if (ready) onChange(newCron)
        }
    }, [cronArr])

    function handleChangeCronArr(index: number, newValue: string) {
        // console.log('handleChangeCronArr', index, newValue)
        const newArr = [ ...cronArr ];
        newArr[index] = newValue;
        if (newArr.toString() !== cronArr.toString()) {
            setCronArr(newArr);
        }
    }

    function handleChangeCron(v:string) {
        const newArr = v.trim().split(' ')
        if (newArr.length < 6) {
            for (let i = newArr.length; i < 6; i+=1) {
                newArr.push(i === 5 ? '?' : '*')
            }
        }
        // 比较两个数组是否一致
        if (newArr.toString() !== cronArr.toString()) {
            setCronArr(newArr);
        }
    }

    // console.log('CronEditor', cronArr)
    const cron = cronArr.join(' ').trim()
    return (
        <div className='fa-cron-react-editor-main' style={style}>
            <Tabs
                items={[
                    { key: 'second', label: '秒' },
                    { key: 'minute', label: '分钟' },
                    { key: 'hour', label: '小时' },
                    { key: 'day', label: '日' },
                    { key: 'month', label: '月' },
                    { key: 'week', label: '周' },
                    { key: 'year', label: '年' },
                ]}
                activeKey={tab}
                onChange={setTab}
            />

            <div className='fa-cron-react-editor-content'>
                <Second value={cronArr[0]} onChange={(v) => handleChangeCronArr(0, v)} visible={tab === 'second'} />
                <Minute value={cronArr[1]} onChange={(v) => handleChangeCronArr(1, v)} visible={tab === 'minute'} />
                <Hour   value={cronArr[2]} onChange={(v) => handleChangeCronArr(2, v)} visible={tab === 'hour'  } />
                <Day    value={cronArr[3]} onChange={(v) => handleChangeCronArr(3, v)} visible={tab === 'day'   } />
                <Month  value={cronArr[4]} onChange={(v) => handleChangeCronArr(4, v)} visible={tab === 'month' } />
                <Week   value={cronArr[5]} onChange={(v) => handleChangeCronArr(5, v)} visible={tab === 'week'  } />
                <Year   value={cronArr[6]} onChange={(v) => handleChangeCronArr(6, v)} visible={tab === 'year'  } />
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
            </div>
        </div>
    )
};
