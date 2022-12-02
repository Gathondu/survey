import { FC, ReactNode, FormEventHandler } from "react";
import { useScreenSizeContext } from "@utils/Context";

interface FProps {
  children: ReactNode;
  submit: FormEventHandler<HTMLFormElement>;
}
const Form: FC<FProps> = ({ children, submit }) => {
  const { isMobile } = useScreenSizeContext();
  return (
    <div style={{ textAlign: "center" }}>
      <form
        style={{ width: isMobile ? "100%" : "50%", display: "inline-block" }}
        onSubmit={submit}
      >
        {children}
      </form>
    </div>
  );
};

export default Form;
