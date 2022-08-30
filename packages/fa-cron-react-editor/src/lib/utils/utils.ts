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
