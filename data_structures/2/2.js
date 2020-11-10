// попробуй так sumOfArray([-1, '20']);
function sumOfArray(array) {
  if (array.length == 0) return 0;
  return array[0] > 0
    ? array[0] + sumOfArray(array.slice(1))
    : sumOfArray(array.slice(1));
}

function arrSum(array) {
  if (!array || !array.length) return 0;
  return array.reduce((a, b) => {
    const num = +b;
    return b > 0 ? a + num : a;
  });
}