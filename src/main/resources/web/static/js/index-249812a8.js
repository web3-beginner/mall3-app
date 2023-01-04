import{_ as e,e as l,r as a,f as t,g as o,m as i,i as d,j as n,c as s,k as r,b as u,t as p,l as c,h as m,O as g,N as h,L as f,v as b,G as v,M as w,s as y,x as _}from"./index-68f4f231.js";import{u as k,a as C}from"./useCommon-97a7458f.js";import{E as T}from"./index.es-8b9ca841.js";import{t as z}from"./useTablePage-337a13be.js";const I=u("OpenSea"),V=u("转让"),x=u("查询拥有者"),S=u("销毁"),N={class:"dialog-footer"},A=u("Cancel"),F={class:"dialog-footer"},$=u("转让"),j=e({__name:"ViewItem",emits:["selectPageReq","hideComp"],setup(e,{expose:w,emit:y}){const{elMessage:_}=k();let T=e=>1===e?"已售出":"未售出",z=e=>1===e?"已充值":"未充值",j=l([]),W=l(null),O=l(null);const{dialogTitle:P,dialogVisible:U}=C();let L=()=>{y("hideComp")},M=e=>{let l=`https://testnets.opensea.io/zh-CN/assets/goerli/${O.value.contractAddress.toLowerCase()}/${e.id}`;window.open(l,"_blank")},R=e=>{let l={url:"/api/mall3/goods/nft/owner",method:"get",data:{goodsId:e.goodsId,itemId:e.id},isParams:!0,timeout:6e4,bfLoading:!0};b(l).then((e=>{v.alert(`${e.data}`,"NFT持有者",{confirmButtonText:"OK"})}))},q=e=>{let l={url:"/api/mall3/goods/nft/destroy",method:"post",data:{goodsId:e.goodsId,itemId:e.id},timeout:6e4,bfLoading:!0};b(l).then((e=>{_("NFT销毁成功")}))},E=l(null),G=l(null),H=a({goodsId:"",itemId:"",toWeb3Address:""}),J=e=>{E.value=!0,G.value=`NFT【${e.id}】转让`,H.goodsId=e.goodsId,H.itemId=e.id,H.toWeb3Address=""},B=()=>{b({url:"/api/mall3/goods/nft/transfer",method:"post",data:H,timeout:6e4,bfLoading:!0}).then((e=>{_("NFT转移成功"),H.goodsId="",H.itemId="",H.toWeb3Address=""}))},D=l([]),K=()=>b({url:"/api/mall3/user/all",method:"get"}).then((e=>{D.value=e.data.map(((e,l)=>({value:e.pubWeb3Addr,display:e.pubWeb3Addr}))).filter((e=>e.value))}));return w({showModal:e=>{P.value=`商品【${e.name||""}】附属卡号`,U.value=!0,W.value=e.id,O.value=e,b({url:`/api/mall3/goods/${W.value}/item`,method:"get"}).then((e=>{j.value=e.data})),K()}}),(e,l)=>{const a=t("el-table-column"),b=t("el-button"),v=t("el-table"),w=t("el-option"),y=t("el-select"),_=t("el-form-item"),k=t("el-form"),C=t("el-dialog");return o(),i(C,{modelValue:r(U),"onUpdate:modelValue":l[2]||(l[2]=e=>f(U)?U.value=e:null),title:r(P),width:"70vw","close-on-click-modal":!1,"before-close":r(L)},{footer:d((()=>[n("span",N,[s(b,{onClick:r(L)},{default:d((()=>[A])),_:1},8,["onClick"])])])),default:d((()=>[s(v,{data:r(j),border:!1},{default:d((()=>[s(a,{label:"卡号",prop:"id","min-width":"200"}),1==r(O).saleChannel?(o(),i(a,{key:0,align:"center",label:"是否售出",width:"100"},{default:d((({row:e})=>[u(p(r(T)(e.sold)),1)])),_:1})):c("v-if",!0),s(a,{align:"center",label:"是否充值",width:"100"},{default:d((({row:e})=>[u(p(r(z)(e.recharged)),1)])),_:1}),2==r(O).saleChannel?(o(),i(a,{key:1,align:"center",label:"NFT操作","min-width":"120"},{default:d((({row:e})=>[s(b,{link:"",size:"small",type:"primary",onClick:l=>r(M)(e)},{default:d((()=>[I])),_:2},1032,["onClick"]),1!=e.recharged&&1!=e.sold?(o(),i(b,{key:0,link:"",size:"small",type:"primary",onClick:l=>r(J)(e)},{default:d((()=>[V])),_:2},1032,["onClick"])):c("v-if",!0),s(b,{link:"",size:"small",type:"primary",onClick:l=>r(R)(e)},{default:d((()=>[x])),_:2},1032,["onClick"]),1!=e.recharged&&1!=e.sold?(o(),i(b,{key:1,link:"",size:"small",type:"primary",onClick:l=>r(q)(e)},{default:d((()=>[S])),_:2},1032,["onClick"])):c("v-if",!0)])),_:1})):c("v-if",!0)])),_:1},8,["data"]),s(C,{modelValue:r(E),"onUpdate:modelValue":l[1]||(l[1]=e=>f(E)?E.value=e:E=e),title:r(G),width:"40vw"},{footer:d((()=>[n("span",F,[s(b,{onClick:r(B)},{default:d((()=>[$])),_:1},8,["onClick"])])])),default:d((()=>[s(k,{"label-width":"100px",inline:!1,model:r(H)},{default:d((()=>[s(_,{label:"转让账户",prop:"toWeb3Address","label-position":"left"},{default:d((()=>[s(y,{modelValue:r(H).toWeb3Address,"onUpdate:modelValue":l[0]||(l[0]=e=>r(H).toWeb3Address=e),"min-width":"200",placeholder:"转让账户"},{default:d((()=>[(o(!0),m(h,null,g(r(D),(e=>(o(),i(w,{key:e.value,label:e.display,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])])),_:1},8,["modelValue","title","before-close"])}}},[["__file","/Users/liuzhaoming/百度云同步盘/mac同步/project/valor/web3/mall/mall3-web/src/views/seller/goods/ViewItem.vue"]]),W={class:"scroll-y"},O={class:"mr-3 rowSS"},P=u("查询"),U=u("附属卡"),L=u("OpenSea NFT"),M={class:"block columnCC mt-2"},R={name:"StockGoods"},q=e(Object.assign(R,{setup(e){let f=l([]),v=a({periodType:"",deviceType:""}),k=[{value:0,display:"所有"},{value:1,display:"月卡(30天)"},{value:2,display:"年卡(365天)"}],C=e=>1===e?"月卡(30天)":"年卡(365天)",I=[{value:0,display:"所有"},{value:1,display:"个人(单设备)"},{value:2,display:"家庭(4设备)"}],V=e=>1===e?"个人(单设备)":"家庭(4设备)",x=e=>1===e?"Web2":"Web3",S=e=>1===e?"Vcoin":"以太币";w((()=>{A()}));let N=l(1),A=()=>{const e=Object.assign(v,{pageNumber:F.value-1,pageSize:$.value}),l=JSON.parse(JSON.stringify(e));Object.keys(l).forEach((e=>{""!==l[e]&&null!==l[e]&&void 0!==l[e]&&0!==l[e]||delete l[e]})),b({url:"/api/mall3/goods",method:"get",data:l,isParams:!0}).then((e=>{var l,a;f.value=null==(l=e.data)?void 0:l.content,N.value=null==(a=e.data)?void 0:a.total}))},{pageNum:F,pageSize:$,handleCurrentChange:R,handleSizeChange:q}=z(A);const E=()=>{F.value=1,A()};let G=l(!1);const H=l(null),J=()=>{G.value=!1};let B=e=>{G.value=!0,_((()=>{H.value.showModal(e)}))},D=e=>{let l;if(new RegExp("[\\u4E00-\\u9FFF]+","g").test(e.brand)){l=`https://testnets.opensea.io/zh-CN/collection/${T(e.brand,{type:"string",toneType:"none"}).replace(" ","-")}-${e.id}`}else l=`https://testnets.opensea.io/zh-CN/collection/${e.brand.toLowerCase()}-${e.id}`;window.open(l,"_blank")};return(e,l)=>{const a=t("el-option"),b=t("el-select"),w=t("el-form-item"),_=t("el-form"),T=t("el-button"),z=t("el-table-column"),K=t("el-image"),Q=t("el-link"),X=t("el-table"),Y=t("el-pagination");return o(),m("div",W,[c("操作"),n("div",O,[c("条件搜索"),s(_,{ref:"refsearchForm",inline:!0,class:"demo-searchForm ml-2"},{default:d((()=>[s(w,{"label-width":"0px",label:"",prop:"type","label-position":"left"},{default:d((()=>[s(b,{modelValue:r(v).deviceType,"onUpdate:modelValue":l[0]||(l[0]=e=>r(v).deviceType=e),class:"widthPx-150",placeholder:"设备类型"},{default:d((()=>[(o(!0),m(h,null,g(r(I),(e=>(o(),i(a,{key:e.value,label:e.display,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(w,{"label-width":"0px",label:"",prop:"type","label-position":"left"},{default:d((()=>[s(b,{modelValue:r(v).periodType,"onUpdate:modelValue":l[1]||(l[1]=e=>r(v).periodType=e),class:"widthPx-150",placeholder:"周期类型"},{default:d((()=>[(o(!0),m(h,null,g(r(k),(e=>(o(),i(a,{key:e.value,label:e.display,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},512),c("查询按钮"),s(T,{type:"primary",onClick:E},{default:d((()=>[P])),_:1})]),c("表格和分页"),s(X,{id:"mainTable",ref:"mainTable",height:`calc(100vh - ${r(y).delWindowHeight})`,border:"",data:r(f)},{default:d((()=>[s(z,{align:"center",prop:"id",label:"Id",width:"80"}),s(z,{align:"center",prop:"stockId",label:"库存ID",width:"80"}),s(z,{align:"center",prop:"name",label:"商品名称","min-width":"140"}),s(z,{align:"center",prop:"brand",label:"品牌",width:"100"}),s(z,{align:"center",prop:"image",label:"商品图片","min-width":"120"},{default:d((({row:e})=>[s(K,{style:{width:"60px",height:"60px"},src:e.image},null,8,["src"])])),_:1}),s(z,{align:"center",label:"设备类型",width:"100"},{default:d((({row:e})=>[u(p(r(V)(e.deviceType)),1)])),_:1}),s(z,{align:"center",label:"周期类型",width:"100"},{default:d((({row:e})=>[u(p(r(C)(e.periodType)),1)])),_:1}),s(z,{align:"center",label:"销售渠道",width:"100"},{default:d((({row:e})=>[u(p(r(x)(e.saleChannel)),1)])),_:1}),s(z,{align:"center",label:"货币类型",width:"100"},{default:d((({row:e})=>[u(p(r(S)(e.currencyType)),1)])),_:1}),s(z,{align:"center",prop:"price",label:"价格",width:"100"}),s(z,{align:"center",prop:"count",label:"上架库存",width:"100"}),s(z,{align:"center",prop:"contractAddress",label:"智能合约地址","min-width":"160"},{default:d((({row:e})=>[s(Q,{href:`https://goerli.etherscan.io/address/${e.contractAddress}`,target:"_blank",type:"primary"},{default:d((()=>[u(p(e.contractAddress),1)])),_:2},1032,["href"])])),_:1}),c("点击操作"),s(z,{fixed:"right",align:"center",label:"操作","min-width":"105"},{default:d((({row:e})=>[s(T,{link:"",size:"small",type:"primary",onClick:l=>r(B)(e)},{default:d((()=>[U])),_:2},1032,["onClick"]),2==e.saleChannel?(o(),i(T,{key:0,link:"",size:"small",type:"primary",onClick:l=>r(D)(e)},{default:d((()=>[L])),_:2},1032,["onClick"])):c("v-if",!0)])),_:1})])),_:1},8,["height","data"]),c("分页"),n("div",M,[s(Y,{"current-page":r(F),"page-sizes":[10,20,50,100],"page-size":r($),layout:"total, sizes, prev, pager, next, jumper",total:r(N),onSizeChange:r(q),onCurrentChange:r(R)},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])]),r(G)?(o(),i(j,{key:0,ref_key:"refItemViewForm",ref:H,onHideComp:J,onSelectPageReq:r(A)},null,8,["onSelectPageReq"])):c("v-if",!0)])}}}),[["__scopeId","data-v-11a48370"],["__file","/Users/liuzhaoming/百度云同步盘/mac同步/project/valor/web3/mall/mall3-web/src/views/seller/goods/SellerGoods.vue"]]);export{q as default};