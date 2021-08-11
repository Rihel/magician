import * as React from 'react';

function SvgMenuLine(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ref={svgRef}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMenuLine);
export default ForwardRef;
