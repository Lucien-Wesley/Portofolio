
const Header = () => {

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold">Wesley</a>
        <nav className="lg:flex md:items-center hidden">
          <ul className="lg:flex lg:space-x-4">
            <li><a href="#home" className="hover:text-blue-600">Acceuil</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Competence</a></li>
            <li><a href="#timeline" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <button
          className="block"
          onClick={()=>{}}
        >
          <span className="block w-8 h-0.5 bg-black mb-1"></span>
          <span className="block w-8 h-0.5 bg-black mb-1"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
