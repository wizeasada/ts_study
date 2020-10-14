# ts_study

## 1.typescriptでnpmpackageの作成

### tsconfig.jsonを作成
- $ npm install typescript 
- $ npm install @types/node
- $ npm install dayjs(テストに利用するライブラリ)
- tsconfig.jsonを作成する

### コンパイル 
- $ npm run build
- package.jsonに必要な項目を追加する。
```
- name
パッケージの名前。前述の通り、既存のパッケージと被ってはいけない。

- version

パッケージのバージョン。nameとversionの組み合わせで、パッケージが一意に特定される。

- license

パッケージのライセンスの種類を書く。

- main

ここで指定したファイルが、パッケージをインポートしたときに読み込まれることになる。

- types

mainで指定したファイルに対応する型定義ファイルを、このフィールドに指定する。

- files
パッケージとして配布したいファイルやディレクトリを、ホワイトリスト形式で記述していく。
今回の例だと、dist/を指定する。そうすることで、パッケージで配布する必要のないsrc/などを除外することが出来る。
package.jsonなど一部のファイルは、filesで指定した内容に影響を受けない。
```

### package作成
- $ npm pack
- ts_study-1.0.0.tgzというファイルが作成される


## 2.package
- $ npm install ts_study-1.0.0.tgz
- webpackをテスト(test.tsを作成)
```
import dayOfWeek from 'ts_study';
const toDay = dayOfWeek(Date())
console.log(toDay);
console.log(dayOfWeek('2020-10-14'));
```

- $ tsc test.ts
- $ node test.js
