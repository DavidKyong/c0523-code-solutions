export default function CustomButton({ text, color, colorBorder }) {
  const buttonCSS = {
    backgroundColor: color,
    borderColor: colorBorder,
  };

  return <button style={buttonCSS}>{text}</button>;
}
