'use client'
import React, { PropsWithChildren } from "react";
import Navbar from "../components/navbar";
import "./globals.css";
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi'
import { localhost } from "viem/chains";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { publicProvider } from 'wagmi/providers/public'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { chains, publicClient } = configureChains(
  [mainnet, localhost],
  [publicProvider()],
)
 
const config = createConfig({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  publicClient,
})

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
      <WagmiConfig config={config}>
      <Navbar />
      <ToastContainer/>
      {children}
      </WagmiConfig>
      </body>
    </html>
  );
};
export default Layout;