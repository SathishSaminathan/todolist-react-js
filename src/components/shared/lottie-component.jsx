import React from 'react';
import Lottie from 'react-lottie';

const defaultOptions = {
	loop: true,
	autoplay: true,
	// rendererSettings: {
	// 	preserveAspectRatio: 'xMidYMid slice',
	// },
};

const LottieComponent = ({ width = '70%', height = '70%', type, file }) => {
	return <Lottie options={{ ...defaultOptions, animationData: file }} width={width} height={height} />;
};

export default LottieComponent;
