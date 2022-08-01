import { useState, useEffect } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/car-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// Function Component
const App = () => {
  // Hooks//
  // useState
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className='search-box-monsters'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
//       response.json().then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {}
//         )
//       )
//     );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rolodex</h1>
//

//     );
//   }
// }

export default App;
