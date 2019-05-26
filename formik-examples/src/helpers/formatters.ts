const cc = require('card-validator');

function removeCharIfOnLastPosition(value: string[], target: string): string[] {
  return value.filter(
    (char, idx, arr) => (idx === arr.length - 1 ? char !== target : true)
  );
}

export function serializeCCNumber(
  nextValue: string,
  prevValue: string
): string {
  const number: any = cc.number(nextValue);
  return number.isPotentiallyValid ? nextValue.replace(/\D+/g, '') : prevValue;
}

export function formatCCNumber(value: string): string {
  const SPACER = '-';
  const number: any = cc.number(value);
  if (!number.isPotentiallyValid || !number.card) {
    return value;
  }
  let valueArr = value.split('');
  // Insert spacer at applicable positions
  (number.card.gaps as number[])
    .filter(pos => pos <= value.length)
    .forEach((pos, offset) => {
      valueArr.splice(pos + offset, 0, SPACER);
    });
  return removeCharIfOnLastPosition(valueArr, SPACER).join('');
}

export function serializeDate(value: string): string {
  const SPACER = '-';
  const MAX_LENGTH = 10;
  const valueArr = (value.match(/\d+/g) || ['']).join('').split('');
  const gaps = [4, 6];
  gaps.filter(pos => pos <= value.length).forEach((pos, offset) => {
    valueArr.splice(pos + offset, 0, SPACER);
  });
  return removeCharIfOnLastPosition(valueArr, SPACER)
    .join('')
    .substring(0, MAX_LENGTH);
}

export function formatDate(value: string): string {
  const SPACER = '/';
  const maxLength = 10;
  return value.replace(new RegExp('-', 'g'), SPACER).substring(0, maxLength);
}
