import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton text="I" color="red" colorBorder="grey" />
      <CustomButton text="know" color="green" colorBorder="grey" />
      <CustomButton text="React!" color="lightblue" colorBorder="blue" />
    </div>
  );
}

export default App;
