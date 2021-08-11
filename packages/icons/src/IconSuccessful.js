import * as React from 'react';

function SvgIconSuccessful(props, svgRef) {
  return (
    <svg
      className="icon_successful_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M512 938.688a426.688 426.688 0 110-853.312 426.688 426.688 0 010 853.312zm-42.56-256l301.696-301.696-60.352-60.352-241.28 241.344L348.736 441.28l-60.288 60.352L469.44 682.688z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconSuccessful);
export default ForwardRef;
