export const toHyphenatedCase = (str: string) =>
    str.replace(/ /g, '-').toLowerCase();
