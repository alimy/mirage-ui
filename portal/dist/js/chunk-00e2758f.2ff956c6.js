(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00e2758f"],{"498a":function(t,e,a){"use strict";var o=a("23e7"),n=a("58a8").trim,r=a("c8d2");o({target:"String",proto:!0,forced:r("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var o=a("1d80"),n=a("5899"),r="["+n+"]",s=RegExp("^"+r+r+"*"),i=RegExp(r+r+"*$"),c=function(t){return function(e){var a=String(o(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"67e3":function(t,e,a){"use strict";a("ff3b")},b0c0:function(t,e,a){var o=a("83ab"),n=a("9bf2").f,r=Function.prototype,s=r.toString,i=/^\s*function ([^ (]*)/,c="name";o&&!(c in r)&&n(r,c,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(t){return""}}})},c3c1:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imageContainer"},[a("a-form",{attrs:{layout:"inline",form:t.form}},[a("a-form-item",[a("a-input",{directives:[{name:"focus",rawName:"v-focus"}],staticStyle:{width:"400px"},attrs:{placeholder:"搜索关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-space",[a("a-button",{on:{click:t.reloadNetworkList}},[a("a-icon",{attrs:{type:"reload"}}),t._v(" 刷新 ")],1),a("a-button",{attrs:{type:"primary"},on:{click:function(e){t.showNewNetworkModal=!0}}},[a("a-icon",{attrs:{type:"plus-circle"}}),t._v(" 创建 ")],1)],1)],1)],1),a("a-table",{staticStyle:{"margin-top":"30px"},attrs:{columns:t.columns,"data-source":t.networkList},scopedSlots:t._u([{key:"action",fn:function(e,o){return a("span",{},[a("a-space",[a("a",{on:{click:function(e){return t.openNetworkDetail(o.LongId)}}},[t._v("详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.$message.info("很抱歉,该功能正在开发中,敬请期待....")}}},[t._v("连接")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.openRemoveNetworkModal(o.LongId)}}},[t._v("删除")])],1)],1)}}])}),a("a-drawer",{attrs:{placement:"right",width:"800px",title:"详情信息",visible:t.showNetworkDrawer},on:{close:function(e){t.showNetworkDrawer=!1}}},[a("h3",{staticClass:"detailTitle"},[t._v("网络信息")]),a("table",{staticClass:"configTable"},[a("tr",[a("td",{staticClass:"tagTd"},[t._v("Id")]),a("td",{staticClass:"contentTd",attrs:{align:"left"}},[t._v(t._s(t.networkInfo.Id))])]),a("tr",[a("td",{staticClass:"tagTd"},[t._v("名称(Name)")]),a("td",{staticClass:"contentTd",attrs:{align:"left"}},[t._v(t._s(t.networkInfo.Name))])])]),a("h3",{staticClass:"detailTitle"},[t._v("网络配置")]),a("table",{staticClass:"configTable"},[a("tr",[a("td",{staticClass:"tagTd"},[t._v("网关")]),a("td",{staticClass:"contentTd"},[t._v("子网掩码")])]),t._l(t.IPConfig,(function(e){return[a("tr",[a("td",{staticClass:"tagTd"},[t._v(t._s(e.Subnet))]),a("td",{staticClass:"tagTd"},[t._v(t._s(e.Gateway))])])]}))],2),a("h3",{staticClass:"detailTitle"},[t._v("关联容器")]),t._l(t.containerList,(function(e,o){return[a("table",{staticClass:"configTable"},[a("tr",[a("td",{staticClass:"tagTd"},[t._v("容器ID")]),a("td",{staticClass:"tagTd",attrs:{align:"left"}},[t._v(t._s(o))])]),a("tr",[a("td",{staticClass:"tagTd"},[t._v("容器名称")]),a("td",{staticClass:"tagTd",attrs:{align:"left"}},[t._v(t._s(e.Name))])]),a("tr",[a("td",{staticClass:"tagTd"},[t._v("Mac地址")]),a("td",{staticClass:"tagTd",attrs:{align:"left"}},[t._v(t._s(e.MacAddress))])]),a("tr",[a("td",{staticClass:"tagTd"},[t._v("IP地址(v4)")]),a("td",{staticClass:"tagTd",attrs:{align:"left"}},[t._v(t._s(e.IPv4Address))])]),a("tr",[a("td",{staticClass:"tagTd"},[t._v("IP地址(v6)")]),a("td",{staticClass:"tagTd",attrs:{align:"left"}},[t._v(t._s(e.IPv6Address))])])])]}))],2),a("a-modal",{attrs:{title:"移除网络",okText:"确定",cancelText:"关闭"},on:{ok:t.callRemoveNetworkApi},model:{value:t.showRemoveNetworkModal,callback:function(e){t.showRemoveNetworkModal=e},expression:"showRemoveNetworkModal"}},[t._v(" 是否确认删除该网络 ? ")]),a("a-modal",{attrs:{title:"创建新的网络",okText:"创建",cancelText:"取消"},on:{ok:t.callCreateNewNetworkApi},model:{value:t.showNewNetworkModal,callback:function(e){t.showNewNetworkModal=e},expression:"showNewNetworkModal"}},[a("a-form-model",{attrs:{form:t.newNetwork}},[a("a-form-model-item",{attrs:{label:"网络名称"}},[a("a-input",{attrs:{placeholder:"请输入网络名称"},model:{value:t.newNetwork.name,callback:function(e){t.$set(t.newNetwork,"name",e)},expression:"newNetwork.name"}})],1),a("a-form-model-item",{attrs:{label:"网络模式"}},[a("a-select",{model:{value:t.newNetwork.driver,callback:function(e){t.$set(t.newNetwork,"driver",e)},expression:"newNetwork.driver"}},[t._l(t.networkDriverList,(function(e){return[a("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])]}))],2)],1)],1)],1)],1)},n=[],r=(a("b0c0"),a("498a"),a("5530")),s=a("2f62"),i=a("ed08"),c=[{title:"网络ID",key:"Id",dataIndex:"Id"},{title:"网络名称",dataIndex:"Name",key:"Name"},{title:"网络模式",dataIndex:"Driver",key:"Driver"},{title:"作用范围",dataIndex:"Scope",key:"Scope"},{title:"创建时间",key:"Created",dataIndex:"Created"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l={data:function(){return{form:{},showNewNetworkModal:!1,showNetworkDrawer:!1,showRemoveNetworkModal:!1,showRemoveVisible:!1,currentNetworkId:"",searchKey:"",columns:c,networkDriverList:["bridge","overlay","host"],newNetwork:{name:"",driver:""},remove:{volume:!0,link:!1,force:!0}}},computed:{networkList:function(){var t=this.$store.state.network.list;return""!==this.searchKey&&this.searchKey.trim(),t},networkInfo:function(){return this.$store.state.network.info},IPConfig:function(){var t=this.$store.state.network.info;return this.$lodash.get(t,"IPAM.Config",[])},containerList:function(){var t=this.$store.state.network.info;return this.$lodash.get(t,"Containers",{})}},mounted:function(){this.updateNetworkList()},methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])({updateNetworkList:"updateNetworkList",updateNetworkInfo:"updateNetworkInfo"})),{},{openNetworkDetail:function(t){this.showNetworkDrawer=!0,this.currentNetworkId=t,this.updateNetworkInfo(t)},openRemoveNetworkModal:function(t){this.showRemoveNetworkModal=!0,this.currentNetworkId=t},reloadNetworkList:function(){this.updateNetworkInfo(),this.$message.info({content:"刷新网络列表完成"})},callRemoveNetworkApi:function(){var t=this,e=Object(i["guid"])();this.$message.loading({content:"正在移除网络, 请稍后...",key:e,duration:10}),this.$axios.get("/api/network/".concat(this.currentNetworkId,"/delete")).then((function(a){var o=a.data,n=o.Code,r=o.Msg;"OK"===n?(t.$message.info({content:"移除网络完成",key:e}),t.showRemoveNetworkModal=!1,t.updateNetworkList()):t.$message.info({content:r,key:e})})).catch((function(a){t.$message.info({content:"服务连接失败，请检查服务是否正常启动",key:e})}))},callCreateNewNetworkApi:function(){var t=this;if(""!==this.newNetwork.name){var e=Object(i["guid"])();this.$message.loading({content:"正在创建网络, 请稍后...",key:e,duration:10}),this.$axios.get("/api/network/new",{params:this.newNetwork}).then((function(a){var o=a.data,n=o.Code,r=o.Msg;"OK"===n?(t.$message.info({content:"创建网络完成",key:e}),t.showNewNetworkModal=!1,t.updateNetworkList()):t.$message.warning({content:r,key:e})})).catch((function(a){t.$message.error({content:"服务连接失败，请检查服务是否正常启动",key:e})}))}else this.$message.warning("网络名称不能为空")}})},d=l,u=(a("67e3"),a("2877")),w=Object(u["a"])(d,o,n,!1,null,"4faca491",null);e["default"]=w.exports},c8d2:function(t,e,a){var o=a("d039"),n=a("5899"),r="​᠎";t.exports=function(t){return o((function(){return!!n[t]()||r[t]()!=r||n[t].name!==t}))}},ff3b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-00e2758f.2ff956c6.js.map