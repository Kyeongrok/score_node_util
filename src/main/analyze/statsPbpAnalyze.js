const fs = require('fs');


fs.readFile('../services/result.txt', (err, data) => {
  if (err) throw err;
  const jsonList = JSON.parse(data.toString());
  jsonList.sort((now, next) => now.pbpLength - next.pbpLength);

  const pbpLengthList = jsonList.map(item => item.pbpLength);

  const reduced = pbpLengthList.reduce((a, b) => {
    if (a.slice(-1)[0] !== b) a.push(b); // slice(-1)[0] 을 통해 마지막 아이템을 가져온다.
    return a;
  }, []);

  console.log(reduced.length);
  reduced.forEach(item => console.log(item));

});
