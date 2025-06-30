import{R as e}from"./iframe-DPTEoTx4.js";import{I as b}from"./Icon-eIzZENis.js";const N=e.forwardRef(({accept:o,multiple:i=!1,maxSize:c,disabled:r=!1,variant:w="dropzone",label:s,helperText:m,errorText:u,state:l="default",progress:S,onChange:q,className:z="",testId:D,...U},n)=>{const[R,T]=e.useState(!1),[f,I]=e.useState([]),g=e.useRef(null),B=t=>{if(!t)return;const a=Array.from(t);c&&a.filter(d=>d.size<=c).length!==a.length||(I(i?[...f,...a]:a),q==null||q(t))},te=t=>{t.preventDefault(),r||T(!0)},ae=t=>{t.preventDefault(),T(!1)},re=t=>{if(t.preventDefault(),T(!1),r)return;const a=t.dataTransfer.files;B(a)},M=()=>{!r&&g.current&&g.current.click()},se=t=>{const a=f.filter((p,d)=>d!==t);I(a)},C=t=>{if(t===0)return"0 Bytes";const a=1024,p=["Bytes","KB","MB","GB"],d=Math.floor(Math.log(t)/Math.log(a));return parseFloat((t/Math.pow(a,d)).toFixed(2))+" "+p[d]},y=l==="error"&&u?u:m,le={default:"border-separator-opaque dark:border-separator-opaque-dark",error:"border-systemRed-500",success:"border-systemGreen-500"};return w==="button"?e.createElement("div",{className:`space-y-2 ${z}`,"data-testid":D},s&&e.createElement("label",{className:"block font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark"},s),e.createElement("button",{type:"button",onClick:M,disabled:r,className:`inline-flex items-center gap-2 rounded-ios bg-systemBlue-500 px-4 py-2 font-medium text-white transition-all duration-200 ease-ios text-ios-body ${r?"cursor-not-allowed opacity-50":"hover:bg-systemBlue-600 active:bg-systemBlue-700"} `},e.createElement(b,{name:"plus",size:"medium"}),"Choose ",i?"Files":"File"),e.createElement("input",{ref:t=>{g.current=t,typeof n=="function"?n(t):n&&(n.current=t)},type:"file",accept:o,multiple:i,disabled:r,onChange:t=>B(t.target.files),className:"hidden",...U}),y&&e.createElement("p",{className:`text-ios-footnote ${l==="error"?"text-systemRed-500 dark:text-systemRed-400":"text-label-tertiary dark:text-label-tertiary-dark"}`},y)):e.createElement("div",{className:`space-y-3 ${z}`,"data-testid":D},s&&e.createElement("label",{className:"block font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark"},s),e.createElement("div",{onDragOver:te,onDragLeave:ae,onDrop:re,onClick:M,className:`relative cursor-pointer rounded-ios-lg border-2 border-dashed p-8 text-center transition-all duration-200 ease-ios ${le[l]} ${R?"border-systemBlue-500 bg-systemBlue-50 dark:bg-systemBlue-900/20":"hover:border-systemBlue-500 hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"} ${r?"cursor-not-allowed opacity-50":""} `},e.createElement("input",{ref:t=>{g.current=t,typeof n=="function"?n(t):n&&(n.current=t)},type:"file",accept:o,multiple:i,disabled:r,onChange:t=>B(t.target.files),className:"absolute inset-0 h-full w-full cursor-pointer opacity-0",...U}),e.createElement("div",{className:"space-y-3"},e.createElement(b,{name:"plus",size:"xlarge",color:"system"}),e.createElement("div",null,e.createElement("p",{className:"font-medium text-label-primary text-ios-body dark:text-label-primary-dark"},R?"Drop files here":"Choose files or drag & drop"),e.createElement("p",{className:"mt-1 text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark"},o&&`Accepted formats: ${o}`,c&&` • Max size: ${C(c)}`))),S!==void 0&&e.createElement("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-fill-tertiary dark:bg-fill-tertiary-dark"},e.createElement("div",{className:"h-full bg-systemBlue-500 transition-all duration-300 ease-ios",style:{width:`${S}%`}}))),f.length>0&&e.createElement("div",{className:"space-y-2"},f.map((t,a)=>e.createElement("div",{key:a,className:"flex items-center justify-between rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},e.createElement("div",{className:"flex min-w-0 items-center gap-3"},e.createElement(b,{name:"settings",size:"medium",color:"system"}),e.createElement("div",{className:"min-w-0"},e.createElement("p",{className:"truncate font-medium text-label-primary text-ios-footnote dark:text-label-primary-dark"},t.name),e.createElement("p",{className:"text-label-tertiary text-ios-caption-1 dark:text-label-tertiary-dark"},C(t.size)))),e.createElement("button",{type:"button",onClick:p=>{p.stopPropagation(),se(a)},className:"p-1 text-label-tertiary transition-colors hover:text-systemRed-500 dark:text-label-tertiary-dark dark:hover:text-systemRed-400","aria-label":"Remove file"},e.createElement(b,{name:"close",size:"small"}))))),y&&e.createElement("p",{className:`text-ios-footnote ${l==="error"?"text-systemRed-500 dark:text-systemRed-400":"text-label-tertiary dark:text-label-tertiary-dark"}`},y))});N.displayName="FileUpload";N.__docgenInfo={description:"iOS-inspired file upload component with drag & drop",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:"Accepted file types"},multiple:{required:!1,tsType:{name:"boolean"},description:"Allow multiple files",defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Maximum file size in bytes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the file upload disabled?",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"dropzone" | "button"',elements:[{name:"literal",value:'"dropzone"'},{name:"literal",value:'"button"'}]},description:"Upload variant",defaultValue:{value:'"dropzone"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},errorText:{required:!1,tsType:{name:"string"},description:"Error text"},state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"File upload state",defaultValue:{value:'"default"',computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"Upload progress (0-100)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"File change handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const ie={title:"Advanced/FileUpload",component:N,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired file upload component with drag & drop."}}},tags:["autodocs"]},v={},x={args:{variant:"button"}},h={args:{accept:".jpg,.jpeg,.png,.gif",maxSize:5*1024*1024,label:"Upload Images",helperText:"Only image files up to 5MB are allowed"}},k={args:{multiple:!0,label:"Upload Documents",helperText:"You can select multiple files"}},F={args:{progress:65,label:"Uploading..."}},E={render:()=>{const[o,i]=e.useState([]),[c,r]=e.useState(),w=s=>{if(s){const m=Array.from(s);i(l=>[...l,...m]),r(0);const u=setInterval(()=>{r(l=>{if(l===void 0||l>=100){clearInterval(u);return}return l+10})},200)}};return e.createElement("div",{className:"w-96 space-y-4"},e.createElement(N,{multiple:!0,accept:".jpg,.jpeg,.png,.pdf,.doc,.docx",maxSize:10*1024*1024,label:"Upload Files",helperText:"Drag & drop files or click to browse",progress:c,onChange:w}),o.length>0&&e.createElement("div",{className:"rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark"},e.createElement("h4",{className:"mb-2 font-semibold"},"Uploaded Files:"),e.createElement("ul",{className:"space-y-1"},o.map((s,m)=>e.createElement("li",{key:m,className:"text-sm"},s.name," (",(s.size/1024).toFixed(1)," KB)")))))}};var $,j,A;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(A=(j=v.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var L,O,P;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "button"
  }
}`,...(P=(O=x.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var V,_,W;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    accept: ".jpg,.jpeg,.png,.gif",
    maxSize: 5 * 1024 * 1024,
    // 5MB
    label: "Upload Images",
    helperText: "Only image files up to 5MB are allowed"
  }
}`,...(W=(_=h.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var K,G,Y;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    multiple: true,
    label: "Upload Documents",
    helperText: "You can select multiple files"
  }
}`,...(Y=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var H,J,Q;F.parameters={...F.parameters,docs:{...(H=F.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    progress: 65,
    label: "Uploading..."
  }
}`,...(Q=(J=F.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [progress, setProgress] = React.useState<number | undefined>();
    const handleFileChange = (fileList: FileList | null) => {
      if (fileList) {
        const newFiles = Array.from(fileList);
        setFiles(prev => [...prev, ...newFiles]);

        // Simulate upload progress
        setProgress(0);
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev === undefined || prev >= 100) {
              clearInterval(interval);
              return undefined;
            }
            return prev + 10;
          });
        }, 200);
      }
    };
    return <div className="w-96 space-y-4">\r
        <FileUpload multiple accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" maxSize={10 * 1024 * 1024} // 10MB
      label="Upload Files" helperText="Drag & drop files or click to browse" progress={progress} onChange={handleFileChange} />\r
\r
        {files.length > 0 && <div className="rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">\r
            <h4 className="mb-2 font-semibold">Uploaded Files:</h4>\r
            <ul className="space-y-1">\r
              {files.map((file, index) => <li key={index} className="text-sm">\r
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)\r
                </li>)}\r
            </ul>\r
          </div>}\r
      </div>;
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ce=["Dropzone","Button","WithRestrictions","Multiple","WithProgress","Interactive"];export{x as Button,v as Dropzone,E as Interactive,k as Multiple,F as WithProgress,h as WithRestrictions,ce as __namedExportsOrder,ie as default};
