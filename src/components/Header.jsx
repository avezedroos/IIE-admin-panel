const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <img 
          src="/logo.svg" 
          alt="Azhaan Mango Logo" 
          className="logo"
        />
        <h1 className="app-name">Azhaan Mango</h1>
      </div>
    </header>
  );
};

export default Header;