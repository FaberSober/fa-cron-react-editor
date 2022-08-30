export function genArray(indexFrom: number, indexTo: number): number[] {
    const arr: number[] = [];
    for (let i = indexFrom; i <= indexTo; i+=1) {
        arr.push(i);
    }
    return arr;
}
