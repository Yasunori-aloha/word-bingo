import { WordCells } from "../types/wordCells";
/**
 * 単語マスの開封処理
 * ※選ばれた単語がビンゴ内にある場合のみ
 *
 * @param inputs 選ばれた単語の配列
 * @param wordCells ビンゴ内にある複数の単語マス
 */
export const openCells = (
  choiceWords: string[],
  wordCells: WordCells
): void => {
  choiceWords.forEach((choiceWord) => {
    const wordcell = wordCells[choiceWord];

    if (!wordcell) return;

    wordcell.cellOpen();
  });
};
