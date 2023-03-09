import { NotificationHandlers } from '@components/common/notification/types';
import React from 'react';

// ref for app notifications
export const notificationRef = React.createRef<NotificationHandlers>();

export const defaultSpringConfig = {
  stiffness: 170,
  damping: 26,
};
