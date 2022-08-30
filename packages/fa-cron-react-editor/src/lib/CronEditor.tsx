import React, { useEffect, useState } from 'react'
import { Tabs, Label } from './components'
import Second from './panel/Second';
import type { CronEditorProps } from './interface'


export default function CronEditor({ value, onChange, style }: CronEditorProps) {
    const [cron, setCron] = useState<string>('* * * * * *');
    const [tab, setTab] = useState<string>('second');

    const [second, setSecond] = useState<string>('*');

    useEffect(() => {
        if (value === undefined) return;

        setCron(value)

        const ss = value.split(' ');
        setSecond(ss[0])
    }, [value])

    const ss = cron.split(' ')
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
                <Second value={second} onChange={setSecond} visible={tab === 'second'} />
            </div>

            <div style={{ padding: '12px 0', borderTop: '1px solid #CCC' }}>
                <div className='fa-cron-react-editor-flex-row-center'>
                    <div style={{ marginRight: 12 }}>表达式字段</div>
                    <div className='fa-cron-react-editor-flex-row-center'>
                        <Label title='秒'   value={ss[0]} />
                        <Label title='分钟' value={ss[1]} />
                        <Label title='小时' value={ss[2]} />
                        <Label title='日'   value={ss[3]} />
                        <Label title='月'   value={ss[4]} />
                        <Label title='周'   value={ss[5]} />
                        <Label title='年'   value={ss.length > 6 ? ss[6] : ''} />
                    </div>
                </div>
            </div>
        </div>
    )
};
