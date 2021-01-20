import axios from "axios";
import {formatUTCTime, parseId} from "../utils/index";

const imageStore = {
    state: {
        list: [],
        info: {}
    }, mutations: {
        setList: function (state, payload) {
            state.list = payload
        }, setInfo: function (state, payload) {
            state.info = payload
        }
    }, actions: {
        updateNetworkList(context) {
            axios.get('/api/network').then(res => {
                let {data} = res.data
                let netWorkList = []
                for (let i = 0; i < data.length; i++) {
                    let network = data[i]
                    netWorkList.push({
                        Id: parseId(network.Id),
                        LongId: network.Id,
                        Name: network.Name,
                        Driver: network.Driver,
                        Scope: network.Scope,
                        Created: formatUTCTime(network.Created)
                    })
                }
                context.commit('setList', netWorkList)
            });
        }, updateNetworkInfo(context, networkId) {
            if (!networkId) {
                return
            }
            axios.get(`/api/network/info/${networkId}`).then(res => {
                let {data} = res.data
                context.commit('setInfo', data)
            });
        }
    }
}

export default imageStore;
