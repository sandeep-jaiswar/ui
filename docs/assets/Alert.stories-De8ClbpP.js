import{R as e}from"./iframe-DPTEoTx4.js";import{B as u}from"./Button-Vw-cbfqZ.js";import{T as se}from"./Typography-RJZoBOJc.js";const p=e.forwardRef(({visible:o,title:s,message:l,actions:r=[],type:i="alert",onClose:a,className:c="",testId:ae,...re},f)=>{const C=e.useRef(null),k=e.useRef(null);e.useEffect(()=>{if(!o)return;const t=d=>{d.key==="Escape"&&(a==null||a())};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[o,a]),e.useEffect(()=>{if(o){document.body.style.overflow="hidden";const t=k.current||C.current;t&&t.focus()}else document.body.style.overflow="";return()=>{document.body.style.overflow=""}},[o]);const le=t=>{t.target===t.currentTarget&&(a==null||a())},E=t=>{t.onPress(),t.style==="cancel"&&(a==null||a())},oe=t=>{t.key};if(!o)return null;const m=i==="actionSheet";return e.createElement("div",{className:"fixed inset-0 z-modal flex items-center justify-center p-4",onClick:le,"data-testid":ae,role:"presentation"},e.createElement("div",{className:"animate-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm"}),e.createElement("div",{ref:t=>{C.current=t,typeof f=="function"?f(t):f&&(f.current=t)},className:`animate-scale-in relative w-full max-w-sm overflow-hidden rounded-ios-xl bg-background-primary shadow-modal focus:outline-none dark:bg-background-secondary-dark ${m?"mb-4":""} ${c} `.trim(),role:"alertdialog","aria-modal":"true","aria-labelledby":s?"alert-title":void 0,"aria-describedby":l?"alert-message":void 0,tabIndex:-1,onKeyDown:oe,...re},e.createElement("div",{className:`p-6 text-center ${m?"pb-4":""}`},s&&e.createElement("h2",{id:"alert-title",className:"mb-2 font-semibold text-label-primary text-ios-headline dark:text-label-primary-dark"},s),l&&e.createElement("p",{id:"alert-message",className:"text-label-secondary text-ios-subhead dark:text-label-secondary-dark"},l)),r.length>0&&e.createElement("div",{className:` ${m?"space-y-1 p-2":"border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark"} ${!m&&r.length===2?"flex":""} `,role:"group","aria-label":"Alert actions"},r.map((t,d)=>{const T=t.style==="destructive",x=t.style==="cancel",O=d===0;return m?e.createElement(u,{key:d,ref:O?k:void 0,variant:T?"destructive":x?"secondary":"ghost",fullWidth:!0,onClick:()=>E(t),className:"justify-center"},t.label):e.createElement("button",{key:d,ref:O?k:void 0,onClick:()=>E(t),className:`flex-1 px-4 py-3 font-medium transition-colors text-ios-body focus:outline-none focus-visible:ring-2 focus-visible:ring-systemBlue-500 focus-visible:ring-offset-2 ${T?"text-systemRed-500 dark:text-systemRed-400":x?"text-label-secondary dark:text-label-secondary-dark":"text-systemBlue-500 dark:text-systemBlue-400"} hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark ${r.length===2&&d===0?"border-r border-separator-nonOpaque dark:border-separator-nonOpaque-dark":""} ${r.length>2&&d<r.length-1?"border-b border-separator-nonOpaque dark:border-separator-nonOpaque-dark":""} `},t.label)}))))});p.displayName="Alert";p.__docgenInfo={description:`iOS-inspired alert component following Apple's alert design patterns.
Supports both modal alerts and action sheets with proper accessibility features.

Features:
- Focus management and keyboard navigation
- Screen reader support with proper ARIA attributes
- Backdrop click and escape key handling
- Smooth animations and transitions

@example
\`\`\`tsx
<Alert
  visible={showAlert}
  title="Delete Item"
  message="Are you sure you want to delete this item?"
  actions={[
    { label: "Cancel", style: "cancel", onPress: () => setShowAlert(false) },
    { label: "Delete", style: "destructive", onPress: handleDelete }
  ]}
  onClose={() => setShowAlert(false)}
/>
\`\`\``,methods:[],displayName:"Alert",props:{visible:{required:!0,tsType:{name:"boolean"},description:"Whether the alert is currently visible"},title:{required:!1,tsType:{name:"string"},description:"Alert title (optional)"},message:{required:!1,tsType:{name:"string"},description:"Alert message content"},actions:{required:!1,tsType:{name:"Array",elements:[{name:"AlertAction"}],raw:"AlertAction[]"},description:"Array of action buttons to display",defaultValue:{value:"[]",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"alert" | "actionSheet"',elements:[{name:"literal",value:'"alert"'},{name:"literal",value:'"actionSheet"'}]},description:"Alert presentation style",defaultValue:{value:'"alert"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the alert should be closed"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing"}}};const n=()=>{},me={title:"Feedback/Alert",component:p,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired alert component following Apple's alert design patterns. Supports both alert dialogs and action sheets."}}},tags:["autodocs"],argTypes:{visible:{control:"boolean",description:"Is the alert visible?"},type:{control:"select",options:["alert","actionSheet"],description:"Alert type"},title:{control:"text",description:"Alert title"},message:{control:"text",description:"Alert message"}},args:{visible:!0,onClose:n}},y={args:{title:"Alert Title",message:"This is a simple alert message.",actions:[{label:"OK",onPress:n}]}},b={args:{title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",actions:[{label:"Cancel",style:"cancel",onPress:n},{label:"Delete",style:"destructive",onPress:n}]}},h={args:{title:"Choose Action",message:"What would you like to do with this file?",actions:[{label:"View",onPress:n},{label:"Edit",onPress:n},{label:"Share",onPress:n},{label:"Delete",style:"destructive",onPress:n},{label:"Cancel",style:"cancel",onPress:n}]}},g={args:{type:"actionSheet",title:"Photo Options",message:"Choose how you want to add a photo.",actions:[{label:"Take Photo",onPress:n},{label:"Choose from Library",onPress:n},{label:"Browse Files",onPress:n},{label:"Cancel",style:"cancel",onPress:n}]}},A={args:{type:"actionSheet",title:"Account Actions",actions:[{label:"Edit Profile",onPress:n},{label:"Change Password",onPress:n},{label:"Privacy Settings",onPress:n},{label:"Delete Account",style:"destructive",onPress:n},{label:"Cancel",style:"cancel",onPress:n}]}},v={args:{type:"actionSheet",actions:[{label:"Option 1",onPress:n},{label:"Option 2",onPress:n},{label:"Option 3",onPress:n},{label:"Cancel",style:"cancel",onPress:n}]}},w={args:{message:"Your changes have been saved successfully.",actions:[{label:"OK",onPress:n}]}},P={render:()=>{const[o,s]=e.useState(!1),[l,r]=e.useState("simple"),i=c=>{r(c),s(!0)},a=()=>{switch(l){case"simple":return{title:"Success",message:"Your action was completed successfully.",actions:[{label:"OK",onPress:()=>s(!1)}]};case"confirm":return{title:"Confirm Delete",message:"Are you sure you want to delete this item? This action cannot be undone.",actions:[{label:"Cancel",style:"cancel",onPress:()=>s(!1)},{label:"Delete",style:"destructive",onPress:()=>s(!1)}]};case"actionSheet":return{type:"actionSheet",title:"Share Options",message:"Choose how you want to share this content.",actions:[{label:"Copy Link",onPress:()=>s(!1)},{label:"Share via Email",onPress:()=>s(!1)},{label:"Share on Social Media",onPress:()=>s(!1)},{label:"Cancel",style:"cancel",onPress:()=>s(!1)}]}}};return e.createElement("div",{className:"space-y-4"},e.createElement(se,{variant:"headline"},"Alert Examples"),e.createElement("div",{className:"flex gap-3"},e.createElement(u,{size:"small",onClick:()=>i("simple")},"Simple Alert"),e.createElement(u,{size:"small",variant:"destructive",onClick:()=>i("confirm")},"Confirm Alert"),e.createElement(u,{size:"small",variant:"secondary",onClick:()=>i("actionSheet")},"Action Sheet")),e.createElement(p,{visible:o,onClose:()=>s(!1),...a()}))},parameters:{docs:{description:{story:"Interactive example showing different alert types."}}}},S={render:()=>{const[o,s]=e.useState(!1),[l,r]=e.useState({email:"",password:""}),i=()=>{if(!l.email||!l.password){s(!0);return}};return e.createElement("div",{className:"max-w-sm space-y-6"},e.createElement(se,{variant:"headline"},"Login Form"),e.createElement("div",{className:"space-y-4"},e.createElement("input",{type:"email",placeholder:"Email",value:l.email,onChange:a=>r(c=>({...c,email:a.target.value})),className:"w-full rounded-ios border p-3"}),e.createElement("input",{type:"password",placeholder:"Password",value:l.password,onChange:a=>r(c=>({...c,password:a.target.value})),className:"w-full rounded-ios border p-3"}),e.createElement(u,{fullWidth:!0,onClick:i},"Sign In")),e.createElement(p,{visible:o,title:"Missing Information",message:"Please fill in all required fields before continuing.",actions:[{label:"OK",onPress:()=>s(!1)}],onClose:()=>s(!1)}))},parameters:{docs:{description:{story:"Example form validation with alert feedback."}}}};var D,N,V;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Alert Title",
    message: "This is a simple alert message.",
    actions: [{
      label: "OK",
      onPress: fn
    }]
  }
}`,...(V=(N=y.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,B,I;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: "Delete Item",
    message: "Are you sure you want to delete this item? This action cannot be undone.",
    actions: [{
      label: "Cancel",
      style: "cancel",
      onPress: fn
    }, {
      label: "Delete",
      style: "destructive",
      onPress: fn
    }]
  }
}`,...(I=(B=b.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var F,R,K;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: "Choose Action",
    message: "What would you like to do with this file?",
    actions: [{
      label: "View",
      onPress: fn
    }, {
      label: "Edit",
      onPress: fn
    }, {
      label: "Share",
      onPress: fn
    }, {
      label: "Delete",
      style: "destructive",
      onPress: fn
    }, {
      label: "Cancel",
      style: "cancel",
      onPress: fn
    }]
  }
}`,...(K=(R=h.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var L,M,$;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "actionSheet",
    title: "Photo Options",
    message: "Choose how you want to add a photo.",
    actions: [{
      label: "Take Photo",
      onPress: fn
    }, {
      label: "Choose from Library",
      onPress: fn
    }, {
      label: "Browse Files",
      onPress: fn
    }, {
      label: "Cancel",
      style: "cancel",
      onPress: fn
    }]
  }
}`,...($=(M=g.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var z,W,Y;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: "actionSheet",
    title: "Account Actions",
    actions: [{
      label: "Edit Profile",
      onPress: fn
    }, {
      label: "Change Password",
      onPress: fn
    }, {
      label: "Privacy Settings",
      onPress: fn
    }, {
      label: "Delete Account",
      style: "destructive",
      onPress: fn
    }, {
      label: "Cancel",
      style: "cancel",
      onPress: fn
    }]
  }
}`,...(Y=(W=A.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var _,j,H;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: "actionSheet",
    actions: [{
      label: "Option 1",
      onPress: fn
    }, {
      label: "Option 2",
      onPress: fn
    }, {
      label: "Option 3",
      onPress: fn
    }, {
      label: "Cancel",
      style: "cancel",
      onPress: fn
    }]
  }
}`,...(H=(j=v.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var G,J,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    message: "Your changes have been saved successfully.",
    actions: [{
      label: "OK",
      onPress: fn
    }]
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertType, setAlertType] = React.useState<"simple" | "confirm" | "actionSheet">("simple");
    const showAlert = (type: "simple" | "confirm" | "actionSheet") => {
      setAlertType(type);
      setAlertVisible(true);
    };
    const getAlertProps = () => {
      switch (alertType) {
        case "simple":
          return {
            title: "Success",
            message: "Your action was completed successfully.",
            actions: [{
              label: "OK",
              onPress: () => setAlertVisible(false)
            }]
          };
        case "confirm":
          return {
            title: "Confirm Delete",
            message: "Are you sure you want to delete this item? This action cannot be undone.",
            actions: [{
              label: "Cancel",
              style: "cancel" as const,
              onPress: () => setAlertVisible(false)
            }, {
              label: "Delete",
              style: "destructive" as const,
              onPress: () => setAlertVisible(false)
            }]
          };
        case "actionSheet":
          return {
            type: "actionSheet" as const,
            title: "Share Options",
            message: "Choose how you want to share this content.",
            actions: [{
              label: "Copy Link",
              onPress: () => setAlertVisible(false)
            }, {
              label: "Share via Email",
              onPress: () => setAlertVisible(false)
            }, {
              label: "Share on Social Media",
              onPress: () => setAlertVisible(false)
            }, {
              label: "Cancel",
              style: "cancel" as const,
              onPress: () => setAlertVisible(false)
            }]
          };
      }
    };
    return <div className="space-y-4">\r
        <Typography variant="headline">Alert Examples</Typography>\r
\r
        <div className="flex gap-3">\r
          <Button size="small" onClick={() => showAlert("simple")}>\r
            Simple Alert\r
          </Button>\r
          <Button size="small" variant="destructive" onClick={() => showAlert("confirm")}>\r
            Confirm Alert\r
          </Button>\r
          <Button size="small" variant="secondary" onClick={() => showAlert("actionSheet")}>\r
            Action Sheet\r
          </Button>\r
        </div>\r
\r
        <Alert visible={alertVisible} onClose={() => setAlertVisible(false)} {...getAlertProps()} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing different alert types."
      }
    }
  }
}`,...(Z=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [showAlert, setShowAlert] = React.useState(false);
    const [formData, setFormData] = React.useState({
      email: "",
      password: ""
    });
    const handleSubmit = () => {
      if (!formData.email || !formData.password) {
        setShowAlert(true);
        return;
      }
      // Handle successful submission
    };
    return <div className="max-w-sm space-y-6">\r
        <Typography variant="headline">Login Form</Typography>\r
\r
        <div className="space-y-4">\r
          <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData(prev => ({
          ...prev,
          email: e.target.value
        }))} className="w-full rounded-ios border p-3" />\r
          <input type="password" placeholder="Password" value={formData.password} onChange={e => setFormData(prev => ({
          ...prev,
          password: e.target.value
        }))} className="w-full rounded-ios border p-3" />\r
          <Button fullWidth onClick={handleSubmit}>\r
            Sign In\r
          </Button>\r
        </div>\r
\r
        <Alert visible={showAlert} title="Missing Information" message="Please fill in all required fields before continuing." actions={[{
        label: "OK",
        onPress: () => setShowAlert(false)
      }]} onClose={() => setShowAlert(false)} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example form validation with alert feedback."
      }
    }
  }
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const ue=["SimpleAlert","ConfirmationAlert","MultipleActions","ActionSheet","DestructiveActionSheet","ActionsOnly","MessageOnly","InteractiveAlert","FormValidationAlert"];export{g as ActionSheet,v as ActionsOnly,b as ConfirmationAlert,A as DestructiveActionSheet,S as FormValidationAlert,P as InteractiveAlert,w as MessageOnly,h as MultipleActions,y as SimpleAlert,ue as __namedExportsOrder,me as default};
