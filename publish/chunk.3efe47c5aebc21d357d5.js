(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{232:function(e,t,i){var s=i(238);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(166).default)("9248a57e",s,!0,{})},233:function(e,t,i){var s=i(247);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(166).default)("48117795",s,!0,{})},234:function(e,t,i){"use strict";var s=i(29),a=i(38),o={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(s.P)},watch:{canShow(e){e&&this.count++}}},r=i(51),n=Object(r.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[e.canShow?i("div",{key:e.count},[e._m(0)]):e._e()])],1)}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+e.variant,attrs:{role:"alert"}},[e._t("default"),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":e.i19close},on:{click:function(t){return e.$emit("dismiss")}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])],2)}],!1,null,null,null);t.a=n.exports},235:function(e,t,i){"use strict";t.a=(e,t)=>e.sort(((e,i)=>{if(e.app_id===i.app_id)return 0;const s=t.indexOf(e.app_id),a=t.indexOf(i.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},237:function(e,t,i){"use strict";i(232)},238:function(e,t,i){(t=i(165)(!0)).push([e.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,4BAA4B,uCAAuC,CAAC,8BAA8B,qBAAqB,CAAC,kCAAkC,CAAC,0BAA0B,CAAC,6BAA6B,CAAC,4BAA4B,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),e.exports=t},243:function(e,t,i){"use strict";i(8);var s=i(29),a=i(28),o=i(38),r=i(81),n=i(31),c=i(6),l=i(235),p=i(236),d=i.n(p),u=i(239);const h="object"==typeof window&&window.localStorage,A="shipping-to-zip",v="object"==typeof window&&window.propsShippingCalculator||{},m=e=>{const t={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((i=>{void 0!==e[i]&&(t[i]=e[i])})),t};var g={name:"ShippingCalculator",components:{CleaveInput:d.a,ShippingLine:u.a},props:{zipCode:String,canSelectServices:Boolean,canAutoSelectService:{type:Boolean,default:"boolean"!=typeof v.canAutoSelectService||v.canAutoSelectService},canInputZip:{type:Boolean,default:"boolean"!=typeof v.canInputZip||v.canInputZip},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},skipAppIds:Array,shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(o.a)(s.j),i19calculateShipping:()=>Object(o.a)(s.E),i19zipCode:()=>Object(o.a)(s.ye),i19freeShipping:()=>Object(o.a)(s.Cb).toLowerCase(),i19selectShippingMsg:()=>Object(o.a)({pt_br:"Selecione uma forma de envio abaixo",en_us:"Select a shipping method below"}),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let e=0;return this.shippedItems.forEach((t=>{if(t.quantity&&t.production_time){const{days:i,cumulative:s}=t.production_time,a=s?i*t.quantity:i;a>e&&(e=a)}})),e}},methods:{formatMoney:r.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((t=>{const{validated:i,error:s,response:a}=t;if(!i||s)return;if(this.skipAppIds&&this.skipAppIds.includes(t.app_id)&&e.filter((e=>{let{app_id:t}=e;return!this.skipAppIds.includes(t)})).length)return;a.shipping_services.forEach((e=>{this.shippingServices.push({app_id:t.app_id,...e})}));const o=a.free_shipping_from_value;o&&(!this.freeFromValue||this.freeFromValue>o)&&(this.freeFromValue=o)})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,t)=>{const i=e.shipping_line.total_price-t.shipping_line.total_price;return i<0?-1:i>0?1:e.shipping_line.delivery_time&&t.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<t.shipping_line.delivery_time.days?-1:1})),this.canAutoSelectService?this.setSelectedService(0):this.selectedService=null,this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):t?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:t}=this;let i="/calculate_shipping.json";this.skipAppIds&&this.skipAppIds.length&&(i+="?skip_ids=",this.skipAppIds.forEach(((e,t)=>{t>0&&(i+=","),i+=`${e}`})));const s={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(s.items=this.localShippedItems,s.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(c.c)({url:i,method:"POST",storeId:t,data:s}).then((t=>{let{data:i}=t;return this.parseShippingOptions(i.result,e)})).catch((t=>{e||this.scheduleRetry(4e3),console.error(t)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),h&&h.setItem(A,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(m);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,t)=>e+Object(n.a)(t)*t.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},skipAppIds(){this.fetchShippingServices()},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&h){const e=h.getItem(A);e&&(this.localZipCode=e)}}},C=g,f=(i(237),i(51)),_=Object(f.a)(C,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping-calculator"},[e.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(t){return t.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(t){e.localZipCode=t},expression:"localZipCode"}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[i("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},[i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.canSelectServices&&!e.canAutoSelectService&&null===e.selectedService&&e.shippingServices.length?i("div",{staticClass:"shipping-calculator__label"},[i("i",{staticClass:"i-arrow-down animated wobble"}),e._v(" "+e._s(e.i19selectShippingMsg)+" ")]):e._e()]),e._l(e.shippingServices,(function(t,s){return i(e.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===s},attrs:{href:e.canSelectServices&&"#"},on:{click:function(t){return t.preventDefault(),e.setSelectedService(s)}}},[i("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[i("shipping-line",{attrs:{"shipping-line":t.shipping_line,"production-deadline":e.productionDeadline,"data-service-code":t.service_code}}),e.canSelectServices&&!e.canAutoSelectService?i("div",{staticClass:"custom-control custom-radio"},[i("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"shipping-method-"+t.service_code,name:"shipping-method-select"},domProps:{checked:e.selectedService===s}}),i("label",{staticClass:"custom-control-label",attrs:{for:"shipping-method-"+t.service_code}},[i("small",[e._v(e._s(t.label))])])]):i("small",[e._v(e._s(t.label))])]}),null,{service:t})],2)])}))],2)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[i("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),i("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[e._v(" "+e._s(e.i19freeShipping)+" "),i("i",{staticClass:"i-truck mx-1"}),i("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)])}),[],!1,null,null,null);t.a=_.exports},244:function(e,t,i){"use strict";var s={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:e,zIndex:t,transitionMs:i,opacity:s}=this;return{top:e,transition:`opacity ${i}ms linear`,opacity:s,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(e){e?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(e){0===e?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(i(246),i(51)),o=Object(a.a)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"backdrop",style:e.style,on:{click:e.hide}})}),[],!1,null,null,null);t.a=o.exports},245:function(e,t,i){"use strict";t.a=e=>{"object"==typeof window&&"function"==typeof window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,500)}},246:function(e,t,i){"use strict";i(233)},247:function(e,t,i){(t=i(165)(!0)).push([e.i,".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,4BAA4B,CAAC,cAAc,CAAC,YAAY,CAAC,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}"]}]),e.exports=t},249:function(e,t,i){"use strict";t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(;e.offsetParent;)t+=e.offsetTop,e=e.offsetParent;return window.scroll({top:t,behavior:"smooth"})}},303:function(e,t,i){var s=i(385);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(166).default)("a7b8dabe",s,!0,{})},384:function(e,t,i){"use strict";i(303)},385:function(e,t,i){(t=i(165)(!0)).push([e.i,".product-quickview__box{border-radius:0;left:0;max-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:576px){.product-quickview__box{border-radius:var(--border-radius);margin-left:5vw;margin-top:5vh;max-height:90vh;width:90vw}}.product-quickview__loading{padding:var(--spacer-5);text-align:center}.product-quickview__loading .spinner-border{height:5rem;width:5rem}.product-quickview__btn-redirect{display:block;margin:var(--spacer-4) auto var(--spacer-5);max-width:400px}","",{version:3,sources:["ProductQuickview.scss"],names:[],mappings:"AAAA,wBAAwB,eAAe,CAAC,MAAM,CAAC,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,wBAAwB,wBAAwB,kCAAkC,CAAC,eAAe,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,CAAC,4BAA4B,uBAAuB,CAAC,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,UAAU,CAAC,iCAAiC,aAAa,CAAC,2CAA2C,CAAC,eAAe",file:"ProductQuickview.scss",sourcesContent:[".product-quickview__box{border-radius:0;left:0;max-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:576px){.product-quickview__box{border-radius:var(--border-radius);margin-left:5vw;margin-top:5vh;max-height:90vh;width:90vw}}.product-quickview__loading{padding:var(--spacer-5);text-align:center}.product-quickview__loading .spinner-border{height:5rem;width:5rem}.product-quickview__btn-redirect{display:block;margin:var(--spacer-4) auto var(--spacer-5);max-width:400px}"]}]),e.exports=t},458:function(e,t,i){"use strict";i.r(t);var s=i(29),a=i(38),o=i(257),r=i(271),n=i(244),c={name:"ProductQuickView",components:{Portal:o.a,TheProduct:r.default,ABackdrop:n.a},props:{productId:String,product:Object,portalId:{type:String,default:"quickview"}},data:()=>({productName:"",productLink:"",isVisible:!1}),computed:{i19close:()=>Object(a.a)(s.P),i19seeMoreInfo:()=>Object(a.a)(s.Ld)},methods:{setProduct(e){let{name:t,slug:i}=e;this.productName=t,this.productLink=`/${i}`},hide(){this.isVisible=!1,setTimeout((()=>{this.isVisible||this.$destroy()}),450)}},created(){let e=document.getElementById(this.portalId);e?e.innerHTML="":(e=document.createElement("div"),e.setAttribute("id",this.portalId),document.body.appendChild(e)),this.product&&this.setProduct(this.product),this.isVisible=!0}},l=(i(384),i(51)),p=Object(l.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("portal",{attrs:{selector:"#"+e.portalId}},[i("div",{staticClass:"product-quickview"},[i("a-backdrop",{attrs:{"is-visible":e.isVisible},on:{hide:e.hide}}),i("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[e.isVisible?i("div",{staticClass:"product-quickview__box card"},[e._t("header",(function(){return[i("div",{staticClass:"product-quickview__header card-header"},[e._v(" "+e._s(e.productName)+" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":e.i19close},on:{click:e.hide}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])]})),i("div",{staticClass:"product-quickview__body card-body"},[e.productName?e._e():i("div",{staticClass:"product-quickview__loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])])]),i("div",{staticClass:"container"},[i("the-product",{attrs:{"is-quickview":"","product-id":e.productId,product:e.product},on:{"update:product":e.setProduct,buy:e.hide}})],1),e.productName?i("a",{staticClass:"product-quickview__btn-redirect btn btn-secondary",attrs:{href:e.productLink}},[e._v(" "+e._s(e.i19seeMoreInfo)+" ")]):e._e()])],2):e._e()])],1)])}),[],!1,null,null,null);t.default=p.exports}},0,[38,39]]);