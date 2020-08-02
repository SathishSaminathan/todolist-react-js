import React from 'react';
import Lottie from 'react-lottie';

const defaultOptions = {
	loop: true,
	autoplay: true,
	// rendererSettings: {
	// 	preserveAspectRatio: 'xMidYMid slice',
	// },
};

const LottieComponent = ({ width = '100%', height = '100%', type, file }) => {
	return <Lottie options={{ ...defaultOptions, animationData: file }} width={width} height={height} />;
};

export default LottieComponent;
