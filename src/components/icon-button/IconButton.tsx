import { IconButtonProps } from './IconButton.types';

export const IconButton = (props: IconButtonProps) => {
  const { icon } = props;
  return (
    <button
      className="hover:scale-150 active:scale-90 transition duration-300 ease-in-out"
      {...props}
    >
      {icon}
    </button>
  );
};
