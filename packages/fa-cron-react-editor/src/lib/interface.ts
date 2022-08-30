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
