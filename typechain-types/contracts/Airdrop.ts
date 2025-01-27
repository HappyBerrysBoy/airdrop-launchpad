/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Airdrop {
  export type AirdropDataStruct = {
    account: AddressLike;
    amount: BigNumberish;
    claimedAmount: BigNumberish;
    claimIndex: BigNumberish;
  };

  export type AirdropDataStructOutput = [
    account: string,
    amount: bigint,
    claimedAmount: bigint,
    claimIndex: bigint
  ] & {
    account: string;
    amount: bigint;
    claimedAmount: bigint;
    claimIndex: bigint;
  };
}

export interface AirdropInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN_ROLE"
      | "PRECISION"
      | "airdropData"
      | "airdropIndex"
      | "batchInsertAirdropData"
      | "claim"
      | "collect"
      | "dataLength"
      | "deleteAirdropData"
      | "endTimestamp"
      | "getAirdropData"
      | "getAirdropDataByAddress"
      | "getAllAirdropData"
      | "getClaimableAmount"
      | "getFullyClaimedAccounts"
      | "grantRole"
      | "hasRole"
      | "insertAirdropData"
      | "isEnded"
      | "isStarted"
      | "isValidAirdropId"
      | "revokeRole"
      | "startTimestamp"
      | "tgePercent"
      | "tokenAddress"
      | "totalAirdropAmount"
      | "updateAirdropData"
      | "updateEndTimestamp"
      | "updateStartTimestamp"
      | "vestingCount"
      | "vestingTerm"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AirdropEndTimeUpdated"
      | "AirdropStartTimeUpdated"
      | "Claimed"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "airdropData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropIndex",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "batchInsertAirdropData",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "collect", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dataLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deleteAirdropData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "endTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAirdropData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAirdropDataByAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllAirdropData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getFullyClaimedAccounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "insertAirdropData",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isEnded", values?: undefined): string;
  encodeFunctionData(functionFragment: "isStarted", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isValidAirdropId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "startTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tgePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAirdropAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateAirdropData",
    values: [AddressLike, Airdrop.AirdropDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEndTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStartTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vestingCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingTerm",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "airdropData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchInsertAirdropData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dataLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteAirdropData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAirdropData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAirdropDataByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllAirdropData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFullyClaimedAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "insertAirdropData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isEnded", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStarted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidAirdropId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tgePercent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAirdropAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAirdropData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEndTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStartTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingTerm",
    data: BytesLike
  ): Result;
}

