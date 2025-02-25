import { getTheme } from 'mdui/functions/getTheme.js';
import { setTheme } from 'mdui/functions/setTheme.js';
import { getColorFromImage } from 'mdui/functions/getColorFromImage.js';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import { removeColorScheme } from 'mdui/functions/removeColorScheme.js';
import { observeResize } from 'mdui/functions/observeResize.js';
import {
	DynamicScheme,
	SchemeTonalSpot,
	Hct,
	argbFromHex,
	TonalPalette
} from '@material/material-color-utilities';
import { rgbFromArgb } from './internal.js';

/**
 *
 * <html>에 적용한 테마 값 확인
 * @returns {'light' | 'dark' | 'auto'}
 *
 * @example
 * const theme = getHTMLTheme();
 *
 * console.log(theme);
 *
 * // theme: 'dark'
 *
 */
export function getHTMLTheme() {
	return getTheme();
}

/**
 *
 * 특정 요소에 적용한 테마 값 확인
 * @param {string | HTMLElement | JQ<HTMLElement>} element
 *
 * @returns {'light' | 'dark' | 'auto'}
 *
 * @example
 * const element = document.querySelector('.element');
 * const theme = getElementTheme(element);
 *
 * console.log(theme);
 *
 * // theme: 'dark'
 *
 */
export function getElementTheme(element) {
	return getTheme(element);
}

/**
 *
 * <html> 테마 적용
 * @param {'light' | 'dark' | 'auto'} theme
 *
 * @returns {void}
 *
 * @example
 * const theme = 'dark'
 *
 * setHTMLTheme(theme);
 *
 */
export function setHTMLTheme(theme) {
	setTheme(theme);
}

/**
 *
 * 특정 요소에 테마 적용
 * @param {'light' | 'dark' | 'auto'} theme
 * @param {string | HTMLElement | JQ<HTMLElement>} element
 *
 * @returns {void}
 *
 * @example
 * const theme = 'dark'
 * const element = document.querySelector('.element');
 *
 * setElementTheme(theme, element);
 *
 */
export function setElementTheme(theme, element) {
	setTheme(theme, element);
}

/**
 *
 * 이미지에서 색상 추출
 * @param {string} source
 *
 * @returns {Promise<string>}
 *
 * @example
 * const source = 'https://statics.google.com/image'
 * const color = await getColorFromImageSource(source)
 *
 * console.log(color)
 *
 * // color: #0099ff
 *
 */
export async function getColorFromImageSource(source) {
	const image = new Image();
	image.src = source;

	return await getColorFromImage(image);
}

/**
 *
 * 16진수(HEX) 색상으로 <html> 색상 변경
 *
 * contrast as 0.0 for default contrast,
 * 0.5 for higher contrast,
 * 1.0 for highest contrast, and
 * -1.0 for reduced contrast.
 *
 * @param {string | HTMLElement | JQ<HTMLElement>} color
 * @param {number} contrast
 *
 * @returns {void}
 *
 * @example
 * const color = '#0099ff'
 *
 * setColorSchemeHTML(color)
 *
 * @example
 * const color = '#0099ff'
 * const contrast = 0.5
 *
 * setColorSchemeHTML(color, contrast)
 *
 */
