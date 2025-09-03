import React from 'react';

const Copyright: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ textAlign: 'center', padding: '1rem 0', fontSize: '0.9rem', color: '#666' }}>
            <p>&copy; {currentYear} Copyright Atlanta Life. All Rights Reserved</p>
        </footer>
    );
};

export default Copyright;