export namespace AirdropEndTimeUpdatedEvent {
  export type InputTuple = [newEndTime: BigNumberish];
  export type OutputTuple = [newEndTime: bigint];
  export interface OutputObject {
    newEndTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AirdropStartTimeUpdatedEvent {
  export type InputTuple = [newStartTime: BigNumberish];
  export type OutputTuple = [newStartTime: bigint];
  export interface OutputObject {
    newStartTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimedEvent {
  export type InputTuple = [
    receiver: AddressLike,
    amount: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    receiver: string,
    amount: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    receiver: string;
    amount: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    admin: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, admin: string];
  export interface OutputObject {
    role: string;
    account: string;
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    admin: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, admin: string];
  export interface OutputObject {
    role: string;
    account: string;
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Airdrop extends BaseContract {
  connect(runner?: ContractRunner | null): Airdrop;
  waitForDeployment(): Promise<this>;

  interface: AirdropInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  airdropData: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        account: string;
        amount: bigint;
        claimedAmount: bigint;
        claimIndex: bigint;
      }
    ],
    "view"
  >;

  airdropIndex: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  batchInsertAirdropData: TypedContractMethod<
    [_accounts: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  claim: TypedContractMethod<[], [void], "nonpayable">;

  collect: TypedContractMethod<[], [void], "nonpayable">;

  dataLength: TypedContractMethod<[], [bigint], "view">;

  deleteAirdropData: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  endTimestamp: TypedContractMethod<[], [bigint], "view">;

  getAirdropData: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        totalAmount: bigint;
        claimedAmount: bigint;
        claimableAmount: bigint;
      }
    ],
    "view"
  >;

  getAirdropDataByAddress: TypedContractMethod<
    [_address: AddressLike],
    [
      [bigint, bigint, bigint] & {
        totalAmount: bigint;
        claimedAmount: bigint;
        claimableAmount: bigint;
      }
    ],
    "view"
  >;

  getAllAirdropData: TypedContractMethod<
    [],
    [Airdrop.AirdropDataStructOutput[]],
    "view"
  >;

  getClaimableAmount: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getFullyClaimedAccounts: TypedContractMethod<
    [],
    [Airdrop.AirdropDataStructOutput[]],
    "view"
  >;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  insertAirdropData: TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  isEnded: TypedContractMethod<[], [boolean], "view">;

  isStarted: TypedContractMethod<[], [boolean], "view">;

  isValidAirdropId: TypedContractMethod<
    [index: BigNumberish],
    [boolean],
    "view"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  startTimestamp: TypedContractMethod<[], [bigint], "view">;

  tgePercent: TypedContractMethod<[], [bigint], "view">;

  tokenAddress: TypedContractMethod<[], [string], "view">;

  totalAirdropAmount: TypedContractMethod<[], [bigint], "view">;

  updateAirdropData: TypedContractMethod<
    [_address: AddressLike, _airdropData: Airdrop.AirdropDataStruct],
    [void],
    "nonpayable"
  >;

  updateEndTimestamp: TypedContractMethod<
    [_endTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateStartTimestamp: TypedContractMethod<
    [_startTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  vestingCount: TypedContractMethod<[], [bigint], "view">;

  vestingTerm: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "airdropData"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        account: string;
        amount: bigint;
        claimedAmount: bigint;
        claimIndex: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "airdropIndex"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "batchInsertAirdropData"
  ): TypedContractMethod<
    [_accounts: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "collect"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dataLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deleteAirdropData"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "endTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAirdropData"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        totalAmount: bigint;
        claimedAmount: bigint;
        claimableAmount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAirdropDataByAddress"
  ): TypedContractMethod<
    [_address: AddressLike],
    [
      [bigint, bigint, bigint] & {
        totalAmount: bigint;
        claimedAmount: bigint;
        claimableAmount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAllAirdropData"
  ): TypedContractMethod<[], [Airdrop.AirdropDataStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getClaimableAmount"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getFullyClaimedAccounts"
  ): TypedContractMethod<[], [Airdrop.AirdropDataStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "insertAirdropData"
  ): TypedContractMethod<
    [_account: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isEnded"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isStarted"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isValidAirdropId"
  ): TypedContractMethod<[index: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "startTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tgePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokenAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalAirdropAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "updateAirdropData"
  ): TypedContractMethod<
    [_address: AddressLike, _airdropData: Airdrop.AirdropDataStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateEndTimestamp"
  ): TypedContractMethod<[_endTimestamp: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateStartTimestamp"
  ): TypedContractMethod<[_startTimestamp: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vestingCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vestingTerm"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "AirdropEndTimeUpdated"
  ): TypedContractEvent<
    AirdropEndTimeUpdatedEvent.InputTuple,
    AirdropEndTimeUpdatedEvent.OutputTuple,
    AirdropEndTimeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "AirdropStartTimeUpdated"
  ): TypedContractEvent<
    AirdropStartTimeUpdatedEvent.InputTuple,
    AirdropStartTimeUpdatedEvent.OutputTuple,
    AirdropStartTimeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Claimed"
  ): TypedContractEvent<
    ClaimedEvent.InputTuple,
    ClaimedEvent.OutputTuple,
    ClaimedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "AirdropEndTimeUpdated(uint256)": TypedContractEvent<
      AirdropEndTimeUpdatedEvent.InputTuple,
      AirdropEndTimeUpdatedEvent.OutputTuple,
      AirdropEndTimeUpdatedEvent.OutputObject
    >;
    AirdropEndTimeUpdated: TypedContractEvent<
      AirdropEndTimeUpdatedEvent.InputTuple,
      AirdropEndTimeUpdatedEvent.OutputTuple,
      AirdropEndTimeUpdatedEvent.OutputObject
    >;

    "AirdropStartTimeUpdated(uint256)": TypedContractEvent<
      AirdropStartTimeUpdatedEvent.InputTuple,
      AirdropStartTimeUpdatedEvent.OutputTuple,
      AirdropStartTimeUpdatedEvent.OutputObject
    >;
    AirdropStartTimeUpdated: TypedContractEvent<
      AirdropStartTimeUpdatedEvent.InputTuple,
      AirdropStartTimeUpdatedEvent.OutputTuple,
      AirdropStartTimeUpdatedEvent.OutputObject
    >;

    "Claimed(address,uint256,uint256)": TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;
    Claimed: TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
