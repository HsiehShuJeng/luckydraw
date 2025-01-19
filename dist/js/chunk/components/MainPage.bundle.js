"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[118],{6317:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("header-bar"),t._v(" "),e("main",{staticStyle:{padding:"0px 10px"}},[t.candidateList.length>0?e("div",{staticClass:"shortlist-box"},[e("transition-group",{staticClass:"shortlist",attrs:{name:"shortlist",tag:"div","enter-active-class":"fadeInUp","leave-active-class":"fadeOutDown"}},t._l(t.candidateListBySort,(function(t,i){return e("candidate-box",{key:t.sn,attrs:{"candidate-index":i,"candidate-info":t}})})),1)],1):[t._m(0),t._v(" "),e("div",{staticClass:"shortlist-empty-box"},[e("div",{staticClass:"shortlist-empty-info text-left"},[t._m(1),t._v(" "),e("ol",[e("li",{staticClass:"mb-2"},[e("a",{attrs:{href:"javascript:;"},on:{click:t.editCandidateList}},[t._v("輸入抽獎名單")])]),t._v(" "),e("li",{staticClass:"mb-2"},[e("a",{attrs:{href:"javascript:;"},on:{click:t.triggerTutorial}},[t._v("觀看教學導覽")])]),t._v(" "),e("li",{staticClass:"mb-2"},[e("a",{attrs:{href:"javascript:;"},on:{click:t.createRandomLuckyDrawAct}},[t._v("隨機建立範例測試")])])])])])]],2),t._v(" "),t.config.backgroundImg?e("div",{staticClass:"bg-img",style:{"background-image":"url("+t.config.backgroundImg+")",opacity:t.config.backgroundOpacity}}):t._e(),t._v(" "),e("lucky-draw-storage-box")],1)};o._withStripped=!0;var r=i(6746),a=i(1551),n=i(1582),s=i(4651);const l={components:{HeaderBar:()=>i.e(66).then(i.bind(i,7438)),LuckyDrawStorageBox:()=>i.e(684).then(i.bind(i,8152)),CandidateBox:()=>i.e(330).then(i.bind(i,45))},filters:{},props:{},data:()=>({}),computed:{...(0,n.L8)(["luckyDrawFocusKey","luckyDrawIsRandom","config","candidateList","candidateListBySort","candidateList_sort","prizeList","randomCandidateNames","randomCandidatePos","randomPrize"])},watch:{config:{deep:!0,handler(){this.saveToLocalStorageAct()}},candidateList:{deep:!0,handler(t,e){this.saveToLocalStorageAct()}},candidateList_sort:{deep:!0,handler(t,e){this.saveToLocalStorageAct()}},candidateListInput:{deep:!0,handler(t,e){this.saveToLocalStorageAct()}},prizeList:{deep:!0,handler(t,e){this.saveToLocalStorageAct()}},luckyDrawFocusKey:{deep:!0,handler(){}},luckyDrawIsRandom:{deep:!0,handler(){this.triggerRandomTutorial()}}},created(){},mounted(){this.init()},updated(){},destroyed(){},methods:{...(0,n.i0)({}),...(0,n.PY)({setFavicon:"setFavicon",initSystem:"initSystem",saveToLocalStorage:"saveToLocalStorage",listenLocalStorageChange:"listenLocalStorageChange",createRandomLuckyDraw:"createRandomLuckyDraw",triggerModal:"triggerModal",CheckAdBlock:"CheckAdBlock",setIsTutorial:"setIsTutorial"}),init(){const t=this;t.setFavicon("default"),a.Xe.mixpanel("LuckyDraw_view",{}),a.Xe.gtag("event","page_view"),t.initSystem(),a.Lr.listen("luckyDrawStorage",(e=>{t.listenLocalStorageChange()})),(0,r.detectAnyAdblocker)().then((e=>{t.CheckAdBlock(e)}))},saveToLocalStorageAct(){const t=this;clearTimeout(t.saveToLocalStorageTimer),t.saveToLocalStorageTimer=setTimeout((()=>{t.saveToLocalStorage()}),500)},editCandidateList(){this.triggerModal({key:"CandidateList"})},createRandomLuckyDrawAct(){const t=this;t.createRandomLuckyDraw(),a.Xe.mixpanel("LuckyDrawRandom_click",{config:JSON.parse(JSON.stringify(t.config)),candidateList:JSON.parse(JSON.stringify(t.candidateList)),candidateList_sort:JSON.parse(JSON.stringify(t.candidateList_sort)),prizeList:JSON.parse(JSON.stringify(t.prizeList))}),a.Xe.gtag("event","LuckyDrawRandom_click",{config:JSON.parse(JSON.stringify(t.config)),candidateList:JSON.parse(JSON.stringify(t.candidateList)),candidateList_sort:JSON.parse(JSON.stringify(t.candidateList_sort)),prizeList:JSON.parse(JSON.stringify(t.prizeList))})},gotoDemoVideo(){a.Xe.mixpanel("LuckyDrawDemoVideo_click"),a.Xe.gtag("event","LuckyDrawDemoVideo_click")},triggerRandomTutorial(){const t=this;if(this.luckyDrawIsRandom){const e={offset:{top:60,bottom:60},startCallback(){t.setIsTutorial(!0),a.Xe.mixpanel("TutorialStart_trigger",{type:"RandomTutorial"}),a.Xe.gtag("event","TutorialStart_trigger",{type:"RandomTutorial"})},closeCallback(){t.setIsTutorial(!1),a.Xe.mixpanel("TutorialEnd_trigger",{type:"RandomTutorial"}),a.Xe.gtag("event","TutorialEnd_trigger",{type:"RandomTutorial"})},step_callback(t,e){a.Xe.mixpanel("TutorialStep_trigger",{type:"RandomTutorial",index:e.index}),a.Xe.gtag("event","TutorialStep_trigger",{type:"RandomTutorial",index:e.index})}},i=[{title:"新手教學",intro:"恭喜您建立了一個範例抽獎活動"},{target:'.candidate-box[data-index="5"] .candidate-wrapper',title:"候選人",intro:"每一個框框都是一個候選人"},{target:'.candidate-box[data-index="5"] .candidate-wrapper .candidate-name',title:"候選人是誰",intro:"在這裡你可以呈現他的名字"},{target:'.candidate-box[data-index="5"] .candidate-wrapper .candidate-pos',title:"豐富他的資料",intro:"雖然是非必要，但加上職稱感覺會更豐富",beforeAction(e,i,o){t.triggerModal({key:"Setting",close:!0}),setTimeout((()=>{o()}),10)}},{target:'.nav-link[rel="setting"]',title:"你可以有你的風格",intro:"在設定裡面可以設定屬於你的風格，接下來跟你介紹可以做得多客製化",beforeAction(t,e,i){s("#navbarCollapse").addClass("show"),setTimeout((()=>{i()}),10)},afterAction(t,e,i){s("#navbarCollapse").removeClass("show"),setTimeout((()=>{i()}),10)}},{target:'#SettingBox .box-setting[rel="boxSize"]',scrollTarget:"#SettingBox",title:"候選區塊不滿意",intro:"您可以在這邊設定區塊的寬高與間距",beforeAction(e,i,o){t.triggerModal({key:"Setting"}),setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),o()}),100)}},{target:'#SettingBox .box-setting[rel="fontSize"]',scrollTarget:"#SettingBox",title:"字太小嗎？",intro:"人名與職稱都是文字大小都可以改",beforeAction(t,e,i){setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),i()}),100)}},{target:'#SettingBox .box-setting[rel="boxColor"]',scrollTarget:"#SettingBox",title:"顏色太醜",intro:"區塊總共有三種狀態，每種狀態都有自己的顏色，當然您可以自由設定",beforeAction(t,e,i){setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),i()}),100)}},{target:"#SettingBox .clearAllBtn",scrollTarget:"#SettingBox",title:"玩夠了？",intro:"如果你玩夠了我們呈現的範例抽獎，可以點擊這裡清楚所有資料重新開始",beforeAction(e,i,o){t.triggerModal({key:"Setting"}),setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),o()}),100)}},{title:"開放想法",intro:"當然你也可以不用抽人，不侷限讓抽獎更多變化，一場有趣的抽獎活動就由你來建立。",beforeAction(e,i,o){t.triggerModal({key:"Setting",close:!1}),setTimeout((()=>{o()}),100)}}];new a.FL(i,e).run()}},triggerTutorial(){const t=this,e={offset:{top:60,bottom:60},startCallback(){t.setIsTutorial(!0),a.Xe.mixpanel("TutorialStart_trigger",{type:"Tutorial"}),a.Xe.gtag("event","TutorialStart_trigger",{type:"Tutorial"})},closeCallback(){t.setIsTutorial(!1),a.Xe.mixpanel("TutorialEnd_trigger",{type:"Tutorial"}),a.Xe.gtag("event","TutorialEnd_trigger",{type:"Tutorial"})},step_callback(t,e){a.Xe.mixpanel("TutorialStep_trigger",{type:"Tutorial",index:e.index}),a.Xe.gtag("event","TutorialStep_trigger",{type:"Tutorial",index:e.index})}},i=t.randomCandidateNames.split(","),o=t.randomCandidatePos.split(","),r=t.randomPrize.split(","),n=()=>{const t=a.Yj.randRange(0,i.length-1);return i.splice(t,1)[0]},l=()=>{const t=a.Yj.randRange(0,o.length-1);let e=o[t];return e.includes("_o")&&(e=e.replace("_o",""),o.splice(t,1)),e},c=()=>{const t=a.Yj.randRange(0,r.length-1);return r.splice(t,1)[0]},d=[{target:"",title:"新手教學",intro:"歡迎您使用 LuckyDraw 抽獎機，這是一個有趣又高彈性的抽獎機器，適合用在 公司活動尾牙也適合各大社群抽獎，到底該如何使用接下來告訴您。"},{target:"",title:"總是需要有人",intro:"抽獎最重要的就是人，您的檯面上一個人都沒有怎麼抽呢？"},{target:'.navbar .navbar-nav .nav-item .nav-link[rel="CandidateList"]',title:"候選名單",intro:"來這裡建立一批候選名單吧！",beforeAction(e,i,o){s("#navbarCollapse").addClass("show"),t.triggerModal({key:"CandidateList",close:!1}),setTimeout((()=>{o()}),10)},afterAction(t,e,i){s("#navbarCollapse").removeClass("show"),setTimeout((()=>{i()}),10)}},{target:'#CandidateListBox textarea[name="candidateListTextarea"]',title:"輸入候選名單",intro:"來這裡建立一批候選名單吧！<br>一行一個候選人，您可以輸入他的姓名與職稱（非必填）",beforeAction(e,i,o){s("#navbarCollapse").removeClass("show"),t.triggerModal({key:"CandidateList"}),setTimeout((()=>{o()}),100)},afterAction(t,e,i){}},{target:'#CandidateListBox textarea[name="candidateListTextarea"]',title:"輸入候選名單",intro:"就像這樣",beforeAction(t,e,i){setTimeout((()=>{let t=[];for(let e=0;e<a.Yj.randRange(10,15);e+=1)t.push(`${n()},${l()}`);t=t.join("\n"),s('#CandidateListBox textarea[name="candidateListTextarea"]').val(t),s('#CandidateListBox textarea[name="candidateListTextarea"]')[0].dispatchEvent(new Event("input")),i()}),100)},afterAction(t,e,i){}},{target:"#CandidateListBox .btn-primary",title:"存起來吧",intro:"既然寫好了存起來試試看",beforeAction(t,e,i){setTimeout((()=>{i()}),100)},afterAction(t,e,i){s("#CandidateListBox .btn-primary").trigger("click"),setTimeout((()=>{i()}),100)}},{target:".shortlist-box",title:"候選名單",intro:"候選名單建立好了，這些就是即將要被抽選的對象",beforeAction(t,e,i){setTimeout((()=>{i()}),100)}},{target:"",title:"獎品勒！？",intro:"候選人建立好了，接下來我們要抽什麼呢？"},{target:'.navbar .navbar-nav .nav-item .nav-link[rel="PrizeList"]',title:"獎項名單",intro:"你的活動想抽什麼都可以在這邊建立",beforeAction(e,i,o){s("#navbarCollapse").addClass("show"),t.triggerModal({key:"PrizeList",close:!1}),setTimeout((()=>{o()}),10)},afterAction(t,e,i){s("#navbarCollapse").removeClass("show"),setTimeout((()=>{i()}),10)}},{target:"#PrizeListBox #AddPrizeGroup",title:"獎項名單",intro:"需要建立一筆獎項資訊，除了獎項名稱外也可以設定此獎項的數量。",scrollTarget:"#PrizeListBox",beforeAction(e,i,o){s("#navbarCollapse").removeClass("show"),document.querySelector("#PrizeListBox").scroll({top:0}),t.triggerModal({key:"PrizeList"}),setTimeout((()=>{const t=s("#PrizeListBox #AddPrize");t&&t.trigger("click"),o()}),100)}},{target:"#PrizeListBox #AddPrizeGroup",title:"獎項名單",intro:"我來示範一次",scrollTarget:"#PrizeListBox",beforeAction(t,e,i){document.querySelector("#PrizeListBox").scroll({top:0});const o={title:c(),amount:a.Yj.randRange(3,5)};for(const t in o)s(`#PrizeListBox #AddPrizeGroup input[name="${t}"]`).val(o[t]),s(`#PrizeListBox #AddPrizeGroup input[name="${t}"]`)[0].dispatchEvent(new Event("input"));setTimeout((()=>{i()}),100)},afterAction(t,e,i){s("#PrizeListBox #AddPrizeGroup .input-group-text").trigger("click"),setTimeout((()=>{i()}),10)}},{target:"#PrizeListBox .prizeListGroup .handler",title:"獎項名單",intro:"你可以透過這個拖拉調整順序",scrollTarget:"#PrizeListBox",beforeAction(t,e,i){document.querySelector("#PrizeListBox").scroll({top:0}),setTimeout((()=>{i()}),100)},afterAction(t,e,i){setTimeout((()=>{i()}),10)}},{target:"#PrizeListBox #AddPrize",title:"獎項名單",intro:"如果你還有其他獎項，可以點擊這邊再新增",scrollTarget:"#PrizeListBox",beforeAction(t,e,i){document.querySelector("#PrizeListBox").scroll({top:0}),setTimeout((()=>{i()}),100)},afterAction(e,i,o){t.triggerModal({key:"PrizeList",close:!0}),setTimeout((()=>{o()}),10)}},{target:"",title:"刺激的來了",intro:"候選項目跟獎項都設定好了，當然接下來是重頭戲抽獎！",beforeAction(t,e,i){setTimeout((()=>{i()}),100)},afterAction(t,e,i){setTimeout((()=>{i()}),10)}},{target:'.navbar .navbar-nav .nav-item .nav-link[rel="GetLucky"]',title:"該要抽獎",intro:"點擊這邊選擇你的抽獎項目",beforeAction(e,i,o){s("#navbarCollapse").addClass("show"),t.triggerModal({key:"GetLucky",close:!1}),setTimeout((()=>{o()}),10)},afterAction(t,e,i){s("#navbarCollapse").removeClass("show"),setTimeout((()=>{i()}),10)}},{target:"#GetLuckyBox .get-lucky-list",title:"選一個",intro:"這裡是所有獎項的列表，包含了可抽數量與已抽數量",scrollTarget:"#GetLuckyBox",beforeAction(e,i,o){t.triggerModal({key:"GetLucky"}),setTimeout((()=>{o()}),10)},afterAction(t,e,i){setTimeout((()=>{i()}),10)}},{target:"#GetLuckyBox .get-lucky-list .prizeInfo",title:"選一個",intro:"我們選這個來抽獎吧，用力抽下去",scrollTarget:"#GetLuckyBox",beforeAction(e,i,o){t.triggerModal({key:"GetLucky"}),document.querySelector("#GetLuckyBox").scroll({top:0}),setTimeout((()=>{o()}),10)},afterAction(t,e,i){s("#GetLuckyBox .get-lucky-list .prizeInfo").trigger("click"),setTimeout((()=>{i()}),10)}},{target:".shortlist",title:"抽獎中",intro:"動畫呈現抽獎情況，隨機選擇保證公平",beforeAction(t,e,i){setTimeout((()=>{i()}),10)},waitToNextAction(e,i){t.waitToNextActionTimer=null,t.waitToNextActionTimer=setInterval((()=>{s("#LuckyBox").is(":visible")&&(clearInterval(t.waitToNextActionTimer),i())}),500)}},{target:"#LuckyBox .lucky-info",title:"抽中了！",intro:"這裡呈現被抽中的候選人與中獎資訊",scrollTarget:"#LuckyBox",beforeAction(t,e,i){document.querySelector("#LuckyBox").scroll({top:0}),setTimeout((()=>{i()}),10)}},{target:"#LuckyBox .cancel",title:"人不在",intro:"抽到歸抽到，這人卻不在現場怎麼辦，點擊這裡取消這次抽獎",scrollTarget:"#LuckyBox",beforeAction(t,e,i){document.querySelector("#LuckyBox").scroll({top:0}),setTimeout((()=>{i()}),10)}},{target:"#LuckyBox .save",title:"天選之人！",intro:"確定就是這人了，把這候選人儲存起來！",scrollTarget:"#LuckyBox",beforeAction(t,e,i){document.querySelector("#LuckyBox").scroll({top:0}),setTimeout((()=>{i()}),10)},afterAction(t,e,i){s("#LuckyBox .save").trigger("click"),setTimeout((()=>{i()}),10)}},{target:".shortlist",title:"完成",intro:"您已經完成了一次抽獎，感覺很不錯吧！"},{target:'.navbar .navbar-nav .nav-item .nav-link[rel="Result"]',title:"抽獎結果",intro:"很難統計抽獎結果嗎？點擊這裡來看抽獎結果",beforeAction(e,i,o){s("#navbarCollapse").addClass("show"),t.triggerModal({key:"Result",close:!1}),setTimeout((()=>{o()}),10)},afterAction(t,e,i){s("#navbarCollapse").removeClass("show"),setTimeout((()=>{i()}),10)}},{target:"#ResultBox .table tbody tr",title:"中獎人",intro:"這裡可以呈現中獎人資訊與得獎資訊！",scrollTarget:"#ResultBox",beforeAction(e,i,o){t.triggerModal({key:"Result"}),setTimeout((()=>{document.querySelector("#ResultBox").scroll({top:0}),o()}),10)},afterAction(t,e,i){setTimeout((()=>{i()}),10)}},{target:"#ResultBox .download-btn",title:"下載",intro:"中獎人太多不好管理，那就下載成為檔案吧！",scrollTarget:"#ResultBox",beforeAction(t,e,i){document.querySelector("#ResultBox").scroll({top:0}),setTimeout((()=>{i()}),100)},afterAction(e,i,o){t.triggerModal({key:"Result",close:!0}),setTimeout((()=>{o()}),10)}},{title:"接近尾聲",intro:"Lucky Draw 抽獎機的介紹也到了尾聲了，很開心你看到這邊。啊！突然想到似乎還有一些事情沒介紹",beforeAction(t,e,i){setTimeout((()=>{i()}),100)}},{target:'.nav-link[rel="setting"]',title:"你可以有你的風格",intro:"在設定裡面可以設定屬於你的風格，接下來跟你介紹可以做得多客製化",beforeAction(t,e,i){s("#navbarCollapse").addClass("show"),setTimeout((()=>{i()}),10)},afterAction(t,e,i){s("#navbarCollapse").removeClass("show"),setTimeout((()=>{i()}),10)}},{target:'#SettingBox .box-setting[rel="boxSize"]',scrollTarget:"#SettingBox",title:"候選區塊不滿意",intro:"您可以在這邊設定區塊的寬高與間距",beforeAction(e,i,o){t.triggerModal({key:"Setting"}),setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),o()}),100)}},{target:'#SettingBox .box-setting[rel="fontSize"]',scrollTarget:"#SettingBox",title:"字太小嗎？",intro:"人名與職稱都是文字大小都可以改",beforeAction(t,e,i){setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),i()}),100)}},{target:'#SettingBox .box-setting[rel="boxColor"]',scrollTarget:"#SettingBox",title:"顏色太醜",intro:"區塊總共有三種狀態，每種狀態都有自己的顏色，當然您可以自由設定",beforeAction(t,e,i){setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),i()}),100)}},{target:"#SettingBox .clearAllBtn",scrollTarget:"#SettingBox",title:"展示即將結束",intro:"可以點擊這裡清楚所有資料重新開始",beforeAction(e,i,o){t.triggerModal({key:"Setting"}),setTimeout((()=>{document.querySelector("#SettingBox").scroll({top:0}),o()}),100)}},{title:"開放想法",intro:"當然你也可以不用抽人，不侷限讓抽獎更多變化，一場有趣的抽獎活動就由你來建立。",beforeAction(e,i,o){t.triggerModal({key:"Setting",close:!1}),setTimeout((()=>{o()}),100)}}];new a.FL(d,e).run()}}},c=(0,i(2881).A)(l,o,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"alert alert-primary alert-dismissible fade show",attrs:{role:"alert"}},[e("i",{staticClass:"fas fa-bullhorn"}),t._v(" 這是一個方便的免費線上抽獎程式，無論您是 FB IG 粉絲團行銷抽獎活動、公司年度春酒尾牙現場抽獎抽獎，或是活動聚會節慶抽獎都能符合您的需求，簡單易上手的輸入介面讓你可以快速來一場刺激又公平的抽獎活動。\n                "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n                        尚未建立抽獎名單 "),e("br"),t._v("\n                        您可以：\n                    ")])}],!1,null,"5d24ba18",null).exports}}]);
//# sourceMappingURL=MainPage.bundle.js.map?v=d7869af02eb68146aef6