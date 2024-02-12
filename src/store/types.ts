export type UserGet = { // the expected sucessful response for a GET for a ST user
    email: string
    limit: number
    paid: boolean
    symbols: Array<string>
    subscriptionId: string
    stripeId: string
}
