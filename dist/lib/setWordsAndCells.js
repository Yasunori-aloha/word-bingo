"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWordsAndCells = void 0;
const wordCell_1 = require("../class/wordCell");
/**
 * 標準入力から必要データを準備する。
 *
 * @param inputs 標準入力データ
 * @returns [ビンゴサイズ, 選ばれた単語群の配列, ビンゴの単語群]
 */
const setWordsAndCells = (inputs) => {
  // ビンゴゲームのサイズを取得
  const bingoSize = parseInt(inputs[0]);
  inputs = inputs.slice(1);
  // ビンゴ内各列の単語を取得し、『単語』をキーとしたオブジェクトに格納
  const wordCells = [...Array(bingoSize)].reduce((acc, _, i) => {
    const rowWords = inputs[i].split(" ");
    rowWords.forEach((word) => (acc[word] = new wordCell_1.WordCell()));
    return acc;
  }, {});
  inputs = inputs.slice(bingoSize);
  // 選ばれた単語数を取得
  const choiceWordCount = parseInt(inputs[0]);
  inputs = inputs.slice(1);
  // 選ばれた単語群を配列に格納
  const choiceWords = [...Array(choiceWordCount)].map((_, i) => inputs[i]);
  return [bingoSize, choiceWords, wordCells];
};
exports.setWordsAndCells = setWordsAndCells;
