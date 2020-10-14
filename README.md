# ts_study

## 1.typescriptでnpmpackageの作成

### tsconfig.jsonを作成
- $ npm install typescript 
- $ npm install @types/node
- $ npm install dayjs(テストに利用するライブラリ)
- tsconfig.jsonを作成する

### package.jsonに追記
- package.jsonに必要な項目を追加する
```
- name
パッケージの名前。前述の通り、既存のパッケージと被ってはいけない

- version
パッケージのバージョン。nameとversionの組み合わせで、パッケージが一意に特定される

- license
パッケージのライセンスの種類を書く
今回はMITライセンス（https://qiita.com/yyama2/items/20bdf5e914c20025498a#:~:text=MIT%20License%E3%81%AFGPL%E3%81%AA%E3%81%A9,%E3%81%AE%E7%B7%A9%E3%81%84%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E3%81%A8%E8%A8%80%E3%81%88%E3%82%8B%E3%80%82）

- main
ここで指定したファイルが、パッケージをインポートしたときに読み込まれることになる

- types
mainで指定したファイルに対応する型定義ファイルを、このフィールドに指定する

- files
パッケージとして配布したいファイルやディレクトリを、ホワイトリスト形式で記述していく。
今回の例だと、dist/を指定する。そうすることで、パッケージで配布する必要のないsrc/などを除外することが出来る。
package.jsonなど一部のファイルは、filesで指定した内容に影響を受けない。
```
#### コンパイル方法
- $ npm run build

### packageの作成方法
- $ npm pack
- ts_study-1.0.0.tgzというファイルが作成される


## 2.作成したwebpackの動作テスト
- $ npm install ts_study-1.0.0.tgz
- test.tsをコピーする
```
import dayOfWeek from 'ts_study';
const toDay = dayOfWeek(Date())
console.log(toDay);
console.log(dayOfWeek('2020-10-14'));
```
- $ tsc test.ts
- $ node test.js
