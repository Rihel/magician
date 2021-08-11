import * as React from 'react';

function SvgIconServiceMessage(props, svgRef) {
  return (
    <svg
      className="icon_service_message_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path d="M800 192H224a64 64 0 00-64 64v393.152l.16 4.768a64 64 0 0063.84 59.2h276.448l147.84 121.952a48 48 0 0030.56 10.976l4.64-.224a48 48 0 0043.36-47.776V713.12H800a64 64 0 0064-64V256a64 64 0 00-64-64zm-576 64h576v393.152H662.848v114.944l-139.36-114.944H224V256z" />
      <path d="M352 406.848a45.728 45.728 0 110 91.424 45.728 45.728 0 010-91.424zm160 0a45.728 45.728 0 110 91.424 45.728 45.728 0 010-91.424zm160 0a45.728 45.728 0 110 91.424 45.728 45.728 0 010-91.424z" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceMessage);
export default ForwardRef;
