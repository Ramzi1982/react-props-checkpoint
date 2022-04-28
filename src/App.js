import './App.css';
import Profile from './components/Profile';
import Image from './/assets/Image.jpg';






function App() {
  return (
    <div className="App">
    <div className="container   ">
      <div className='row'>
        <div className='col-md-4'>
        <Profile FullName="Hamzaoui Ramzi" Bio="Master's degree in plastic arts" Profession="Web Developer"  Image={Image}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
