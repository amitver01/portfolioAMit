import React from 'react';

const Button = ({
  text,
  bgColor,
  hoverColor,
  textColor,
  padding,
  borderRadius,
  borderColor,
  link, // Add link prop
  onClick, // Add onClick prop for additional click handling
}) => {
  // If link is provided, render as an anchor tag; otherwise, render as a button
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${bgColor} hover:${hoverColor} ${textColor} ${padding} ${borderRadius} ${borderColor ? `border ${borderColor}` : ''} inline-block text-center`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${bgColor} hover:${hoverColor} ${textColor} ${padding} ${borderRadius} ${borderColor ? `border ${borderColor}` : ''}`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Submit',
  bgColor: 'bg-custom-blue',
  hoverColor: 'hover:bg-custom-blue-hover',
  textColor: 'text-black',
  padding: 'py-3 px-6',
  borderRadius: 'rounded-lg',
  borderColor: '', // Default to no border color
  link: '', // Default to no link
  onClick: () => {}, // Default to an empty function
};

export default Button;
