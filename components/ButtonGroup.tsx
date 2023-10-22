import CopyButton from "./CopyButton";
import LockButton from "./LockButton";
import SaveButton from "./SaveButton";

const ButtonGroup = ({
  content,
  setIsLock,
  isLock,
}: {
  content: string;
  setIsLock: React.Dispatch<React.SetStateAction<boolean>>;
  isLock: boolean;
}) => {
  return (
    <div className="button__group">
      <SaveButton />
      <CopyButton content={content} />
      <LockButton setIsLock={setIsLock} isLock={isLock} />
    </div>
  );
};

export default ButtonGroup;
