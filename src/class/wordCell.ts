/**
 * 単語マスの開閉状態および開封処理を持つクラス
 */
export class WordCell {
  private word: string;
  /**
   * 単語マスの開閉状態
   */
  private isOpen: boolean = false;

  constructor(word: string) {
    this.word = word;
  }

  /**
   * 単語マスの開封処理
   */
  cellOpen(): void {
    this.isOpen = true;
  }
}
