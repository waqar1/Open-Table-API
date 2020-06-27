export default function checkWord(word, str) {
  // eslint-disable-next-line no-useless-escape
  const allowedSeparator = '\\\s,;"\'|';

  const regex = new RegExp(
    `(^.*[${allowedSeparator}]${word}$)|(^${word}[${allowedSeparator}].*)|(^${word}$)|(^.*[${allowedSeparator}]${word}[${allowedSeparator}].*$)`,

    // Case insensitive
    'i',
  );

  return regex.test(str);
}
