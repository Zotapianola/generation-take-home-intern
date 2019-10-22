import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>    
            <h1 style={h1Style}> Mis <i className="fas fa-store"></i> favoritas</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '2px'
}

const h1Style = {
    textAlign: 'left',
    fontSize: '1.8rem',
    padding: '8px',
    border: 'none',
    marginBottom: 'none',
    marginBlockStart: '0',
    marginBlockEnd: '0',
    marginInlineStart: '0',
    marginInlineEnd: '0'
}

export default Header;