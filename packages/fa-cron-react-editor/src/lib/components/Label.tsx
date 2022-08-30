import React from 'react'
import type { LabelProps } from '../interface'


export default function Label({ title, value }: LabelProps) {

    return (
        <div style={{ marginRight: 12 }}>
            <div className='fa-cron-react-editor-lablel-title'>{title}</div>
            <div className='fa-cron-react-editor-lablel-value'>{value}</div>
        </div>
    )
};
