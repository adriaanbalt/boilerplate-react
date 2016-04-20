'use strict';

import React from 'react';

function Icon( props ) {
	return (
		<span className={`icon icon-${ props.name }`}></span>
	);
};

export default Icon;