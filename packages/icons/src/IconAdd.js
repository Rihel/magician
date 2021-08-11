import * as React from 'react';

function SvgIconAdd(props, svgRef) {
  return (
    <svg
      className="icon_add_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M544 224v256h256v64H544v256h-64V544H224v-64h256V224h64z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconAdd);
export default ForwardRef;
