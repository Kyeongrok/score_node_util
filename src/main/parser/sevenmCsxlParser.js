exports.parse = (string) => {
  const groupList = string.match(/sDt2\[([0-9]+)\]=(\[.+?\]);/g);

  const patternMatchedList = groupList.map(group => group.replace(/(sDt2)|[\[\];]/g, ''));
  const filteredList = patternMatchedList.filter(item => item.indexOf('2917227') >= 0);
  filteredList.forEach(item => console.log(item));
};
