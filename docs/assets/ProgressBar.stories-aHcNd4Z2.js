import{R as e}from"./iframe-DPTEoTx4.js";import{B as q}from"./Button-Vw-cbfqZ.js";import{T as a}from"./Typography-RJZoBOJc.js";const r=e.forwardRef(({value:s,max:t=100,size:n="medium",color:l="blue",showLabel:c=!1,label:i,indeterminate:o=!1,className:C="",testId:u,...Je},Ke)=>{const A=Math.min(Math.max(s/t*100,0),100),Ue={small:"h-1",medium:"h-2",large:"h-3"},Ye={blue:"bg-systemBlue-500 dark:bg-systemBlue-600",green:"bg-systemGreen-500 dark:bg-systemGreen-600",orange:"bg-systemOrange-500 dark:bg-systemOrange-600",red:"bg-systemRed-500 dark:bg-systemRed-600",purple:"bg-systemPurple-500 dark:bg-systemPurple-600"},D=i||(c?`${Math.round(A)}%`:"");return e.createElement("div",{className:`space-y-2 ${C}`,"data-testid":u,...Je},D&&e.createElement("div",{className:"flex items-center justify-between"},e.createElement("span",{className:"text-label-secondary text-ios-footnote dark:text-label-secondary-dark"},D),c&&!i&&e.createElement("span",{className:"text-label-tertiary text-ios-footnote dark:text-label-tertiary-dark"},s,"/",t)),e.createElement("div",{ref:Ke,className:`w-full overflow-hidden rounded-full bg-fill-tertiary dark:bg-fill-tertiary-dark ${Ue[n]}`,role:"progressbar","aria-valuenow":o?void 0:s,"aria-valuemin":0,"aria-valuemax":t,"aria-label":D||"Progress"},e.createElement("div",{className:`h-full rounded-full transition-all duration-300 ease-ios ${Ye[l]} ${o?"animate-pulse":""}`,style:{width:o?"100%":`${A}%`,transform:o?"translateX(-100%)":"none",animation:o?"progress-indeterminate 2s infinite linear":void 0}})))});r.displayName="ProgressBar";r.__docgenInfo={description:"iOS-inspired progress bar component",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:"Progress value (0-100)"},max:{required:!1,tsType:{name:"number"},description:"Maximum value",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Progress bar size",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"blue" | "green" | "orange" | "red" | "purple"',elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"green"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"red"'},{name:"literal",value:'"purple"'}]},description:"Progress bar color",defaultValue:{value:'"blue"',computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show percentage label",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Custom label"},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Indeterminate progress",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const ar={title:"Components/ProgressBar",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired progress bar component for showing task completion, loading states, and progress indicators."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0-100)"},max:{control:{type:"number",min:1},description:"Maximum value"},size:{control:"select",options:["small","medium","large"],description:"Progress bar size"},color:{control:"select",options:["blue","green","orange","red","purple"],description:"Progress bar color"},showLabel:{control:"boolean",description:"Show percentage label"},indeterminate:{control:"boolean",description:"Indeterminate progress"},label:{control:"text",description:"Custom label"}},args:{value:65}},m={args:{}},d={args:{showLabel:!0}},p={args:{label:"Downloading...",value:45}},g={args:{indeterminate:!0,label:"Loading..."}},v={args:{size:"small",showLabel:!0}},b={args:{size:"medium",showLabel:!0}},y={args:{size:"large",showLabel:!0}},h={args:{color:"blue",showLabel:!0}},w={args:{color:"green",showLabel:!0}},f={args:{color:"orange",showLabel:!0}},P={args:{color:"red",showLabel:!0}},E={args:{color:"purple",showLabel:!0}},L={args:{value:0,showLabel:!0}},S={args:{value:25,showLabel:!0}},T={args:{value:50,showLabel:!0}},z={args:{value:75,showLabel:!0}},B={args:{value:100,showLabel:!0,color:"green"}},R={render:()=>e.createElement("div",{className:"w-80 space-y-6"},e.createElement("div",null,e.createElement(a,{variant:"subhead",className:"mb-2"},"Small"),e.createElement(r,{size:"small",value:65,showLabel:!0})),e.createElement("div",null,e.createElement(a,{variant:"subhead",className:"mb-2"},"Medium"),e.createElement(r,{size:"medium",value:65,showLabel:!0})),e.createElement("div",null,e.createElement(a,{variant:"subhead",className:"mb-2"},"Large"),e.createElement(r,{size:"large",value:65,showLabel:!0}))),parameters:{docs:{description:{story:"All progress bar sizes displayed together."}}}},N={render:()=>e.createElement("div",{className:"w-80 space-y-4"},e.createElement(r,{color:"blue",value:65,label:"Blue Progress"}),e.createElement(r,{color:"green",value:65,label:"Green Progress"}),e.createElement(r,{color:"orange",value:65,label:"Orange Progress"}),e.createElement(r,{color:"red",value:65,label:"Red Progress"}),e.createElement(r,{color:"purple",value:65,label:"Purple Progress"})),parameters:{docs:{description:{story:"All progress bar colors displayed together."}}}},k={render:()=>e.createElement("div",{className:"w-80 space-y-4"},e.createElement(a,{variant:"headline"},"File Downloads"),e.createElement("div",{className:"space-y-3"},e.createElement(r,{value:100,color:"green",label:"document.pdf",showLabel:!0}),e.createElement(r,{value:75,color:"blue",label:"image.jpg",showLabel:!0}),e.createElement(r,{value:45,color:"orange",label:"video.mp4",showLabel:!0}),e.createElement(r,{indeterminate:!0,color:"blue",label:"archive.zip"}))),parameters:{docs:{description:{story:"Example download progress interface."}}}},x={render:()=>e.createElement("div",{className:"w-80 space-y-6"},e.createElement(a,{variant:"headline"},"Project Tasks"),e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement(a,{variant:"body"},"Design Phase"),e.createElement(r,{value:100,color:"green",showLabel:!0,size:"small"})),e.createElement("div",null,e.createElement(a,{variant:"body"},"Development"),e.createElement(r,{value:68,color:"blue",showLabel:!0,size:"small"})),e.createElement("div",null,e.createElement(a,{variant:"body"},"Testing"),e.createElement(r,{value:25,color:"orange",showLabel:!0,size:"small"})),e.createElement("div",null,e.createElement(a,{variant:"body"},"Deployment"),e.createElement(r,{value:0,color:"red",showLabel:!0,size:"small"})))),parameters:{docs:{description:{story:"Example task progress tracking interface."}}}},I={render:()=>{const[s,t]=e.useState(0),[n,l]=e.useState(!1);e.useEffect(()=>{if(!n)return;const C=setInterval(()=>{t(u=>u>=100?(l(!1),100):u+1)},50);return()=>clearInterval(C)},[n]);const c=()=>{l(!0)},i=()=>{t(0),l(!1)},o=()=>{l(!1)};return e.createElement("div",{className:"w-80 space-y-6"},e.createElement(a,{variant:"headline"},"Interactive Progress"),e.createElement(r,{value:s,color:s===100?"green":"blue",showLabel:!0}),e.createElement("div",{className:"flex gap-2"},e.createElement(q,{size:"small",onClick:c,disabled:n||s===100},"Start"),e.createElement(q,{size:"small",variant:"secondary",onClick:o,disabled:!n},"Pause"),e.createElement(q,{size:"small",variant:"ghost",onClick:i},"Reset")),e.createElement(a,{variant:"footnote",color:"secondary"},"Status: ",s===100?"Complete":n?"Running":"Paused"))},parameters:{docs:{description:{story:"Interactive example with start, pause, and reset controls."}}}};var M,O,G;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {}
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var V,$,j;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showLabel: true
  }
}`,...(j=($=d.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var Q,_,F;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Downloading...",
    value: 45
  }
}`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var H,W,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Loading..."
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var J,K,U;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: "small",
    showLabel: true
  }
}`,...(U=(K=v.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: "medium",
    showLabel: true
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: "large",
    showLabel: true
  }
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,oe,te;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    color: "blue",
    showLabel: true
  }
}`,...(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var le,ce,ie;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    color: "green",
    showLabel: true
  }
}`,...(ie=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,me,de;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    color: "orange",
    showLabel: true
  }
}`,...(de=(me=f.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ge,ve;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    color: "red",
    showLabel: true
  }
}`,...(ve=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,ye,he;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    color: "purple",
    showLabel: true
  }
}`,...(he=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var we,fe,Pe;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    value: 0,
    showLabel: true
  }
}`,...(Pe=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:Pe.source}}};var Ee,Le,Se;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    value: 25,
    showLabel: true
  }
}`,...(Se=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:Se.source}}};var Te,ze,Be;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    value: 50,
    showLabel: true
  }
}`,...(Be=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var Re,Ne,ke;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    value: 75,
    showLabel: true
  }
}`,...(ke=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var xe,Ie,Ce;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    value: 100,
    showLabel: true,
    color: "green"
  }
}`,...(Ce=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var De,qe,Ae;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-6">\r
      <div>\r
        <Typography variant="subhead" className="mb-2">\r
          Small\r
        </Typography>\r
        <ProgressBar size="small" value={65} showLabel />\r
      </div>\r
      <div>\r
        <Typography variant="subhead" className="mb-2">\r
          Medium\r
        </Typography>\r
        <ProgressBar size="medium" value={65} showLabel />\r
      </div>\r
      <div>\r
        <Typography variant="subhead" className="mb-2">\r
          Large\r
        </Typography>\r
        <ProgressBar size="large" value={65} showLabel />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All progress bar sizes displayed together."
      }
    }
  }
}`,...(Ae=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Ae.source}}};var Me,Oe,Ge;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">\r
      <ProgressBar color="blue" value={65} label="Blue Progress" />\r
      <ProgressBar color="green" value={65} label="Green Progress" />\r
      <ProgressBar color="orange" value={65} label="Orange Progress" />\r
      <ProgressBar color="red" value={65} label="Red Progress" />\r
      <ProgressBar color="purple" value={65} label="Purple Progress" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All progress bar colors displayed together."
      }
    }
  }
}`,...(Ge=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var Ve,$e,je;k.parameters={...k.parameters,docs:{...(Ve=k.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">\r
      <Typography variant="headline">File Downloads</Typography>\r
\r
      <div className="space-y-3">\r
        <ProgressBar value={100} color="green" label="document.pdf" showLabel />\r
        <ProgressBar value={75} color="blue" label="image.jpg" showLabel />\r
        <ProgressBar value={45} color="orange" label="video.mp4" showLabel />\r
        <ProgressBar indeterminate color="blue" label="archive.zip" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example download progress interface."
      }
    }
  }
}`,...(je=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:je.source}}};var Qe,_e,Fe;x.parameters={...x.parameters,docs:{...(Qe=x.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-6">\r
      <Typography variant="headline">Project Tasks</Typography>\r
\r
      <div className="space-y-4">\r
        <div>\r
          <Typography variant="body">Design Phase</Typography>\r
          <ProgressBar value={100} color="green" showLabel size="small" />\r
        </div>\r
\r
        <div>\r
          <Typography variant="body">Development</Typography>\r
          <ProgressBar value={68} color="blue" showLabel size="small" />\r
        </div>\r
\r
        <div>\r
          <Typography variant="body">Testing</Typography>\r
          <ProgressBar value={25} color="orange" showLabel size="small" />\r
        </div>\r
\r
        <div>\r
          <Typography variant="body">Deployment</Typography>\r
          <ProgressBar value={0} color="red" showLabel size="small" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example task progress tracking interface."
      }
    }
  }
}`,...(Fe=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var He,We,Xe;I.parameters={...I.parameters,docs:{...(He=I.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    React.useEffect(() => {
      if (!isRunning) return;
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, [isRunning]);
    const handleStart = () => {
      setIsRunning(true);
    };
    const handleReset = () => {
      setProgress(0);
      setIsRunning(false);
    };
    const handlePause = () => {
      setIsRunning(false);
    };
    return <div className="w-80 space-y-6">\r
        <Typography variant="headline">Interactive Progress</Typography>\r
\r
        <ProgressBar value={progress} color={progress === 100 ? "green" : "blue"} showLabel />\r
\r
        <div className="flex gap-2">\r
          <Button size="small" onClick={handleStart} disabled={isRunning || progress === 100}>\r
            Start\r
          </Button>\r
          <Button size="small" variant="secondary" onClick={handlePause} disabled={!isRunning}>\r
            Pause\r
          </Button>\r
          <Button size="small" variant="ghost" onClick={handleReset}>\r
            Reset\r
          </Button>\r
        </div>\r
\r
        <Typography variant="footnote" color="secondary">\r
          Status: {progress === 100 ? "Complete" : isRunning ? "Running" : "Paused"}\r
        </Typography>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example with start, pause, and reset controls."
      }
    }
  }
}`,...(Xe=(We=I.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};const sr=["Default","WithLabel","CustomLabel","Indeterminate","Small","Medium","Large","Blue","Green","Orange","Red","Purple","Empty","Quarter","Half","ThreeQuarters","Complete","AllSizes","AllColors","DownloadProgress","TaskProgress","InteractiveExample"];export{N as AllColors,R as AllSizes,h as Blue,B as Complete,p as CustomLabel,m as Default,k as DownloadProgress,L as Empty,w as Green,T as Half,g as Indeterminate,I as InteractiveExample,y as Large,b as Medium,f as Orange,E as Purple,S as Quarter,P as Red,v as Small,x as TaskProgress,z as ThreeQuarters,d as WithLabel,sr as __namedExportsOrder,ar as default};
