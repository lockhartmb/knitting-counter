import './button.css';

export const Button = ({ label, onClick, to }) => {
  if (to) {
    return <a href={to}>{label}</a>;
  }

  return (
    <button type='button' onClick={onClick}>
      {label}
    </button>
  );
};
