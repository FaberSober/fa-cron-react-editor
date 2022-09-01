import React, { useState } from 'react'
import { generateId } from '../utils/utils'
import type { CheckboxProps } from '../interface'


export default function Checkbox({ label, checked, onChange, style }: CheckboxProps) {
    const [id] = useState<string>(generateId())

    return (
        <div style={style} className='fa-cron-react-editor-checkbox' onClick={() => onChange(!checked)}>
            <i className={checked ? 'fa-cron-react-editor-checkbox-icon-ok' : 'fa-cron-react-editor-checkbox-icon-not'} />
            <span>{label}</span>
        </div>
    )
};