export function setColorSchemeHTML(
	color,
	{
		contrast = 0.0,
		primary = null,
		secondary = null,
		tertiary = null,
		neutral = null,
		neutralVariant = null
	}
) {
	const lightSource = new SchemeTonalSpot(Hct.fromInt(argbFromHex(color)), false, contrast);
	const darkSource = new SchemeTonalSpot(Hct.fromInt(argbFromHex(color)), true, contrast);
	const root = document.querySelector(':root');

	const light = new DynamicScheme({
		sourceColorArgb: argbFromHex(color),
		variant: lightSource,
		isDark: false,
		contrastLevel: contrast,
		primaryPalette: primary
			? TonalPalette.fromInt(argbFromHex(primary))
			: lightSource.primaryPalette,
		secondaryPalette: secondary
			? TonalPalette.fromInt(argbFromHex(secondary))
			: lightSource.secondaryPalette,
		tertiaryPalette: tertiary
			? TonalPalette.fromInt(argbFromHex(tertiary))
			: lightSource.tertiaryPalette,
		neutralPalette: neutral
			? TonalPalette.fromInt(argbFromHex(neutral))
			: lightSource.neutralPalette,
		neutralVariantPalette: neutralVariant
			? TonalPalette.fromInt(argbFromHex(neutralVariant))
			: lightSource.neutralVariantPalette
	});
	const dark = new DynamicScheme({
		sourceColorArgb: argbFromHex(color),
		variant: darkSource,
		isDark: true,
		contrastLevel: contrast,
		primaryPalette: primary
			? TonalPalette.fromInt(argbFromHex(primary))
			: darkSource.primaryPalette,
		secondaryPalette: secondary
			? TonalPalette.fromInt(argbFromHex(secondary))
			: darkSource.secondaryPalette,
		tertiaryPalette: tertiary
			? TonalPalette.fromInt(argbFromHex(tertiary))
			: darkSource.tertiaryPalette,
		neutralPalette: neutral
			? TonalPalette.fromInt(argbFromHex(neutral))
			: darkSource.neutralPalette,
		neutralVariantPalette: neutralVariant
			? TonalPalette.fromInt(argbFromHex(neutralVariant))
			: darkSource.neutralVariantPalette
	});

	[(light, dark)].forEach((theme) => {
		// Primary
		root.style.setProperty(
			`--mdui-color-primary-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.primary)
		);

		// Primary container
		root.style.setProperty(
			`--mdui-color-primary-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.primaryContainer)
		);

		// On primary
		root.style.setProperty(
			`--mdui-color-on-primary-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onPrimary)
		);

		// On primary container
		root.style.setProperty(
			`--mdui-color-on-primary-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onPrimaryContainer)
		);

		// Inverse primary
		root.style.setProperty(
			`--mdui-color-inverse-primary-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.inversePrimary)
		);

		// Secondary
		root.style.setProperty(
			`--mdui-color-secondary-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.secondary)
		);

		// Secondary container
		root.style.setProperty(
			`--mdui-color-secondary-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.secondaryContainer)
		);

		// On secondary
		root.style.setProperty(
			`--mdui-color-on-secondary-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onSecondary)
		);

		// On secondary container
		root.style.setProperty(
			`--mdui-color-on-secondary-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onSecondaryContainer)
		);

		// Tertiary
		root.style.setProperty(
			`--mdui-color-tertiary-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.tertiary)
		);

		// Tertiary container
		root.style.setProperty(
			`--mdui-color-tertiary-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.tertiaryContainer)
		);

		// On tertiary
		root.style.setProperty(
			`--mdui-color-on-tertiary-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onTertiary)
		);

		// On tertiary container
		root.style.setProperty(
			`--mdui-color-on-tertiary-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onTertiaryContainer)
		);

		// Surface
		root.style.setProperty(
			`--mdui-color-surface-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surface)
		);

		// Surface dim
		root.style.setProperty(
			`--mdui-color-surface-dim-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceDim)
		);

		// Surface bright
		root.style.setProperty(
			`--mdui-color-surface-bright-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceBright)
		);

		// Surface container lowest
		root.style.setProperty(
			`--mdui-color-surface-container-lowest-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceContainerLowest)
		);

		// Surface container low
		root.style.setProperty(
			`--mdui-color-surface-container-low-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceContainerLow)
		);

		// Surface container
		root.style.setProperty(
			`--mdui-color-surface-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceContainer)
		);

		// Surface container high
		root.style.setProperty(
			`--mdui-color-surface-container-high-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceContainerHigh)
		);

		// Surface container highest
		root.style.setProperty(
			`--mdui-color-surface-container-highest-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceContainerHighest)
		);

		// Surface variant
		root.style.setProperty(
			`--mdui-color-surface-variant-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceVariant)
		);

		// On surface
		root.style.setProperty(
			`--mdui-color-on-surface-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onSurface)
		);

		// On surface variant
		root.style.setProperty(
			`--mdui-color-on-surface-variant-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onSurfaceVariant)
		);

		// Inverse
		root.style.setProperty(
			`--mdui-color-inverse-surface-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.inverseSurface)
		);

		// Inverse on surface
		root.style.setProperty(
			`--mdui-color-inverse-on-surface-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.inverseOnSurface)
		);

		// Background
		root.style.setProperty(
			`--mdui-color-background-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.background)
		);

		// On background
		root.style.setProperty(
			`--mdui-color-on-background-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onBackground)
		);

		// Error
		root.style.setProperty(
			`--mdui-color-error-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.error)
		);

		// Error container
		root.style.setProperty(
			`--mdui-color-error-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.errorContainer)
		);

		// On error
		root.style.setProperty(
			`--mdui-color-on-error-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onError)
		);

		// On error container
		root.style.setProperty(
			`--mdui-color-on-error-container-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.onErrorContainer)
		);

		// Outline
		root.style.setProperty(
			`--mdui-color-outline-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.outline)
		);

		// Outline variant
		root.style.setProperty(
			`--mdui-color-outline-variant-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.outlineVariant)
		);

		// Shadow
		root.style.setProperty(
			`--mdui-color-shadow-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.shadow)
		);

		// Surface tint
		root.style.setProperty(
			`--mdui-color-surface-tint-color-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.surfaceTint)
		);

		// Scrim
		root.style.setProperty(
			`--mdui-color-scrim-${theme.isDark ? 'dark' : 'light'}`,
			rgbFromArgb(theme.scrim)
		);
	});
}

