'use client'
import React from "react";
import Link from "next/link";
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { localhost } from "viem/chains";
 

const Navbar = () => {
    
  return (
    <div className="navbar bg-base-100 hero">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">NFT Marketplace</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/mint">Mint</Link>
          </li>
          <li>
            <Link href="/collection">Collection</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;