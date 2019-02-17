import Setting from '../src/js/Settings.js';

describe('TEST: class Setting', () => {
  test('this setting already exists', () => {
    const setting = new Setting();
    expect(() => setting.option = ['theme', '']).toThrow();
  });

  test('this method is needed for overwriting', () => {
    const setting = new Setting();
    expect(() => setting.optionEdit = ['love books', 'War and world']).toThrow();
  });

  test('default setting', () => {
    const setting = new Setting();
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    expect(setting.option).toEqual(expected);
  });

  test('user setting', () => {
    const setting = new Setting();
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
      ['love books', 'War and world'],
    ]);

    setting.option = ['love books', 'War and world'];

    expect(setting.option).toEqual(expected);
  });

  test('edit setting', () => {
    const setting = new Setting();
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'chillout'],
      ['difficulty', 'easy'],
    ]);

    setting.optionEdit = ['music', 'chillout'];

    expect(setting.option).toEqual(expected);
  });
});
