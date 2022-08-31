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
    NO_SPEC = 'no_spec', // ? 不指定
    RANGE = 'range', // 1-2
    STEP = 'step', // 0/5
    ITERATOR = 'iterator', // 1,2,3
    DAY_W = 'day_w', // 1W
    DAY_L = 'day_l', // L
    WEEK_L = 'week_l', // L
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

export interface RadioProps {
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    style?: CSSProperties;
}
