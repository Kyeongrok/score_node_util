
const parse = (string) => {
  console.log(string);
}

exports.parse = string => {
  const group = string.match(/sDt2\[([0-9]+)\]=(\[.+?\]);/);
  console.log(group[1] + ' ' + group[2]);
}