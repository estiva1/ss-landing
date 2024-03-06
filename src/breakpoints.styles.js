const size = {
  xs: "450px", // for small screen mobile
  sm: "600px", // for mobile screen
  smd: "768px", // No'-as-big-as-Medium-but-bigger-than-Small
  md: "960px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  smd: `(max-width: ${size.smd})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};
