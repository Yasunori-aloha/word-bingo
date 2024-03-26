import { WordCell } from "./class/wordCell";

/**
 * メイン処理
 * ここで『ワードビンゴ』の処理を実施する。
 * @param inputs 標準入力データの配列(改行区切り)
 */
const main = (inputs: string[]) => {
  // ビンゴゲームのサイズを取得
  const bingoSize: number = parseInt(inputs[0]);
  inputs = inputs.slice(1);

  // ビンゴ内各列の単語を取得し、『単語』をキーとしたオブジェクトに格納
  const wordCells: Record<string, WordCell> = [...Array(bingoSize)].reduce(
    (_, i) => {
      return inputs[i].split(" ").map((word) => {
        return {
          word: new WordCell(word),
        };
      });
    }
  );
  inputs = inputs.slice(bingoSize);

  // 選ばれた単語数を取得
  const choiceWordCount: number = parseInt(inputs[0]);
  inputs = inputs.slice(1);

  // 選ばれた単語群を基にビンゴのマス開け
  // ビンゴしているか判定
  // ビンゴ結果を出力
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
