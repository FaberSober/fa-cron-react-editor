import React from 'react'
import type { CheckboxProps } from '../interface'


export default function Label({ label, checked, onChange, style }: CheckboxProps) {

    return (
        <div style={style} className='fa-cron-react-editor-flex-row-center'>
            <input id={label} type="checkbox" checked={checked} onChange={(e) => { onChange(!checked) }}></input>
            <label htmlFor={label}>{label}</label>
        </div>
    )
};
