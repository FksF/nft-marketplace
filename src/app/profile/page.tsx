'use client'
import NFTContract from '../../../artifacts/contracts/NFT.sol/NFT.json';
import { NftAttribute, NftItem, NftMeta } from "@/types/nft";
import { Address, useAccount, useContractRead } from "wagmi";
import { redirect } from 'next/navigation';



export default  function Profile() {

  const  { address, isConnected}= useAccount()
  if( !isConnected) {
     redirect('/');
  }

  const { data: ownNfts} = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS as Address,
    abi: NFTContract.abi,
    functionName: 'getOwnedNfts',
    account: address
  });
  if(ownNfts){
    return (
    <div className="grid grid-cols-2 gap-2 place-items-center max-h-96">
    <NftCollection collectionData={ownNfts as NftItem[]}></NftCollection>
    </div>
    )
  }
}
 async function NftCollection (props: {collectionData: NftItem[]}) {
  const nfts :NftMeta[]= [];
  for (let i = 0; i < props.collectionData.length; i++) {
    const item = props.collectionData[i];
    const metaRes = await fetch(item.tokenURI);
    const meta = await metaRes.json();
    nfts.push(meta);
    
  }
  return (
    nfts.map((nft, index)=>{
      return(
      
        <div className="card w-96 bg-base-100 shadow-xl text-base" key={index}>
          <figure><img src={nft.image} alt={nft.name}  className='h-48'/></figure>
          <div className="card-body h-96 overflow-auto">
            <div className='input-group'>
              <label className='label text-base font-bold'>Name:</label>
              <h2 className="label">{nft.name}</h2>
            </div>
            <div className='input-group'>
              <label className='label text-base font-bold'>Description:</label>
            <p className='label'>{nft.description}</p>
            </div>
            <div className='input-group'>
            <label className='text-base font-bold'>Attributes</label>
            </div>
            <Attributes rowsData={nft.attributes}></Attributes>
            
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )
    }
  ))
  }

  function Attributes({rowsData}:{rowsData: NftAttribute[]}) {
    return(
        
      rowsData.map((data, index)=>{
        
            return(
              <div key={index} className="input-group p-1">
               <label className='w-full flex-1 font-bold'>{data.trait_type}: </label>
               <label className='w-full flex-2 text-left ml-2'>{data.value}</label>
              </div>
            )
        })
   
    )}

