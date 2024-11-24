/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import {RequestAirdrop} from './Airdrop';
import { GetBalance } from "./Balance";
import './App.css';
import { SendTxn } from './SendTxn';
import { SignMessage } from './SignMsg';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="container">
            <h1>Solana Wallet Connection</h1>
            <WalletMultiButton className="wallet-button" />
            <WalletDisconnectButton className="wallet-button" />
            <div className="airdrop-balance-section">
              <RequestAirdrop />
              <GetBalance />
              <SendTxn />
              <SignMessage />
            </div>
            
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
