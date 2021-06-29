import React from 'react';

import CustomImageBackground from './CustomImageBackground';
import SpacedContainer from './SpacedContainer';

export default function SpacedBackgroundLayout({ children }) {
	return(
		<CustomImageBackground>
			<SpacedContainer>
				{children}
			</SpacedContainer>
    </CustomImageBackground>
	)
}