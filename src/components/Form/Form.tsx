import { FC, ReactNode, FormEventHandler } from "react";
import { useMobileContext } from "utils";

interface FProps {
  children: ReactNode;
  submit: FormEventHandler<HTMLFormElement>;
}
const Form: FC<FProps> = ({ children, submit }) => {
  const isMoblie = useMobileContext();
  return (
    <div style={{ textAlign: "center" }}>
      <form
        style={{ width: isMoblie ? "100%" : "50%", display: "inline-block" }}
        onSubmit={submit}
      >
        {children}
      </form>
    </div>
  );
};

export default Form;
