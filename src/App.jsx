import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import getUser from './firebase';

function App() {
  const [user, setUser] = useState({});
  // const [user, setUser] = useState({
  //   name: 'Manuj Babu Karki',
  //   university: 'Tribhuvan University',
  //   degree: 'Computer Engineering',
  //   interests: ['Web development', 'Systems Programming', 'Dev ops'],
  //   skills: ['html', 'css', 'js', 'c', 'c++'],
  //   socials: [
  //     { name: 'Github', link: 'https://github.com/maskudo' },
  //     { name: 'LinkedIN', link: 'https://linkedin.com/johndoe' },
  //   ],
  // });
  useEffect(() => {
    getUser().then((u) => {
      setUser(u);
    });
  }, []);
  return (
    <div className='app'>
      <NavBar user={user} />
      <About user={user} />
      <Projects user={user} />
      <Skills user={user} />
      <Contact user={user} />
    </div>
  );
}

export default App;
