import{R as e}from"./iframe-DPTEoTx4.js";import{B as n}from"./Button-Vw-cbfqZ.js";import{I as l}from"./Input-DZS3UAhn.js";import{T as t}from"./Typography-RJZoBOJc.js";import"./accessibility-Ckp-g_ze.js";import"./animations-DDGOJxN6.js";const B=e.forwardRef(({open:o,onClose:r,title:s,children:i,size:c="medium",showCloseButton:z=!0,closeOnBackdrop:ge=!0,closeOnEscape:O=!0,className:be="",testId:Ee,...Te},d)=>{const m=e.useRef(null),I=e.useRef(null);e.useEffect(()=>{if(!o||!O)return;const a=p=>{p.key==="Escape"&&r()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[o,O,r]),e.useEffect(()=>{if(o)return I.current=document.activeElement,document.body.style.overflow="hidden",m.current&&m.current.focus(),()=>{document.body.style.overflow="",I.current&&I.current.focus()}},[o]);const we=a=>{ge&&a.target===a.currentTarget&&r()},ke=a=>{if(a.key==="Tab"){const p=m.current;if(!p)return;const S=p.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),u=S[0],h=S[S.length-1];a.shiftKey?document.activeElement===u&&(a.preventDefault(),h==null||h.focus()):document.activeElement===h&&(a.preventDefault(),u==null||u.focus())}},Ce={small:"max-w-sm",medium:"max-w-md",large:"max-w-2xl",fullscreen:"max-w-none w-full h-full m-0 rounded-none"};return o?e.createElement("div",{className:"fixed inset-0 z-modal flex items-center justify-center p-4",onClick:we,"data-testid":Ee,role:"presentation"},e.createElement("div",{className:"animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm"}),e.createElement("div",{ref:a=>{m.current=a,typeof d=="function"?d(a):d&&(d.current=a)},className:`animate-scale-in relative max-h-full overflow-hidden rounded-ios-xl bg-background-primary shadow-modal focus:outline-none dark:bg-background-secondary-dark ${Ce[c]} ${be} `.trim(),role:"dialog","aria-modal":"true","aria-labelledby":s?"modal-title":void 0,tabIndex:-1,onKeyDown:ke,...Te},(s||z)&&e.createElement("div",{className:"flex items-center justify-between border-b border-separator-nonOpaque p-6 dark:border-separator-nonOpaque-dark"},s&&e.createElement("h2",{id:"modal-title",className:"font-semibold text-label-primary text-ios-headline dark:text-label-primary-dark"},s),z&&e.createElement("button",{type:"button",onClick:r,className:"rounded-ios p-1 text-label-tertiary transition-colors hover:bg-fill-quaternary hover:text-label-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 dark:text-label-tertiary-dark dark:hover:bg-fill-quaternary-dark dark:hover:text-label-primary-dark","aria-label":"Close modal"},e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})))),e.createElement("div",{className:`${c==="fullscreen"?"flex-1 overflow-auto":""} p-6`},i))):null});B.displayName="Modal";B.__docgenInfo={description:`iOS-inspired modal component with backdrop, animations, and comprehensive accessibility features.

Features:
- Focus management with focus trap
- Keyboard navigation (Escape to close, Tab cycling)
- Screen reader support with proper ARIA attributes
- Body scroll prevention when open
- Smooth animations for enter/exit
- Multiple size variants including fullscreen
- Configurable close behaviors

@example
\`\`\`tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Settings"
  size="medium"
  closeOnBackdrop={true}
>
  <p>Modal content goes here</p>
</Modal>
\`\`\``,methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is currently open/visible"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the modal should be closed"},title:{required:!1,tsType:{name:"string"},description:"Optional title displayed in the modal header"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal content"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "fullscreen"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"fullscreen"'}]},description:"Size variant affecting modal dimensions",defaultValue:{value:'"medium"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button in the header",defaultValue:{value:"true",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"Whether clicking the backdrop should close the modal",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether pressing Escape should close the modal",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing"}}};const Ne=()=>{},Oe={title:"Components/Modal",component:B,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired modal component with backdrop, animations, and focus management. Perfect for dialogs, forms, and overlays."}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Is the modal open?"},size:{control:"select",options:["small","medium","large","fullscreen"],description:"Modal size"},showCloseButton:{control:"boolean",description:"Show close button"},closeOnBackdrop:{control:"boolean",description:"Close on backdrop click"},closeOnEscape:{control:"boolean",description:"Close on escape key"},title:{control:"text",description:"Modal title"},children:{control:"text",description:"Modal content"}},args:{onClose:Ne,open:!0,children:"Modal content goes here"}},y={args:{title:"Default Modal"}},f={args:{children:e.createElement("div",null,e.createElement(t,{variant:"headline"},"Custom Header"),e.createElement(t,{variant:"body",color:"secondary"},"This modal doesn't use the built-in title prop."))}},v={args:{title:"No Close Button",showCloseButton:!1}},g={args:{size:"small",title:"Small Modal",children:"This is a small modal with limited content."}},b={args:{size:"medium",title:"Medium Modal",children:"This is a medium-sized modal with moderate content."}},E={args:{size:"large",title:"Large Modal",children:e.createElement("div",{className:"space-y-4"},e.createElement(t,{variant:"body"},"This is a large modal that can contain more extensive content."),e.createElement(t,{variant:"body"},"It's perfect for forms, detailed information, or complex interactions."))}},T={args:{size:"fullscreen",title:"Fullscreen Modal",children:e.createElement("div",{className:"space-y-6"},e.createElement(t,{variant:"body"},"This fullscreen modal takes up the entire viewport."),e.createElement(t,{variant:"body"},"It's ideal for mobile experiences or when you need maximum space."))}},w={args:{title:"No Backdrop Close",closeOnBackdrop:!1,children:"This modal won't close when clicking the backdrop."}},k={args:{title:"No Escape Close",closeOnEscape:!1,children:"This modal won't close when pressing the Escape key."}},C={args:{size:"small",title:"Delete Item",children:e.createElement("div",{className:"space-y-6"},e.createElement(t,{variant:"body",color:"secondary"},"Are you sure you want to delete this item? This action cannot be undone."),e.createElement("div",{className:"flex justify-end gap-3"},e.createElement(n,{variant:"ghost",size:"small"},"Cancel"),e.createElement(n,{variant:"destructive",size:"small"},"Delete")))}},N={args:{title:"Add New Contact",children:e.createElement("div",{className:"space-y-6"},e.createElement("div",{className:"space-y-4"},e.createElement(l,{label:"First Name",placeholder:"Enter first name"}),e.createElement(l,{label:"Last Name",placeholder:"Enter last name"}),e.createElement(l,{label:"Email",type:"email",placeholder:"Enter email"}),e.createElement(l,{label:"Phone",type:"tel",placeholder:"Enter phone number"})),e.createElement("div",{className:"flex justify-end gap-3"},e.createElement(n,{variant:"ghost"},"Cancel"),e.createElement(n,{variant:"primary"},"Save Contact")))}},x={args:{title:"About This App",children:e.createElement("div",{className:"space-y-4"},e.createElement(t,{variant:"body"},"This is a sample application built with our iOS-inspired component library."),e.createElement(t,{variant:"body"},"The library includes buttons, inputs, modals, and many other components that follow Apple's Human Interface Guidelines."),e.createElement("div",{className:"border-t border-separator-nonOpaque pt-4 dark:border-separator-nonOpaque-dark"},e.createElement(t,{variant:"footnote",color:"tertiary"},"Version 1.0.0 • Built with React and TypeScript")))}},M={render:()=>{const[o,r]=e.useState(!1),[s,i]=e.useState("info"),c={info:{title:"Information",content:e.createElement(t,{variant:"body"},"This is an informational modal with some details.")},form:{title:"Quick Form",content:e.createElement("div",{className:"space-y-4"},e.createElement(l,{label:"Name",placeholder:"Enter your name"}),e.createElement(l,{label:"Message",placeholder:"Enter a message"}))},confirm:{title:"Confirm Action",content:e.createElement("div",{className:"space-y-4"},e.createElement(t,{variant:"body",color:"secondary"},"Are you sure you want to proceed with this action?"),e.createElement("div",{className:"flex justify-end gap-2"},e.createElement(n,{variant:"ghost",size:"small",onClick:()=>r(!1)},"Cancel"),e.createElement(n,{variant:"primary",size:"small",onClick:()=>r(!1)},"Confirm")))}};return e.createElement("div",{className:"space-y-4"},e.createElement(t,{variant:"headline"},"Modal Examples"),e.createElement("div",{className:"flex gap-2"},e.createElement(n,{size:"small",onClick:()=>{i("info"),r(!0)}},"Info Modal"),e.createElement(n,{size:"small",variant:"secondary",onClick:()=>{i("form"),r(!0)}},"Form Modal"),e.createElement(n,{size:"small",variant:"destructive",onClick:()=>{i("confirm"),r(!0)}},"Confirm Modal")),e.createElement(B,{open:o,onClose:()=>r(!1),title:c[s].title},c[s].content))},parameters:{docs:{description:{story:"Interactive example showing different modal types and behaviors."}}}};var q,A,R;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: "Default Modal"
  }
}`,...(R=(A=y.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,F,L;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <div>\r
        <Typography variant="headline">Custom Header</Typography>\r
        <Typography variant="body" color="secondary">\r
          This modal doesn't use the built-in title prop.\r
        </Typography>\r
      </div>
  }
}`,...(L=(F=f.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var j,W,V;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "No Close Button",
    showCloseButton: false
  }
}`,...(V=(W=v.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var H,K,_;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: "small",
    title: "Small Modal",
    children: "This is a small modal with limited content."
  }
}`,...(_=(K=g.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var P,$,G;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: "medium",
    title: "Medium Modal",
    children: "This is a medium-sized modal with moderate content."
  }
}`,...(G=($=b.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var Q,J,U;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: "large",
    title: "Large Modal",
    children: <div className="space-y-4">\r
        <Typography variant="body">This is a large modal that can contain more extensive content.</Typography>\r
        <Typography variant="body">It's perfect for forms, detailed information, or complex interactions.</Typography>\r
      </div>
  }
}`,...(U=(J=E.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: "fullscreen",
    title: "Fullscreen Modal",
    children: <div className="space-y-6">\r
        <Typography variant="body">This fullscreen modal takes up the entire viewport.</Typography>\r
        <Typography variant="body">It's ideal for mobile experiences or when you need maximum space.</Typography>\r
      </div>
  }
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: "No Backdrop Close",
    closeOnBackdrop: false,
    children: "This modal won't close when clicking the backdrop."
  }
}`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,oe;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: "No Escape Close",
    closeOnEscape: false,
    children: "This modal won't close when pressing the Escape key."
  }
}`,...(oe=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,le,ie;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: "small",
    title: "Delete Item",
    children: <div className="space-y-6">\r
        <Typography variant="body" color="secondary">\r
          Are you sure you want to delete this item? This action cannot be undone.\r
        </Typography>\r
        <div className="flex justify-end gap-3">\r
          <Button variant="ghost" size="small">\r
            Cancel\r
          </Button>\r
          <Button variant="destructive" size="small">\r
            Delete\r
          </Button>\r
        </div>\r
      </div>
  }
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,me;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    title: "Add New Contact",
    children: <div className="space-y-6">\r
        <div className="space-y-4">\r
          <Input label="First Name" placeholder="Enter first name" />\r
          <Input label="Last Name" placeholder="Enter last name" />\r
          <Input label="Email" type="email" placeholder="Enter email" />\r
          <Input label="Phone" type="tel" placeholder="Enter phone number" />\r
        </div>\r
        <div className="flex justify-end gap-3">\r
          <Button variant="ghost">Cancel</Button>\r
          <Button variant="primary">Save Contact</Button>\r
        </div>\r
      </div>
  }
}`,...(me=(de=N.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,he;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    title: "About This App",
    children: <div className="space-y-4">\r
        <Typography variant="body">\r
          This is a sample application built with our iOS-inspired component library.\r
        </Typography>\r
        <Typography variant="body">\r
          The library includes buttons, inputs, modals, and many other components that follow Apple's Human Interface\r
          Guidelines.\r
        </Typography>\r
        <div className="border-t border-separator-nonOpaque pt-4 dark:border-separator-nonOpaque-dark">\r
          <Typography variant="footnote" color="tertiary">\r
            Version 1.0.0 • Built with React and TypeScript\r
          </Typography>\r
        </div>\r
      </div>
  }
}`,...(he=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ye,fe,ve;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState<"info" | "form" | "confirm">("info");
    const modalContent = {
      info: {
        title: "Information",
        content: <Typography variant="body">This is an informational modal with some details.</Typography>
      },
      form: {
        title: "Quick Form",
        content: <div className="space-y-4">\r
            <Input label="Name" placeholder="Enter your name" />\r
            <Input label="Message" placeholder="Enter a message" />\r
          </div>
      },
      confirm: {
        title: "Confirm Action",
        content: <div className="space-y-4">\r
            <Typography variant="body" color="secondary">\r
              Are you sure you want to proceed with this action?\r
            </Typography>\r
            <div className="flex justify-end gap-2">\r
              <Button variant="ghost" size="small" onClick={() => setIsOpen(false)}>\r
                Cancel\r
              </Button>\r
              <Button variant="primary" size="small" onClick={() => setIsOpen(false)}>\r
                Confirm\r
              </Button>\r
            </div>\r
          </div>
      }
    };
    return <div className="space-y-4">\r
        <Typography variant="headline">Modal Examples</Typography>\r
\r
        <div className="flex gap-2">\r
          <Button size="small" onClick={() => {
          setModalType("info");
          setIsOpen(true);
        }}>\r
            Info Modal\r
          </Button>\r
          <Button size="small" variant="secondary" onClick={() => {
          setModalType("form");
          setIsOpen(true);
        }}>\r
            Form Modal\r
          </Button>\r
          <Button size="small" variant="destructive" onClick={() => {
          setModalType("confirm");
          setIsOpen(true);
        }}>\r
            Confirm Modal\r
          </Button>\r
        </div>\r
\r
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title={modalContent[modalType].title}>\r
          {modalContent[modalType].content}\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing different modal types and behaviors."
      }
    }
  }
}`,...(ve=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};const qe=["Default","WithoutTitle","WithoutCloseButton","Small","Medium","Large","Fullscreen","NoBackdropClose","NoEscapeClose","ConfirmationDialog","FormModal","InfoModal","InteractiveExample"];export{C as ConfirmationDialog,y as Default,N as FormModal,T as Fullscreen,x as InfoModal,M as InteractiveExample,E as Large,b as Medium,w as NoBackdropClose,k as NoEscapeClose,g as Small,v as WithoutCloseButton,f as WithoutTitle,qe as __namedExportsOrder,Oe as default};
