
async function waitForShopify() {
  return new Promise((resolve) => {
    const check = () => {
      if (typeof Shopify !== "undefined") {
        resolve();
      } else {
        setTimeout(check, 200);
      }
    };
    check();
  });
}
!async function(){
    await waitForShopify();
  let e=!1,t=!1,i=0,a=[],n=[],l=null,r=0,o=[],s,d="",c=null,p=Shopify.theme.id,u=null;/(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|webOS|BlackBerry)/i.test(navigator.userAgent),"undefined"==typeof ShopifyAnalytics&&await new Promise((e,t)=>{setTimeout(()=>{e()},1500)}),window.ShopifyAnalytics&&ShopifyAnalytics.meta.product?i=ShopifyAnalytics.meta.product.id:Shopify.designMode&&(eH("#em_product_id")||await new Promise((e,t)=>{setTimeout(()=>{e()},1e3)}),i=JSON.parse(eH("#em_product_id").textContent));let m=0;eq("#shopify-features")?m=JSON.parse(eq("#shopify-features")[0].outerText).shopId:window.ShopifyAnalytics&&ShopifyAnalytics.lib&&ShopifyAnalytics.lib.config&&(m=ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId),function e(){switch(m){case 55605198922:d+=`#email-me-frame .frame-title, #email-me-frame input {
        font-family: 'Sabon Next';
        }`;break;case 53793915066:136421834975===p&&(d+=".product-restore-email{max-width:initial !important}");break;case 11881800:c=function(){insertStyle.textContent+=`button.custom_pers.product-add-to-cart-btn {
          background-color: #fff !important;
          color: #000;
         }`,K[0].insertAdjacentHTML("beforebegin",`<div style="text-align: center;color: #000;margin-bottom: 14px">
            GET NOTIFIED WHERE BACK IN STOCK</div>`)};case 67088286014:c=function(){let e=eH("#email-me-frame");e&&(eH(".frame-email-logo").innerHTML=`
              <svg class="icon" style="width:19px;height: 19px;margin-top:5px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2253" height="128" width="128"><path d="M871.673333 770.813333l-165.933333-165.94a53.4 53.4 0 0 0-75.426667 0l-37.713333 37.713334c-21.333333 21.333333-90.413333 0.1-150.846667-60.34S360.046667 452.76 381.413333 431.4l37.713334-37.713333a53.4 53.4 0 0 0 0-75.426667l-165.94-165.933333a53.393333 53.393333 0 0 0-75.42 0l-37.713334 37.713333c-27.866667 27.866667-44.84 64.52-50.46 108.946667-5.213333 41.206667-0.406667 87.42 14.28 137.333333C133.333333 536.586667 199.773333 642 290.9 733.1S487.42 890.666667 587.653333 920.126667c36.926667 10.86 71.813333 16.32 104.146667 16.32a264.333333 264.333333 0 0 0 33.213333-2.04c44.426667-5.62 81.08-22.593333 108.946667-50.46l37.713333-37.713334a53.393333 53.393333 0 0 0 0-75.42z" fill="#bb8461" p-id="2254"></path></svg>
            `)};break;case 56661573841:c=function(){if(document.querySelector(".sms-type")){let e=new Event("click");document.querySelector(".sms-type").dispatchEvent(e)}};break;case 71669449038:c=function(){eq(".email-frame-body input").forEach(e=>e.removeAttribute("type"))};break;case 19073267:c=function(){eH("#join-mailing-list")&&eH("#join-mailing-list").removeAttribute("checked")};break;case 48441458840:"collection"===ShopifyAnalytics.meta.page.pageType&&(137027780861===p&&(d+=".quick-add__submit.button.button--full-width.button--secondary[disabled]{display:none}"),c=function(){eq(".product-restore-email").forEach(e=>e.parentNode.style.gridRowStart=3)})}}(),s=Shopify.locale;let f={getProsVariantsData(e){let t={shopId:m};return Object.assign(t,e),eT(g+"api/v1/customer/getVariantBtStatus",t)},getCollBtnStyle(){let e={shopId:m,shop_language:s};return eT(g+"api/v1/getCollectionButtonStyle",e)}},b=Shopify.shop,$=isDebug,g=apiBaseUrl,h={},y=[];!function e(){let t="";if(!window.ShopifyAnalytics||!ShopifyAnalytics.meta.page.customerId)return;t=ShopifyAnalytics.meta.page.customerId;let i={shopId:m,customerId:t};eT(g+"api/v1/customer/getCustomerInfo",i).then(e=>{let{apiCode:t,customer:i}=e;200===t&&i&&($&&console.log("Get Customer Info Success"),h=JSON.parse(JSON.stringify(i)))})}();let _=await ev();(function e(){let t=`<style>
        body {
          --sa-border-normal: 1px solid #d9d9d9;
        --sa-border-hover: 2px solid skyblue;
        --sa-button-height-normal: 44px;
        --sa-border-radius-input: 4px;
        --sa-border-radius-button: 4px;
        --sa-border-color: #d9d9d9;
        --sa-disabled-bgc: #f2f2f2;
        --sa-btn-hover-bgc: #f6f6f7;
        --sa-input-padding: 8px;
    }
        ${d}
        #email-me-frame * {
          box-sizing: border-box;
    }
        #email-me-frame *:empty {
          display: inherit;
    }
        .email-me-button{
          width: 100%;
        height: var(--sa-button-height-normal);
        /*background-color: rgb(51, 51, 51);*/
        /*border-radius: 7px;*/
        /*color: white;*/
        border-width: 0px;
        font-size: 15px;
        cursor: pointer;
        letter-spacing: 1px;
        border-radius: var(--sa-border-radius-button);
        align-items:center;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        transition: all linear .15s;
        position: relative;
  }
        .email-me-inlineButton {
          display: none;
  }
        #email-me-frame {
          position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        z-index: 9999999;
        display: none;
  }

        #email-me-frame input {
          background-color: #ffffff;
        border: 1px solid var(--sa-border-color);
        border-radius: var(--sa-border-radius-input);
  }

        #email-me-frame .email-frame-content{
          width: 65%;
        /*height: 358px;*/
        max-width: 398px;
        min-width: 300px;
        background: white;
        border-radius: 7px;
        padding-bottom:16px;
        border: 1px solid var(--sa-border-color);
        box-shadow: 0 0 18px #00000030;
        animation: fadeIn .15s linear;
        position: fixed;
        top: 50%; left: 50%;
        bottom: 0;
        height: 100%;
        max-height: 508px;
        transform: translate(-50%, -50%);
        overflow-y: scroll;
  }
        .email-frame-content::-webkit-scrollbar {
          /*\xe6\xbbš\xe5Š\xa8\xe6\x9d\xa1\xe6•\xb4\xe4\xbd“\xe6 \xb7\xe5\xbc\x8f*/
          width: 4px; /*\xe9\xab˜\xe5\xae\xbd\xe5ˆ†\xe5ˆ\xab\xe5\xaf\xb9\xe5\xba”\xe6\xa8\xaa\xe7\xab–\xe6\xbbš\xe5Š\xa8\xe6\x9d\xa1\xe7š„\xe5\xb0\xba\xe5\xaf\xb8*/
        height: 1px;
  }
        .email-frame-content::-webkit-scrollbar-thumb {
          /*\xe6\xbbš\xe5Š\xa8\xe6\x9d\xa1\xe9‡Œ\xe9\x9d\xa2\xe5\xb0\x8f\xe6–\xb9\xe5\x9d—*/
          border-radius: 10px;
        background: #a9a9a9;
  }
        .email-frame-content::-webkit-scrollbar-track {
          /*\xe6\xbbš\xe5Š\xa8\xe6\x9d\xa1\xe9‡Œ\xe9\x9d\xa2\xe8\xbd\xa8\xe9\x81“*/
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #ededed;
        border-radius: 10px;
  }

        #email-me-frame .frame-close {
          margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 5px;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 2px;
        background: #333;
        transform: rotate(
        45deg
        );
  }
        #email-me-frame .frame-close::after{
          content: "";
        display: block;
        height: 2px;
        background: #333;
        transform: rotate(
        -90deg
        );
  }

        #email-me-frame .email-frame-header{
          display: flex;
        justify-content: center;
        clear: both;
        padding-top: 2px;
        padding-left: 30px;
        margin-bottom: 7px;
        font-family: "Arial",sans-serif;
  
  }

        #email-me-frame .close-box{
          width: 20px;
        height: 19px;
        float: right;
        margin-right: 5px;
        margin-top: 5px;
        cursor: pointer;
  }

        #email-me-frame .frame-email-logo svg{
          background-size: 25px 25px;
        width: 24px;
        margin-top: 3px;
  }

        #email-me-frame .frame-title{
          padding-left: 13px;
        flex: 1;
        color:#1A1B18;
        font-size: 16px;
        font-weight: 600;
        padding-top: 3px;
  }

        #email-me-frame .split-line {
          border: 1px solid var(--sa-border-color);
  }

        #email-me-frame .email-frame-body{
          padding-left: 30px;
        padding-right: 30px;
  }

        #email-me-frame .frame-body-content{
          letter-spacing: 0.01rem;
        line-height: 1.6rem;
        font-weight: 500;
        font-size: 15px;
        margin-top:16px;
        margin-bottom: 5px;
        color:#1A1B18;
  }

        #email-me-frame .buyer-email,
        #email-me-frame .buyer-phone-input,
        #email-me-frame .buyer-name{
          border-radius: var(--sa-border-radius-input);
        border: 1px solid var(--sa-border-color);
        margin: 10px 0 0 0;
        width: 100%;
        font-size: 15px ;
        outline: none !important;
        height: var(--sa-button-height-normal) !important;
        color: #000 !important;
        background: #fff !important;
        padding: var(--sa-input-padding) !important;
  }
        .buyer-phone-input {
          border-left: none;
  }

        #email-me-frame .notify-type-toggler {
          display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 15px ;
        height: var(--sa-button-height-normal) !important;
        color: #000 !important;
        background: #fff !important;
        margin-top: 10px;
  }
  .notify-type-toggler > div {
          flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--sa-border-color);
        height: 100%;
        cursor: pointer;
        transition: all linear .14s;
  }
  .notify-type-toggler > div:hover {
          background: var(--sa-btn-hover-bgc)
  }
  .notify-type-toggler > div:nth-child(1) {
          border-radius: var(--sa-border-radius-button) 0 0 5px;
  }
  .notify-type-toggler > div:nth-child(2) {
          border-left: 0;
        border-radius: 0 5px 5px 0;
  }
        .join-mailing-container {
          display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 12px;
        margin-top: 4px;
  }
        .join-mailing-listLabel {
          margin: 0 0 0 8px;
        color: #333333 !important;
  }
        #email-me-frame .buyer-phone-block {
          display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: var(--sa-button-height-normal);
        padding: var(--sa-input-padding);
  }
        #email-me-frame .country-selector {
          width: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 1px solid var(--sa-border-color);
        cursor: pointer;
  }
        #email-me-frame .country-selector:hover {
          background: var(--sa-disabled-bgc);
  }
        #email-me-frame .country-selector-list {
          max-width: 120px;
        position: absolute;
        border: 1px solid var(--sa-border-color);
        border-radius: 8px;
        background-color: #fff;
        list-style: none;
        padding: 0px;
        max-height: 120px;
        overflow-y: scroll;
        margin-bottom: 50%;
  }
        #email-me-frame .country-selector-list li {
          display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        padding: var(--sa-input-padding);
        cursor: pointer;
        transition: all linear .14s;
        bottom: 0;
  }
        #email-me-frame .country-selector-list li:hover {
          background-color: #eeeeee;
  }
        .buyer-phone {
          outline: none;
        flex: 1;
        transition: all linear .14s;
        border: var(--sa-border-normal);
        border-radius: var(--sa-border-radius-button);
  }
        input::-webkit-input-placeholder{
          color:gray;
        font-size:15px;
  }

        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
          color:gray;
        font-size:15px;
  }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
          color:gray;
        font-size:15px;
  }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
          color:gray;
        font-size:15px;
  }


        #email-me-frame .frame-submit{
          position: relative;
  }

        /* loading\xe7š„\xe4\xbb\xa3\xe7 \x81 */
        .frame-submit.loading {
          pointer-events: none;
        cursor: not-allowed;
  }
        .frame-submit.loading::after {
          content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border-bottom: 2px solid #ddd;
        border-right: 2px solid #ddd;
        animation: spin ease-in-out 0.8s infinite;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%, -50%);
  }
        .frame-submit.loading .email-me-submitButton {
          opacity: 0;
  }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
    100% {
          transform: rotate(360deg);
    }
  }

        #email-me-frame .selected-unavailable-variant{
          border-radius: var(--sa-border-radius-button);
        border: 1px solid var(--sa-border-color);
        margin: 10px 0 0 0;
        width: 100%;
        height: var(--sa-button-height-normal);
        font-size: 15px;
        outline: none;
        color: #000;
        padding: var(--sa-input-padding) !important;
        background: #fff;
  }

        #email-me-frame .invalid-email-tips{
          color: rgb(219, 17, 42);
        font-weight: 500;
        letter-spacing: 0;
        visibility: hidden;
        line-height: 24px;
        font-size: 12px;
  }

        #email-me-frame .email-frame-footer{
          padding: 0 30px;
        margin-top: 20px;
  }

        #email-me-frame .email-frame-footer .email-footer-tips{
          font-size: 14px;
        font-family: "Arial",sans-serif;
        line-height: 1.1em;
        color: #ccc;
  }
        #email-me-frame .email-app-link{
          color: #008ddd;
  }
        #email-me-frame .email-app-link:hover{
          color: #0089d6;
  }
        #email-me-frame .email-app-link:visited{
          color: #008ddd;
  }
        #email-me-frame .email-app-link:active{
          color: #008ddd;
  }
        #email-me-frame .email-provider {
          margin-top: 8px;
        text-align: center !important;
        font-family: "Arial",sans-serif;
        color: black;
        font-size: 12px;
  }
        .successSub_header img {
          width: 32px;
        margin: 0;
}
        .successSub {
          transition: width 0.5s ease-out, opacity 0.5s ease-in, visibility 0.5s ease-in;
        max-width: 350px;
        background: rgb(255, 255, 255);
        padding: 20px;
        border-radius: 7px;
        border:1px solid #445958 ;
        display: block;
        z-index: -1;
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        visibility: hidden;
        opacity: 0;
        color: #464646;
}
        .successSub_active {
          width: 100%;
        visibility: visible;
        opacity: 1;
        z-index: 999999999;
}
        .product-restore-email img {
          width: 44px;
        margin: 0;
}
        #email-me-frame img {
          /* width: 100%; */
          width: 50px;
        margin-right: 8px;
}
        .successSub_header {
          width: 100%;
        align-items: center;
        justify-content: space-between;
        display: flex;
}
        .successSub_header_text {
          font-weight: 700;
        flex: 1;
        padding-left: 8px;
}
        .successSub_close-box {
          width: 20px;
        height: 20px;
        padding: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transform: translate(8px, -16px);
}
        .successSub_frame-close {
          margin-bottom: 10px;
        cursor: pointer;
        display: inline-block !important;
        width: 100%;
        height: 1px;
        background: #333;
        transform: rotate(
        45deg
        );
}
        .successSub_frame-close::after {
          content: '';
        display: block;
        height: 1px;
        background: #333;
        transform: rotate(
        -90deg
        );
}
        .successSub_text {
          margin-top: 8px;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
}
        .product-restore-email{
          justify-content: flex-start;
        width: 100%;
        flex:1;
  }
        .product-restore-email input {
          background: #ffffff;
  }
        #product-restore-email-float{
          display: flex;
        z-index:99999999999;
        justify-content: center;
        position:fixed;

  }
        .float-btn-left{
          transform: rotate(90deg) translateY(-100%);
        transform-origin: 0% 0%;
        left:0;
  }
        .float-btn-right{
          transform: rotate(-90deg) translateY(-100%);
        transform-origin: 100% 0%;
        right:0;
  }
        #product-restore-email-float .email-me-button{
          padding: 0.8rem 1.2rem;
  }
        #email-me-frame .email-provider span{
          color: blue;
  }
        @keyframes fadeIn {
          0% {
            opacity: .6;
          }
      100% {
          opacity: 1;
      }
  }
        /* \xe6\xbbš\xe5Š\xa8\xe6\x9d\xa1\xe8\xae\xbe\xe7\xbd\xae\xe6\xb2\xa1\xe6œ‰\xe7”Ÿ\xe6•ˆ */
        /* \xe6\xbbš\xe5Š\xa8\xe6\x9d\xa1\xe6•\xb4\xe4\xbd“\xe9ƒ\xa8\xe5ˆ†\xef\xbcŒ\xe5\x8f\xaf\xe4\xbb\xa5\xe8\xae\xbe\xe7\xbd\xae\xe5\xae\xbd\xe5\xba\xa6\xe5•\xa5\xe7š„ */
        #email-me-frame .country-selector-list ::-webkit-scrollbar {
          width: 2px;
        height: 2px;
  }
        /* \xe6\xbbš\xe5Š\xa8\xe6\x9d\xa1\xe4\xb8\xa4\xe7\xab\xaf\xe7š„\xe6Œ‰\xe9’\xae */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-button {
          display: none !important;
  }
        /* \xe5\xa4–\xe5\xb1‚\xe8\xbd\xa8\xe9\x81“ */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-track  {
          display: none !important;
  }
        /* \xe5†…\xe5\xb1‚\xe6\xbbš\xe5Š\xa8\xe6\xa7\xbd */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-track-piece{
          display: none !important;
  }
        /* \xe6\xbbš\xe5Š\xa8\xe7š„\xe6\xbb‘\xe5\x9d—  */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-thumb {
          background-color:#ff9900;
        background-color:rgba(255,153,0, 0.6);
        border-radius: 10px;
  }
        .type-selected {
          pointer-events: none;
        background-color: var(--sa-disabled-bgc);
  }

      </style>`;document.head.insertAdjacentHTML("beforeend",t),document.head.insertAdjacentHTML("beforeend",'<style id="email-insert-style"></style>')})(),"string"==typeof _?console.log("Init info: ",_):console.log("App is on!");let{MAX_SEARCH_TIMES:v}=_,{times:x}=_,w={btnRadius:"",btnFontSize:"",inlineBtnWidth:"",inlineBtnHeight:"",btnFontWeight:"initial",popupStyleUrl:"getPopupStyle",buttonStyleUrl:"getButtonStyle",collButtonStyleUrl:"getCollectionButtonStyle",integrationUrl:"integrate/getIntegration",floatBtnPosition:"float-btn-right",buttonData:{btn_value:"",btn_color:"",font_color:"",btn_margin_top:"",btn_margin_bottom:"",collection_btn_value:"",collection_is_show:0,inline_status:0,float_btn_value:"",float_btn_color:"",float_font_color:"",btn_insert_customized:0,btn_insert_el:"",btn_insert_type:"",offset:0,float_status:0,is_branding_removed:0},generalData:{btn_display_all:0,btn_font_family:"inherit",btn_font_size:"14",btn_font_weight:"inherit",btn_hover_animation:0,btn_hover_color:"#333333",btn_hover_font_color:"#ffffff",btn_margin_top:"0",btn_margin_bottom:"0",btn_border_radius:"0",btn_border_color:"transparent",btn_customize_css:""},popupData:null,frameBtnColor:"#333333",frameBtnFontColor:"#ffffff",insertType:"afterend",insertEl:null,selectedType:{},iti:null,selBtnStatus:0,btnStyleSwitch:0,popupStyleSwitch:0,inteStatus:0,formAction:"https://"+document.domain+"/cart/add"},{buttonStyleUrl:k,collButtonStyleUrl:S,popupStyleUrl:A,integrationUrl:E,floatBtnPosition:L,buttonData:j,generalData:z,formAction:I}=w,{iti:B,popupData:T,inlineBtnHeight:C,inlineBtnWidth:N,btnRadius:M,btnFontSize:H,btnFontWeight:q,insertEl:P,insertType:R,selectedType:O,selBtnStatus:D,btnStyleSwitch:V,popupStyleSwitch:F,inteStatus:U}=w,G={inlineBtnElement:null,floatBtnElement:null,emailFrameElement:null,inlineEmailDiv:null,floatEmailDiv:null,invalidTip:null,successFrame:null,variantSelector:null,closeBox:null,submitBtn:null,soldOutBtn:null,emailInput:null,nameInput:null,smsInput:null,mailingCheckbox:null,trueForms:[],exactForm:null},{inlineBtnElement:W,floatBtnElement:Z,emailFrameElement:Y,inlineEmailDiv:K,floatEmailDiv:X,invalidTip:J,successFrame:Q,variantSelector:ee,closeBox:et,submitBtn:ei,emailInput:ea,nameInput:en,smsInput:el,mailingCheckbox:er,soldOutBtn:eo,exactForm:es}=G,{trueForms:ed}=G,ec=function t(){let i={selectVariantId:"",unVariantOptions:[],currentVariantOption:null,addOptionsStatus:0,productTitle:"",initUrl:document.URL};if(e){let a=JSON.parse(eH("#em_product_variants").textContent),n=a.some(e=>!1===e.available),l=JSON.parse(eH("#em_product_selected_or_first_available_variant").textContent);Object.assign(i,{variantData:a,currentVariant:l,available:l.available,selectVariantId:l.id,hasAvailableV:n,listenVariantFlag:!0})}return i}(),{currentVariant:ep,available:eu,selectVariantId:em,productTitle:ef,currentVariantOption:eb,addOptionsStatus:e$,initUrl:eg,listenVariantFlag:eh}=ec,{variantData:ey,unVariantOptions:e_}=ec;async function ev(){let{ShopifyAnalytics:l}=window,s=l&&l.meta&&l.meta.page&&l.meta.page.pageType,d={},c=[];if("product"===s||eH("#sealapps-bis-widget"))e=!0,i&&(d.productIds=[i],d.type=2);else if("collection"===s&&(t=!0,c=await ex(),$&&console.log(c),null!==c)){r=c.length;let p=function e(t){let i={aNodeList:[],prosEle:[]},a=0,n=t[0],l;for(let r=0;r<t.length;r++){n=t[r],l=null;for(let o=0;o<5;o++){if("A"===(n=n.parentNode).tagName&&n.href&&-1!==n.href.indexOf("/products/")){l=n;break}let s=eH('a[href*="/products/"]',n);if(s){l=s;break}}l?(a++,i.prosEle.push(t[r]),i.aNodeList.push(l)):t[r]=null}return i}(c);c=p.prosEle,d.handles=function e(t){let i=[];if(t.length)for(let a=0;a<t.length;a++)if(t[a]&&"A"===t[a].tagName&&t[a].getAttribute("href")){let n=t[a].getAttribute("href"),l=n.lastIndexOf("/products/")+10,r=n.indexOf("?"),o="";-1===(o=-1!=r?n.substring(l,r):n.substring(l)).indexOf(".jpg")&&(o=decodeURI(o),i.push(o))}else i.push("undefined");return i}(p.aNodeList),d.type=1}if(!t&&!e)return"not collectionPage or productPage";if(function e(t){let i=eM("emailCustomerId");if(!i)return;let a=eM("variant");if(!a)return;let{baseUrl:n}=t,l={id:i,shopId:m,variantId:a};eT(n+"api/v1/email/changeEmailStatus",l)}({baseUrl:g}),0!==Object.keys(d).length){let u=await f.getProsVariantsData(d);if($&&console.log("res",u),48441458840==m&&1===d.type);else if(1!==u.btStatus)return"collectionPage btn disable";let{apiCode:b,products:h}=u;e?200===b&&h&&(y=h[0].variants.map(e=>e.variantRid)):t&&h.forEach((e,t)=>{1===e.productStatus&&(a.push(c[t]),o.push(t),n.push({proId:e.productId,productName:e.productName,variants:e.variants}))}),$&&console.log("Get Product Status Success")}let _=y.length||n.length;if(0==_)return t&&eS(),"All btn of variants are hidden.";let v=eq(`#product-restore-email-flag,
    #product-restore-email-float,.product-restore-email`);if(0!==v.length)v.forEach(e=>e.remove());else{let x=`
      <div id="product-restore-email-flag" style="display: none;"></div>
      `;document.body.insertAdjacentHTML("beforeend",x)}return{debug:$,baseUrl:g,MAX_SEARCH_TIMES:50,times:0}}async function e1(){e?(function e(){return new Promise(t=>{let i=eq("form");for(let a=0;a<i.length;a++)-1!==i[a].action.indexOf("/cart/add")&&ed.push(i[a]);if(ed.length||t({code:501,msg:"Search el failed"}),1==ed.length)es=ed[0],e8(ed[0]);else for(let n=0;n<ed.length&&!eo;n++){let l=window.getComputedStyle(ed[n],null);if("visible"==l.visibility&&"none"!=l.display&&"0px"!=l.height&&"0"!=l.height&&"0px"!=l.width&&"0"!=l.width&&"auto"!=l.height){if(es=ed[n],e8(ed[n]),eo){let r=eo.parentElement,o=window.getComputedStyle(r,null);if("visible"==o.visibility&&"none"!=o.display&&0!=o.height&&0!=o.width)break}if(eo=ed[n].querySelector(".shopify-payment-button"))break;{let s=ed[n].querySelectorAll("input[type='submit']");if(0!=s.length){eo=s[0];break}let d=ed[n].querySelectorAll("button");for(let c=0;c<d.length;c++)if("submit"==d[c].type){eo=d[c];break}}}}eo||es?(eo?(R="afterend",P=eo):(R="beforeend",P=es),t({code:200,msg:"success"})):x>=v?t({code:501,msg:"Search el failed"}):(x++,setTimeout(()=>{e().then(e=>t(e))},50))})})().then(e=>{$&&console.log("SearchParentEl finished");let{code:t}=e;if(501===t){console.log("Search Node Failed"),new Promise(e=>{ew(m,k).then(()=>{if(j.btn_insert_el)e({code:200});else{let t=e3();t.type?e({code:200}):e({code:404})}})}).then(e=>{200===e.code&&(e0(),e2())});return}200===t&&($&&console.log("SearchParentEl success"),e0(),e2())}):t&&e2()}async function ex(){let e=Shopify.theme.theme_store_id,t="";switch(e){case 887:case 1567:case 1356:case 1363:case 1368:case 1431:case 1434:case 1500:case 1499:case 1399:t=".card-information .price";break;case 829:t=".card__info>.card__price";break;case 775:t=".product-card__info>.product-card__price";break;case 796:t=".product-card>.price";break;case 730:t=".grid__item .grid-product__price-wrap";break;case 679:t=".grid-item .product-item--price";break;case 380:t=".grid__item .grid-link__meta";break;case 578:t=".grid__item .product__prices";break;case 857:t=".grid__item .grid-product__price";break;case 765:t=".product--details";break;case 849:t=".product-block__info";break;case 459:t=".product-info-inner .price";break;default:if(eH("body.warehouse--v1"))t=".product-item .product-item__price-list";else{switch(p){case 129555497130:t=".collection-grid-item__meta";break;case 139843010841:t=".product-item-meta";break;case 117705834682:t=".grid-view-item";break;case 3639214169:t=".product-index .product-info"}3639214169===m&&139935711534===p?t=".product-index .product-info":61058973863===m&&130619900071===p?t=".product-block .product-info":71594410265===m&&143828386073===p?t=".product-item__info-inner":68210557218===m&&142585594146===p?t=".card-information .price":25981404===m&&132703387810===p&&(t=".product-item-meta")}}if(48441458840===m&&137027780861===p&&(t=".collection .card__information"),!t)return null;{let i=Array.from(eq(t));return 0==i.length&&await new Promise((e,t)=>{setTimeout(()=>{e()},1500)}),i.filter(e=>null!==e.offsetParent)}}function e8(e){let t=e.querySelectorAll("button"),i=[...e.querySelectorAll("input[type='submit']"),...e.querySelectorAll("input[type='button']")],a=[...t,...i];if(a.length){for(let n=0;n<a.length;n++)if("submit"==a[n].type&&"add"==a[n].name||"submit"==a[n].type&&"button"==a[n].name){eo=a[n];break}if(!eo){for(let l=0;l<a.length;l++)if("submit"==a[l].type){eo=a[l];break}}if(!eo){for(let r=0;r<a.length;r++)if(a[r].disabled){eo=a[r];break}}eo||(eo=a[0]),eo&&function e(t){if("DIV"==t.tagName&&(t=t.querySelector("button")),!t)return;let i=window.getComputedStyle(t,null);"auto"!=i.width&&i.width?-1!==i.width.indexOf("px")&&parseFloat(i.width)>120&&(N=i.width):N="",C="auto"!=i.height&&i.height?i.height:"",M=i.borderRadius,H=i.fontSize,q=i.fontWeight}(eo)}}function e3(){let e=eq(`.action-button, [class*=add-to-cart], [class*=add_to_cart], [id*=add_to_card],
     [id*=add-to-card], [data-add-to-cart], .sold-out, #out-of-stock-gl,.option-selectors`);if(e.length)for(let t=0;t<e.length;t++){let i=Number(window.getComputedStyle(e[t],null).width.split("px")[0]);if(!isNaN(i)&&i>64)return{type:"afterend",ele:e[t]}}let a=eq(".action-button, .tt-swatches-container.tt-swatches-container-js");if(a.length)for(let n=0;n<a.length;n++){let l=window.getComputedStyle(a[n],null);if("visible"==l.visibility&&"none"!=l.display&&"0px"!=l.height&&"0"!=l.height&&"0px"!=l.width&&"0"!=l.width&&"auto"!=l.height)return{type:"beforeend",ele:a[n]}}return{type:""}}function e0(){if($&&console.log("Handle Basic Data"),eo){let e=window.getComputedStyle(eo.parentElement,null);"flex"==e.display&&"row"==e.flexDirection&&"nowrap"==e.flexWrap&&(eo.parentElement.style.flexWrap="wrap")}let t=ey[0];try{ef=t.name.split("-")[0].trim(),61058973863===m&&(ef=t.name)}catch(i){ef=t.public_title&&t.public_title.length-3>0?t.name.substr(0,t.name.length-t.public_title.length-3):t.name}}function e2(){var i,l,r,o;$&&console.log("Get All Style"),document.head.insertAdjacentHTML("beforeend",'<style class="email-style"></style>'),u=document.querySelector(".email-style");let d,c="";e?c=k:t&&(c=S),$&&console.log("isProPage",e),$&&console.log("collButtonStyleUrl",S),d=ew(m,c),$&&console.log("btnPromise",d);let p=(i=m,l=A,$&&console.log("Get Popup Style"),eT(g+"api/v1/"+l,{shopId:i,shop_language:s}).then(e=>{$&&console.log("Get Popup Style Success");let{code:t,data:i}=e;if(200===t&&i)switch(F=1,(T=JSON.parse(JSON.stringify(i))).popup_option){case 1:case 3:O.type="email";break;case 2:O.type="sms"}})),f=(r=m,o=E,$&&console.log("Get Integration"),eT(g+"api/v1/"+o,{shopId:r}).then(e=>{$&&console.log("Get Integration Success");let{code:t,data:i}=e;200===t&&i&&($&&console.log("inte",i),U=i.find(e=>e.is_enable))}));Promise.all([d,p,f]).then(()=>{!function i(){$&&console.log("renderBtnAndPopup");let{toggler:l,ipt:r,mailingList:o}=function e(t){let i,a,n;if(1===(t=T.popup_option||t))i=`
        <div>
          <input class="buyer-email" type="text" placeholder="${T.popup_placeholder_text}">
          <div class="invalid-email-tips">${T.popup_validation_text}</div>
        </div>
      `;else if(2===t)i=`
        <div>
          <div class="buyer-phone-container">
            <input type="text" class="buyer-phone">
          </div>
          <div class="invalid-email-tips">${T.popup_validation_text}</div>
        </div>
      `;else if(3===t){i=`
      <div>
        <input class="buyer-email" type="text" placeholder="${T.popup_placeholder_text}">
        <div class="buyer-phone-container">
          <input type="text" class="buyer-phone">
        </div>
        <div class="invalid-email-tips">${T.popup_validation_text}</div>
      </div>
      `;let l=`<div class="email-type">
          ${T.popup_tab_email}
        </div>`,r=`<div class="sms-type">
          ${T.popup_tab_sms}
        </div>`,o="";a=`
      <div class="notify-type-toggler">
        ${o=56661573841===m?r+l:l+r}
      </div>
      `}return function e(t){switch(t){case 1:case 2:eN(`<style>
        #email-me-frame .email-frame-content {
          max-height: 412px !important;
          }
      </style>`);break;case 3:eN(`<style>
        #email-me-frame .email-frame-content {
          max-height: 459px !important;
          }
      </style>`)}}(t),U&&(n=`
      <div class="join-mailing-container">
        <input id="join-mailing-list" type="checkbox" checked/>
        <label for="join-mailing-list" class="join-mailing-listLabel">
        ${T.popup_opt_in_text}
        </label>
      </div>
    `),{ipt:i,toggler:a,mailingList:n}}(),s=`
      <div class="successSub">
        <div class="successSub_header">
          <img src="https://cdn.shopify.com/s/files/1/0576/6063/7389/t/1/assets/success.png?v=1629367773" />
          <div class="successSub_header_text">${T.success_frame_title}</div>
          <div class="successSub_close-box">
            <div class="successSub_frame-close"></div>
          </div>
        </div>
        <div class="successSub_text">
          ${T.success_frame_content}
        </div>
      </div>
      <div id="email-me-frame">
        <div class="email-frame-content">
          <div class="close-box">
            <div class="frame-close"></div>
          </div>
          <div class="email-frame-header">
            <div class="frame-email-logo">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.324V15.5A1.5 1.5 0 001.5 17h17a1.5 1.5 0 001.5-1.5V5.324l-9.496 5.54a1 1 0 01-1.008 0L0 5.324z"
                  fill="#5C5F62" />
                <path d="M19.443 3.334A1.494 1.494 0 0018.5 3h-17c-.357 0-.686.125-.943.334L10 8.842l9.443-5.508z"
                  fill="#5C5F62" />
              </svg>
            </div>
            <div class="frame-title">${T.popup_header_text}</div>
          </div>
          <div class="split-line" style="border: 1px solid #d9d9d9;"></div>
          <div class="email-frame-body">
            <div class="frame-body-content">
              <span>${ef}</span>
            </div>
            <div>
              <select class="selected-unavailable-variant"></select>
            </div>
            ${l||""}
            <div>
              <input class="buyer-name" type="text" placeholder="${T.popup_name_placeholder_text}">
            </div>
            ${r}
            ${o||""}
            <div class="frame-submit">
              <div class="email-me-button email-me-submitButton" style=" text-align:center; color: ${T.popup_btn_font_color}; background-color:  ${T.popup_btn_color}; border-radius: ${M}; font-size: ${H}; ">
                ${T.popup_btn_value}
              </div>
            </div>
          </div>
          <div class="email-frame-footer">
            <div class="email-footer-tips">
              <span>${T.popup_footer_text}</span>
            </div>
          </div>
          <div class="email-provider" style="display: ${j.is_branding_removed?"none":""};">
            Powered by <span><a class="email-app-link" target="_blank" href="https://apps.shopify.com/email-1?surface_detail=back+in+stock&surface_inter_position=1&surface_intra_position=10&surface_type=search">Sealapps</a></span>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",s);let d=document.querySelector("#sealapps-bis-widget");d&&eo&&"center"===getComputedStyle(eo.parentNode).textAlign&&(u.textContent+="#sealapps-bis-widget{justify-content:center}"),new Promise(i=>{let{inline_status:l,float_status:r}=j,o=0;if(l||t){let{font_color:s,btn_color:d,btn_value:c,collection_btn_value:p,btn_margin_top:u,btn_margin_bottom:m}=j,f="";e?f=c:t&&(f=p);let b=`
      <div class="product-restore-email" style="margin-top: ${u}px; margin-bottom: ${m}px; max-width: ${N||"initial"}">
        <div class="email-me-button email-me-inlineButton" style="text-align:center; margin-top:0; color: ${s} ; background-color: ${d} ; height:${C} ; border-radius: ${M||"2px"} ; font-size: ${H||"14px"} ; font-weight: ${q||"inherit"};">
          ${f}
        </div>
      </div>`;if(e)try{$&&console.log("insert",P,R),P.insertAdjacentHTML(R,b),o++}catch(g){(function e(t){let i=e3();i.type&&i.ele.insertAdjacentHTML(i.type,t),e4()})(b),o++}else t&&(a.forEach((e,t)=>{iparentNode=e.parentNode;let i=eq(".product-restore-email",iparentNode);if(0==i.length){let a=document.createElement("div");a.setAttribute("proId",n[t].proId),a.innerHTML=b,a.style.position="relative",a.style.zIndex="1",e.after(a)}}),o++)}if(r){let{offset:h,float_font_color:y,float_btn_color:_,float_btn_value:v}=j,x=`
      <div id="product-restore-email-float" style="top:${h+"px"}" class="${L}">
        <div class="email-me-button email-me-floatButton" style="text-align:center; display:none; color: ${y} ; background-color:  ${_} ; border-radius: ${M} ; font-size: ${H}; font-weight: ${q}; ">
          ${v}
        </div>
      </div>`;document.body.insertAdjacentHTML("afterbegin",x),o++}i(o>0?{code:200,msg:"Success!"}:{code:404,msg:"Insert failed"})}).then(i=>{$&&console.log("renderButton success"),200===i.code?(eE(),function i(){if(e){let a=document.URL;(function e(){let t=history.pushState;history.pushState=function e(){let i=t.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),i};let i=history.replaceState;history.replaceState=function e(){let t=i.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t},window.addEventListener("popstate",()=>{window.dispatchEvent(new Event("locationchange"))})})(),window.addEventListener("locationchange",()=>{let e=document.URL;if(e!==eg){let t=document.URL,i=new URL(t),a=i.searchParams.get("variant");$&&console.log("vid",a),eg=t,a&&eA(a),eh=!1,$&&console.log("\xe6\xb8…\xe9™\xa4\xe5\xaeš\xe6—\xb6\xe5™\xa8")}}),(-1===a.indexOf("variant=")||1742274613==m)&&eS()}else t&&eS()}(),e4(),1!==T.popup_option&&function e(){let t=eH(".buyer-email"),i=eH(".buyer-phone"),a=eH(".buyer-phone-container"),n=eH(".email-type"),l=eH(".sms-type"),r=eH(".iti--allow-dropdown");function o(e){switch(J.style.visibility="hidden",e){case"sms":t.style.display="none",a.style.display="flex",n.className="email-type",l.className="sms-type type-selected";break;case"email":l.className="sms-type",t.style.display="block",a.style.display="none",n.className="email-type type-selected";break;default:J.style.visibility="hidden"}}r||new Promise(e=>{eB("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css").then(t=>{if(200===t.code){let a=`
      <style>
        .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/img/flags.png");}
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
              .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/img/flags@2x.png");}
              }
        .iti.iti--allow-dropdown {
          width: 100%;
        display: flex;
        height: var(--sa-button-height-normal);
        margin-top: 10px;
              }
        .iti__country {
          color: #777777;
              }
        .iti--container {
          z-index: 999999999 !important;
              }
      </style>
      `;document.head.insertAdjacentHTML("beforeend",a),eB("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/intlTelInput.min.js",!0).then(t=>{t.onload=function(){B=window.intlTelInput(i,{utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/utils.min.js",autoPlaceholder:"aggressive",initialCountry:T.sms_default_region||""}),$&&console.log("Script Loaded"),$&&console.log(i),i.addEventListener("input",e=>{$&&console.log("getNumber",B.getNumber()),$&&console.log("getSelectedCountryData",B.getSelectedCountryData()),B.isValidNumber()?eI(!1):eI(!0)}),i.addEventListener("blur",e=>{$&&console.log("isValidNumber",B.isValidNumber()),B.isValidNumber()?eI(!1):eI(!0)})},document.body.appendChild(t),e({code:200})})}})}).then(e=>{200===e.code&&3===T.popup_option&&(O=new Proxy({type:"email"},{set:(e,t,i)=>($&&console.log(e,t,i),e[t]=i,o(i),!0)}),o(O.type),n.addEventListener("click",()=>{O.type="email"}),l.addEventListener("click",()=>{O.type="sms"}))})}()):$&&console.log("Insert failed")})}()})}function ew(i,n){return V?new Promise(e=>{e({code:200})}):($&&console.log("Get Button Style"),eT(g+"api/v1/"+n,{shopId:i,shop_language:s}).then(i=>{$&&console.log("Get Button Style Success");let{code:n,data:l}=i;200===n&&l&&(V=1,Object.keys(j).forEach(e=>{j[e]=l[e]}),eH("#sealapps-bis-widget")&&(j.inline_status=1),Object.keys(z).forEach(e=>{z[e]=l[e]}),t&&(z.btn_font_family=z.btn_font_weight="inherit"),function e(){$&&console.log("renderSettingStyles");let{btn_font_size:t,btn_hover_animation:i,btn_border_radius:a,btn_border_color:n,btn_font_weight:l,btn_font_family:r,btn_margin_top:o,btn_margin_bottom:s,btn_hover_font_color:d,btn_hover_color:c,btn_customize_css:p}=z,u=`
      .email-me-button {
        font-size: ${t}px !important;
      font-weight: ${l} !important;
      font-family: ${r} !important;
      border-color: ${n} !important;
      border-radius: ${a}px !important;
      border-width: 2px;
      border-style: solid;
      }
      .email-me-inlineButton {
        margin-top: ${o}px !important;
      margin-bottom: ${s}px !important;
      }
      .email-me-button:hover {
        color: ${d} !important;
      background-color: ${c} !important;        
      }
      ${p}
      `;i&&(u+=`
      .email-me-inlineButton::after,
      .email-me-inlineButton::before,
      .email-me-submitButton::after,
      .email-me-submitButton::before {
          content:'';
          color: ${j.btn_color};
          font-size: ${t}px; 
          text-align: center; 
          border-radius: ${a}px;
          width: 0;
          height: 100%;
          background-color: ${c};
          position: absolute;
          left:0;
          transition: all ease-in-out .35s;
          top:0;
          z-index: -2;
      }
      .email-me-inlineButton::before,
      .email-me-submitButton::before {
          z-index: -1;
          background-color: ${c};
      }
      .email-me-inlineButton:hover,
        .email-me-submitButton:hover {
          z-index: 1;
          color: ${d} !important;
          background-color: ${c} !important;
      }
      .email-me-button:hover::before,
      .email-me-button:hover::after
      {
          width: 100%;
      }
      `);let m=`
      <style>
        ${u}
      </style>
      `;document.head.insertAdjacentHTML("beforeend",m)}(),function i(){$&&console.log("changeButtonPos");let{btn_insert_customized:n,btn_insert_el:l,btn_insert_type:r}=j;if(n&&l){if(53793915066===m&&136421834975===p&&(l=".product__submit__item.product__submit__item--inline"),e)P=eH(l)||eo;else if(t){let s=a=Array.from(a=eq(l));a=[];for(let d=0;d<s.length;d++)o.includes(d)&&a.push(s[d])}R=r||"afterend"}if(e){let c=eH("#sealapps-bis-widget");c&&(P=c,R="beforeend")}}())}))}function e4(){switch(T.popup_option){case 1:ea=eH(".buyer-email");break;case 2:el=eH(".buyer-phone");break;case 3:ea=eH(".buyer-email"),el=eH(".buyer-phone")}en=eH(".email-frame-body .buyer-name"),Q=eH(".successSub"),J=eH(".invalid-email-tips"),Y=eH("#email-me-frame"),et=eH("#email-me-frame .close-box"),ei=eH(".frame-submit .email-me-button"),ee=eH(".selected-unavailable-variant"),K=eq(".product-restore-email"),X=eH("#product-restore-email-float"),W=eq(".email-me-inlineButton"),Z=eH(".email-me-floatButton"),er=eH("#join-mailing-list")||{},insertStyle=eH("#email-insert-style"),function i(){switch(T.popup_option){case 1:case 3:ea.addEventListener("blur",eL)}ei.addEventListener("click",ez),et.addEventListener("click",function(){Y.style.display="none","none"!==ee.style.display&&eb&&eb.removeAttribute("selected")}),Q.addEventListener("click",function(){Q.classList.remove("successSub_active")}),e&&e5(),W.length&&W.forEach((e,i)=>{e.addEventListener("click",function(e){e.preventDefault(),e7();let i=0;Y.style.display="block";let a=Y.querySelector(".selected-unavailable-variant");if(t){i=this.parentNode.parentNode.getAttribute("proId");let l=a.getAttribute("proId");l?l!==i&&(e$=0,ey=n.find(e=>e.proId==i).variants,e_=[],e5(),a.innerHTML="",a.setAttribute("proId",i)):(e_=[],ey=n.find(e=>e.proId==i).variants,e5(),a.setAttribute("proId",i))}for(let r=0;r<e_.length;r++)0===e$&&a.add(e_[r]),e_[r].getAttribute("value")===em.toString()&&(eb=a.querySelectorAll("option")[r]).setAttribute("selected","selected");e$=1})}),Z&&Z.addEventListener("click",function(){e7(),Y.style.display="block";for(let e=0;e<e_.length;e++)0===e$&&ee.add(e_[e]),e_[e].getAttribute("value")===em.toString()&&(eb=ee.querySelectorAll("option")[e]).setAttribute("selected","selected");e$=1})}()}function e7(){"{}"!=JSON.stringify(h)&&(en.value=h.name,ea&&(ea.value=h.email),el&&(el.value=h.phone.replace(/[^0-9]/g,"")))}function e5(){let i=0,a,n="id";e?a="title":t&&(a="variantTitle",n="variantRid");for(let l=0;l<ey.length;l++)(y.includes(String(ey[l].id))&&e||t)&&(t&&eR(ey[l].productRid),"Default Title"===ey[l][a]&&(ee.style.display="none"),e_[i]=ej({tag:"option",attributes:{value:ey[l][n],textContent:ey[l][a]}}),i++)}$&&console.log("Init data finished"),e1(),eT(g+"api/v1/collect/config",{type:"user_config"});let ek=function e(t=500,i){let a;return function(){clearTimeout(a),a=null,a=setTimeout(()=>{i()},t)}}(600,async()=>{l.disconnect();let e=await ex(),t=eq(".product-restore-email").length;e.length===r&&t?eS():($&&console.log("\xe7›‘\xe5\x90\xac\xe6ˆ\x90\xe5ŠŸ\xef\xbcŒ\xe5\xbc€\xe5\xa7‹\xe8\xbf\x90\xe8\xa1Œ"),n=[],a=[],D=0,await ev(),e1())});function eS(){let i;e?i=55013703857==m?eH(".select-selected, select[name=id]"):1742274613==m?eH(".option-1"):42547151016==m&&122478428328===p?eH(".swatch-variants-wrapper"):57593233596==m&&132009820348===p?eH(".swatches-select.swatch__list_pr"):16708787==m&&141528334609===p?eH(".shopify-product-form"):eH("input[name=id], select[name=id]"):t&&(i=eH("main")),i&&((l=new MutationObserver(e6)).observe(i,{attributes:!0,childList:!0,subtree:!0}),$&&console.log("\xe7›‘\xe5\x90\xac\xe5™\xa8\xe5\x90\xaf\xe5Š\xa8\xe4\xb8\xad"))}function e6(){if(e){$&&console.log("\xe7›‘\xe5\x90\xac\xe5ˆ\xb0\xe5…ƒ\xe7\xb4 \xe5\x8f˜\xe5Œ–\xef\xbcŒ\xe6\xa3€\xe6Ÿ\xa5variant\xe5\x8f˜\xe5Œ–");let i;if(55013703857==m){let a=eH(".select-selected").innerText;i=ey.find(e=>e.title==a).id}else if(1742274613==m){let n=eH(".option-0"),l=eH(".option-1"),r=n.querySelector(".selected_val").innerText,o=l.querySelector(".selected_val").innerText;i=ey.find(e=>e.option1==r&&e.option2==o).id}else i=eH("input[name=id], select[name=id]").value;eA(i)}else t&&ek()}function eA(e){e&&String(em)!==String(e)&&(em=e,eu=(ep=ey.find(t=>t.id==e)).available,(!y.includes(String(em))||V)&&F||e2(),y.includes(String(em))&&!D&&eE(),1===D&&($&&console.log("initEmailToMeEle"),$&&console.log(ep),e9()))}function eE(){$&&console.log("createEmailButton"),0===D&&eT(g+"api/v1/email/selBtnStatus",{shopId:m}).then(e=>{let{code:t,data:i}=e;200===t&&(1==i.status||2==i.status||0==i.status||i.snsStatus?(D=1,e9()):D=i.status)})}function e9(){1===D&&(y.includes(String(em))&&e||t)?(c&&c(),W&&(W.forEach(e=>e.style.display="flex"),K.forEach(e=>e.style.display="flex")),Z&&(Z.style.display="flex",X.style.display="flex")):(W&&K.forEach(e=>{e.style.display="none"}),Z&&(X.style.display="none"))}function eL(){let e=ea.value,t=RegExp(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,}$/);t.test(e)?J.style.visibility="hidden":eI(!0,{type:"email",info:T.popup_validation_text})}function ej({tag:e,appendTo:t,children:i=[],attributes:a={},events:n={}}){let l=document.createElement(e);return Object.entries(a).forEach(([e,t])=>{l[e]=t}),Object.entries(n).forEach(([e,t])=>{l.addEventListener(e,t)}),t&&t.appendChild(l),i.forEach(e=>l.appendChild(e)),l}function ez(){let{popup_validation_text:e}=T,t;switch(en&&(t=en.value),O.type){case"sms":let i=el&&el.value||"";i&&B.isValidNumber()?(eI(!1),function e(t){let i={shopId:m,variant_rid:ee.value,receiver_number:function e(t){let i=B.getSelectedCountryData().dialCode;return(t=t.replace(/\b(0+)/gi,"")).startsWith(i)?t:i+t}(el.value.trim()),region:B.getSelectedCountryData().iso2.toUpperCase(),is_integration:Number(er.checked||!1),receiver_name:t.buyerName||"customer",customer_rid:0,shop_language:s};ei.parentElement.className="frame-submit loading",eT(g+"api/v1/sns/insCustomerSnsInfo",i).then(e=>{let{code:t,message:i}=e;200===t?(Y.style.display="none",Q.classList.add("successSub_active"),setTimeout(function(){Q.classList.remove("successSub_active")},4e3)):108===t||107===t?(J.style.visibility="visible",J.innerHTML=T.popup_subscribed_text):109===t?(J.style.visibility="visible",J.innerHTML=T.popup_validation_text):(J.style.visibility="visible",J.innerHTML=i)}).finally(()=>{ei.parentElement.className="frame-submit"})}({buyerName:t})):eI(!0,{type:"sms",info:e});break;case"email":let a=ea.value;if(a){let n=RegExp(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,}$/);n.test(a)?(eI(!1),function e(t){let i={shopId:m,variant_rid:ee.value,receiver_email:document.getElementsByClassName("buyer-email")[0].value,receiver_name:t.buyerName||"customer",is_integration:Number(er.checked||!1),customer_rid:0,shop_language:s};ei.parentElement.className="frame-submit loading",eT(g+"api/v1/email/insCustomerEmailInfo",i).then(e=>{let{code:t,message:i}=e;200===t?(Y.style.display="none",Q.classList.add("successSub_active"),setTimeout(function(){Q.classList.remove("successSub_active")},4e3)):108===t||107===t?(J.style.visibility="visible",J.innerHTML="* You are already subscribed to this product."):109===t?(J.style.visibility="visible",J.innerHTML=T.popup_validation_text):(J.style.visibility="visible",J.innerHTML=i)}).finally(()=>{ei.parentElement.className="frame-submit"})}({buyerName:t})):eI(!0,{type:"email",info:e})}else eI(!0,{type:"email",info:e});break;default:return}}function eI(e,t){let i=getComputedStyle(J),{type:a,info:n}=t||{type:O.type,info:T.popup_validation_text};switch(a){case"sms":case"email":"hidden"===i.visibility?(J.style.visibility="visible",J.innerHTML=n):J.style.visibility="hidden";break;default:J.style.visibility="hidden"}$&&console.log(J),e?J.style.visibility="visible":!1===e&&(J.style.visibility="hidden")}function eB(e,t=!1){return new Promise((i,a)=>{try{let n=e.endsWith(".js")&&"js"||"css";if("js"===n){let l=document.createElement("script");l.setAttribute("type","text/javascript"),l.setAttribute("src",e),t&&i(l),document.head.appendChild(l),i({code:200,data:l,type:"script"})}else if("css"===n){let r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("href",e),t&&i(r),document.head.appendChild(r),i({code:200,data:r,type:"style"})}}catch(o){a({code:600,err:o})}})}function eT(e,t,i,a="POST"){return new Promise((n,l)=>{e||n({code:999,data:"\xe6\xb2\xa1\xe6œ‰\xe4\xbc api\xe5œ\xb0\xe5\x9d€"});try{let r=t||{};(!t||Object.keys(t).includes("shopId"))&&t||(r.shopId=m);let o=new XMLHttpRequest;o.open(a,e,!0),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("authorization",b),o.setRequestHeader("Org-Request-ID",function e(t){t=t&&t<64?t:63;let i="",a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";for(let n=0;n<t;++n)i+=a[Math.floor(Math.random()*a.length)];let l=+new Date;return i+l}(37)),o.setRequestHeader("Org-Request-URL",window.location.href),o.send(JSON.stringify(r)),o.onreadystatechange=function(){if(4==o.readyState&&200==o.status||304==o.status){let e=JSON.parse(this.responseText),{code:t,data:a}=e;200===t?(i&&i(a),n(e)):500!==t&&n(e)}}}catch(s){l(s)}})}async function eC(e){$&&console.log("getProductStatus");let t=[];if(!window.ShopifyAnalytics||!ShopifyAnalytics.meta.product)return;{let i=ShopifyAnalytics.meta.product.id;t.push(i)}let a={shopId:m,productIds:t,type:2};await eT(e+"api/v1/customer/getVariantBtStatus",a).then(e=>{$&&console.log("Get Prodcut Status Success");let{apiCode:t,products:i}=e;200===t&&i&&(y=i[0].variants.map(e=>e.variantRid))})}function eN(e){"string"==typeof e?document.head.insertAdjacentHTML("beforeend",e):document.head.appendChild(e)}function eM(e){let t=RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(t);return null!=i?unescape(i[2]):null}function eH(e,t){let i;return t?t.querySelector(e):document.querySelector(e)}function eq(e,t){let i;return t?t.querySelectorAll(e):document.querySelectorAll(e)}function eP(){let e=eH(".notranslate"),t=e.querySelector(".selected img[alt]");s=t.alt}function eR(e){ef=n.find(t=>t.proId==e).productName;let t=eH(".frame-body-content");t.innerText=ef}}();