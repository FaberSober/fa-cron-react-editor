import React, { useState } from 'react'
import { generateId } from '../utils/utils'
import type { RadioProps } from '../interface'


export default function Radio({ label, checked, onChange, style }: RadioProps) {
    const [id] = useState<string>(generateId())

    return (
        <div style={style} className='fa-cron-react-editor-flex-row-center'>
            <input id={id} type="radio" checked={checked} onChange={(e) => { onChange(!checked) }}></input>
            <label htmlFor={id}>{label}</label>
        </div>
    )
};
