'use client'
import { toast } from 'react-toastify';
import { useAccount, useConnect, useDisconnect, useWalletClient } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
 


export default function Home() {
  const notify = () => toast("Wow so easy!");
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  if (isConnected)
    return (
      <div>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
 
  return (
    <div className="grid place-items-center h-screen">
      <div className="text-center text-lg" >
      <h2>This is a NFT Marketplace</h2>
      <p>You can use this Marketplace to post NFTs ,buy and visualize other NFT collections</p>
      </div>
      <div className="grid text-lg">
        <p>Connect your metamask wallet</p>
        <button onClick={() => connect()} className="btn rounded-full bg-indigo-500">Connect</button>
      </div>
    </div>
  );
}