const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER = '0123456789';

export const makeRandomStr = (size: number, upper = true, lower = true) => {
  let chars = NUMBER;
  if (upper) chars += UPPER;
  if (lower) chars += LOWER;

  const str = Array(size);
  const charSize = chars.length;

  for (let i = 0; i < size; i += 1) {
    str[i] = chars.charAt(Math.floor(Math.random() * charSize));
  }

  return str.join('');
};
