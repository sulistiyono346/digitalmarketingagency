/**
 * @author Junaid Atari
 * @link https://github.com/blacksmoke26
 * @since 2020-09-20
 */

// npm i -S debounce

import { useState, useEffect } from "react";
import debounce from "debounce";

/**
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} Breakpoint
 */

export const SIZE_XS = "xs";
export const SIZE_SM = "sm";
export const SIZE_MD = "md";
export const SIZE_LG = "lg";
export const SIZE_XL = "xl";
export const SIZE_XXL = "xxl";

/**
 * @param {number} width
 * @returns {Breakpoint}
 */
const resolveBreakpoint = (width) => {
  if (width < 576) {
    return SIZE_XS;
  } else if (width >= 576 && width < 768) {
    return SIZE_SM;
  } else if (width >= 768 && width < 992) {
    return SIZE_MD;
  } else if (width >= 992 && width < 1200) {
    return SIZE_LG;
  } else if (width >= 1200 && width < 1440) {
    return SIZE_XL;
  } else if (width >= 1440) {
    return SIZE_XXL;
  }
};

/**
 * @returns {Breakpoint}
 */
const useBreakpoint = () => {
  const [size, setSize] = useState(() => resolveBreakpoint(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = debounce(function () {
      setSize(resolveBreakpoint(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return size;
};

export default useBreakpoint;

// // X-Small devices (portrait phones, less than 576px)
// @media (max-width: 575.98px) { ... }

// // Small devices (landscape phones, less than 768px)
// @media (max-width: 767.98px) { ... }

// // Medium devices (tablets, less than 992px)
// @media (max-width: 991.98px) { ... }

// // Large devices (desktops, less than 1200px)
// @media (max-width: 1199.98px) { ... }

// // X-Large devices (large desktops, less than 1400px)
// @media (max-width: 1399.98px) { ... }
