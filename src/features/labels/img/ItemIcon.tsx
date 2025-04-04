import { Community, Person } from "lemmy-js-client";
import { useState } from "react";

import FakeIcon from "#/features/shared/FakeIcon";
import { cx } from "#/helpers/css";
import { getImageSrc } from "#/services/lemmy";

import styles from "./ItemIcon.module.css";

interface ItemIconProps {
  item: Community | Person | string;
  size?: number;
  className?: string;
  slot?: string;
}

export default function ItemIcon({
  item,
  size,
  className,
  slot,
}: ItemIconProps) {
  const [failed, setFailed] = useState(false);

  size = size ?? 28;

  if (typeof item === "string")
    return (
      <FakeIcon seed={item} name={item} className={className} size={size} />
    );

  const icon = "posting_restricted_to_mods" in item ? item.icon : item.avatar;

  if (icon && !failed)
    return (
      <img
        style={{ 
                    borderRadius:   `50%`,
                    minWidth:       `${size}px`,
                    minHeight:      `${size}px`,
                    maxWidth:       `${size}px`, 
                    maxHeight:      `${size}px`,
                    width:          `${size}px`, 
                    height:         `${size}px` }}

        src={getImageSrc(icon, {
          size,
        })}
        onError={() => {
          setFailed(true);
        }}
        slot={slot}
      />
    );

  // className={cx(styles.subImgIcon, className)}

  return (
    <FakeIcon
      seed={item.id}
      name={item.name}
      className={className}
      size={size}
      slot={slot}
    />
  );
}
