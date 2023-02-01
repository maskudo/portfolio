function NavBar() {
  return (
    <nav className='w-full py-4 px-8 flex items-center justify-between shadow-sm sticky top-0 left-0 w-full z-100 bg-white'>
      <div>
        <a className=' no-underline text-2xl text-transparent bg-clip-text bg-gradient-to-br  from-fuchsia-500 to-pink-500' href='#'>
          MK
        </a>
      </div>
      <div className='flex items-center h-full'>
        <ul className='flex items-center gap-4 h-full mb-0'>
          <li className='flex items-center h-full'>
            <a
              className='no-underline block text-gray-800 hover:text-blue-800 '
              href='#'
            >
              Home
            </a>
          </li>
          <li className='flex items-center h-full '>
            <a
              className='no-underline block text-gray-800 hover:text-blue-800'
              href='#about'
            >
              About
            </a>
          </li>
          <li className='flex items-center h-full '>
            <a
              className='no-underline block text-gray-800 hover:text-blue-800'
              href='#projects'
            >
              Projects
            </a>
          </li>
          <li className='flex items-center h-full '>
            <a
              className='no-underline block text-gray-800 hover:text-blue-800'
              href='#skills'
            >
              Skills
            </a>
          </li>
          <li className='flex items-center h-full '>
            <a
              className='no-underline block text-gray-800 hover:text-blue-800'
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
