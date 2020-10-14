# npm package Create
### How to make
```
$ npm pack
```
- npm package is created(wizexpress-1.0.0.tgz")

### About npm package name 
- Determined by name and version
```
package.json

"name": "wizexpress"
"version": "1.0.0"
```

### How To Use
```
$ npm install wizexpress-x.x.x.tgz
```
- create "sample.ts" file
```
import dayOfWeek from 'wizexpress';
const toDay = dayOfWeek(Date())

console.log(toDay);
console.log(dayOfWeek('2020-10-14'));
```
