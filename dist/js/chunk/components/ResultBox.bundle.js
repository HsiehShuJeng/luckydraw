"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14],{6275:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"box",staticClass:"modal result-modal",attrs:{id:"ResultBox",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"input-group mb-3"},[t._m(1),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.sortType,expression:"sortType"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sortType=e.target.multiple?a:a[0]}}},[t._l(t.sortTypeOptions,(function(a,s){return[e("option",{key:s,domProps:{value:s,textContent:t._s(a)}})]}))],2)])])]),t._v(" "),t.ResultList.length>0?[e("table",{staticClass:"table"},[t._m(2),t._v(" "),e("tbody",[t._l(t.ResultList,(function(a,s){return[t.editCandidateInfo.sn===a.sn?[e("tr",{key:a.sn},[e("th",{attrs:{scope:"row"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.editCandidateInfo.haveAward,expression:"editCandidateInfo.haveAward"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.editCandidateInfo,"haveAward",e.target.multiple?a:a[0])}}},t._l(t.luckyOption,(function(a,s){return e("option",{key:s,domProps:{value:s}},[t._v("\n                                                        "+t._s(a)+"\n                                                    ")])})),0)]),t._v(" "),e("td",[e("div",[t._v(t._s(a.name))]),t._v(" "),e("div",[e("small",[t._v(t._s(a.pos))])])]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.editCandidateInfo.award_title,expression:"editCandidateInfo.award_title"}],staticClass:"form-control",domProps:{value:t.editCandidateInfo.award_title},on:{input:function(e){e.target.composing||t.$set(t.editCandidateInfo,"award_title",e.target.value)}}})]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-info",on:{click:function(e){return t.save()}}},[e("i",{staticClass:"fas fa-save"})]),t._v(" "),e("button",{staticClass:"btn btn-warning",on:{click:function(e){t.editCandidateInfo=!1}}},[e("i",{staticClass:"fas fa-times"})])])])]:[e("tr",{key:a.sn},[e("th",{attrs:{scope:"row"}},[t._v("\n                                                "+t._s(t.luckyOption[a.haveAward])+"\n                                            ")]),t._v(" "),e("td",[e("div",[t._v(t._s(a.name))]),t._v(" "),e("div",[e("small",[t._v(t._s(a.pos))])])]),t._v(" "),e("td",[t._v(t._s(a.award_title?a.award_title:"--"))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-success",on:{click:function(e){return t.openEdit(a)}}},[e("i",{staticClass:"fas fa-edit"})])])])]]}))],2)]),t._v(" "),e("google-support",{attrs:{trigger:t.triggerOpenResult}})]:e("h4",{staticClass:"text-center p-3"},[t._v("\n                        無任何可下載的內容\n                    ")])],2),t._v(" "),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"col-6 text-left"}),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("button",{staticClass:"btn btn-primary download-btn",attrs:{type:"button",disabled:0===t.ResultList.length},on:{click:t.download}},[t._v("\n                            下載\n                        ")])])])])])]),t._v(" "),e("div",{ref:"download",staticClass:"modal result-modal",attrs:{tabindex:"-1",role:"dialog","data-backdrop":"static","data-keyboard":"false"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[t._m(3),t._v(" "),e("h5",{staticClass:"text-center",staticStyle:{"font-size":"30px"}},[t._v("\n                        資料處理中\n                    ")]),t._v(" "),t.showGooglSupport?e("google-support"):t._e()],1)])])])])};s._withStripped=!0;var i=a(1880),n=a(1582),o=a(1551),d=a(4651);const l={components:{GoogleSupport:()=>a.e(482).then(a.bind(a,4095))},filters:{},props:{},data:()=>({ResultList:[],luckyOption:{false:"未中獎",true:"中獎"},editCandidateInfo:!1,showGooglSupport:!1,sortType:"candidateIndex",sortTypeOptions:{prizeIndex:"獎項順序",candidateIndex:"候選名單順序"}}),computed:{...(0,n.L8)(["config","triggerOpenResult","candidateList","prizeList","prizeMapping"])},watch:{triggerOpenResult(){const t=this;t.triggerOpenResult?d(t.$refs.box).modal("show"):d(t.$refs.box).modal("hide")},sortType:{immediate:!0,handler(){this.formatResultList()}}},created(){},mounted(){const t=this;d(t.$refs.box).bind("shown.bs.modal",(()=>{t.formatResultList(),o.Xe.mixpanel("ResultOpen_click"),o.Xe.gtag("event","ResultOpen_click")})),d(t.$refs.box).bind("hidden.bs.modal",(()=>{o.Xe.mixpanel("ResultClose_click"),o.Xe.gtag("event","ResultClose_click")})),d(t.$refs.download).bind("shown.bs.modal",(()=>{t.showGooglSupport=!0})),d(t.$refs.download).bind("hidden.bs.modal",(()=>{t.showGooglSupport=!1})),t.triggerOpenResult?d(t.$refs.box).modal("show"):d(t.$refs.box).modal("hide")},updated(){},destroyed(){},methods:{...(0,n.i0)({}),...(0,n.PY)({setCandidateInfo:"setCandidateInfo"}),formatResultList(){const t=this;clearTimeout(t.formatResultListTimer),t.formatResultListTimer=setTimeout((()=>{const{sortType:e,prizeList:a}=t,s=JSON.parse(JSON.stringify(t.prizeMapping));let i=[],n=JSON.parse(JSON.stringify(t.candidateList));n=n.filter((t=>!1===t.del));const o=`${n.length}`.length,d=`${a.length}`.length;n.forEach(((a,n)=>{const l=a,r=[],c=[];let u=!1;l.award.forEach((t=>{s[t]&&(r.push(t),c.push(s[t].title),u=s[t].index)})),l.award=r,l.award_title=c.join(","),l.haveAward=r.length>0,l.award_index=u;const p=[];p.push(l.haveAward?0:1),"prizeIndex"===e?(p.push(t.padWithZeros(u,d)),p.push(t.padWithZeros(n,o))):p.push(t.padWithZeros(n,o)),l.sort_index=p.join(":"),i.push(l)})),i=i.sort(((t,e)=>t.sort_index>e.sort_index?1:t.sort_index===e.sort_index?0:-1)),t.ResultList=i}))},openEdit(t){o.Xe.mixpanel("ResultEdit_click",t),o.Xe.gtag("event","ResultEdit_click",t),this.editCandidateInfo=t},save(){const t=this,e=JSON.parse(JSON.stringify(t.prizeList)),a={};e.forEach((t=>{a[t.title]=t}));const s=[];"true"===t.editCandidateInfo.haveAward&&t.editCandidateInfo.award_title.split(",").forEach((t=>{t=t.trim(),a[t]&&s.push(a[t].prize_sn)}));const i={sn:t.editCandidateInfo.sn,name:t.editCandidateInfo.name,pos:t.editCandidateInfo.pos,award:s,del:t.editCandidateInfo.del};t.setCandidateInfo(i),t.editCandidateInfo=!1,t.formatResultList(),o.Xe.mixpanel("ResultEditSave_click",i),o.Xe.gtag("event","ResultEditSave_click",i)},download(){const t=this;d(t.$refs.box).modal("hide"),d(t.$refs.download).modal("show"),clearTimeout(t.downloadTimer);const e=o.Yj.randRange(2e3,5e3);t.downloadTimer=setTimeout((()=>{const e=i.unparse(t.ResultList,{header:["姓名","職位","獎項"],columns:["name","pos","award_title"]}),a=encodeURI(`data:text/csv;charset=utf-8,${e}`),s=document.createElement("a");s.style.display="none",s.setAttribute("href",a),s.setAttribute("download",`${t.config.webTitle}中獎名單.csv`),document.body.appendChild(s),s.click(),o.Xe.mixpanel("ResultDownload_click",{csv:e}),o.Xe.gtag("event","ResultDownload_click",{csv:e}),d(t.$refs.box).modal("show"),d(t.$refs.download).modal("hide")}),e)},padWithZeros:(t,e)=>String(t).padStart(e,"0")}},r=(0,a(2881).A)(l,s,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[e("i",{staticClass:"fas fa-vote-yea"}),t._v("\n                        中獎名單\n                    ")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this._self._c;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("排序方式")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticStyle:{width:"15%"}},[t._v("\n                                        #\n                                    ")]),t._v(" "),e("th",{staticStyle:{width:"30%"}},[t._v("\n                                        姓名\n                                    ")]),t._v(" "),e("th",[t._v("獎項")]),t._v(" "),e("th",{staticStyle:{width:"20%"}},[t._v("\n                                        功能\n                                    ")])])])},function(){var t=this._self._c;return t("p",{staticClass:"text-center mb-3",staticStyle:{"font-size":"50px"}},[t("i",{staticClass:"fa-spin fas fa-sync"})])}],!1,null,"40f24670",null).exports}}]);
//# sourceMappingURL=ResultBox.bundle.js.map?v=1a1f06b28de17b29c362