import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';

interface IDialogOpts {
  onClose: () => void;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  onClickAction: () => void;
  actionText: string | React.ReactNode;
}

const DialogOut = ({
  onClose,
  title,
  content,
  onClickAction = onClose,
  actionText = 'Close',
}: IDialogOpts) => (
  <Dialog open onClose={onClose}>
    <DialogContent>
      <DialogTitle>{title}</DialogTitle>
      <Typography align='center' component='p'>
        {content}
      </Typography>
      <DialogActions>
        <Button fullWidth color='primary' onClick={onClickAction}>
          {actionText}
        </Button>
      </DialogActions>
    </DialogContent>
  </Dialog>
);

export default DialogOut;
