import * as React from 'react';

function SvgIconServiceNol(props, svgRef) {
  return (
    <svg
      className="icon_service_nol_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M341.333 192a149.333 149.333 0 01149.334 149.333v149.334H341.333a149.333 149.333 0 010-298.667z"
        fill="#83E2D6"
      />
      <path
        d="M341.333 533.333h149.334v149.334a149.333 149.333 0 11-149.334-149.334z"
        fill="#4FC8B9"
      />
      <path
        d="M682.667 192a149.333 149.333 0 010 298.667H533.333V341.333A149.333 149.333 0 01682.667 192z"
        fill="#83E2D6"
      />
      <path
        d="M533.333 533.333h149.334a149.333 149.333 0 11-149.334 149.334V533.333z"
        fill="#04A18D"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceNol);
export default ForwardRef;
