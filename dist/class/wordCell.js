"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordCell = void 0;
/**
 * 単語マスの開閉状態および開封処理を持つクラス
 */
class WordCell {
  /**
   * 単語マスの開閉状態
   */
  isOpen = false;
  /**
   * 単語マス開閉状態の取得処理
   */
  getIsOpen() {
    return this.isOpen;
  }
  /**
   * 単語マスの開封処理
   */
  cellOpen() {
    this.isOpen = true;
  }
}
exports.WordCell = WordCell;
