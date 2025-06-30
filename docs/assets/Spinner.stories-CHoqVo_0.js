import{R as e}from"./iframe-DPTEoTx4.js";import{B as s}from"./Button-Vw-cbfqZ.js";import{C as Be}from"./Card-61Fw-uHo.js";import{T as a}from"./Typography-RJZoBOJc.js";import"./animations-DDGOJxN6.js";const r=e.forwardRef(({size:o="medium",color:l="blue",label:n="Loading...",showLabel:T=!1,className:t="",testId:z,...C},k)=>{const Ie={small:"w-4 h-4",medium:"w-6 h-6",large:"w-8 h-8"},qe={blue:"border-systemBlue-500",green:"border-systemGreen-500",orange:"border-systemOrange-500",red:"border-systemRed-500",purple:"border-systemPurple-500",gray:"border-systemGray-500"},Ae={small:"text-ios-caption-1",medium:"text-ios-footnote",large:"text-ios-subhead"};return e.createElement("div",{ref:k,className:`inline-flex items-center gap-3 ${t}`,"data-testid":z,...C},e.createElement("div",{className:` ${Ie[o]} animate-spin rounded-full border-2 border-transparent border-t-current ${qe[l]} `,role:"status","aria-label":n}),T&&e.createElement("span",{className:`${Ae[o]} text-label-secondary dark:text-label-secondary-dark`},n))});r.displayName="Spinner";r.__docgenInfo={description:"iOS-inspired spinner component for loading states",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Spinner size",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"blue" | "green" | "orange" | "red" | "purple" | "gray"',elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"green"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"red"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"gray"'}]},description:"Spinner color",defaultValue:{value:'"blue"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Loading text",defaultValue:{value:'"Loading..."',computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show label",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const We={title:"Components/Spinner",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired spinner component for loading states and progress indicators."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Spinner size"},color:{control:"select",options:["blue","green","orange","red","purple","gray"],description:"Spinner color"},showLabel:{control:"boolean",description:"Show loading label"},label:{control:"text",description:"Custom loading text"}},args:{}},i={args:{}},c={args:{showLabel:!0}},d={args:{showLabel:!0,label:"Please wait..."}},m={args:{size:"small",showLabel:!0}},p={args:{size:"medium",showLabel:!0}},u={args:{size:"large",showLabel:!0}},g={args:{color:"blue",showLabel:!0}},y={args:{color:"green",showLabel:!0}},v={args:{color:"orange",showLabel:!0}},h={args:{color:"red",showLabel:!0}},b={args:{color:"purple",showLabel:!0}},f={args:{color:"gray",showLabel:!0}},S={render:()=>e.createElement("div",{className:"flex items-center gap-8"},e.createElement("div",{className:"text-center"},e.createElement(r,{size:"small"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Small")),e.createElement("div",{className:"text-center"},e.createElement(r,{size:"medium"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Medium")),e.createElement("div",{className:"text-center"},e.createElement(r,{size:"large"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Large"))),parameters:{docs:{description:{story:"All spinner sizes displayed together."}}}},N={render:()=>e.createElement("div",{className:"grid grid-cols-3 gap-6"},e.createElement("div",{className:"text-center"},e.createElement(r,{color:"blue"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Blue")),e.createElement("div",{className:"text-center"},e.createElement(r,{color:"green"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Green")),e.createElement("div",{className:"text-center"},e.createElement(r,{color:"orange"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Orange")),e.createElement("div",{className:"text-center"},e.createElement(r,{color:"red"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Red")),e.createElement("div",{className:"text-center"},e.createElement(r,{color:"purple"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Purple")),e.createElement("div",{className:"text-center"},e.createElement(r,{color:"gray"}),e.createElement(a,{variant:"caption2",className:"mt-2"},"Gray"))),parameters:{docs:{description:{story:"All spinner colors displayed together."}}}},E={render:()=>e.createElement("div",{className:"flex gap-4"},e.createElement(s,{disabled:!0},e.createElement(r,{size:"small",color:"gray"}),e.createElement("span",{className:"ml-2"},"Loading...")),e.createElement(s,{variant:"secondary",disabled:!0},e.createElement(r,{size:"small"}),e.createElement("span",{className:"ml-2"},"Saving..."))),parameters:{docs:{description:{story:"Spinners used inside buttons for loading states."}}}},L={render:()=>e.createElement(Be,{className:"w-80 text-center"},e.createElement("div",{className:"py-8"},e.createElement(r,{size:"large",showLabel:!0,label:"Loading content..."}))),parameters:{docs:{description:{story:"Spinner used in a card for content loading."}}}},x={render:()=>e.createElement("div",{className:"w-80 space-y-6"},e.createElement(a,{variant:"headline"},"Loading States"),e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},e.createElement(r,{size:"small"}),e.createElement(a,{variant:"body"},"Fetching data...")),e.createElement("div",{className:"flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},e.createElement(r,{size:"small",color:"green"}),e.createElement(a,{variant:"body"},"Uploading file...")),e.createElement("div",{className:"flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark"},e.createElement(r,{size:"small",color:"orange"}),e.createElement(a,{variant:"body"},"Processing...")))),parameters:{docs:{description:{story:"Various loading states with different contexts."}}}},w={render:()=>{const[o,l]=e.useState(!1),[n,T]=e.useState("save"),t=k=>{T(k),l(!0),setTimeout(()=>{l(!1)},2e3)},z=()=>{switch(n){case"save":return"blue";case"delete":return"red";case"upload":return"green";default:return"blue"}},C=()=>{switch(n){case"save":return"Saving...";case"delete":return"Deleting...";case"upload":return"Uploading...";default:return"Loading..."}};return e.createElement("div",{className:"w-80 space-y-6"},e.createElement(a,{variant:"headline"},"Interactive Loading"),o?e.createElement(Be,{className:"py-8 text-center"},e.createElement(r,{size:"large",color:z(),showLabel:!0,label:C()})):e.createElement("div",{className:"space-y-3"},e.createElement(s,{fullWidth:!0,onClick:()=>t("save")},"Save Document"),e.createElement(s,{fullWidth:!0,variant:"destructive",onClick:()=>t("delete")},"Delete Item"),e.createElement(s,{fullWidth:!0,variant:"secondary",onClick:()=>t("upload")},"Upload File")))},parameters:{docs:{description:{story:"Interactive example showing different loading scenarios."}}}};var B,I,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {}
}`,...(q=(I=i.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var A,G,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    showLabel: true
  }
}`,...(R=(G=c.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var D,P,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showLabel: true,
    label: "Please wait..."
  }
}`,...(O=(P=d.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var W,V,U;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: "small",
    showLabel: true
  }
}`,...(U=(V=m.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var F,M,_;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "medium",
    showLabel: true
  }
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,j,H;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: "large",
    showLabel: true
  }
}`,...(H=(j=u.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    color: "blue",
    showLabel: true
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    color: "green",
    showLabel: true
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    color: "orange",
    showLabel: true
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    color: "red",
    showLabel: true
  }
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,le,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    color: "purple",
    showLabel: true
  }
}`,...(ie=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    color: "gray",
    showLabel: true
  }
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">\r
      <div className="text-center">\r
        <Spinner size="small" />\r
        <Typography variant="caption2" className="mt-2">\r
          Small\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Spinner size="medium" />\r
        <Typography variant="caption2" className="mt-2">\r
          Medium\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Spinner size="large" />\r
        <Typography variant="caption2" className="mt-2">\r
          Large\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All spinner sizes displayed together."
      }
    }
  }
}`,...(ge=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ye,ve,he;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-6">\r
      <div className="text-center">\r
        <Spinner color="blue" />\r
        <Typography variant="caption2" className="mt-2">\r
          Blue\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Spinner color="green" />\r
        <Typography variant="caption2" className="mt-2">\r
          Green\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Spinner color="orange" />\r
        <Typography variant="caption2" className="mt-2">\r
          Orange\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Spinner color="red" />\r
        <Typography variant="caption2" className="mt-2">\r
          Red\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Spinner color="purple" />\r
        <Typography variant="caption2" className="mt-2">\r
          Purple\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Spinner color="gray" />\r
        <Typography variant="caption2" className="mt-2">\r
          Gray\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All spinner colors displayed together."
      }
    }
  }
}`,...(he=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var be,fe,Se;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Button disabled>\r
        <Spinner size="small" color="gray" />\r
        <span className="ml-2">Loading...</span>\r
      </Button>\r
      <Button variant="secondary" disabled>\r
        <Spinner size="small" />\r
        <span className="ml-2">Saving...</span>\r
      </Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Spinners used inside buttons for loading states."
      }
    }
  }
}`,...(Se=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ne,Ee,Le;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <Card className="w-80 text-center">\r
      <div className="py-8">\r
        <Spinner size="large" showLabel label="Loading content..." />\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Spinner used in a card for content loading."
      }
    }
  }
}`,...(Le=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var xe,we,Te;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-6">\r
      <Typography variant="headline">Loading States</Typography>\r
\r
      <div className="space-y-4">\r
        <div className="flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">\r
          <Spinner size="small" />\r
          <Typography variant="body">Fetching data...</Typography>\r
        </div>\r
\r
        <div className="flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">\r
          <Spinner size="small" color="green" />\r
          <Typography variant="body">Uploading file...</Typography>\r
        </div>\r
\r
        <div className="flex items-center gap-3 rounded-ios bg-fill-quaternary p-3 dark:bg-fill-quaternary-dark">\r
          <Spinner size="small" color="orange" />\r
          <Typography variant="body">Processing...</Typography>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Various loading states with different contexts."
      }
    }
  }
}`,...(Te=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var ze,Ce,ke;w.parameters={...w.parameters,docs:{...(ze=w.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [loadingType, setLoadingType] = React.useState<"save" | "delete" | "upload">("save");
    const handleAction = (type: "save" | "delete" | "upload") => {
      setLoadingType(type);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    const getSpinnerColor = () => {
      switch (loadingType) {
        case "save":
          return "blue";
        case "delete":
          return "red";
        case "upload":
          return "green";
        default:
          return "blue";
      }
    };
    const getLoadingText = () => {
      switch (loadingType) {
        case "save":
          return "Saving...";
        case "delete":
          return "Deleting...";
        case "upload":
          return "Uploading...";
        default:
          return "Loading...";
      }
    };
    return <div className="w-80 space-y-6">\r
        <Typography variant="headline">Interactive Loading</Typography>\r
\r
        {isLoading ? <Card className="py-8 text-center">\r
            <Spinner size="large" color={getSpinnerColor()} showLabel label={getLoadingText()} />\r
          </Card> : <div className="space-y-3">\r
            <Button fullWidth onClick={() => handleAction("save")}>\r
              Save Document\r
            </Button>\r
            <Button fullWidth variant="destructive" onClick={() => handleAction("delete")}>\r
              Delete Item\r
            </Button>\r
            <Button fullWidth variant="secondary" onClick={() => handleAction("upload")}>\r
              Upload File\r
            </Button>\r
          </div>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing different loading scenarios."
      }
    }
  }
}`,...(ke=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};const Ve=["Default","WithLabel","CustomLabel","Small","Medium","Large","Blue","Green","Orange","Red","Purple","Gray","AllSizes","AllColors","InButton","InCard","LoadingStates","InteractiveExample"];export{N as AllColors,S as AllSizes,g as Blue,d as CustomLabel,i as Default,f as Gray,y as Green,E as InButton,L as InCard,w as InteractiveExample,u as Large,x as LoadingStates,p as Medium,v as Orange,b as Purple,h as Red,m as Small,c as WithLabel,Ve as __namedExportsOrder,We as default};
