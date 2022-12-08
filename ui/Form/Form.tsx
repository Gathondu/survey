import { FC, ReactNode, FormEventHandler } from "react";

interface FProps {
  children: ReactNode;
  submit: FormEventHandler<HTMLFormElement>;
  styles: {
    width: string;
  };
}
const Form: FC<FProps> = ({ children, submit, styles }) => {
  const { width } = styles;
  return (
    <div style={{ textAlign: "center" }}>
      <form style={{ width, display: "inline-block" }} onSubmit={submit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
