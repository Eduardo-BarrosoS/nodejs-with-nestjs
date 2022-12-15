import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new Content('Você esta seguindo Eduardo.'),
      category: 'socioal',
      readAt: null,
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
