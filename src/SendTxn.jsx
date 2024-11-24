import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export function SendTxn() {
    const wallet = useWallet();
    const { connection } = useConnection();
    
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState('');

    async function sendTokens() {
        if (!to || !amount) {
            alert("Please enter a valid address and amount");
            return;
        }
        
        console.log({to, amount});
        console.log(amount * LAMPORTS_PER_SOL);
        
        // Create Txn
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        const txn = await wallet.sendTransaction(transaction, connection);
        console.log({ txn });

        alert("Sent " + amount + " SOL to " + to);
    }

    return (
        <div>
            <h1>Send Solana Tokens</h1>

            <input
                type="text"
                placeholder="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={sendTokens} disabled={!wallet.connected}>Send</button>
        </div>
    );
}
