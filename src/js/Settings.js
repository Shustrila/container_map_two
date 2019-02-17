/***
 * class settings
 */
class Settings {
  //
  constructor() {
    this._option = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  /***
   * setter edit settings
   * @param {Array} arr - array with key and value
   */
  set optionEdit(arr) {
    if (this._option.has(arr[0])) {
      this._option.delete(arr[0]);
      this._option.set(arr[0], arr[1]);
    } else {
      throw new TypeError('this method is needed for overwriting');
    }
  }

  /***
   * setter add settings
   * @param {Array} arr - array with key and value
   */
  set option(arr) {
    if (this._option.has(arr[0])) throw new TypeError('this setting already exists');
    this._option.set(arr[0], arr[1]);
  }

  /***
   * getter option
   * @returns {Map<string, any>}
   */
  get option() {
    return this._option;
  }
}

export default Settings;
