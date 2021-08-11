import './style.less';

import CSSTranstion from 'react-transition-group/CSSTransition';
import React from 'react';

const Transition = ({ name, show, children, ...props }) => {
  return (
    <CSSTranstion
      timeout={500}
      in={show}
      unmountOnExit
      {...props}
      classNames={name}
    >
      {children}
    </CSSTranstion>
  );
};

const createTransition =
  (name) =>
  ({ show, children }) => {
    return (
      <Transition name={name} show={show}>
        {children}
      </Transition>
    );
  };

Transition.Fade = createTransition('fade');
Transition.FadeLeft = createTransition('fade-left');
Transition.FadeRight = createTransition('fade-right');
Transition.FadeDown = createTransition('fade-down');
Transition.FadeUp = createTransition('fade-up');

export default Transition;
