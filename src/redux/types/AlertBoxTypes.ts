export interface AlertBoxState {
   visible: boolean;
   title: string;
   appearance: "info" | "warning" | "error" | "confirmation" | "change" | undefined;
   actions: any;
   body: any;
}
