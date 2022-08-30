import React, { useState } from 'react'
import { generateId } from '../utils/utils'
import type { CheckboxProps } from '../interface'


export default function Label({ label, checked, onChange, style }: CheckboxProps) {
    const [id] = useState<string>(generateId())

    return (
        <div style={style} className='fa-cron-react-editor-flex-row-center'>
            <input id={id} type="checkbox" checked={checked} onChange={(e) => { onChange(!checked) }}></input>
            <label htmlFor={id}>{label}</label>
        </div>
    )
};