/**
 *
 * 16진수(HEX) 색상으로 타겟 색상 변경
 * @param {string | HTMLElement | JQ<HTMLElement>} color
 * @param {object} [options]
 * @param {string} [options.target]
 * @param {CustomColor[]} [options.CustomColors]
 *
 * @returns {void}
 *
 * @example
 * const color = '#0099ff'
 * const target = '.target'
 * const option = {
 *  name: 'error'
 *  value: '#f82506'
 * }
 * const options = [option]
 *
 * setColorSchemeElements(color, {target, customColors: options})
 *
 */
export function setColorSchemeElements(color, options) {
	setColorScheme(color, options);
}

/**
 *
 * <html>에 적용한 테마 제거
 * @returns {void}
 *
 * @example
 *
 * removeColorSchemeHTML()
 *
 */
export function removeColorSchemeHTML() {
	removeColorScheme();
}

/**
 *
 * 특정 요소에 적용한 테마 제거
 * @param {string | HTMLElement | JQ<HTMLElement>} element
 *
 * @returns {void}
 *
 * @example
 * const element = document.querySelector('.element')
 *
 * removeColorSchemeElements(element)
 *
 */
export function removeColorSchemeElements(element) {
	removeColorScheme(element);
}

/**
 *
 * 특정 요소 크기 모니터링 및 콜백 함수 실행
 * @param {string | HTMLElement | JQ<HTMLElement>} element
 *
 * @returns {ObserveResize}
 *
 * @example
 * const body = document.body
 * const observer = getResizeObserver(body, function(entry, observer) {
 *   // At this point, document.body's size has changed. You can get the new size from entry.
 *   console.log(entry);
 *
 *   // Call this method to stop observing
 *   observer.unobserve();
 * })
 *
 */
export function getResizeObserver(element, callback) {
	return observeResize(element, callback);
}

/**
 *
 * 디자인 패턴에 따른 화면 분기점에 따라 분기점 이름 전달
 *
 * @returns {void}
 *
 * @example
 * const callback = {
 *   compact: (event) => {
 *     if (event.matches) breakpoint = 'compact';
 *   },
 *   medium: (event) => {
 *     if (event.matches) breakpoint = 'medium';
 *   },
 *   expanded: (event) => {
 *     if (event.matches) breakpoint = 'expanded';
 *   },
 *   large: (event) => {
 *     if (event.matches) breakpoint = 'large';
 *   },
 *   extraLarge: (event) => {
 *     if (event.matches) breakpoint = 'extraLarge';
 *   },
 * }
 *
 * onMount(() => {
 *	 addBreakPointEvent(callback)
 * });
 *
 */
export function addBreakPointEvent(callback) {
	const compact = window.matchMedia('(min-width: 0px) and (max-width: 599px)');
	compact.addEventListener('change', callback.compact);

	const medium = window.matchMedia('(min-width: 600px) and (max-width: 839px)');
	medium.addEventListener('change', callback.medium);

	const expanded = window.matchMedia('(min-width: 840px) and (max-width: 1199px)');
	expanded.addEventListener('change', callback.expanded);

	const large = window.matchMedia('(min-width: 1200px) and (max-width: 1599px)');
	large.addEventListener('change', callback.large);

	const extraLarge = window.matchMedia('(min-width: 1600px)');
	extraLarge.addEventListener('change', callback.extraLarge);
}

/**
 *
 * 디자인 패턴에 따른 화면 분기점에 따라 분기점 이름 전달
 *
 * @returns {'compact' | 'medium' | 'expanded' | 'large' | 'extraLarge'}
 *
 * @example
 * let breakpoint = $state();
 *
 * onMount(() => {
 *	 breakpoint = getBreakPoint();
 * });
 *
 */
export function getBreakPoint() {
	// Excecute Once
	if (window.matchMedia('(min-width: 0px) and (max-width: 599px)').matches) return 'compact';
	if (window.matchMedia('(min-width: 600px) and (max-width: 839px)').matches) return 'medium';
	if (window.matchMedia('(min-width: 840px) and (max-width: 1199px)').matches) return 'expanded';
	if (window.matchMedia('(min-width: 1200px) and (max-width: 1599px)').matches) return 'large';
	return 'extraLarge';
}
