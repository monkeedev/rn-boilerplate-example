import { NotificationHandlers } from '@components/common/notification/types';
import React from 'react';
import * as Project from '../../app.json';

// ref for app notifications
export const notificationRef = React.createRef<NotificationHandlers>();

// default configuration for spring animations
export const defaultSpringConfig = {
  stiffness: 170,
  damping: 26,
};

export const projectName = Project.displayName;
