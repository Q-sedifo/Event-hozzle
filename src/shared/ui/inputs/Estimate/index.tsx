"use client";
import React, { useState } from "react";
import clsx from "clsx";

// Icons
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";

import { RiStarSFill } from "react-icons/ri";

interface Props {
  rate?: number;
  active?: boolean;
  onChange?: (rate: number) => void;
}

export const Estimate = ({ rate = 0, active, onChange }: Props) => {
  const [hoverFilledStars, setHoverFilledStars] = useState<number>(0);
  const starsCount = [1, 2, 3, 4, 5];

  const handleClick = (rate: number) => {
    onChange && onChange(rate);
  };

  const handleHover = (rate: number) => {
    setHoverFilledStars(rate);
  };

  return (
    <div
      className={clsx("flex w-fit items-center gap-1 text-yellow", {
        "cursor-pointer": active,
      })}
      onMouseLeave={() => setHoverFilledStars(() => 0)}
    >
      {starsCount.map((item, index) => (
        <span key={index}>
          {(active ? index < (hoverFilledStars || rate) : index < rate) ? (
            <TbStarFilled
              onClick={() => handleClick(item)}
              onMouseEnter={() => handleHover(item)}
            />
          ) : (
            <TbStar
              onClick={() => handleClick(item)}
              onMouseEnter={() => handleHover(item)}
            />
          )}
        </span>
      ))}
    </div>
  );
};
