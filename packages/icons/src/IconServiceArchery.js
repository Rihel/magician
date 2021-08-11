import * as React from 'react';

function SvgIconServiceArchery(props, svgRef) {
  return (
    <svg
      className="icon_service_archery_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M832 423.104v106.667c0 88.362-143.296 160-320 160s-320-71.638-320-160V423.104c0 88.363 143.296 160 320 160s320-71.637 320-160z"
        fill="#4FC8B9"
      />
      <path
        d="M192 600.896c0 88.341 143.296 160 320 160s320-71.659 320-160v106.667c0 88.341-143.296 160-320 160s-320-71.659-320-160V600.896z"
        fill="#04A18D"
      />
      <path
        d="M512 512c-176.704 0-320-71.637-320-160s143.296-160 320-160 320 71.637 320 160-143.296 160-320 160z"
        fill="#83E2D6"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceArchery);
export default ForwardRef;
