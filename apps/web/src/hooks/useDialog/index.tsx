import { ReactNode, useCallback } from 'react';

import { useOverlay } from '@repo/utils';

import Alert from '@/components/Alert';

const useDialog = () => {
  const { push } = useOverlay();

  const alert = useCallback(
    (message: ReactNode) => {
      return new Promise((resolve) => {
        push(<Alert>{message}</Alert>, { onClose: () => resolve(true) });
      });
    },
    [push],
  );

  return { alert };
};

export default useDialog;
