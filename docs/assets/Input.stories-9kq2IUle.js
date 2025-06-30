import{R as e}from"./iframe-DPTEoTx4.js";import{I as r}from"./Input-DZS3UAhn.js";import{T as D}from"./Typography-RJZoBOJc.js";import"./accessibility-Ckp-g_ze.js";import"./animations-DDGOJxN6.js";const Ke=()=>{},P=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},e.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})),M=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},e.createElement("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),e.createElement("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})),rr={title:"Components/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired input component with various styles, states, and features. Supports icons, validation, and different variants."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined","plain"],description:"Input variant"},size:{control:"select",options:["small","medium","large"],description:"Input size"},state:{control:"select",options:["default","error","success"],description:"Input state"},disabled:{control:"boolean",description:"Disable the input"},clearable:{control:"boolean",description:"Show clear button when input has value"},fullWidth:{control:"boolean",description:"Make input full width"},label:{control:"text",description:"Input label"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text"},errorText:{control:"text",description:"Error text"}},args:{onChange:Ke,placeholder:"Enter text..."}},l={args:{variant:"filled"}},c={args:{variant:"outlined"}},i={args:{variant:"plain"}},d={args:{size:"small"}},p={args:{size:"medium"}},m={args:{size:"large"}},u={args:{state:"default"}},h={args:{state:"error",errorText:"This field is required"}},g={args:{state:"success",helperText:"Looks good!"}},E={args:{disabled:!0,value:"Disabled input"}},v={args:{label:"Email Address",placeholder:"Enter your email"}},y={args:{label:"Username",placeholder:"Enter username",helperText:"Must be at least 3 characters long"}},b={args:{label:"Password",placeholder:"Enter password",state:"error",errorText:"Password must be at least 8 characters"}},w={args:{startIcon:e.createElement(P,null),placeholder:"Search..."}},f={args:{endIcon:e.createElement(M,null),placeholder:"Enter password",type:"password"}},S={args:{startIcon:e.createElement(P,null),endIcon:e.createElement(M,null),placeholder:"Search with visibility"}},I={args:{clearable:!0,value:"Clear me",placeholder:"Type something..."}},x={args:{fullWidth:!0,label:"Full Width Input"},parameters:{layout:"padded"}},T={render:()=>e.createElement("div",{className:"w-80 space-y-4"},e.createElement(r,{variant:"filled",placeholder:"Filled variant"}),e.createElement(r,{variant:"outlined",placeholder:"Outlined variant"}),e.createElement(r,{variant:"plain",placeholder:"Plain variant"})),parameters:{docs:{description:{story:"All input variants displayed together."}}}},z={render:()=>e.createElement("div",{className:"w-80 space-y-4"},e.createElement(r,{size:"small",placeholder:"Small input"}),e.createElement(r,{size:"medium",placeholder:"Medium input"}),e.createElement(r,{size:"large",placeholder:"Large input"})),parameters:{docs:{description:{story:"All input sizes displayed together."}}}},C={render:()=>e.createElement("div",{className:"w-80 space-y-6"},e.createElement(D,{variant:"headline"},"Contact Form"),e.createElement(r,{label:"First Name",placeholder:"Enter your first name",required:!0}),e.createElement(r,{label:"Last Name",placeholder:"Enter your last name",required:!0}),e.createElement(r,{label:"Email",type:"email",placeholder:"Enter your email",startIcon:e.createElement(P,null),required:!0}),e.createElement(r,{label:"Phone",type:"tel",placeholder:"Enter your phone number",helperText:"Include country code"}),e.createElement(r,{label:"Message",placeholder:"Enter your message",helperText:"Optional message"})),parameters:{docs:{description:{story:"Example contact form using various input configurations."}}}},F={render:()=>{const[s,Ye]=e.useState({username:"",email:"",password:""}),[t,_e]=e.useState({}),Ge=(n,o)=>{const a={...t};switch(n){case"username":o.length<3?a.username="Username must be at least 3 characters":delete a.username;break;case"email":/\S+@\S+\.\S+/.test(o)?delete a.email:a.email="Please enter a valid email";break;case"password":o.length<8?a.password="Password must be at least 8 characters":delete a.password;break}_e(a)},W=n=>o=>{const a=o.target.value;Ye(Je=>({...Je,[n]:a})),Ge(n,a)};return e.createElement("div",{className:"w-80 space-y-6"},e.createElement(D,{variant:"headline"},"Sign Up Form"),e.createElement(r,{label:"Username",placeholder:"Enter username",value:s.username,onChange:W("username"),state:t.username?"error":s.username.length>=3?"success":"default",errorText:t.username,clearable:!0}),e.createElement(r,{label:"Email",type:"email",placeholder:"Enter email",value:s.email,onChange:W("email"),state:t.email?"error":s.email&&!t.email?"success":"default",errorText:t.email,clearable:!0}),e.createElement(r,{label:"Password",type:"password",placeholder:"Enter password",value:s.password,onChange:W("password"),state:t.password?"error":s.password.length>=8?"success":"default",errorText:t.password,endIcon:e.createElement(M,null)}),e.createElement("div",{className:"mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark"},e.createElement(D,{variant:"subhead"},"Form Data:"),e.createElement(D,{variant:"footnote",color:"secondary"},"Valid:"," ",Object.keys(t).length===0&&Object.values(s).every(n=>n.length>0)?"Yes":"No")))},parameters:{docs:{description:{story:"Interactive form example with validation and state management."}}}};var N,k,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "filled"
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var A,O,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var U,R,j;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "plain"
  }
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var B,H,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var Y,_,G;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    state: "default"
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    state: "error",
    errorText: "This field is required"
  }
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    state: "success",
    helperText: "Looks good!"
  }
}`,...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,ce;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "Disabled input"
  }
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,pe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "Enter your email"
  }
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,he;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Must be at least 3 characters long"
  }
}`,...(he=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,Ee,ve;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password",
    state: "error",
    errorText: "Password must be at least 8 characters"
  }
}`,...(ve=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var ye,be,we;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Search..."
  }
}`,...(we=(be=w.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var fe,Se,Ie;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    endIcon: <EyeIcon />,
    placeholder: "Enter password",
    type: "password"
  }
}`,...(Ie=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var xe,Te,ze;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    startIcon: <SearchIcon />,
    endIcon: <EyeIcon />,
    placeholder: "Search with visibility"
  }
}`,...(ze=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Ce,Fe,De;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    clearable: true,
    value: "Clear me",
    placeholder: "Type something..."
  }
}`,...(De=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var We,Pe,Me;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    label: "Full Width Input"
  },
  parameters: {
    layout: "padded"
  }
}`,...(Me=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var Ne,ke,qe;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">\r
      <Input variant="filled" placeholder="Filled variant" />\r
      <Input variant="outlined" placeholder="Outlined variant" />\r
      <Input variant="plain" placeholder="Plain variant" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All input variants displayed together."
      }
    }
  }
}`,...(qe=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var Ae,Oe,Le;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">\r
      <Input size="small" placeholder="Small input" />\r
      <Input size="medium" placeholder="Medium input" />\r
      <Input size="large" placeholder="Large input" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All input sizes displayed together."
      }
    }
  }
}`,...(Le=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var Ue,Re,je;C.parameters={...C.parameters,docs:{...(Ue=C.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-6">\r
      <Typography variant="headline">Contact Form</Typography>\r
\r
      <Input label="First Name" placeholder="Enter your first name" required />\r
\r
      <Input label="Last Name" placeholder="Enter your last name" required />\r
\r
      <Input label="Email" type="email" placeholder="Enter your email" startIcon={<SearchIcon />} required />\r
\r
      <Input label="Phone" type="tel" placeholder="Enter your phone number" helperText="Include country code" />\r
\r
      <Input label="Message" placeholder="Enter your message" helperText="Optional message" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example contact form using various input configurations."
      }
    }
  }
}`,...(je=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var Be,He,Ve;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      username: "",
      email: "",
      password: ""
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const validateField = (name: string, value: string) => {
      const newErrors = {
        ...errors
      };
      switch (name) {
        case "username":
          if (value.length < 3) {
            newErrors.username = "Username must be at least 3 characters";
          } else {
            delete newErrors.username;
          }
          break;
        case "email":
          if (!/\\S+@\\S+\\.\\S+/.test(value)) {
            newErrors.email = "Please enter a valid email";
          } else {
            delete newErrors.email;
          }
          break;
        case "password":
          if (value.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
          } else {
            delete newErrors.password;
          }
          break;
      }
      setErrors(newErrors);
    };
    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      validateField(name, value);
    };
    return <div className="w-80 space-y-6">\r
        <Typography variant="headline">Sign Up Form</Typography>\r
\r
        <Input label="Username" placeholder="Enter username" value={formData.username} onChange={handleChange("username")} state={errors.username ? "error" : formData.username.length >= 3 ? "success" : "default"} errorText={errors.username} clearable />\r
\r
        <Input label="Email" type="email" placeholder="Enter email" value={formData.email} onChange={handleChange("email")} state={errors.email ? "error" : formData.email && !errors.email ? "success" : "default"} errorText={errors.email} clearable />\r
\r
        <Input label="Password" type="password" placeholder="Enter password" value={formData.password} onChange={handleChange("password")} state={errors.password ? "error" : formData.password.length >= 8 ? "success" : "default"} errorText={errors.password} endIcon={<EyeIcon />} />\r
\r
        <div className="mt-6 rounded-ios bg-fill-quaternary p-4 dark:bg-fill-quaternary-dark">\r
          <Typography variant="subhead">Form Data:</Typography>\r
          <Typography variant="footnote" color="secondary">\r
            Valid:{" "}\r
            {Object.keys(errors).length === 0 && Object.values(formData).every(v => v.length > 0) ? "Yes" : "No"}\r
          </Typography>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive form example with validation and state management."
      }
    }
  }
}`,...(Ve=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Ve.source}}};const ar=["Filled","Outlined","Plain","Small","Medium","Large","Default","Error","Success","Disabled","WithLabel","WithHelperText","WithErrorText","WithStartIcon","WithEndIcon","WithBothIcons","Clearable","FullWidth","AllVariants","AllSizes","FormExample","InteractiveExample"];export{z as AllSizes,T as AllVariants,I as Clearable,u as Default,E as Disabled,h as Error,l as Filled,C as FormExample,x as FullWidth,F as InteractiveExample,m as Large,p as Medium,c as Outlined,i as Plain,d as Small,g as Success,S as WithBothIcons,f as WithEndIcon,b as WithErrorText,y as WithHelperText,v as WithLabel,w as WithStartIcon,ar as __namedExportsOrder,rr as default};
