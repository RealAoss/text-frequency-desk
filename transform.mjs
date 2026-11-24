function fail(message) {
    throw new Error(message);
}
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const words = s.toLocaleLowerCase('en').match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu) || [];
    const count = new Map;
    for (const w of words) count.set(w, (count.get(w) || 0) + 1);
    return [...count].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([w, n]) => n + '\t' + w).join('\n')
}
