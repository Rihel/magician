import * as React from 'react';

function SvgIconServiceResource(props, svgRef) {
  return (
    <svg
      className="icon_service_resource_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M853.325 85.325C876.877 85.325 896 104.448 896 128v160.307l-383.949 384-.256 180.813 181.146.256L896 650.316V896c0 23.552-19.123 42.675-42.675 42.675h-682.65C147.123 938.675 128 919.552 128 896V128c0-23.552 19.123-42.675 42.675-42.675h682.65zM512 512H298.675v85.325H512V512zm128-170.675H298.675v85.35H640v-85.35z"
        fill="#83E2D6"
      />
      <path
        d="M929.203 375.808l60.314 60.34L657.664 768l-60.416-.077.077-60.262 331.878-331.853z"
        fill="#04A18D"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceResource);
export default ForwardRef;
