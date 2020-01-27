const url = require('url');

const myUrl = new URL('http://somesite.org:9001/hello.html?id=100&domain=react&level=master&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.toJSON());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);

myUrl.searchParams.append('key','extra-key');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((v,k) => {
    console.log(`Key: ${k} => Value: ${v}`);
})

