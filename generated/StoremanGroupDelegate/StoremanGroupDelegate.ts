// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class stakeInEvent extends ethereum.Event {
  get params(): stakeInEvent__Params {
    return new stakeInEvent__Params(this);
  }
}

export class stakeInEvent__Params {
  _event: stakeInEvent;

  constructor(event: stakeInEvent) {
    this._event = event;
  }

  get groupId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get wkAddr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class stakeAppendEvent extends ethereum.Event {
  get params(): stakeAppendEvent__Params {
    return new stakeAppendEvent__Params(this);
  }
}

export class stakeAppendEvent__Params {
  _event: stakeAppendEvent;

  constructor(event: stakeAppendEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class stakeOutEvent extends ethereum.Event {
  get params(): stakeOutEvent__Params {
    return new stakeOutEvent__Params(this);
  }
}

export class stakeOutEvent__Params {
  _event: stakeOutEvent;

  constructor(event: stakeOutEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class stakeClaimEvent extends ethereum.Event {
  get params(): stakeClaimEvent__Params {
    return new stakeClaimEvent__Params(this);
  }
}

export class stakeClaimEvent__Params {
  _event: stakeClaimEvent;

  constructor(event: stakeClaimEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get groupId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class stakeIncentiveClaimEvent extends ethereum.Event {
  get params(): stakeIncentiveClaimEvent__Params {
    return new stakeIncentiveClaimEvent__Params(this);
  }
}

export class stakeIncentiveClaimEvent__Params {
  _event: stakeIncentiveClaimEvent;

  constructor(event: stakeIncentiveClaimEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class stakeIncentiveCrossFeeEvent extends ethereum.Event {
  get params(): stakeIncentiveCrossFeeEvent__Params {
    return new stakeIncentiveCrossFeeEvent__Params(this);
  }
}

export class stakeIncentiveCrossFeeEvent__Params {
  _event: stakeIncentiveCrossFeeEvent;

  constructor(event: stakeIncentiveCrossFeeEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class storemanTransferEvent extends ethereum.Event {
  get params(): storemanTransferEvent__Params {
    return new storemanTransferEvent__Params(this);
  }
}

export class storemanTransferEvent__Params {
  _event: storemanTransferEvent;

  constructor(event: storemanTransferEvent) {
    this._event = event;
  }

  get groupId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get preGroupId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get wkAddrs(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class StoremanGroupUnregisterEvent extends ethereum.Event {
  get params(): StoremanGroupUnregisterEvent__Params {
    return new StoremanGroupUnregisterEvent__Params(this);
  }
}

export class StoremanGroupUnregisterEvent__Params {
  _event: StoremanGroupUnregisterEvent;

  constructor(event: StoremanGroupUnregisterEvent) {
    this._event = event;
  }

  get groupId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class delegateInEvent extends ethereum.Event {
  get params(): delegateInEvent__Params {
    return new delegateInEvent__Params(this);
  }
}

export class delegateInEvent__Params {
  _event: delegateInEvent;

  constructor(event: delegateInEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class delegateOutEvent extends ethereum.Event {
  get params(): delegateOutEvent__Params {
    return new delegateOutEvent__Params(this);
  }
}

export class delegateOutEvent__Params {
  _event: delegateOutEvent;

  constructor(event: delegateOutEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class delegateClaimEvent extends ethereum.Event {
  get params(): delegateClaimEvent__Params {
    return new delegateClaimEvent__Params(this);
  }
}

export class delegateClaimEvent__Params {
  _event: delegateClaimEvent;

  constructor(event: delegateClaimEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class delegateIncentiveClaimEvent extends ethereum.Event {
  get params(): delegateIncentiveClaimEvent__Params {
    return new delegateIncentiveClaimEvent__Params(this);
  }
}

export class delegateIncentiveClaimEvent__Params {
  _event: delegateIncentiveClaimEvent;

  constructor(event: delegateIncentiveClaimEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class partInEvent extends ethereum.Event {
  get params(): partInEvent__Params {
    return new partInEvent__Params(this);
  }
}

export class partInEvent__Params {
  _event: partInEvent;

  constructor(event: partInEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class partOutEvent extends ethereum.Event {
  get params(): partOutEvent__Params {
    return new partOutEvent__Params(this);
  }
}

export class partOutEvent__Params {
  _event: partOutEvent;

  constructor(event: partOutEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class partClaimEvent extends ethereum.Event {
  get params(): partClaimEvent__Params {
    return new partClaimEvent__Params(this);
  }
}

export class partClaimEvent__Params {
  _event: partClaimEvent;

  constructor(event: partClaimEvent) {
    this._event = event;
  }

  get wkAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class storemanGroupContributeEvent extends ethereum.Event {
  get params(): storemanGroupContributeEvent__Params {
    return new storemanGroupContributeEvent__Params(this);
  }
}

export class storemanGroupContributeEvent__Params {
  _event: storemanGroupContributeEvent;

  constructor(event: storemanGroupContributeEvent) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class StoremanGroupDelegate__getStoremanGroupConfigResult {
  value0: Bytes;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Bytes;
  value8: Bytes;
  value9: BigInt;
  value10: BigInt;

  constructor(
    value0: Bytes,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Bytes,
    value8: Bytes,
    value9: BigInt,
    value10: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromBytes(this.value7));
    map.set("value8", ethereum.Value.fromBytes(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    return map;
  }

  getGroupId(): Bytes {
    return this.value0;
  }

  getStatus(): i32 {
    return this.value1;
  }

  getDeposit(): BigInt {
    return this.value2;
  }

  getChain1(): BigInt {
    return this.value3;
  }

  getChain2(): BigInt {
    return this.value4;
  }

  getCurve1(): BigInt {
    return this.value5;
  }

  getCurve2(): BigInt {
    return this.value6;
  }

  getGpk1(): Bytes {
    return this.value7;
  }

  getGpk2(): Bytes {
    return this.value8;
  }

  getStartTime(): BigInt {
    return this.value9;
  }

  getEndTime(): BigInt {
    return this.value10;
  }
}

export class StoremanGroupDelegate__getStoremanGroupStatusResult {
  value0: i32;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: i32, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getStatus(): i32 {
    return this.value0;
  }

  getStartTime(): BigInt {
    return this.value1;
  }

  getEndTime(): BigInt {
    return this.value2;
  }
}

export class StoremanGroupDelegate__getSelectedSmInfoResult {
  value0: Address;
  value1: Bytes;
  value2: Bytes;

  constructor(value0: Address, value1: Bytes, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    map.set("value2", ethereum.Value.fromBytes(this.value2));
    return map;
  }

  getWkAddr(): Address {
    return this.value0;
  }

  getPK(): Bytes {
    return this.value1;
  }

  getEnodeId(): Bytes {
    return this.value2;
  }
}

export class StoremanGroupDelegate extends ethereum.SmartContract {
  static bind(address: Address): StoremanGroupDelegate {
    return new StoremanGroupDelegate("StoremanGroupDelegate", address);
  }

  getSelectedSmNumber(groupId: Bytes): BigInt {
    let result = super.call(
      "getSelectedSmNumber",
      "getSelectedSmNumber(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getSelectedSmNumber(groupId: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSelectedSmNumber",
      "getSelectedSmNumber(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStoremanGroupConfig(
    id: Bytes
  ): StoremanGroupDelegate__getStoremanGroupConfigResult {
    let result = super.call(
      "getStoremanGroupConfig",
      "getStoremanGroupConfig(bytes32):(bytes32,uint8,uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(id)]
    );

    return new StoremanGroupDelegate__getStoremanGroupConfigResult(
      result[0].toBytes(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBytes(),
      result[8].toBytes(),
      result[9].toBigInt(),
      result[10].toBigInt()
    );
  }

  try_getStoremanGroupConfig(
    id: Bytes
  ): ethereum.CallResult<StoremanGroupDelegate__getStoremanGroupConfigResult> {
    let result = super.tryCall(
      "getStoremanGroupConfig",
      "getStoremanGroupConfig(bytes32):(bytes32,uint8,uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StoremanGroupDelegate__getStoremanGroupConfigResult(
        value[0].toBytes(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBytes(),
        value[8].toBytes(),
        value[9].toBigInt(),
        value[10].toBigInt()
      )
    );
  }

  getDeposit(id: Bytes): BigInt {
    let result = super.call("getDeposit", "getDeposit(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(id)
    ]);

    return result[0].toBigInt();
  }

  try_getDeposit(id: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getDeposit", "getDeposit(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStoremanGroupStatus(
    id: Bytes
  ): StoremanGroupDelegate__getStoremanGroupStatusResult {
    let result = super.call(
      "getStoremanGroupStatus",
      "getStoremanGroupStatus(bytes32):(uint8,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(id)]
    );

    return new StoremanGroupDelegate__getStoremanGroupStatusResult(
      result[0].toI32(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getStoremanGroupStatus(
    id: Bytes
  ): ethereum.CallResult<StoremanGroupDelegate__getStoremanGroupStatusResult> {
    let result = super.tryCall(
      "getStoremanGroupStatus",
      "getStoremanGroupStatus(bytes32):(uint8,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StoremanGroupDelegate__getStoremanGroupStatusResult(
        value[0].toI32(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  setInvalidSm(
    groupId: Bytes,
    indexs: Array<BigInt>,
    slashTypes: Array<i32>
  ): boolean {
    let result = super.call(
      "setInvalidSm",
      "setInvalidSm(bytes32,uint256[],uint8[]):(bool)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromUnsignedBigIntArray(indexs),
        ethereum.Value.fromI32Array(slashTypes)
      ]
    );

    return result[0].toBoolean();
  }

  try_setInvalidSm(
    groupId: Bytes,
    indexs: Array<BigInt>,
    slashTypes: Array<i32>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setInvalidSm",
      "setInvalidSm(bytes32,uint256[],uint8[]):(bool)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromUnsignedBigIntArray(indexs),
        ethereum.Value.fromI32Array(slashTypes)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getThresholdByGrpId(groupId: Bytes): BigInt {
    let result = super.call(
      "getThresholdByGrpId",
      "getThresholdByGrpId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(groupId)]
    );

    return result[0].toBigInt();
  }

  try_getThresholdByGrpId(groupId: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getThresholdByGrpId",
      "getThresholdByGrpId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSelectedSmInfo(
    groupId: Bytes,
    index: BigInt
  ): StoremanGroupDelegate__getSelectedSmInfoResult {
    let result = super.call(
      "getSelectedSmInfo",
      "getSelectedSmInfo(bytes32,uint256):(address,bytes,bytes)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return new StoremanGroupDelegate__getSelectedSmInfoResult(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toBytes()
    );
  }

  try_getSelectedSmInfo(
    groupId: Bytes,
    index: BigInt
  ): ethereum.CallResult<StoremanGroupDelegate__getSelectedSmInfoResult> {
    let result = super.tryCall(
      "getSelectedSmInfo",
      "getSelectedSmInfo(bytes32,uint256):(address,bytes,bytes)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StoremanGroupDelegate__getSelectedSmInfoResult(
        value[0].toAddress(),
        value[1].toBytes(),
        value[2].toBytes()
      )
    );
  }
}

export class SetGpkCall extends ethereum.Call {
  get inputs(): SetGpkCall__Inputs {
    return new SetGpkCall__Inputs(this);
  }

  get outputs(): SetGpkCall__Outputs {
    return new SetGpkCall__Outputs(this);
  }
}

export class SetGpkCall__Inputs {
  _call: SetGpkCall;

  constructor(call: SetGpkCall) {
    this._call = call;
  }

  get groupId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get gpk1(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get gpk2(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetGpkCall__Outputs {
  _call: SetGpkCall;

  constructor(call: SetGpkCall) {
    this._call = call;
  }
}

export class SetInvalidSmCall extends ethereum.Call {
  get inputs(): SetInvalidSmCall__Inputs {
    return new SetInvalidSmCall__Inputs(this);
  }

  get outputs(): SetInvalidSmCall__Outputs {
    return new SetInvalidSmCall__Outputs(this);
  }
}

export class SetInvalidSmCall__Inputs {
  _call: SetInvalidSmCall;

  constructor(call: SetInvalidSmCall) {
    this._call = call;
  }

  get groupId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get indexs(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get slashTypes(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }
}

export class SetInvalidSmCall__Outputs {
  _call: SetInvalidSmCall;

  constructor(call: SetInvalidSmCall) {
    this._call = call;
  }

  get isContinue(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RecordSmSlashCall extends ethereum.Call {
  get inputs(): RecordSmSlashCall__Inputs {
    return new RecordSmSlashCall__Inputs(this);
  }

  get outputs(): RecordSmSlashCall__Outputs {
    return new RecordSmSlashCall__Outputs(this);
  }
}

export class RecordSmSlashCall__Inputs {
  _call: RecordSmSlashCall;

  constructor(call: RecordSmSlashCall) {
    this._call = call;
  }

  get wk(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RecordSmSlashCall__Outputs {
  _call: RecordSmSlashCall;

  constructor(call: RecordSmSlashCall) {
    this._call = call;
  }
}
