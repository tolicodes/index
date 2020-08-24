import React, { useState } from "react";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "components/Common/Dialog";
import useToastedMutation from "./useToastedMutation";

const AUTOHIDE_DURATION = 8000;

type Severity = "error" | "success";

interface ToastState {
  open: boolean;
  severity?: Severity;
  message?: string | React.ReactNode;
}

const Spinner = styled(CircularProgress)`
  color: white;
  width: 28px !important;
  height: 28px !important;
`;

// Usage:

// In your component:

// import useToast from 'components/Common/useToast';

// export default () => {
// const {
//     makeToast,
//     burnToast,
//     closeToast,
//     toastComponent,
//     useToastedMutation,
//   } = useToast();

//   const mutate = () => useToastedMutation(
//     YOUR_MUTATION,
//     {
//       successMsg: 'Your Mutation Succeeded',
//       variables: { yourVar: 1 },
//       onCompleted: (data) => {
//         // optional other stuff to do on success
//       },
//       onError: (e) => {
//         // optional other stuff to do on failure
//       }
//     }
//   )

//   return (
//     <div>
//     <button onClick={makeToast('Success!')}>Success!</button>
//     <button onClick={burnToast('Fail!')}>Fail!</button>
//     <button onClick={mutate()}>Mutate!</button>
//     {toastComponent}
//     </div>
//   );
// }

export default () => {
  const [toastState, setToastState] = useState<ToastState>({
    open: false,
  });

  const [showSpinner, setShowSpinner] = useState(false);

  const [completedDialog, setCompletedDialog] = useState(null);
  const [errorDialog, setErrorDialog] = useState(null);

  // shows a toast
  const makeToast = (
    message: string | React.ReactNode,
    severity: Severity = "success"
  ) =>
    setToastState({
      message,
      open: true,
      severity,
    });

  // shows an error toast
  const burnToast = (message: string | React.ReactNode) =>
    makeToast(message, "error");

  // close the snackbar alert message
  const tossToast = () =>
    setToastState({
      open: false,
    });

  return {
    burnToast,
    makeToast,
    setCompletedDialog,
    setErrorDialog,
    spinnerComponent: showSpinner ? <Spinner /> : null,
    toastComponent: (
      <React.Fragment>
        <Snackbar
          autoHideDuration={AUTOHIDE_DURATION}
          open={toastState.open}
          onClose={tossToast}
        >
          <Alert severity={toastState.severity} onClose={tossToast}>
            {toastState.message}
          </Alert>
        </Snackbar>
        {completedDialog && (
          <Dialog
            title="Success"
            {...completedDialog}
            onClose={() => setCompletedDialog(null)}
          />
        )}
        {errorDialog && (
          <Dialog
            title="Fail"
            {...errorDialog}
            onClose={() => setErrorDialog(null)}
          />
        )}
      </React.Fragment>
    ),
    tossToast,
    useToastedMutation: useToastedMutation({
      burnToast,
      makeToast,
      setCompletedDialog,
      setErrorDialog,
      setShowSpinner,
    }),
  };
};
