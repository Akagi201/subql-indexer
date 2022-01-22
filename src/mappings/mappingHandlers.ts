import {SubstrateEvent} from "@subql/types";
import {StakingReward} from "../types";
import {Balance, AccountId} from "@polkadot/types/interfaces";

export async function handleStakingReward(event: SubstrateEvent): Promise<void> {
    const {event: {data: [account, newReward]}} = event;
    const entity = new StakingReward(`${event.block.block.header.number.toString()}-${event.idx.toString()}`);
    entity.address = (account as AccountId).toString();
    entity.balance = (newReward as Balance).toBigInt();
    entity.date = event.block.timestamp;
    await entity.save();
}
