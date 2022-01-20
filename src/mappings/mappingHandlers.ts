import {SubstrateEvent} from "@subql/types";
import {TransferEntity} from "../types";
import {Balance, AccountId} from "@polkadot/types/interfaces";

export async function handleTransfer(event: SubstrateEvent): Promise<void> {
    const record = new TransferEntity(`${event.block.block.header.number.toString()}-${event.idx}`);

    const {event: {data: [from, to, amount]}} = event;
    record.from = (from as AccountId).toString();
    record.to = (to as AccountId).toString();
    record.amount = (amount as Balance).toBigInt();
    await record.save();
}
