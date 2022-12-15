import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Você esta seguindo Eduardo.');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => new Content('bbb')).toThrow();
  });

  it('it should not be able to create a notification content with more than 5 caracters', () => {
    expect(() => new Content('bbb'.repeat(200))).toThrow();
  });
});
