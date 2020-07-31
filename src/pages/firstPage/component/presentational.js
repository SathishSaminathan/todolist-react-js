import React from 'react';

import ButtonComponent from '@sharedComponent/ButtonComponent';

const Presentational = ({ onIncrementClick, counterVal }) => {
	return <ButtonComponent onClick={() => onIncrementClick(counterVal)} text="Add value" counterVal={counterVal} />;
};

export default Presentational;
