import CustomButton from './CustomButton';

function App() {
  function handleCustomClick({ text, color }) {
    window.alert(`Click ${color} ${text}`);
  }

  return (
    <div>
      <CustomButton
        color="red"
        text="fancy"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="blue"
        text="fancier"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="green"
        text="fanciest"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
