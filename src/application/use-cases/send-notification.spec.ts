import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'this is the first send notifiaction test',
      category: 'social',
      recipientId: 'exemple-recipent-ts',
    });

    expect(notification).toBeTruthy();
  });
});
