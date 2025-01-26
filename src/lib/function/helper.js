import { getTheme } from 'mdui/functions/getTheme.js';
import { setTheme } from 'mdui/functions/setTheme.js';
import { getColorFromImage } from 'mdui/functions/getColorFromImage.js';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import { removeColorScheme } from 'mdui/functions/removeColorScheme.js';
import { observeResize } from 'mdui/functions/observeResize.js';
import { breakpoint } from 'mdui/functions/breakpoint.js';

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
 * @param {string | HTMLElement | JQ<HTMLElement>} color
 *
 * @returns {void}
 *
 * @example
 * const color = '#0099ff'
 *
 * setColorSchemeHTML(color)
 *
 */
export function setColorSchemeHTML(color) {
	setColorScheme(color);
}

/**
 *
 * 16진수(HEX) 색상으로 타겟 색상 변경
 * @param {string | HTMLElement | JQ<HTMLElement>} color
 * @param {CustomColor[]} options
 *
 * @returns {void}
 *
 * @example
 * const color = '#0099ff'
 * const option = {
 *  name: 'error'
 *  value: '#f82506'
 * }
 * const options = [option]
 *
 * setColorSchemeElements(color, options)
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
 * 디자인 패턴에 따른 화면 분기점 조건과 일치하는지 확인
 *
 * @returns {breakpointCondition}
 *
 * @example
 * const breakpointCondition = getBreakpoint();
 *
 * type Breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
 *
 * // Check if the current page breakpoint is greater than 'sm'
 * breakpointCondition.up('sm');
 *
 * // Check if the current page breakpoint is less than 'lg'
 * breakpointCondition.down('lg');
 *
 * // Check if the current page breakpoint is equal to 'md'
 * breakpointCondition.only('md');
 *
 * // Check if the current page breakpoint is not equal to 'xl'
 * breakpointCondition.not('xl');
 *
 * // Check if the current page breakpoint is between 'sm' and 'lg'
 * breakpointCondition.between('sm', 'lg');
 *
 */
export function getBreakpoint() {
	return breakpoint();
}

/**
 *
 * 디자인 패턴에 따른 화면 분기점 조건과 일치하는지 확인
 *
 * @returns {breakpointCondition}
 *
 * @example
 * const body = document.body
 * const breakpointCondition = getElementBreakpoint(body);
 *
 * type Breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
 *
 * // Check if the current page breakpoint is greater than 'sm'
 * breakpointCondition.up('sm');
 *
 * // Check if the current page breakpoint is less than 'lg'
 * breakpointCondition.down('lg');
 *
 * // Check if the current page breakpoint is equal to 'md'
 * breakpointCondition.only('md');
 *
 * // Check if the current page breakpoint is not equal to 'xl'
 * breakpointCondition.not('xl');
 *
 * // Check if the current page breakpoint is between 'sm' and 'lg'
 * breakpointCondition.between('sm', 'lg');
 *
 */
export function getElementBreakpoint(element) {
	return breakpoint(element);
}
