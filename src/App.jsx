/* eslint-disable no-unused-vars */
import React, { FC, useMemo, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const connectWallet = async () => {

  }
  const requestAirdrop = async () => {

  }



  return (
    <ConnectionProvider endpoint={endpoint}> 
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                  </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
