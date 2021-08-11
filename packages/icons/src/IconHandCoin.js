import * as React from 'react';

function SvgIconHandCoin(props, svgRef) {
  return (
    <svg
      className="icon_hand_coin_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M398.08 490.667h92.587a192 192 0 01192 192h-298.71l.043 42.666h341.333v-42.666a237.995 237.995 0 00-37.802-128h123.136a213.333 213.333 0 01192.682 121.642C902.443 809.472 739.072 896 554.667 896c-117.803 0-217.6-25.173-298.667-69.333V429.696a297.259 297.259 0 01142.08 60.97zm-184.747 320a42.667 42.667 0 01-42.666 42.666H85.333a42.667 42.667 0 01-42.666-42.666v-384A42.667 42.667 0 0185.333 384h85.334a42.667 42.667 0 0142.666 42.667v384zM768 213.333a128 128 0 110 256 128 128 0 010-256zm-298.667-128a128 128 0 110 256 128 128 0 010-256z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconHandCoin);
export default ForwardRef;
