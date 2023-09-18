import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.css';

export default function Button({
  type, title, handleClick, styleClass, disabled, children,
}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(styles.button, styleClass, { [styles.disabled]: disabled })}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  styleClass: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
Button.defaultProps = {
  handleClick: () => null,
  styleClass: null,
  disabled: null,
  children: null,
};
