"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openCells = void 0;
/**
 * 単語マスの開封処理
 * ※選ばれた単語がビンゴ内にある場合のみ
 *
 * @param inputs 選ばれた単語の配列
 * @param wordCells ビンゴ内にある複数の単語マス
 */
const openCells = (choiceWords, wordCells) => {
  choiceWords.forEach((choiceWord) => {
    const wordCell = wordCells[choiceWord];
    if (!wordCell) return;
    wordCell.cellOpen();
  });
};
exports.openCells = openCells;
