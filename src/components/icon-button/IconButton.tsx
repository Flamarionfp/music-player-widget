import { IconButtonProps } from "./IconButton.types";

export const IconButton = (props: IconButtonProps) => {
  const { icon } = props;
  return (
    <button
      className="hover:scale-150 transition duration-300 ease-in-out"
      {...props}
    >
      {icon}
    </button>
  );
};
