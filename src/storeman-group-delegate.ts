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
  partClaimEvent,
  storemanGroupContributeEvent
} from "../generated/StoremanGroupDelegate/StoremanGroupDelegate"
import { ExampleEntity } from "../generated/schema"

let index = 10
export function handlestakeInEvent(event: stakeInEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.value.toHexString()
  entity.action = "stakeInEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.from.toHexString()
  entity.save()
}

export function handlestakeAppendEvent(event: stakeAppendEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.value.toHexString()
  entity.action = "stakeAppendEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.from.toHexString()
  entity.save()
}

export function handlestakeOutEvent(event: stakeOutEvent): void {}

export function handlestakeClaimEvent(event: stakeClaimEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.value.toHexString()
  entity.action = "stakeClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.from.toHexString()
  entity.save()
}

export function handlestakeIncentiveClaimEvent(
  event: stakeIncentiveClaimEvent
): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.amount.toHexString()
  entity.action = "stakeIncentiveClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.sender.toHexString()
  entity.save()
}

export function handlestakeIncentiveCrossFeeEvent(
  event: stakeIncentiveCrossFeeEvent
): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.amount.toHexString()
  entity.action = "stakeIncentiveCrossFeeEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.sender.toHexString()
  entity.save()
}

export function handlestoremanTransferEvent(
  event: storemanTransferEvent
): void {}

export function handleStoremanGroupUnregisterEvent(
  event: StoremanGroupUnregisterEvent
): void {}

export function handledelegateInEvent(event: delegateInEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.value.toHexString()
  entity.action = "delegateInEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.from.toHexString()
  entity.save()
}

export function handledelegateOutEvent(event: delegateOutEvent): void {}

export function handledelegateClaimEvent(event: delegateClaimEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.amount.toHexString()
  entity.action = "delegateClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.from.toHexString()
  entity.save()
}

export function handledelegateIncentiveClaimEvent(
  event: delegateIncentiveClaimEvent
): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.amount.toHexString()
  entity.action = "delegateIncentiveClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.sender.toHexString()
  entity.save()
}

export function handlepartInEvent(event: partInEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.value.toHexString()
  entity.action = "partInEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.from.toHexString()
  entity.save()
}

export function handlepartOutEvent(event: partOutEvent): void {}

export function handlepartClaimEvent(event: partClaimEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.amount.toHexString()
  entity.action = "partClaimEvent"
  entity.block = event.block.number
  entity.wkAddr = event.params.wkAddr.toHexString()
  entity.sender = event.params.from.toHexString()
  entity.save()
}

export function handlestoremanGroupContributeEvent(event: storemanGroupContributeEvent): void {
  let entity = new ExampleEntity(event.transaction.hash.toHex()+event.transactionLogIndex.toHex())
  entity.count = event.params.value.toHexString()
  entity.action = "storemanGroupContributeEvent"
  entity.block = event.block.number
  entity.wkAddr = "0xFF"
  entity.sender = event.params.sender.toHexString()
  entity.save()
}