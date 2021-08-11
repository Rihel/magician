import * as React from 'react';

function SvgIconServiceTapd(props, svgRef) {
  return (
    <svg
      className="icon_service_tapd_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M795.733 337.067l-51.2-162.134-535.466 162.134 49.066 164.266 187.734-57.6 100.266 334.934L710.4 729.6 608 394.667l187.733-57.6zm-646.4 537.6H448l-298.667-499.2v499.2zm0-725.334V294.4l499.2-145.067h-499.2zm710.4 0l-134.4 725.334h149.334V149.333h-14.934z"
        fill="#4FC8B9"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceTapd);
export default ForwardRef;
