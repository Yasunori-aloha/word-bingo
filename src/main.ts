import { WordCell } from "./class/wordCell";
import { WordCells } from "./types/wordCells";

/**
 * メイン処理
 * ここで『ワードビンゴ』の処理を実施する。
 * @param inputs 標準入力データの配列(改行区切り)
 */
const main = (inputs: string[]): void => {
  // 選ばれた単語群とビンゴの単語群を準備
  const [choiceWords, wordCells] = setWordsAndCells(inputs);

  // 選ばれた単語群を基にビンゴのマス開け
  openCells(choiceWords, wordCells);

  // ビンゴしているか判定

  // ビンゴ結果を出力
};

/**
 * 標準入力から必要データを準備する。
 *
 * @param inputs 標準入力データ
 * @returns [選ばれた単語群の配列, ビンゴの単語群]
 */
const setWordsAndCells = (inputs: string[]): [string[], WordCells] => {
  // ビンゴゲームのサイズを取得
  const bingoSize: number = parseInt(inputs[0]);
  inputs = inputs.slice(1);

  // ビンゴ内各列の単語を取得し、『単語』をキーとしたオブジェクトに格納
  const wordCells: WordCells = [...Array(bingoSize)].reduce((_, i) => {
    return inputs[i].split(" ").map((word) => {
      return {
        word: new WordCell(word),
      };
    });
  });
  inputs = inputs.slice(bingoSize);

  // 選ばれた単語数を取得
  const choiceWordCount: number = parseInt(inputs[0]);
  inputs = inputs.slice(1);

  // 選ばれた単語群を配列に格納
  const choiceWords = [...Array(choiceWordCount)].map((_, i) => inputs[i]);

  return [choiceWords, wordCells];
};

/**
 * 単語マスの開封処理
 * ※選ばれた単語がビンゴ内にある場合のみ
 *
 * @param inputs 選ばれた単語の配列
 * @param wordCells ビンゴ内にある複数の単語マス
 */
const openCells = (choiceWords: string[], wordCells: WordCells): void => {
  choiceWords.forEach((choiceWord) => {
    const wordcell = wordCells[choiceWord];

    if (!wordcell) return;

    wordcell.cellOpen();
  });
};

/**
 * 標準入力処理
 */
const inputProcess = (): void => {
  const inputs: Array<string> = [];

  // 標準入力ストリームを開始
  process.stdin.resume();

  // 標準入力で受け取ったデータをUTF-8でエンコード
  process.stdin.setEncoding("utf8");

  // 標準入出力を使用したインタフェースを作成
  const reader: any = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // 標準入力の改行ごとにinputs配列に行のデータを格納
  reader.on("line", (line: string) => inputs.push(line));

  // 標準入力が完了したらmain関数を実行
  reader.on("close", () => main(inputs));
};

inputProcess();
