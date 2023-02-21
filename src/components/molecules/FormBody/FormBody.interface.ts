export interface IFormBody {
  children: JSX.Element;
  title: string;
  message: string;
  onSubmit: () => void;
  submitBtnText: string;
  submitBtnDisabled: boolean;
}
