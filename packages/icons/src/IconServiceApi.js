import * as React from 'react';

function SvgIconServiceApi(props, svgRef) {
  return (
    <svg
      className="icon_service_api_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M659.797 640v128L512 853.333 364.203 768V640L512 725.333 659.797 640zM320 192l114.475 66.09-144.171 83.243-.021 174.848L172.203 448V277.333L320 192zm384 0l147.797 85.333V448l-118.101 68.181V341.333l-144.17-83.242L704 192z"
        fill="#4FC8B9"
      />
      <path
        d="M512 274.923l-168.384 97.194v194.411L512 663.723l168.363-97.195v-194.41z"
        fill="#83E2D6"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceApi);
export default ForwardRef;
