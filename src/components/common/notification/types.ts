export type NotificationTypes = 'info' | 'success' | 'warning' | 'error';
export enum NotificationColors {
  info = '#2196f3',
  success = '#61D163',
  warning = '#EDBE5E',
  error = '#E25336',
}

export interface NotificationState {
  message: string;
  type: NotificationTypes;
}

export type NotificationHandlers = {
  open: (msg: string, type?: NotificationTypes) => void;
};

export interface NotificationProps {
  onOpen?: () => void;
  onHide?: () => void;
  ref?: React.ForwardedRef<NotificationHandlers>;
  forwardedRef?: React.ForwardedRef<NotificationHandlers>;
}
