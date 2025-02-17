import { randomBytes } from 'crypto';
import { customAlphabet } from 'nanoid';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { alphanumeric } = require('nanoid-dictionary');

export const bufferFromString = (input: string) => {
    const size = input.length;

    const buffer = new ArrayBuffer(size);
    const viewArray = new Uint8Array(buffer);

    for (let i = 0; i < size; i++) viewArray[i] = input.charCodeAt(i);

    return viewArray;
};

export const generateId = () => customAlphabet(alphanumeric, 12)();

export const generateIV = () => randomBytes(12).toString('binary');

export const getIVBuffer = (iv: string) => Buffer.from(iv, 'binary');
