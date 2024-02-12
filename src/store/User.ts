import axios from "axios"
import { globalState, loadingState } from './State';
import { UserGet } from './types';
import { BACKEND_URL } from "../configvars";

export class UserService {

    public async getData(): Promise<boolean> {
        try {
            loadingState.set({loading: true})
            const response = await axios.get(`${BACKEND_URL}/api/v1/user`)
            loadingState.set({loading: false})

            if (response.status === 200) {
                const getResponse = response.data as UserGet
                globalState.set({
                    ...globalState.get(),
                    limit: getResponse.limit,
                    userName: getResponse.email,
                    paid: getResponse.paid,
                    symbols: getResponse.symbols, 
                    subscriptionId: getResponse.subscriptionId,
                })
            }
            return true
        } catch(err) {
            loadingState.set({loading: false})
        }
        return false
    }

    public async addSymbol(symbol: string): Promise<boolean> {
        try {
            loadingState.set({loading: true})
            const response = await axios.post(`${BACKEND_URL}/api/v1/symbol/${symbol}`);
            loadingState.set({loading: false})
            if (response.status === 200) {
                globalState.set({
                    ...globalState.get(),
                    symbols: [...globalState.get().symbols, symbol], 
                })
            }
            return true
        } catch(err) {
            loadingState.set({loading: false})
        }
        return false
    }

    public async cancelSub(subscriptionId: string): Promise<boolean> {
        try {
            loadingState.set({loading: true})
            console.log("trying to cancel sub")
            const response = await axios.delete(`${BACKEND_URL}/api/v1/subscription/${subscriptionId}`);
            loadingState.set({loading: false})
            if (response.status === 200) {
                globalState.set({
                    ...globalState.get(),
                    paid: false,
                    subscriptionId: '',
                })
            }
            return true
        } catch(err) {
            loadingState.set({loading: false})
        }
        return false
    }

    public async removeSymbol(symbol: string): Promise<boolean> {
        try {
            loadingState.set({loading: true})
            const response = await axios.delete(`${BACKEND_URL}/api/v1/symbol/${symbol}`);
            loadingState.set({loading: false})
            if (response.status === 200) {
                globalState.set({
                    ...globalState.get(),
                    symbols: globalState.get().symbols.filter(s => s !== symbol), 
                })
            }
            return true
        } catch (err) {
            loadingState.set({loading: false})
        }
        return false
    }

    public async contactUs(email: string, message: string,): Promise<boolean> {
        try {
            loadingState.set({loading: true})
            await axios.post(`${BACKEND_URL}/api/v1/contact-us`, {
                email,
                message,
            });
            loadingState.set({loading: false})
            return true
        } catch (err) {
            loadingState.set({loading: false})
        }
        return false
    }
}
