import{_ as d,u as g,s as v,o as t,c as r,d as o,b as n,t as _,i as m,F as b,r as f,j as C,k as y,l as I,n as S,f as k,a as N,m as T}from"./index-B3_i0be4.js";const D=""+new URL("../images/close.svg",import.meta.url).href,j={class:"box_border"},B=["src"],V={key:0,class:"subtitle"},w={key:1,class:"text"},P={__name:"SingleImage",props:{name:String,number:Number,title:String,text:String},setup(i){const s=g();v(s);const e=i;return(p,u)=>(t(),r("div",j,[o("img",{src:`${n(s).isDev?"/images/":"images/"}${e.name}-1.jpg`,alt:""},null,8,B),e.title?(t(),r("div",V,_(e.title),1)):m("",!0),e.text?(t(),r("div",w,_(e.text),1)):m("",!0)]))}},z=d(P,[["__scopeId","data-v-8a074f3a"]]),F={class:"box_border"},G=["src"],L={key:0,class:"subtitle"},R={key:1,class:"text"},E={__name:"TwoImages",props:{name:String,number:Number,title:String,text:String},setup(i){const s=g();v(s);const e=i;return(p,u)=>(t(),r("div",F,[(t(!0),r(b,null,f(e.number,a=>(t(),r("img",{src:`${n(s).isDev?"/images/":"images/"}${e.name}-${a}.jpg`,alt:"",key:a},null,8,G))),128)),e.title?(t(),r("div",L,_(e.title),1)):m("",!0),e.text?(t(),r("div",R,_(e.text),1)):m("",!0)]))}},U=d(E,[["__scopeId","data-v-15f6eea8"]]),q={class:"overlay"},A={__name:"Popup",setup(i){const s=g(),{popupCloseClick:e,popupIsopen:p,popupContent:u,popupName:a,popupNumber:l,popupTitle:x,popupText:$}=v(s),h=C(()=>l.value==1?z:U);return(Q,c)=>(t(),r("div",{class:S(["popup_container",{active:n(p)}])},[c[2]||(c[2]=o("div",{class:"popup_bg"},null,-1)),o("div",{class:"popup_content",ref_key:"popupContent",ref:u},[o("div",q,[(t(),y(I(h.value),{name:n(a),number:n(l),title:n(x),text:n($)},null,8,["name","number","title","text"]))]),o("div",{class:"popup_close",onClick:c[0]||(c[0]=W=>n(s).popupCloseClick())},c[1]||(c[1]=[o("img",{src:D,alt:""},null,-1)]))],512)],2))}},H=d(A,[["__scopeId","data-v-1d86253e"]]),J={class:"category_container"},K={class:"graphic_box"},M=["onClick"],O={__name:"Graphic",setup(i){const s=g(),{graphic:e,popupNumber:p}=v(s);return(u,a)=>(t(),r(b,null,[o("div",J,[a[0]||(a[0]=o("div",{class:"title_box"},[o("div",{class:"title"},"平面設計、手繪插畫"),o("div",{class:"text",style:{"text-align":"center"}},[k("使用Photoshop、Illustrator、Procreate製作"),o("br"),k(" --以下排序依照時間 新~舊-- ")])],-1)),o("div",K,[(t(!0),r(b,null,f(n(e),(l,x)=>(t(),r("div",{class:"box",onClick:$=>n(s).popupClick(x),style:T({backgroundImage:`url(${n(s).isDev?"/images/":"images/"}${l.name}-1.jpg)`}),key:l.name},null,12,M))),128))])]),N(H,{number:n(p)},null,8,["number"])],64))}},Y=d(O,[["__scopeId","data-v-a9e8e67e"]]);export{Y as default};
