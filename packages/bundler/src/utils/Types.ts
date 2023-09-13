import { ethers, BigNumber } from "ethers";
import { ChainId, UserOperation } from "@biconomy/core-types";

export type Bundlerconfig = {
  bundlerUrl: string;
  entryPointAddress?: string;
  chainId: ChainId;
  userOpReceiptIntervals?: { [key in ChainId]?: number };
};

export type UserOpReceipt = {
  userOpHash: string;
  entryPoint: string;
  sender: string;
  nonce: number;
  paymaster: string;
  actualGasCost: BigNumber;
  actualGasUsed: BigNumber;
  success: boolean;
  reason: string;
  logs: Array<ethers.providers.Log>; // The logs generated by this UserOperation (not including logs of other UserOperations in the same bundle)
  receipt: ethers.providers.TransactionReceipt;
};

// Converted to JsonRpcResponse with strict type
export type GetUserOperationResponse = {
  jsonrpc: string;
  id: number;
  result: UserOpReceipt;
  error?: JsonRpcError;
};

// Converted to JsonRpcResponse with strict type
export type SendUserOpResponse = {
  jsonrpc: string;
  id: number;
  result: string;
  error?: JsonRpcError;
};

export type UserOpResponse = {
  userOpHash: string;
  wait(_confirmations?: number): Promise<UserOpReceipt>;
};

// Converted to JsonRpcResponse with strict type
export type EstimateUserOpGasResponse = {
  jsonrpc: string;
  id: number;
  result: UserOpGasResponse;
  error?: JsonRpcError;
};

export type UserOpGasResponse = {
  preVerificationGas: string;
  verificationGasLimit: string;
  callGasLimit: string;
  maxPriorityFeePerGas: string;
  maxFeePerGas: string;
};

// Converted to JsonRpcResponse with strict type
export type GetUserOpByHashResponse = {
  jsonrpc: string;
  id: number;
  result: UserOpByHashResponse;
  error?: JsonRpcError;
};

//  TODO: need to verify this type from infinitism bundler, stackup
export type UserOpByHashResponse = UserOperation & {
  transactionHash: string;
  blockNumber: number;
  blockHash: string;
  entryPoint: string;
};
/* eslint-disable  @typescript-eslint/no-explicit-any */
export type JsonRpcError = {
  code: string;
  message: string;
  data: any;
};
