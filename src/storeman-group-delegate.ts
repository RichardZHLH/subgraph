import { BigInt } from "@graphprotocol/graph-ts"
import {
  StoremanGroupDelegate,
  stakeInEvent,
  stakeAppendEvent,
  stakeOutEvent,
  stakeClaimEvent,
  stakeIncentiveClaimEvent,
  stakeIncentiveCrossFeeEvent,
  storemanTransferEvent,
  StoremanGroupUnregisterEvent,
  delegateInEvent,
  delegateOutEvent,
  delegateClaimEvent,
  delegateIncentiveClaimEvent,
  partInEvent,
  partOutEvent,
  partClaimEvent
} from "../generated/StoremanGroupDelegate/StoremanGroupDelegate"
import { ExampleEntity } from "../generated/schema"

export function handlestakeInEvent(event: stakeInEvent): void {

  let entity = new ExampleEntity(event.transaction.hash.toHex())

  // Entity fields can be set using simple assignments
  entity.count = event.params.value
  
  entity.action = "stakeInEvent"

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getSelectedSmNumber(...)
  // - contract.getStoremanGroupConfig(...)
  // - contract.getDeposit(...)
  // - contract.getStoremanGroupStatus(...)
  // - contract.setInvalidSm(...)
  // - contract.getThresholdByGrpId(...)
  // - contract.getSelectedSmInfo(...)
}

export function handlestakeAppendEvent(event: stakeAppendEvent): void {}

export function handlestakeOutEvent(event: stakeOutEvent): void {}

export function handlestakeClaimEvent(event: stakeClaimEvent): void {}

export function handlestakeIncentiveClaimEvent(
  event: stakeIncentiveClaimEvent
): void {}

export function handlestakeIncentiveCrossFeeEvent(
  event: stakeIncentiveCrossFeeEvent
): void {}

export function handlestoremanTransferEvent(
  event: storemanTransferEvent
): void {}

export function handleStoremanGroupUnregisterEvent(
  event: StoremanGroupUnregisterEvent
): void {}

export function handledelegateInEvent(event: delegateInEvent): void {}

export function handledelegateOutEvent(event: delegateOutEvent): void {}

export function handledelegateClaimEvent(event: delegateClaimEvent): void {}

export function handledelegateIncentiveClaimEvent(
  event: delegateIncentiveClaimEvent
): void {}

export function handlepartInEvent(event: partInEvent): void {}

export function handlepartOutEvent(event: partOutEvent): void {}

export function handlepartClaimEvent(event: partClaimEvent): void {}
