import './App.css';
import ContentBox from './components/ContentBox';
import NavBar from './components/NavBar';
import data from './data'

function App() {
  const content = data.map(
    item => (
      <ContentBox
        {...item}
      />)
  )
  return (
    <div className="App">
      <NavBar />
      {content}
    </div>
  );
}

export default App;
