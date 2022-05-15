import Toast from 'react-native-toast-message';

type ToastProps = {
  type: 'error' | 'success';
  title: string;
  info: string;
  navigate?: () => void;
};

export function ToastNotification({ type, title, info, navigate }: ToastProps) {
  Toast.show({
    type,
    text1: title,
    text2: info,
    autoHide: true,
    onHide: navigate,
  });
}
