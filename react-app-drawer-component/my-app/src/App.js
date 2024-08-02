import SideBar from './Sidebar';

function App() {
  const items = ['Menu', 'About', 'Get Started', 'Sign In'];
  return (
    <div className="App">
      <SideBar items={items} />
    </div>
  );
}

export default App;
