export function getChangedValues<T>(newValues: T, oldValues: T): Partial<T> {
    let changedValues: Partial<T> = newValues;

    let k: keyof T;
    for (k in newValues) {
        if (newValues[k] === oldValues[k]) {
            changedValues[k] = undefined;
        }
    }

    return changedValues;
}
