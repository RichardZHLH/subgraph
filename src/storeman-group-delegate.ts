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
  entity.count = event.params.value
  entity.action = "stakeInEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handlestakeAppendEvent(event: stakeAppendEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.value
  entity.action = "stakeAppendEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handlestakeOutEvent(event: stakeOutEvent): void {}

export function handlestakeClaimEvent(event: stakeClaimEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.value
  entity.action = "stakeClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handlestakeIncentiveClaimEvent(
  event: stakeIncentiveClaimEvent
): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.amount
  entity.action = "stakeIncentiveClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handlestakeIncentiveCrossFeeEvent(
  event: stakeIncentiveCrossFeeEvent
): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.amount
  entity.action = "stakeIncentiveCrossFeeEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handlestoremanTransferEvent(
  event: storemanTransferEvent
): void {}

export function handleStoremanGroupUnregisterEvent(
  event: StoremanGroupUnregisterEvent
): void {}

export function handledelegateInEvent(event: delegateInEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.value
  entity.action = "delegateInEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handledelegateOutEvent(event: delegateOutEvent): void {}

export function handledelegateClaimEvent(event: delegateClaimEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.amount
  entity.action = "delegateClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handledelegateIncentiveClaimEvent(
  event: delegateIncentiveClaimEvent
): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.amount
  entity.action = "delegateIncentiveClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handlepartInEvent(event: partInEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.value
  entity.action = "partInEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}

export function handlepartOutEvent(event: partOutEvent): void {}

export function handlepartClaimEvent(event: partClaimEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex())
  entity.count = event.params.amount
  entity.action = "partClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.save()
}
