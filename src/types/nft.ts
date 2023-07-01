export type NftAttribute = {
  trait_type: string;
  value: string;
}

export type NftItem = {
  tokenURI: string;
  tokenId: string;
}

export type NftMeta = {
  name: string;
  description: string;
  image: string;
  attributes: NftAttribute[];
}

export type Nft = {
  meta: NftMeta
} 

export type FileReq = {
  bytes: Uint8Array;
  contentType: string;
  fileName: string;
}

export type PinataRes = {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate: boolean;
}