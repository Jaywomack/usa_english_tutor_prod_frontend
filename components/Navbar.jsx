const Navbar = () => {
  return (
    <nav className='w-full flex items-center border-b'>
      <a href='#' className='no-underline '>
        Home
      </a>

      <ul className='list-none flex items-center justify-around w-full h-24 '>
        <li>
          <a href='#' className='no-underline'>
            About
          </a>
        </li>
        <li>
          <a href='#' className='no-underline'>
            Blog
          </a>
        </li>
        <li>
          <a href='#' className='no-underline'>
            Lessons
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
