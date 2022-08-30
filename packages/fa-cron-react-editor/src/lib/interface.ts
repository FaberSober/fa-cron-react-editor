import { CSSProperties } from "react";

export interface CronEditorProps {
    value?: string;
    onChange?: (v: string) => void;
    style?: CSSProperties;
}

export interface TabsItem {
    label: string;
    key: string;
}

export interface TabsProps {
    items: TabsItem[];
    activeKey: string;
    onChange: (v:string) => void;
}

export enum SlotType {
    ALL = 'all', // *
    RANGE = 'range', // 1-2
    STEP = 'step', // 0/5
    ITERATOR = 'iterator', // 1,2,3
}

export interface PanelBase {
    visible?: boolean;
    value: string;
    onChange: (v:string) => void;
}

export interface LabelProps {
    title: string;
    value: string;
    style?: CSSProperties;
}

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    style?: CSSProperties;
}
