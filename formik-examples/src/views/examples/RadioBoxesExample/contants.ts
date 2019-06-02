import { Notification } from './types';

export const NOTIFICATIONS: Notification[] = [
  {
    title: 'Fraud',
    subtitle:
      'Receive a notification when a transaction gets declined due to a fraud rule.',
    value: 'fraud',
  },
  {
    title: 'Payouts',
    subtitle: 'Receive payout notification updates.',
    value: 'payouts',
  },
  {
    title: 'Chargebacks',
    subtitle:
      'Receive a notification for each new chargeback and dispute status updates.',
    value: 'chargebacks',
  },
  {
    title: 'Notification failures',
    subtitle: 'Receive a notification if and IPN is failing.',
    value: 'notification_failures',
  },
  {
    title: 'New sales',
    subtitle: 'Receive a notification for every new sale.',
    value: 'new_sales',
  },
  {
    title: 'Refunds',
    subtitle: 'Receive a notification if payment gets refunded.',
    value: 'refunds',
  },
  {
    title: 'Subscriptions',
    subtitle:
      'Receive a notification for failed recurring payment attempts or cancelations.',
    value: 'subscriptions',
  },
];
