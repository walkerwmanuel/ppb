import { hookstate } from '@hookstate/core';
export const globalState = hookstate({
    token: undefined as string | undefined,
    paid: false,
    limit: 2,
    userName: undefined as string | undefined,
    symbols: [] as Array<string>,
    subscriptionId: undefined as string | undefined,
    stripeId: undefined as string | undefined,
})

export const loadingState = hookstate({
    loading: false,
})
