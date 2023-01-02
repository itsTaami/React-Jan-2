import logo from './logo.svg';
import './App.css';

function App() {

  const users = [

    { name: "John", age: 35, imageURL: `https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=` },
    { name: "Boldo", age: 15, imageURL: "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=" },
    { name: "Dorj", age: 20, imageURL: "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=" },
    { name: "Bat", age: 25, imageURL: "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=" },
    { name: "Naraa", age: 40, imageURL: "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=" },

  ];
  let total = 0;
  for (let i = 0; i < users.length; i++) {

    total += users[i].age;

  }
  let average = total / users.length;
  console.log(average);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2 className="something">My Web Application</h2>
      <p>Something about my web.</p>
      <p>Average age:{average}</p>
      <div className="users">
      <div className="user">
        <div className="userInfo">
          <p className='name'>Name:{users[0].name}</p>
          <p className='age'>Age:{users[0].age}</p>
        </div>

        <div className="img">
          <img src={users[0].imageURL} alt="" />
        </div>
      </div>
      <div className="user">
        <div className="userInfo">
          <p className='name'>Name:{users[0].name}</p>
          <p className='age'>Age:{users[0].age}</p>
        </div>

        <div className="img">
          <img src={users[0].imageURL} alt="" />
        </div>
      </div>
      <div className="user">
        <div className="userInfo">
          <p className='name'>Name:{users[0].name}</p>
          <p className='age'>Age:{users[0].age}</p>
        </div>

        <div className="img">
          <img src={users[0].imageURL} alt="" />
        </div>
      </div>
      <div className="user">
        <div className="userInfo">
          <p className='name'>Name:{users[0].name}</p>
          <p className='age'>Age:{users[0].age}</p>
        </div>

        <div className="img">
          <img src={users[0].imageURL} alt="" />
        </div>
      </div>
      <div className="user">
        <div className="userInfo">
          <p className='name'>Name:{users[0].name}</p>
          <p className='age'>Age:{users[0].age}</p>
        </div>

        <div className="img">
          <img src={users[0].imageURL} alt="" />
        </div>
      </div>

      </div>
     
    </div>
  );
}

export default App;
