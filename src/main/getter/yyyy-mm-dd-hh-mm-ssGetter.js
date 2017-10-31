exports.ymdhms = (date = new Date()) => {
  const yyyyMMdd = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const hhmmss = `${date.getHours()}-${date.getMinutes() + 1}-${date.getSeconds()}`;
  return `${yyyyMMdd}-${hhmmss}`;
}