"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setWordsAndCells_1 = require("./lib/setWordsAndCells");
const openCells_1 = require("./lib/openCells");
const judgeBingo_1 = require("./lib/judgeBingo");
/**
 * メイン処理
 * ここで『ワードビンゴ』の処理を実施する。
 * @param inputs 標準入力データの配列(改行区切り)
 */
const main = (inputs) => {
  // 選ばれた単語群とビンゴの単語群を準備
  const [bingoSize, choiceWords, wordCells] = (0,
  setWordsAndCells_1.setWordsAndCells)(inputs);
  // 選ばれた単語群を基にビンゴのマス開け
  (0, openCells_1.openCells)(choiceWords, wordCells);
  // ビンゴしているか判定
  const isBingo = (0, judgeBingo_1.judgeBingo)(bingoSize, wordCells);
  // ビンゴ結果を出力
  if (isBingo) {
    console.log("yes");
  } else {
    console.log("no");
  }
};
/**
 * 標準入力処理
 */
const inputProcess = () => {
  const inputs = [];
  // 標準入力ストリームを開始
  process.stdin.resume();
  // 標準入力で受け取ったデータをUTF-8でエンコード
  process.stdin.setEncoding("utf8");
  // 標準入出力を使用したインタフェースを作成
  const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // 標準入力の改行ごとにinputs配列に行のデータを格納
  reader.on("line", (line) => inputs.push(line));
  // 標準入力が完了したらmain関数を実行
  reader.on("close", () => main(inputs));
};
inputProcess();
