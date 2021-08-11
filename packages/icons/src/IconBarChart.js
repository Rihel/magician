import * as React from 'react';

function SvgIconBarChart(props, svgRef) {
  return (
    <svg
      className="icon_bar_chart_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M85.333 554.667h256V896h-256V554.667zM384 128h256v768H384V128zm298.667 213.333h256V896h-256V341.333z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconBarChart);
export default ForwardRef;
