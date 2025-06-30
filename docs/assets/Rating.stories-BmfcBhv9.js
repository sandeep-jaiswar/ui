import{r as E,R as e}from"./iframe-DPTEoTx4.js";import{I as C}from"./Icon-eIzZENis.js";const l=({value:t=0,max:v=5,size:o="medium",color:B="yellow",readonly:n=!1,allowHalf:u=!1,onChange:f,className:j="","data-testid":J})=>{const[S,b]=E.useState(null),[K,R]=E.useState(t);E.useEffect(()=>{R(t)},[t]);const h=(s,a=!1)=>{if(n)return;const r=s+(a&&u?.5:1);R(r),f==null||f(r)},w=(s,a=!1)=>{if(n)return;const r=s+(a&&u?.5:1);b(r)},Q=()=>{n||b(null)},U=s=>{const a=S!==null?S:K,r=s+1;return a>=r?"full":u&&a>=r-.5?"half":"empty"},N={small:"w-4 h-4",medium:"w-5 h-5",large:"w-6 h-6"},X={yellow:"#FFCC02",red:"#FF3B30",blue:"#007AFF",green:"#34C759"};return e.createElement("div",{className:`flex items-center gap-1 ${j}`,onMouseLeave:Q,"data-testid":J},Array.from({length:v},(s,a)=>{const r=U(a),Y=r==="full",y=r==="half";return e.createElement("div",{key:a,className:`relative ${n?"":"cursor-pointer"}`,onClick:()=>h(a),onMouseEnter:()=>w(a)},e.createElement(C,{name:"star",size:o,className:`${N[o]} text-fill-tertiary dark:text-fill-tertiary-dark`}),(Y||y)&&e.createElement("div",{className:`absolute inset-0 ${y?"overflow-hidden":""}`,style:y?{clipPath:"inset(0 50% 0 0)"}:void 0},e.createElement(C,{name:"star",size:o,color:"custom",customColor:X[B],className:`${N[o]} absolute inset-0`})),u&&!n&&e.createElement(e.Fragment,null,e.createElement("div",{className:"absolute inset-0 z-10 w-1/2",onMouseEnter:()=>w(a,!0),onClick:V=>{V.stopPropagation(),h(a,!0)}}),e.createElement("div",{className:"absolute inset-0 left-1/2 z-10 w-1/2",onMouseEnter:()=>w(a,!1),onClick:V=>{V.stopPropagation(),h(a,!1)}})))}))};l.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"The current rating value",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum number of stars",defaultValue:{value:"5",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the rating stars",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"yellow" | "red" | "blue" | "green"',elements:[{name:"literal",value:'"yellow"'},{name:"literal",value:'"red"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"green"'}]},description:"Color theme for active stars",defaultValue:{value:'"yellow"',computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"Whether the rating is read-only",defaultValue:{value:"false",computed:!1}},allowHalf:{required:!1,tsType:{name:"boolean"},description:"Whether to allow half-star ratings",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when rating changes"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test identifier"}}};const ae={title:"Advanced/Rating",component:l,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired rating component with star ratings."}}},tags:["autodocs"]},c={},i={args:{value:3.5,allowHalf:!0,showValue:!0}},m={args:{value:4,readOnly:!0,showValue:!0}},d={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(l,{value:4,color:"yellow",showValue:!0}),e.createElement(l,{value:4,color:"red",showValue:!0}),e.createElement(l,{value:4,color:"blue",showValue:!0}),e.createElement(l,{value:4,color:"green",showValue:!0}))},p={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement(l,{value:4,size:"small",showValue:!0}),e.createElement(l,{value:4,size:"medium",showValue:!0}),e.createElement(l,{value:4,size:"large",showValue:!0}))},g={render:()=>{const[t,v]=e.useState(0);return e.createElement("div",{className:"space-y-4 text-center"},e.createElement("h3",{className:"text-lg font-semibold"},"Rate this product"),e.createElement(l,{value:t,onChange:v,allowHalf:!0,showValue:!0,size:"large"}),e.createElement("p",{className:"text-sm text-label-secondary"},t===0&&"Click to rate",t>0&&t<=2&&"Poor",t>2&&t<=3&&"Fair",t>3&&t<=4&&"Good",t>4&&"Excellent"))}};var x,z,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var k,q,F;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    allowHalf: true,
    showValue: true
  }
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var M,A,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true,
    showValue: true
  }
}`,...(H=(A=m.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var I,O,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Rating value={4} color="yellow" showValue />\r
      <Rating value={4} color="red" showValue />\r
      <Rating value={4} color="blue" showValue />\r
      <Rating value={4} color="green" showValue />\r
    </div>
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,$,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Rating value={4} size="small" showValue />\r
      <Rating value={4} size="medium" showValue />\r
      <Rating value={4} size="large" showValue />\r
    </div>
}`,...(W=($=p.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var D,G,L;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = React.useState(0);
    return <div className="space-y-4 text-center">\r
        <h3 className="text-lg font-semibold">Rate this product</h3>\r
\r
        <Rating value={rating} onChange={setRating} allowHalf showValue size="large" />\r
\r
        <p className="text-sm text-label-secondary">\r
          {rating === 0 && "Click to rate"}\r
          {rating > 0 && rating <= 2 && "Poor"}\r
          {rating > 2 && rating <= 3 && "Fair"}\r
          {rating > 3 && rating <= 4 && "Good"}\r
          {rating > 4 && "Excellent"}\r
        </p>\r
      </div>;
  }
}`,...(L=(G=g.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const te=["Default","WithValue","ReadOnly","Colors","Sizes","Interactive"];export{d as Colors,c as Default,g as Interactive,m as ReadOnly,p as Sizes,i as WithValue,te as __namedExportsOrder,ae as default};
