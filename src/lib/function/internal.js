import { redFromArgb, blueFromArgb, greenFromArgb } from '@material/material-color-utilities';

export const rgbFromArgb = (source) => {
	const red = redFromArgb(source);
	const green = greenFromArgb(source);
	const blue = blueFromArgb(source);

	return [red, green, blue].join(', ');
};
