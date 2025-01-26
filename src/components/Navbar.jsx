// Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const Navbar = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new WalletConnectConnector({
      options: {
        qrcode: true,
      },
    }),
  });
  const { disconnect } = useDisconnect();
  const [isWalletOpen, setWalletOpen] = useState(false);

  const handleWalletToggle = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
    setWalletOpen(!isWalletOpen);
  };

  return (
    <nav className="nav-links">
      <Link to="/home" className="nav-button">Dashboard</Link>
      <Link to="/about" className="nav-button">Updates</Link>
      <Link to="/tools" className="nav-button">Tools</Link>
      <Link to="/features" className="nav-button">Tutorials</Link>

      <button onClick={handleWalletToggle} className="wallet-button">
        {isConnected ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
      </button>
    </nav>
  );
};

export default Navbar;
