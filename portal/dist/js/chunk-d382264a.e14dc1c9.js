(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d382264a"],{"0c7d":function(e,t,o){},"354b":function(e,t,o){"use strict";o("0c7d")},4732:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"imageContainer"},[o("a-form",{attrs:{layout:"inline",form:e.form}},[o("a-form-item",[o("a-input",{directives:[{name:"focus",rawName:"v-focus"}],staticStyle:{width:"400px"},attrs:{placeholder:"搜索关键词"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[o("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1),o("a-form-item",[o("a-space",[o("a-button",{on:{click:e.reloadVolumeList}},[o("a-icon",{attrs:{type:"reload"}}),e._v(" 刷新 ")],1),o("a-button",{attrs:{type:"primary"},on:{click:e.openNewVolumeModal}},[o("a-icon",{attrs:{type:"plus-circle"}}),e._v(" 创建 ")],1),o("a-button",{attrs:{type:"danger"},on:{click:function(t){e.openPruneVolumeModal=!0}}},[o("a-icon",{attrs:{type:"delete"}}),e._v(" 清空无用卷 ")],1)],1)],1)],1),o("a-table",{staticStyle:{"margin-top":"30px"},attrs:{columns:e.columns,"data-source":e.volumeList},scopedSlots:e._u([{key:"action",fn:function(t,a){return o("span",{},[o("a-space",[o("a",{on:{click:function(t){return e.openVolumeDetail(a.LongName)}}},[e._v("详情")]),o("a-divider",{attrs:{type:"vertical"}}),o("a",{attrs:{href:"#"},on:{click:function(t){return e.openRemoveVolumeModal(a.LongName)}}},[e._v("删除")])],1)],1)}}])}),o("a-drawer",{attrs:{placement:"right",width:"800px",title:"详情信息",visible:e.showVolumeDrawer},on:{close:function(t){e.showVolumeDrawer=!1}}},[o("table",{staticClass:"configTable"},[o("tr",[o("td",{staticClass:"tagTd"},[e._v("名称(Name)")]),o("td",{staticClass:"contentTd",attrs:{align:"left"}},[e._v(" "+e._s(e.volumeInfo.Name))])]),o("tr",[o("td",{staticClass:"tagTd"},[e._v("卷模式(Driver)")]),o("td",{staticClass:"contentTd",attrs:{align:"left"}},[e._v(" "+e._s(e.volumeInfo.Driver))])]),o("tr",[o("td",{staticClass:"tagTd"},[e._v("选项(Options)")]),o("td",{staticClass:"contentTd",attrs:{align:"left"}},[e._v(" "+e._s(e.volumeInfo.Options))])]),o("tr",[o("td",{staticClass:"tagTd"},[e._v("作用域(Scope)")]),o("td",{staticClass:"contentTd",attrs:{align:"left"}},[e._v(" "+e._s(e.volumeInfo.Scope))])]),o("tr",[o("td",{staticClass:"tagTd"},[e._v("创建时间(CreatedAt)")]),o("td",{staticClass:"contentTd",attrs:{align:"left"}},[e._v(" "+e._s(e.volumeInfo.CreatedAt))])]),o("tr",[o("td",{staticClass:"tagTd"},[e._v("挂载点(MountPoint)")]),o("td",{staticClass:"contentTd",attrs:{align:"left"}},[e._v(" "+e._s(e.volumeInfo.Mountpoint))])])])]),o("a-modal",{attrs:{title:"创建新的卷",okText:"创建",cancelText:"取消"},on:{ok:e.callCreateNewVolumeApi},model:{value:e.showNewVolumeModal,callback:function(t){e.showNewVolumeModal=t},expression:"showNewVolumeModal"}},[o("a-form-model",{attrs:{form:e.newVolumeConfig}},[o("a-form-model-item",[o("a-input",{attrs:{placeholder:"请输入存储卷名称"},model:{value:e.newVolumeConfig.name,callback:function(t){e.$set(e.newVolumeConfig,"name",t)},expression:"newVolumeConfig.name"}})],1),o("a-form-model-item",[o("a-input",{attrs:{placeholder:"请输入存储卷模式"},model:{value:e.newVolumeConfig.driver,callback:function(t){e.$set(e.newVolumeConfig,"driver",t)},expression:"newVolumeConfig.driver"}})],1)],1)],1),o("a-modal",{attrs:{title:"清空无用卷",okText:"删除",cancelText:"关闭"},on:{ok:e.callPruneVolumeApi},model:{value:e.openPruneVolumeModal,callback:function(t){e.openPruneVolumeModal=t},expression:"openPruneVolumeModal"}},[e._v(" 是否清空无用的存储卷? ")]),o("a-modal",{attrs:{title:"删除卷",okText:"删除",cancelText:"关闭"},on:{ok:e.callRemoveVolumeApi},model:{value:e.showRemoveVolumeModal,callback:function(t){e.showRemoveVolumeModal=t},expression:"showRemoveVolumeModal"}},[o("a-checkbox",{on:{change:e.forceRemoveChange},model:{value:e.forceRemoveVolume,callback:function(t){e.forceRemoveVolume=t},expression:"forceRemoveVolume"}},[e._v("强制删除(谨慎使用)")])],1)],1)},n=[],r=(o("4de4"),o("c975"),o("498a"),o("96cf"),o("1da1")),i=o("5530"),l=o("2f62"),s=(o("99af"),o("bc3a")),c=o.n(s);function u(e){var t=this,o=c.a.get("/api/volume/new",{params:e});return o.catch((function(e){t.$notification["error"]({message:"操作失败",description:"操作失败,请检查 Docker 服务是否正常"})})),o}function m(e,t){var o=this,a=c.a.get("/api/volume/delete/".concat(e,"/").concat(t));return a.catch((function(e){o.$notification["error"]({message:"操作失败",description:"操作失败,请检查 Docker 服务是否正常"})})),a}function d(){var e=this,t=c.a.get("/api/volume/prune");return t.catch((function(t){e.$notification["error"]({message:"操作失败",description:"操作失败,请检查 Docker 服务是否正常"})})),t}var f={createNewVolume:u,removeVolume:m,pruneVolume:d},p=o("ed08"),v=[{title:"卷名称",dataIndex:"Name",key:"Name"},{title:"卷模式",dataIndex:"Driver",key:"Driver"},{title:"卷范围",dataIndex:"Scope",key:"Scope"},{title:"创建时间",key:"Created",dataIndex:"Created"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],V={data:function(){return{form:{},showNewVolumeModal:!1,showRemoveVolumeModal:!1,showVolumeDrawer:!1,forceRemoveVolume:!1,openPruneVolumeModal:!1,searchKey:"",columns:v,currentVolumeName:"",newVolumeConfig:{}}},computed:{volumeList:function(){var e=this,t=this.$store.state.volume.list;return""!==this.searchKey&&""!==this.searchKey.trim()?t.filter((function(t){return t.LongName.indexOf(e.searchKey)>=0})):t},volumeInfo:function(){return this.$store.state.volume.info}},mounted:function(){this.updateVolumeList()},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])({updateVolumeList:"updateVolumeList",updateVolumeInfo:"updateVolumeInfo"})),{},{forceRemoveChange:function(e){this.forceRemoveVolume=e.target.checked},openNewVolumeModal:function(){this.showNewVolumeModal=!0},callCreateNewVolumeApi:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=Object(p["guid"])(),e.$message.loading({content:"创建存储卷中，请稍后...",key:o}),t.next=4,f.createNewVolume(e.newVolumeConfig);case 4:a=t.sent,n=a.data,r=n.Code,i=n.Msg,"OK"===r?(e.$message.info({content:"存储卷创建完成!",key:o,duration:2}),e.updateVolumeList(),e.showNewVolumeModal=!1):(e.$notification["error"]({message:"存储卷创建失败",description:i}),e.showNewVolumeModal=!1);case 7:case"end":return t.stop()}}),t)})))()},openRemoveVolumeModal:function(e){this.showRemoveVolumeModal=!0,this.currentVolumeName=e},openVolumeDetail:function(e){this.showVolumeDrawer=!0,this.updateVolumeInfo(e)},callRemoveVolumeApi:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=Object(p["guid"])(),e.$message.loading({content:"删除存储卷中，请稍后...",key:o}),t.next=4,f.removeVolume(e.currentVolumeName,e.forceRemoveVolume);case 4:a=t.sent,n=a.data,r=n.Code,i=n.Msg,"OK"===r?(e.$message.info({content:"存储卷删除完成!",key:o,duration:2}),e.updateVolumeList(),e.showRemoveVolumeModal=!1):(e.$notification["error"]({message:"存储卷删除失败",description:i}),e.showRemoveVolumeModal=!1);case 7:case"end":return t.stop()}}),t)})))()},callPruneVolumeApi:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=Object(p["guid"])(),e.$message.loading({content:"无用删除存储卷中，请稍后...",key:o}),t.next=4,f.pruneVolume();case 4:a=t.sent,n=a.data,r=n.Code,i=n.Msg,"OK"===r?(e.$message.info({content:"无用存储卷删除完成!",key:o,duration:2}),e.updateVolumeList(),e.openPruneVolumeModal=!1):(e.$notification["error"]({message:"无用存储卷删除失败",description:i}),e.openPruneVolumeModal=!1);case 7:case"end":return t.stop()}}),t)})))()},reloadVolumeList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateVolumeList(),e.$message.info("存储卷列表刷新完成");case 2:case"end":return t.stop()}}),t)})))()}})},h=V,g=(o("354b"),o("2877")),w=Object(g["a"])(h,a,n,!1,null,"e7934cbc",null);t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-d382264a.e14dc1c9.js.map