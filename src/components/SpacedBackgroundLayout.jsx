import React, { memo } from "react";

import CustomImageBackground from "./CustomImageBackground";
import SpacedContainer from "./SpacedContainer";

function SpacedBackgroundLayout({ children }) {
  return (
    <CustomImageBackground>
      <SpacedContainer>{children}</SpacedContainer>
    </CustomImageBackground>
  );
}

export default memo(SpacedBackgroundLayout);
