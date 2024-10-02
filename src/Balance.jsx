import { useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function GetBalance() {
    const [balance, setBalance] = useState();
    const { connection } = useConnection();
    const wallet = useWallet();

    useEffect(() => {
        async function getBalance() {
            if (wallet.connected) {
                const balance = await connection.getBalance(wallet.publicKey);
                const convertedBalance = balance / LAMPORTS_PER_SOL;
                setBalance(convertedBalance);
            }

            if (!wallet.connected) {
                setBalance(0);
            }
        }

        getBalance();
    }, [balance, connection, wallet.connected, wallet.publicKey]);

    return (
        <div>
            <h1>Your SOL Balance</h1>
            <p>SOL Balance: {balance} SOL</p>
        </div>
    );
}
