import { IMaskInput } from "../../../types/Props";
import { withMask  } from "use-mask-input";

const MaskInput = ({
  mask,
  onChange,
  value,
  placeholder,
  ...props
}: IMaskInput) => {
  return (
    <input
      className="ant-input css-dev-only-do-not-override-1978fas ant-input-outlined"
      ref={withMask(mask)}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default MaskInput;

