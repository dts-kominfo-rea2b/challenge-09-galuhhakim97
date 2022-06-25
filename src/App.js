import './App.css';
import contacts from './data/contacts.json';
import Contacts from './components/Contact';
import Header from './components/Header';


// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
        <div className='bingkai'>
          <Contacts data={contacts[0]}/>
          <Contacts data={contacts[1]}/>
          <Contacts data={contacts[2]}/>
          <Contacts data={contacts[3]}/>
          <Contacts data={contacts[4]}/>
          <Contacts data={contacts[5]}/>
        </div>
    </div>
  );
}

export default App;
