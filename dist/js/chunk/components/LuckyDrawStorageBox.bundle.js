"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[684],{8152:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});var s=function(){var t=this,a=t._self._c;return a("div",{ref:"box",staticClass:"modal",attrs:{tabindex:"-1",role:"dialog","data-backdrop":"static","data-keyboard":"false"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("h6",{staticClass:"pb-2"},[t._v("\n                    發現你有建立過 "+t._s(t.luckyDrawChooseList.length)+" 個抽獎活動\n                ")]),t._v(" "),a("div",{staticClass:"lucky-draw-choose-list"},[t._l(t.luckyDrawChooseList,(function(e,s){return[a("div",{key:s,staticClass:"lucky-draw-choose-item mb-3"},[a("div",{staticClass:"lucky-draw-choose-text",on:{click:function(a){return t.chooseLuckDraw(s)}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]),t._v(" "),a("div",{staticClass:"lucky-draw-choose-del",on:{click:function(a){return t.removeLuckDraw(s)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])]}))],2),t._v(" "),a("h6",{staticClass:"pb-2"},[t._v("\n                    或建立一組新的抽獎活動\n                ")]),t._v(" "),!1===t.createDefaultLuckyDrawFlag?[a("button",{staticClass:"btn btn-warning btn-lg btn-block",attrs:{type:"button"},on:{click:function(a){t.createDefaultLuckyDrawFlag=!0}}},[t._v("\n                        建立新抽獎活動\n                    ")])]:[a("div",{staticClass:"input-group input-group-lg mb-3"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.LuckyDrawName,expression:"LuckyDrawName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"活動名稱"},domProps:{value:t.LuckyDrawName},on:{input:function(a){a.target.composing||(t.LuckyDrawName=a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.create}},[t._v("\n                                建立\n                            ")])])])],t._v(" "),a("hr"),t._v(" "),a("google-support")],2)])])])};s._withStripped=!0;var o=e(1582),c=e(1551),r=e(4651);const i={components:{GoogleSupport:()=>e.e(482).then(e.bind(e,4095))},filters:{},props:{},data:()=>({createDefaultLuckyDrawFlag:!1,LuckyDrawName:""}),computed:{...(0,o.L8)(["luckyDrawChooseList"])},watch:{luckyDrawChooseList:{deep:!0,immediate:!0,handler(){this.luckyDrawChooseList.length>0?this.$nextTick((()=>{r(this.$refs.box).modal("show")})):r(this.$refs.box).modal("hide")}}},created(){},mounted(){r(this.$refs.box).bind("shown.bs.modal",(()=>{c.Xe.mixpanel("LuckyDrawStorageOpen_click"),c.Xe.gtag("event","LuckyDrawStorageOpen_click")})),r(this.$refs.box).bind("hidden.bs.modal",(()=>{c.Xe.mixpanel("LuckyDrawStorageClose_click"),c.Xe.gtag("event","LuckyDrawStorageClose_click")}))},updated(){},destroyed(){},methods:{...(0,o.i0)({}),...(0,o.PY)({createDefaultLuckyDraw:"createDefaultLuckyDraw",chooseLuckDrawFromStorage:"chooseLuckDrawFromStorage",removeLuckDrawFromStorage:"removeLuckDrawFromStorage"}),chooseLuckDraw(t){const a=this.luckyDrawChooseList[t];c.Xe.mixpanel("LuckyDrawStorageActionChoose_click",a),c.Xe.gtag("event","LuckyDrawStorageActionChoose_click",a),this.chooseLuckDrawFromStorage(a.key)},removeLuckDraw(t){const a=this,e=a.luckyDrawChooseList[t];c.lY.warning({html:`你確定要刪除 ${e.title} 此筆抽獎嗎？<br><div class="text-danger">刪除後將無法回復</div>`},(()=>{a.removeLuckDrawFromStorage(e.key),c.Xe.mixpanel("LuckyDrawStorageActionRemove_click",e),c.Xe.gtag("event","LuckyDrawStorageActionRemove_click",e)}))},create(){const t={LuckyDrawName:this.LuckyDrawName};this.createDefaultLuckyDraw(t),c.Xe.mixpanel("LuckyDrawStorageActionCreate_click",t),c.Xe.gtag("event","LuckyDrawStorageActionCreate_click",t)}}},l=(0,e(2881).A)(i,s,[function(){var t=this._self._c;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[t("i",{staticClass:"fas fa-box-open"}),this._v("\n                    抽獎列表\n                ")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[this._v("活動名稱")])])}],!1,null,"0fad00c9",null).exports}}]);
//# sourceMappingURL=LuckyDrawStorageBox.bundle.js.map?v=ba47b823fb7319681b1c