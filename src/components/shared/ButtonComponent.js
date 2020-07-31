import React from 'react';

const ButtonComponent = ({ onClick, text, counterVal }) => {
	return (
		<button onClick={() => onClick(counterVal)}>
			{text} {counterVal}
		</button>
	);
};
export default ButtonComponent;
