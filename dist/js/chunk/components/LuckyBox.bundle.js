"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[807],{7652:(t,a,e)=>{e.r(a),e.d(a,{default:()=>o});var i=function(){var t=this,a=t._self._c;return a("div",{ref:"box",staticClass:"modal lucky-modal",attrs:{id:"LuckyBox",tabindex:"-1",role:"dialog","data-backdrop":"static","data-keyboard":"false"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"text-center p-4 lucky-info"},[a("h4",[t._v("恭喜中獎")]),t._v(" "),t.focusCandidateInfo?[a("candidate-box",{key:t.focusCandidateInfo.sn,attrs:{"candidate-index":0,"candidate-info":t.focusCandidateInfo}})]:[t._v("\n                        無法對應\n                    ")],t._v(" "),a("h5",{staticClass:"mt-4"},[t._v("\n                        中獎獎項\n                    ")]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control text-center",domProps:{textContent:t._s(t.focusPrizeInfo.title)}})])],2)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"col-6 text-left"},[a("button",{staticClass:"btn btn-secondary cancel",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cancel}},[t._v("\n                        取消\n                    ")])]),t._v(" "),a("div",{staticClass:"col-6 text-right"},[a("button",{staticClass:"btn btn-primary save",attrs:{type:"button"},on:{click:t.save}},[t._v("\n                        確定\n                    ")])])])])])])};i._withStripped=!0;var s=e(1551),n=e(1582),c=e(4651);const d={components:{CandidateBox:()=>e.e(330).then(e.bind(e,45))},filters:{},props:{},data:()=>({award:""}),computed:{...(0,n.L8)(["triggerOpenLucky","focusPrizeSN","focusCandidateSN","prizeList","candidateMapping","prizeMapping"]),focusCandidateInfo(){return this.candidateMapping[this.focusCandidateSN]||!1},focusPrizeInfo(){return this.prizeMapping[this.focusPrizeSN]||!1}},watch:{triggerOpenLucky:{handler(){c(this.$refs.box).modal("show")}}},created(){},mounted(){const t=this;c(t.$refs.box).bind("shown.bs.modal",(()=>{t.setFavicon("award"),s.Xe.mixpanel("LuckyOpen_click",{candidate:t.focusCandidateInfo,prize:t.focusPrizeInfo}),s.Xe.gtag("event","LuckyOpen_click",{candidate:t.focusCandidateInfo,prize:t.focusPrizeInfo})})),c(t.$refs.box).bind("hidden.bs.modal",(()=>{t.setFavicon("default"),s.Xe.mixpanel("LuckyClose_click"),s.Xe.gtag("event","LuckyClose_click")})),c(t.$refs.box).modal("show")},updated(){},destroyed(){},methods:{...(0,n.i0)({}),...(0,n.PY)({setFavicon:"setFavicon",setFocusCandidateBindPrize:"setFocusCandidateBindPrize"}),save(){const t=this,a={prize_sn:t.focusPrizeSN,candidate_sn:t.focusCandidateSN};s.Xe.mixpanel("LuckyConfirm_click",{candidate:t.focusCandidateInfo,prize:t.focusPrizeInfo}),s.Xe.gtag("event","LuckyConfirm_click",{candidate:t.focusCandidateInfo,prize:t.focusPrizeInfo}),t.setFocusCandidateBindPrize(a),c(t.$refs.box).modal("hide")},cancel(){const t=this;s.Xe.mixpanel("LuckyCancel_click",{candidate:t.focusCandidateInfo,prize:t.focusPrizeInfo}),s.Xe.gtag("event","LuckyCancel_click",{candidate:t.focusCandidateInfo,prize:t.focusPrizeInfo})}}},o=(0,e(2881).A)(d,i,[function(){var t=this._self._c;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[t("i",{staticClass:"fas fa-vote-yea"}),this._v("\n                    恭喜中獎\n                ")])])}],!1,null,"381313cc",null).exports}}]);
//# sourceMappingURL=LuckyBox.bundle.js.map?v=8537aa8dcce6f9f11fa9