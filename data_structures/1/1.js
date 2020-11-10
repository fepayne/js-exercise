function removeEveryOther(array) {
  let flag = true;
  let i = 1;
  while (i < array.length) {
    if (flag && i % 2 == 1) {
      array.splice(i, 1);
      flag = false;
    } else if (~flag && i % 2 == 0) {
      array.splice(i, 1);
      flag = true;
    }
    i++;
  }
  return array;
}

function removeOdd(arr) {
  if (!arr || !arr.length) return [];
  return arr.filter((c, indx) => indx % 2 === 0);
}
