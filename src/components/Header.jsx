import React from 'react';

function Header({ activeTab, setActiveTab }) {
  const navigation = [
    { name: 'About Me', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <h1>Your Name</h1>
      </div>
      <nav className="nav">
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <button 
                className={activeTab === item.id ? 'active' : ''} 
                onClick={() => setActiveTab(item.id)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;