import axios from "axios";
import {formatUTCTime, parseId} from "../utils/index";

const volumeStore = {
    state: {
        list: [],
        info: {}
    },
    mutations: {
        setList: function (state, payload) {
            state.list = payload
        },
        setInfo: function (state, payload) {
            state.info = payload
        }
    },
    actions: {
        updateVolumeList(context) {
            axios.get('/api/volume').then(res => {
                let {data} = res.data
                if (!data) {
                    context.commit('setList', [])
                    return
                }
                let {Volumes} = data;
                let volumeList = []
                for (let i = 0; i < Volumes.length; i++) {
                    let volume = Volumes[i]
                    volumeList.push({
                        key: volume.Name,
                        LongName: volume.Name,
                        Name: parseId(volume.Name),
                        Driver: volume.Driver,
                        Scope: volume.Scope,
                        Created: formatUTCTime(volume.CreatedAt)
                    })
                }
                context.commit('setList', volumeList)
            });
        }, updateVolumeInfo(context, imageLongName) {
            axios.get(`/api/volume/info/${imageLongName}`).then(res => {
                let {code, data} = res.data
                if (code !== 'OK') {
                    context.commit('setInfo', {})
                } else {
                    context.commit('setInfo', data)
                }
            });
        }
    },
}

export default volumeStore;
