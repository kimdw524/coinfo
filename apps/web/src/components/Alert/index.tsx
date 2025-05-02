import { ReactNode } from 'react';

import { Box, Button } from '@repo/ui';
import { useOverlay } from '@repo/utils';

import * as s from './style.css';

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  const { close } = useOverlay();

  return (
    <div className={s.container}>
      <div className={s.message}>{children}</div>
      <Box flex justifyContent="flex-end">
        <Button size="sm" onClick={close}>
          확인
        </Button>
      </Box>
    </div>
  );
};

export default Alert;
