import { WordCells } from "../types/wordCells";

/**
 * ビンゴが縦・横・斜めのどこかで揃っているか判定
 * ※揃っていた場合、その時点で処理終了
 *
 * @param bingoSize ビンゴの大きさ
 * @param wordCells ビンゴの単語群
 */
export const judgeBingo = (
  bingoSize: number,
  wordCells: WordCells
): boolean => {
  // ビンゴに見立てた単語マスの多次元配列を作成
  const wordCellArray = Object.values(wordCells).map((wordCell) => wordCell);
  const wordCellsGrid = [...Array(bingoSize)].map((_, i) => {
    const startIndex = i * bingoSize;
    const endIndex = startIndex + bingoSize;

    return wordCellArray.slice(startIndex, endIndex);
  });

  // 横(列)の確認
  let isRowBingo = false;
  for (let i = 0; i < bingoSize; i++) {
    let isBingo = true;
    for (let j = 0; j < bingoSize; j++) {
      const wordCell = wordCellsGrid[i][j];

      // 現在の列に開いていないマスがあるなら、その列はビンゴしないと判断する
      if (!wordCell.getIsOpen()) {
        isBingo = false;
        break;
      }
    }

    // 現在の列がビンゴなら、後続列は処理を中断
    if (isBingo) {
      isRowBingo = true;
      break;
    }
  }

  // ビンゴしている列があるなら後続処理を中断
  if (isRowBingo) return true;

  // 縦(行)の確認
  let isColumnBingo = false;
  for (let j = 0; j < bingoSize; j++) {
    let isBingo = true;
    for (let i = 0; i < bingoSize; i++) {
      const wordCell = wordCellsGrid[i][j];

      // 現在の行に開いていないマスがあるなら、その行はビンゴしないと判断する
      if (!wordCell.getIsOpen()) {
        isBingo = false;
        break;
      }
    }

    // 現在の行がビンゴなら、後続行は処理を中断
    if (isBingo) {
      isColumnBingo = true;
      break;
    }
  }

  // ビンゴしている行があるなら後続処理を中断
  if (isColumnBingo) return true;

  // 主対角線(左上から右下への斜め)の確認
  let isMainDiagonalBingo = true;
  for (let i = 0; i < bingoSize; i++) {
    const wordCell = wordCellsGrid[i][i];

    if (!wordCell.getIsOpen()) {
      isMainDiagonalBingo = false;
      break;
    }
  }

  if (isMainDiagonalBingo) return true;

  // 副対角線(右上から左下への斜め)の確認
  let isAntiDiagonalBingo = true;
  for (let i = 0; i < bingoSize; i++) {
    const wordCell = wordCellsGrid[i][i];

    if (!wordCell.getIsOpen()) {
      isAntiDiagonalBingo = false;
      break;
    }
  }

  return isAntiDiagonalBingo;
};
