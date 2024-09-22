import {useState, useEffect} from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function GetBalance() {
    const [balance, setBalance] = useState();
    const {connection} = useConnection();
    const wallet = useWallet();

    useEffect(() => {
        async function getBalance() {
            if(wallet.connected) {
                const balance = await connection.getBalance(wallet.publicKey);
                    console.log({balance});
                    const convertedBalance = balance / LAMPORTS_PER_SOL;
                    
                    setBalance(convertedBalance);
              }
        }

        getBalance();
      
    }, [balance, connection, wallet.connected, wallet.publicKey]);

    return <div>
    <p>SOL Balance:{balance} </p> 
</div>
}