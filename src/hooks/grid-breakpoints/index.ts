import gridBreakpoint from '@styles/settings/export/grid/breakpoint.module.scss';
import { useMediaQuery } from 'usehooks-ts';

const sortedBreakpoints = Object.fromEntries(
	Object.entries(gridBreakpoint )
		.sort(([,a],[,b]) => parseFloat(a)-parseFloat(b))
);

function breakpointNext(name: string, breakpoints: Record<string, string>) {
	const breakpointKeys = Object.keys(breakpoints);
	const breakpointIndex = breakpointKeys.findIndex(breakpoint => breakpoint == name);
	if (breakpointIndex === -1) {
		throw Error(`breakpoint ${name} not found in ${JSON.stringify(breakpoints)}`)
	}

	return breakpointIndex < breakpointKeys.length
		? breakpointKeys[breakpointIndex + 1]
		: null
}

function breakpointMin(name: string, breakpoints: Record<string, string>) {
	const min = breakpoints[name];
	return parseFloat(min) != 0
		? min
		: null
}

function breakpointMax(name: string, breakpoints: Record<string, string>) {
	const max = breakpoints[name];
	return max && parseFloat(max) > 0
		? max //$max - .02
		: null
}

function mediaBreakpointUp(name: string, breakpoints: Record<string, string>) {
	const min = breakpointMin(name, breakpoints);
	if (min) {
		return `(min-width: ${min})`
	}
	return '';
}

export function mediaBreakpointDown(name: string, breakpoints: Record<string, string>) {
	const max = breakpointMax(name, breakpoints);
	if (max) {
		return `(max-width: ${max})`
	}
	return '';
}

function mediaBreakpointBetween(lower: string, upper: string, breakpoints: Record<string, string>) {
	const min = breakpointMin(lower, breakpoints);
	const max = breakpointMax(upper, breakpoints);

	if (min != null && max != null) {
		return `(min-width: ${min}) and (max-width: ${max})`;
	} else if (max == null) {
		return mediaBreakpointUp(lower, breakpoints);
	} else if (min == null) {
		return mediaBreakpointDown(upper, breakpoints);
	}
	return '';
}

function mediaBreakpointOnly(name: string, breakpoints: Record<string, string>) {
	const min = breakpointMin(name, breakpoints);
	const next = breakpointNext(name, breakpoints);
	const max = breakpointMax(name, breakpoints);

	if (min != null && max != null) {
		return `(min-width: ${min}) and (max-width: ${max})`
	} else if (max == null) {
		return mediaBreakpointUp(name, breakpoints);
	} else if (next && min == null) {
		return mediaBreakpointDown(next, breakpoints);
	}
	return '';
}

const useMediaGridBreakpointUp = (breakpoint: string) => {
	return useMediaQuery(
		mediaBreakpointUp(breakpoint, sortedBreakpoints),
	)
}

const useMediaGridBreakpointDown = (breakpoint: string) => {
	return useMediaQuery(
		mediaBreakpointDown(breakpoint, sortedBreakpoints),
	)
}

const useMediaGridBreakpointBetween = (lowerBreakpoint: string, upperBreakpoint: string) => {
	return useMediaQuery(
		mediaBreakpointBetween(lowerBreakpoint, upperBreakpoint, sortedBreakpoints),
	)
}

const useMediaGridBreakpointOnly = (breakpoint: string) => {
	return useMediaQuery(
		mediaBreakpointOnly(breakpoint, sortedBreakpoints),
	)
}

export {
	useMediaGridBreakpointUp,
	useMediaGridBreakpointDown,
	useMediaGridBreakpointBetween,
	useMediaGridBreakpointOnly
}
