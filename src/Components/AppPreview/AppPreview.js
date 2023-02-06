import React, { useEffect, useState } from "react";
import { Image } from "./AppPreview.styles";

import ScreenshotImage from "../../Assets/Screenshot01_Dark_iPhone13ProMax.png"
import { getNormalized, getNormalizedClamp, lerp } from "../../Utilities/Math";

const AppPreview = () => {
  let [minHeight, maxHeight] = [75, 95]
  const [height, setHeight] = useState(maxHeight)

  let [minHeightOffset, maxHeightOffset] = [0.75, -1.5]
  const [heightOffset, setHeightOffset] = useState(maxHeightOffset)

  useEffect(() => {
    const handleResize = () => {
      setHeight(lerp(minHeight, maxHeight, getNormalizedClamp(750, 1250, window.innerWidth) ** 2))
      setHeightOffset(lerp(minHeightOffset, maxHeightOffset, getNormalized(700, 1250, window.innerWidth)))
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <Image
      src={ScreenshotImage}
      height={height}
      heightOffset={heightOffset}
    />
  );
};

export default AppPreview;