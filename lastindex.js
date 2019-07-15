

const lastIndexOf = (array, number) => {
  for (let i = array.length -1; i >= 0; i--) {
    if (array[i] === number) return i;
  }
  return -1;
}