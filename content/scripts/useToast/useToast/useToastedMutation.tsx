import React from 'react';
import { useMutation } from '@apollo/react-hooks';

export default ({ setShowSpinner, makeToast, setCompletedDialog, burnToast, setErrorDialog }) =>
  // variation on useMutation which shows the toast,
  // and controls the load spinner
  (mutation, successMsgOriginal: string | object, optsOriginal?: object) => {
    // method overloading
    let opts;
    let successMsg;

    if (typeof successMsgOriginal !== 'string' && !optsOriginal) {
      opts = successMsgOriginal || {};
    } else {
      successMsg = successMsgOriginal;
      opts = optsOriginal || {};
    }

    const {
      onCompleted,
      onError,
      errorMsg,
      completedDialog: completedDialogOpts,
      errorDialog: errorDialogOpts,
      ...other
    } = opts;

    const [runMutation] = useMutation(mutation, {
      ...other,
      onCompleted: (data) => {
        setShowSpinner(false);
        if (successMsg) makeToast(typeof successMsg === 'string' ? successMsg : successMsg(data));
        if (completedDialogOpts) setCompletedDialog(completedDialogOpts);
        if (onCompleted) onCompleted(data);
      },
      onError: (e) => {
        setShowSpinner(false);
        const gqlErrorMessage = e.message.split('GraphQL error: ')[1];

        if (!errorDialogOpts) {
          let message = gqlErrorMessage;

          if (errorMsg) {
            message = typeof errorMsg === 'string' ? errorMsg : errorMsg(gqlErrorMessage);
          }
          burnToast(message);
        } else {
          setErrorDialog(errorDialogOpts);
        }
        if (onError) onError(e);
      },
    });

    return [
      (...props) => {
        setShowSpinner(true);
        runMutation(...props);
      },
    ];
  };
