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

export interface SpinnerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN_ROLE"
      | "MAX_PROBABILITY"
      | "PRECISION"
      | "countPerKaia"
      | "endBlock"
      | "feeRelayer"
      | "freeSpinPerDay"
      | "getLastRechargeBlock"
      | "getProbabilities"
      | "getRemainingAmounts"
      | "getSegmentAmounts"
      | "getUserSegmentHits"
      | "getUserSegmentHitsAll"
      | "getUserSpinCount"
      | "getUserSpinsAvailable"
      | "grantRole"
      | "hasRole"
      | "isActive"
      | "lastRechargeBlock"
      | "rechargeBlockInterval"
      | "rechargeSpins"
      | "revokeRole"
      | "segmentAmounts"
      | "segmentProbabilities"
      | "segmentRemaining"
      | "setBlockRange"
      | "setCountPerKaia"
      | "setFeeRelayer"
      | "setFreeSpinsPerDay"
      | "setRechargeBlockInterval"
      | "setSegmentAmounts"
      | "setTotalSegments"
      | "spin"
      | "startBlock"
      | "totalSegments"
      | "totalSpins"
      | "userSegmentHits"
      | "userSpinCount"
      | "userSpinsAvailable"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "RechargeSpins"
      | "RoleGranted"
      | "RoleRevoked"
      | "SpinResult"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_PROBABILITY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "countPerKaia",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "freeSpinPerDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRechargeBlock",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProbabilities",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRemainingAmounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSegmentAmounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserSegmentHits",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserSegmentHitsAll",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserSpinCount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserSpinsAvailable",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastRechargeBlock",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rechargeBlockInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rechargeSpins",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "segmentAmounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "segmentProbabilities",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "segmentRemaining",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBlockRange",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCountPerKaia",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeRelayer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFreeSpinsPerDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRechargeBlockInterval",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSegmentAmounts",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTotalSegments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "spin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSegments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSpins",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userSegmentHits",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userSpinCount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userSpinsAvailable",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_PROBABILITY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "countPerKaia",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeRelayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "freeSpinPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRechargeBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProbabilities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemainingAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSegmentAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserSegmentHits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserSegmentHitsAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserSpinCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserSpinsAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastRechargeBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rechargeBlockInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rechargeSpins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "segmentAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "segmentProbabilities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "segmentRemaining",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBlockRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCountPerKaia",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFreeSpinsPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRechargeBlockInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSegmentAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTotalSegments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "spin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSegments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalSpins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userSegmentHits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userSpinCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userSpinsAvailable",
    data: BytesLike
  ): Result;
}

