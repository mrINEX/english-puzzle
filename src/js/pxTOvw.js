function pxTOvw(value) {
  const x = window.innerWidth;
  const result = (100 * value) / x;
  return result;
}

function pxTOvh(value) {
  const y = window.innerHeight;

  const result = (100 * value) / y;
  return result;
}

export { pxTOvw, pxTOvh };
