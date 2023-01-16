export const toSentenceCase = (str: string) => {
    let result = str
        .replace(/([A-Z])/g, ' $1')
        .toLowerCase()
        .trim();
        
    return result.charAt(0).toUpperCase() + result.slice(1);
};
