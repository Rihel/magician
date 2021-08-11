import * as React from 'react';

function SvgArrowRight(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ref={svgRef}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowRight);
export default ForwardRef;
