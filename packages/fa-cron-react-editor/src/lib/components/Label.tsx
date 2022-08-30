import React from 'react'
import type { LabelProps } from '../interface'


export default function Label({ title, value, style }: LabelProps) {

    return (
        <div style={{ marginRight: 12, ...style }}>
            <div className='fa-cron-react-editor-lablel-title'>{title}</div>
            <div className='fa-cron-react-editor-lablel-value' style={{ overflow: 'hidden' }}>{value}</div>
        </div>
    )
};
