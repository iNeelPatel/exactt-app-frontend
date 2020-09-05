import ActionsTypes from ".";

export default function (dispatch: any, appearance: "info" | "warning" | "error" | "confirmation" | "change" | undefined, body: string) {
   dispatch({
      type: ActionsTypes.ALERT_SHOW,
      payload: {
         appearance: appearance,
         body: body,
      },
   });
   setTimeout(() => {
      dispatch({
         type: ActionsTypes.ALERT_HIDE,
         payload: {},
      });
   }, 3000);
}
