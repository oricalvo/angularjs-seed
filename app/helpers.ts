export function getRandomColor(): string {
    const r = getRandom256();
    const g = getRandom256();
    const b = getRandom256();

    const str = '#' + pad(r.toString(16), 2)
        + pad(g.toString(16), 2)
        + pad(b.toString(16), 2);
    return str;
}

function getRandom256() {
    return Math.floor(Math.random() * 256);
}

function pad(str: string, size: number) {
    while (str.length < size) {
        str = '0' + str;
    }
    return str;
}
