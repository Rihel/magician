import * as React from 'react';

function SvgIconRocket(props, svgRef) {
  return (
    <svg
      className="icon_rocket_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M231.91 604.376l177.96 177.96a234.388 234.388 0 01-177.96 0 234.388 234.388 0 010-177.96zm373.436 109.406L598.5 822.218l-48.936 48.99L143.037 464.68l48.99-48.936 108.436-6.845 147.402-147.456c88.495-88.495 227.436-100.19 344.172-39.289 60.901 116.736 49.206 255.677-39.29 344.172L605.293 713.782zM549.565 464.68A71.842 71.842 0 10651.21 363.035 71.842 71.842 0 00549.565 464.68z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconRocket);
export default ForwardRef;
