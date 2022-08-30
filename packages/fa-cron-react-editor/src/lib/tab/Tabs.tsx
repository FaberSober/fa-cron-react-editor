import React from 'react'
import type { TabsProps } from '../interface'


export default function Tabs({ items, activeKey, onChange }: TabsProps) {
    console.log('Tabs', activeKey)
    return (
        <div className='fa-cron-react-editor-tab'>
            {items.map((item) => {
                const clazz = item.key === activeKey ? 'fa-cron-react-editor-tab-item-active' : 'fa-cron-react-editor-tab-item';
                return (
                    <div key={item.key} onClick={() => onChange(item.key)} className={clazz}>
                        <span>{item.label}</span>
                    </div>
                )
            })}
        </div>
    )
};
