export const DESIGN_WIDTHS = {
  mobile: 384,
  desktop: 1280,
};

const { mobile, desktop } = DESIGN_WIDTHS;

export const BREAKPOINTS = {
  small: mobile * 1.5,
  medium: desktop * 0.75,
  large: desktop,
  xlarge: desktop * 1.25,
};
