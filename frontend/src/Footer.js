import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'lightgray', padding: '20px', marginTop: '20px',fontSize: '13px' }}>
    <div style={{ textAlign: 'center', fontSize: '13px' }}>
      <p><strong>Contact me</strong>: chaudharysuchita166@gmail.com</p>
      <p><strong>My works</strong>: <a href="https://github.com/Suchita01" target="_blank"> GitHub</a></p>
    </div>
    <div style={{ textAlign: 'center', marginTop: '10px' ,fontSize: '13px' }}>
      <p>&copy; 2024 Your Website. All Rights Reserved.</p>
    </div>
  </footer>
  );
}
export default Footer;
