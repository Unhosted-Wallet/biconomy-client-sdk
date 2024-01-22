import { SmartAccountSigner } from "@alchemy/aa-core";
import { WalletClient } from "viem";
import { Signer } from "@ethersproject/abstract-signer";

export type SupportedSignerName = "alchemy" | "ethers" | "viem";
export type SupportedSigner = SmartAccountSigner | WalletClient | Signer;
