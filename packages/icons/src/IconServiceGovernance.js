import * as React from 'react';

function SvgIconServiceGovernance(props, svgRef) {
  return (
    <svg
      className="icon_service_governance_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M477.728 160l68.544 40v82.816L614.848 240v82.816L546.272 365.6v442.176a48.224 48.224 0 11-68.544 3.136V408.48l-68.576 42.912.032 272.672a45.696 45.696 0 11-68.608-.032v-312.64l137.152-85.76V160zm137.12 80l68.576 40v85.696L751.968 320l68.576 40 .032 272.64a45.696 45.696 0 11-68.608-.032v-232.64l-68.544 45.728v276.48a48.224 48.224 0 11-68.576 3.136V240zm-137.12-80v82.816L272 371.424l.032 261.216a45.696 45.696 0 11-68.608-.032V331.424L477.696 160z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceGovernance);
export default ForwardRef;
