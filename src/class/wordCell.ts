/**
 * 単語マスの開閉状態および開封処理を持つクラス
 */
export class WordCell {
  /**
   * 単語マスの開閉状態
   */
  private isOpen: boolean = false;

  /**
   * 単語マス開閉状態の取得処理
   */
  getIsOpen(): boolean {
    return this.isOpen;
  }

  /**
   * 単語マスの開封処理
   */
  cellOpen(): void {
    this.isOpen = true;
  }
}
