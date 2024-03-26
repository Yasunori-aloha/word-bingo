import { WordCell } from "../class/wordCell";
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

  // 横(列)の確認 ※ビンゴしている列があるなら後続処理を中断
  if (
    judgeBingoInVerticalAndHorizontal(bingoSize, (i, j) =>
      wordCellsGrid[i][j].getIsOpen()
    )
  )
    return true;

  // 縦(行)の確認 ※ビンゴしている列があるなら後続処理を中断
  if (
    judgeBingoInVerticalAndHorizontal(bingoSize, (i, j) =>
      wordCellsGrid[j][i].getIsOpen()
    )
  )
    return true;

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

/**
 * 縦・横のどこか１列分の単語マスを確認し、ビンゴしているか判定。
 *
 * @param bingoSize ビンゴの大きさ
 * @param wordCellIsOpen 単語マスが空いているかどうか
 */
const judgeBingoInVerticalAndHorizontal = (
  bingoSize: number,
  wordCellIsOpen: (i: number, j: number) => boolean
) => {
  for (let i = 0; i < bingoSize; i++) {
    let isBingo = true;
    for (let j = 0; j < bingoSize; j++) {
      // 1列の中で開いていないマスがあるなら、その列はビンゴしないと判断する
      if (!wordCellIsOpen(i, j)) {
        isBingo = false;
        break;
      }
    }

    if (isBingo) return true;
  }

  return false;
};
