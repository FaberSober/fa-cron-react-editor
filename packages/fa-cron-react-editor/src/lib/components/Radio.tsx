import React, { useState } from 'react'
import { generateId } from '../utils/utils'
import type { RadioProps } from '../interface'


export default function Radio({ label, checked, onChange, style }: RadioProps) {
    const [id] = useState<string>(generateId())

    return (
        <div style={style} className='fa-cron-react-editor-radio' onClick={() => onChange(!checked)}>
            <div className={checked ? 'fa-cron-react-editor-radio-round-checked' : 'fa-cron-react-editor-radio-round'}>
                <div className={checked ? 'fa-cron-react-editor-radio-point-checked' : 'fa-cron-react-editor-radio-point'} />
            </div>
            <span>{label}</span>
        </div>
    )
};
