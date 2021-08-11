import * as React from 'react';

function SvgIconTime(props, svgRef) {
  return (
    <svg
      className="icon_time_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M512 938.688a426.688 426.688 0 110-853.312 426.688 426.688 0 010 853.312zM554.688 512V298.688h-85.376v298.624h256V512H554.688z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconTime);
export default ForwardRef;
