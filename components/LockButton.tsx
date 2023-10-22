"use client";

import { LockClosedIcon } from "@heroicons/react/24/outline";
import { LockOpenIcon } from "@heroicons/react/24/outline";

const LockButton = ({
  setIsLock,
  isLock,
}: {
  setIsLock: React.Dispatch<React.SetStateAction<boolean>>;
  isLock: boolean;
}) => {
  return (
    <button className={"button"} onClick={() => setIsLock((prev) => !prev)}>
      {isLock ? (
        <LockOpenIcon width={18} color="white" />
      ) : (
        <LockClosedIcon width={18} color="white" />
      )}

      {isLock ? "Unlock" : "Lock"}
    </button>
  );
};

export default LockButton;
