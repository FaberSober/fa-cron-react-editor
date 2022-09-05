import { SlotType } from '../interface'

export function genArray(indexFrom: number, indexTo: number): number[] {
    const arr: number[] = [];
    for (let i = indexFrom; i <= indexTo; i+=1) {
        arr.push(i);
    }
    return arr;
}

export function generateId(): string {
    var str = '';
    for (var i=0;i<8;i++) {
      var code = Math.floor(Math.random()*26);
      str += String.fromCharCode('a'.charCodeAt(0) + code);
    }
    return str;
}

export function getSlotType(value: string):SlotType {
    if (value === '*') {
        return SlotType.ALL;
    } else if (value.indexOf('-') > -1) {
        return SlotType.RANGE;
    } else if (value.indexOf('/') > -1) {
        return SlotType.STEP;
    } else {
        return SlotType.ITERATOR;
    }
}

export function getSlotTypeDay(value: string):SlotType {
    if (value === '*') {
        return SlotType.ALL;
    } else if (value === '?') {
        return SlotType.NO_SPEC;
    } else if (value.indexOf('-') > -1) {
        return SlotType.RANGE;
    } else if (value.indexOf('/') > -1) {
        return SlotType.STEP;
    } else if (value.indexOf('W') > -1) {
        return SlotType.DAY_W;
    } else if (value.indexOf('L') > -1) {
        return SlotType.DAY_L;
    } else {
        return SlotType.ITERATOR;
    }
}

export function getSlotTypeMonth(value: string):SlotType {
    if (value === '*') {
        return SlotType.ALL;
    } else if (value === '?') {
        return SlotType.NO_SPEC;
    } else if (value.indexOf('-') > -1) {
        return SlotType.RANGE;
    } else if (value.indexOf('/') > -1) {
        return SlotType.STEP;
    } else {
        return SlotType.ITERATOR;
    }
}

export function getSlotTypeWeek(value: string):SlotType {
    if (value === '*') {
        return SlotType.ALL;
    } else if (value === '?') {
        return SlotType.NO_SPEC;
    } else if (value.indexOf('/') > -1) {
        return SlotType.RANGE;
    } else if (value.indexOf('#') > -1) {
        return SlotType.STEP;
    } else if (value.indexOf('L') > -1) {
        return SlotType.WEEK_L;
    } else {
        return SlotType.ITERATOR;
    }
}

export function getSlotTypeYear(value: string):SlotType {
    if (value === undefined || value === null) return SlotType.NO_SPEC;
    if (value === '*') {
        return SlotType.ALL;
    } else if (value === '') {
        return SlotType.NO_SPEC;
    } else if (value.indexOf('-') > -1) {
        return SlotType.RANGE;
    }
    return SlotType.NO_SPEC;
}

export function splitToNumbers(value:string):number[] {
    const ss = value.split(',')
    const arr:number[] = ss.filter(i => (new Number(1) instanceof Number)).map(i => parseInt(i))
    return arr;
}

