import assert from 'assert'
import {Runtime, ChainContext, Event, Result, Option} from './support'

export class BalancesTransferEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Balances.Transfer')
    }

    /**
     *  Transfer succeeded (from, to, value, fees).
     */
    get isV1020(): boolean {
        return this.event.block._runtime.getEventTypeHash('Balances.Transfer') === '72e6f0d399a72f77551d560f52df25d757e0643d0192b3bc837cbd91b6f36b27'
    }

    /**
     *  Transfer succeeded (from, to, value, fees).
     */
    get asV1020(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV1020)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     *  Transfer succeeded (from, to, value).
     */
    get isV1050(): boolean {
        return this.event.block._runtime.getEventTypeHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded (from, to, value).
     */
    get asV1050(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1050)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV9130(): boolean {
        return this.event.block._runtime.getEventTypeHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV9130(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV9130)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}
