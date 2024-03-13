import { useState } from "react";
import { ArrowRightEnabled } from "@/components/icons";

const Arrow = ({
  direction,
  currentIndex,
  lastIndex,
}: {
  direction: "left" | "right";
  currentIndex: number;
  lastIndex?: number;
}) => {
  const [isHoveredRight, setIsHoveredRight] = useState<boolean>(false);
  const disabled: boolean =
    (direction === "left" && currentIndex === 0) ||
    (direction === "right" && currentIndex === lastIndex);

  return (
    <div
      className={`transform ${direction === "left" && "rotate-180"}
      ${disabled === true ? "cursor-not-allowed" : "cursor-pointer "}
      `}
      onMouseOver={() => {
        if (disabled) {
          setIsHoveredRight(false);
        } else {
          setIsHoveredRight(true);
        }
      }}
      onMouseOut={() => setIsHoveredRight(false)}
      style={{
        opacity: isHoveredRight ? 0.8 : disabled ? 0.4 : 1,
      }}
    >
      <ArrowRightEnabled />
    </div>
  );
};

export default Arrow;
