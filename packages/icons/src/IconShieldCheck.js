import * as React from 'react';

function SvgIconShieldCheck(props, svgRef) {
  return (
    <svg
      className="icon_shield_check_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M512 42.667l350.592 77.909A42.667 42.667 0 01896 162.219V588.33a256 256 0 01-114.005 212.992L512 981.333l-269.995-180.01A255.915 255.915 0 01128 588.373V162.22a42.667 42.667 0 0133.408-41.643L512 42.666zm189.952 308.138l-211.2 211.158L370.091 441.3l-60.331 60.331 181.035 181.035 271.53-271.531-60.373-60.33z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconShieldCheck);
export default ForwardRef;