export namespace RechargeSpinsEvent {
  export type InputTuple = [user: AddressLike, blockNumber: BigNumberish];
  export type OutputTuple = [user: string, blockNumber: bigint];
  export interface OutputObject {
    user: string;
    blockNumber: bigint;
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

export namespace SpinResultEvent {
  export type InputTuple = [
    user: AddressLike,
    segment: BigNumberish,
    randomNumber: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    segment: bigint,
    randomNumber: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    user: string;
    segment: bigint;
    randomNumber: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Spinner extends BaseContract {
  connect(runner?: ContractRunner | null): Spinner;
  waitForDeployment(): Promise<this>;

  interface: SpinnerInterface;

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

  MAX_PROBABILITY: TypedContractMethod<[], [bigint], "view">;

  PRECISION: TypedContractMethod<[], [bigint], "view">;

  countPerKaia: TypedContractMethod<[], [bigint], "view">;

  endBlock: TypedContractMethod<[], [bigint], "view">;

  feeRelayer: TypedContractMethod<[], [string], "view">;

  freeSpinPerDay: TypedContractMethod<[], [bigint], "view">;

  getLastRechargeBlock: TypedContractMethod<
    [user: AddressLike],
    [[bigint, bigint]],
    "view"
  >;

  getProbabilities: TypedContractMethod<[], [bigint[]], "view">;

  getRemainingAmounts: TypedContractMethod<[], [bigint[]], "view">;

  getSegmentAmounts: TypedContractMethod<[], [bigint[]], "view">;

  getUserSegmentHits: TypedContractMethod<
    [user: AddressLike, segment: BigNumberish],
    [bigint],
    "view"
  >;

  getUserSegmentHitsAll: TypedContractMethod<
    [user: AddressLike],
    [bigint[]],
    "view"
  >;

  getUserSpinCount: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  getUserSpinsAvailable: TypedContractMethod<
    [user: AddressLike],
    [bigint],
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

  isActive: TypedContractMethod<[], [boolean], "view">;

  lastRechargeBlock: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  rechargeBlockInterval: TypedContractMethod<[], [bigint], "view">;

  rechargeSpins: TypedContractMethod<[user: AddressLike], [void], "nonpayable">;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  segmentAmounts: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  segmentProbabilities: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  segmentRemaining: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  setBlockRange: TypedContractMethod<
    [_startBlock: BigNumberish, _endBlock: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCountPerKaia: TypedContractMethod<
    [_countPerKaia: BigNumberish],
    [void],
    "nonpayable"
  >;

  setFeeRelayer: TypedContractMethod<
    [_feeRelayer: AddressLike],
    [void],
    "nonpayable"
  >;

  setFreeSpinsPerDay: TypedContractMethod<
    [_freeSpinsPerDay: BigNumberish],
    [void],
    "nonpayable"
  >;

  setRechargeBlockInterval: TypedContractMethod<
    [_rechargeBlockInterval: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSegmentAmounts: TypedContractMethod<
    [amounts: BigNumberish[], probabilities: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  setTotalSegments: TypedContractMethod<
    [_totalSegments: BigNumberish],
    [void],
    "nonpayable"
  >;

  spin: TypedContractMethod<
    [],
    [[bigint, bigint] & { segment: bigint; randomNumber: bigint }],
    "nonpayable"
  >;

  startBlock: TypedContractMethod<[], [bigint], "view">;

  totalSegments: TypedContractMethod<[], [bigint], "view">;

  totalSpins: TypedContractMethod<[], [bigint], "view">;

  userSegmentHits: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  userSpinCount: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  userSpinsAvailable: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MAX_PROBABILITY"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "countPerKaia"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "endBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeRelayer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "freeSpinPerDay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastRechargeBlock"
  ): TypedContractMethod<[user: AddressLike], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "getProbabilities"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getRemainingAmounts"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getSegmentAmounts"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getUserSegmentHits"
  ): TypedContractMethod<
    [user: AddressLike, segment: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserSegmentHitsAll"
  ): TypedContractMethod<[user: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getUserSpinCount"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUserSpinsAvailable"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
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
    nameOrSignature: "isActive"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastRechargeBlock"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rechargeBlockInterval"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rechargeSpins"
  ): TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "segmentAmounts"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "segmentProbabilities"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "segmentRemaining"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "setBlockRange"
  ): TypedContractMethod<
    [_startBlock: BigNumberish, _endBlock: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCountPerKaia"
  ): TypedContractMethod<[_countPerKaia: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeRelayer"
  ): TypedContractMethod<[_feeRelayer: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFreeSpinsPerDay"
  ): TypedContractMethod<
    [_freeSpinsPerDay: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRechargeBlockInterval"
  ): TypedContractMethod<
    [_rechargeBlockInterval: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSegmentAmounts"
  ): TypedContractMethod<
    [amounts: BigNumberish[], probabilities: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTotalSegments"
  ): TypedContractMethod<[_totalSegments: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "spin"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { segment: bigint; randomNumber: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "startBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSegments"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSpins"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userSegmentHits"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "userSpinCount"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "userSpinsAvailable"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "RechargeSpins"
  ): TypedContractEvent<
    RechargeSpinsEvent.InputTuple,
    RechargeSpinsEvent.OutputTuple,
    RechargeSpinsEvent.OutputObject
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
  getEvent(
    key: "SpinResult"
  ): TypedContractEvent<
    SpinResultEvent.InputTuple,
    SpinResultEvent.OutputTuple,
    SpinResultEvent.OutputObject
  >;

  filters: {
    "RechargeSpins(address,uint256)": TypedContractEvent<
      RechargeSpinsEvent.InputTuple,
      RechargeSpinsEvent.OutputTuple,
      RechargeSpinsEvent.OutputObject
    >;
    RechargeSpins: TypedContractEvent<
      RechargeSpinsEvent.InputTuple,
      RechargeSpinsEvent.OutputTuple,
      RechargeSpinsEvent.OutputObject
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

    "SpinResult(address,uint256,uint256,uint256)": TypedContractEvent<
      SpinResultEvent.InputTuple,
      SpinResultEvent.OutputTuple,
      SpinResultEvent.OutputObject
    >;
    SpinResult: TypedContractEvent<
      SpinResultEvent.InputTuple,
      SpinResultEvent.OutputTuple,
      SpinResultEvent.OutputObject
    >;
  };
}
