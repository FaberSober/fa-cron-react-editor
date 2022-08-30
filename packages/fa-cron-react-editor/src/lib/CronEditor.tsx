import React, { useState } from 'react'
import Tabs from './tab/Tabs'
import type { CronEditorProps } from './interface'


export default function CronEditor({ value, onChange, style }: CronEditorProps) {
    const [cron, setCron] = useState<string>(value || '* * * * * *');
    const [tab, setTab] = useState<string>('second');

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
        </div>
    )
};
