const cc = require('card-validator');

export function serializeCCNumber(
  nextValue: string,
  prevValue: string
): string {
  const number: any = cc.number(nextValue);
  return number.isPotentiallyValid ? nextValue.replace(/\D+/g, '') : prevValue;
}

export function formatCCNumber(value: string, spacer: string = '-'): string {
  const number: any = cc.number(value);
  if (!number.isPotentiallyValid || !number.card) {
    return value;
  }
  let valueArr = value.split('');
  // Insert spacer at applicable positions
  (number.card.gaps as number[])
    .filter(pos => pos <= value.length)
    .forEach((pos, offset) => {
      valueArr.splice(pos + offset, 0, spacer);
    });
  // Remove spacer from last position and join
  return valueArr
    .filter(
      (char, idx, arr) => (idx === arr.length - 1 ? char !== spacer : true)
    )
    .join('');
}
