import * as React from 'react';

function SvgIconBookmark(props, svgRef) {
  return (
    <svg
      className="icon_bookmark_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M170.667 85.333h682.666A42.667 42.667 0 01896 128v822.443a21.333 21.333 0 01-30.037 19.498L512 811.947 158.037 969.899A21.333 21.333 0 01128 950.443V128a42.667 42.667 0 0142.667-42.667zM512 576l125.397 65.92-23.936-139.605 101.419-98.902-140.203-20.394L512 256l-62.72 127.019-140.16 20.394 101.419 98.902-23.894 139.605L512 576z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconBookmark);
export default ForwardRef;
