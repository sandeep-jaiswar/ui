import{R as e}from"./iframe-DPTEoTx4.js";import{B as l}from"./Button-Vw-cbfqZ.js";import{I as w}from"./Icon-eIzZENis.js";const f=e.forwardRef(({visible:i,title:r,message:n,type:s="info",position:o="top",duration:t=4e3,showClose:c=!0,onClose:a,className:O="",testId:R,...V},_)=>{if(e.useEffect(()=>{if(i&&t>0){const D=setTimeout(()=>{a==null||a()},t);return()=>clearTimeout(D)}},[i,t,a]),!i)return null;const y={info:{icon:"settings",bgColor:"bg-systemBlue-500 dark:bg-systemBlue-600",iconColor:"text-white"},success:{icon:"check",bgColor:"bg-systemGreen-500 dark:bg-systemGreen-600",iconColor:"text-white"},warning:{icon:"settings",bgColor:"bg-systemOrange-500 dark:bg-systemOrange-600",iconColor:"text-white"},error:{icon:"close",bgColor:"bg-systemRed-500 dark:bg-systemRed-600",iconColor:"text-white"}}[s],A=o==="top"?"top-4 animate-slide-down":"bottom-4 animate-slide-up";return e.createElement("div",{className:`fixed left-1/2 -translate-x-1/2 transform ${A} z-toast mx-4 w-full max-w-sm`},e.createElement("div",{ref:_,className:` ${y.bgColor} animate-fade-in rounded-ios-lg bg-opacity-95 p-4 text-white shadow-modal backdrop-blur-sm dark:bg-opacity-95 ${O} `.trim(),role:"alert","aria-live":"polite","data-testid":R,...V},e.createElement("div",{className:"flex items-start gap-3"},e.createElement("div",{className:"mt-0.5 flex-shrink-0"},e.createElement(w,{name:y.icon,size:"small",className:y.iconColor})),e.createElement("div",{className:"min-w-0 flex-1"},r&&e.createElement("h4",{className:"mb-1 font-semibold text-ios-subhead"},r),e.createElement("p",{className:"opacity-90 text-ios-footnote"},n)),c&&e.createElement("button",{type:"button",onClick:a,className:"flex-shrink-0 text-white opacity-70 transition-opacity hover:opacity-100","aria-label":"Close notification"},e.createElement(w,{name:"close",size:"small"})))))});f.displayName="Toast";f.__docgenInfo={description:"iOS-inspired toast notification component",methods:[],displayName:"Toast",props:{visible:{required:!0,tsType:{name:"boolean"},description:"Is the toast visible?"},title:{required:!1,tsType:{name:"string"},description:"Toast title"},message:{required:!0,tsType:{name:"string"},description:"Toast message"},type:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"Toast type",defaultValue:{value:'"info"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"Toast position",defaultValue:{value:'"top"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"Auto dismiss duration in ms (0 to disable)",defaultValue:{value:"4000",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const j={title:"Feedback/Toast",component:f,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired toast notification component."}}},tags:["autodocs"],args:{visible:!0,message:"This is a toast notification",onClose:()=>{}}},m={args:{type:"info",title:"Information",message:"This is an informational message"}},u={args:{type:"success",title:"Success",message:"Operation completed successfully"}},p={args:{type:"warning",title:"Warning",message:"Please check your input"}},d={args:{type:"error",title:"Error",message:"Something went wrong"}},g={render:()=>{const[i,r]=e.useState([]),n=s=>{const o=Date.now(),t={info:"Information message",success:"Success message",warning:"Warning message",error:"Error message"};r(c=>[...c,{id:o,type:s,message:t[s]}]),setTimeout(()=>{r(c=>c.filter(a=>a.id!==o))},4e3)};return e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex gap-2"},e.createElement(l,{size:"small",onClick:()=>n("info")},"Info"),e.createElement(l,{size:"small",onClick:()=>n("success")},"Success"),e.createElement(l,{size:"small",onClick:()=>n("warning")},"Warning"),e.createElement(l,{size:"small",onClick:()=>n("error")},"Error")),i.map(s=>e.createElement(f,{key:s.id,visible:!0,type:s.type,message:s.message,onClose:()=>r(o=>o.filter(t=>t.id!==s.id))})))}};var T,v,b;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Information",
    message: "This is an informational message"
  }
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,E,k;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "Success",
    message: "Operation completed successfully"
  }
}`,...(k=(E=u.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var C,S,x;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "warning",
    title: "Warning",
    message: "Please check your input"
  }
}`,...(x=(S=p.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,N,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "error",
    title: "Error",
    message: "Something went wrong"
  }
}`,...(B=(N=d.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var z,q,W;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = React.useState<Array<{
      id: number;
      type: "info" | "success" | "warning" | "error";
      message: string;
    }>>([]);
    const showToast = (type: "info" | "success" | "warning" | "error") => {
      const id = Date.now();
      const messages = {
        info: "Information message",
        success: "Success message",
        warning: "Warning message",
        error: "Error message"
      };
      setToasts(prev => [...prev, {
        id,
        type,
        message: messages[type]
      }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 4000);
    };
    return <div className="space-y-4">\r
        <div className="flex gap-2">\r
          <Button size="small" onClick={() => showToast("info")}>\r
            Info\r
          </Button>\r
          <Button size="small" onClick={() => showToast("success")}>\r
            Success\r
          </Button>\r
          <Button size="small" onClick={() => showToast("warning")}>\r
            Warning\r
          </Button>\r
          <Button size="small" onClick={() => showToast("error")}>\r
            Error\r
          </Button>\r
        </div>\r
\r
        {toasts.map(toast => <Toast key={toast.id} visible={true} type={toast.type} message={toast.message} onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} />)}\r
      </div>;
  }
}`,...(W=(q=g.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const H=["Info","Success","Warning","Error","Interactive"];export{d as Error,m as Info,g as Interactive,u as Success,p as Warning,H as __namedExportsOrder,j as default};
