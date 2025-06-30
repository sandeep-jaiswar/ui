import{R as e}from"./iframe-DPTEoTx4.js";import{A as r}from"./Avatar-Cx76YF3E.js";import{T as a}from"./Typography-RJZoBOJc.js";const Le={title:"Components/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:"iOS-inspired avatar component for displaying user profile pictures with fallback options and online status indicators."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large","xlarge"],description:"Avatar size"},shape:{control:"select",options:["circle","rounded","square"],description:"Avatar shape"},src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alt text for the image"},initials:{control:"text",description:"Fallback initials when no image"},backgroundColor:{control:"color",description:"Background color for initials"},textColor:{control:"color",description:"Text color for initials"},online:{control:"boolean",description:"Show online status indicator"}},args:{alt:"User avatar"}},n={args:{src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",alt:"User profile picture"}},i={args:{initials:"JD"}},c={args:{}},l={args:{size:"small",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}},p={args:{size:"medium",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}},m={args:{size:"large",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}},d={args:{size:"xlarge",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}},g={args:{shape:"circle",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}},u={args:{shape:"rounded",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}},h={args:{shape:"square",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}},y={args:{src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",online:!0}},b={args:{initials:"AB",online:!0}},v={args:{initials:"AB",backgroundColor:"#FF6B35",textColor:"#FFFFFF"}},x={args:{initials:"SB",backgroundColor:"#34C759",textColor:"#FFFFFF"}},k={args:{src:"https://broken-url.com/image.jpg",initials:"FB",alt:"Fallback avatar"},parameters:{docs:{description:{story:"When image fails to load, shows initials as fallback."}}}},f={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement("div",{className:"text-center"},e.createElement(r,{size:"small",initials:"S"}),e.createElement(a,{variant:"caption2",className:"mt-1"},"Small")),e.createElement("div",{className:"text-center"},e.createElement(r,{size:"medium",initials:"M"}),e.createElement(a,{variant:"caption2",className:"mt-1"},"Medium")),e.createElement("div",{className:"text-center"},e.createElement(r,{size:"large",initials:"L"}),e.createElement(a,{variant:"caption2",className:"mt-1"},"Large")),e.createElement("div",{className:"text-center"},e.createElement(r,{size:"xlarge",initials:"XL"}),e.createElement(a,{variant:"caption2",className:"mt-1"},"XLarge"))),parameters:{docs:{description:{story:"All avatar sizes displayed together for comparison."}}}},S={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement("div",{className:"text-center"},e.createElement(r,{shape:"circle",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}),e.createElement(a,{variant:"caption2",className:"mt-1"},"Circle")),e.createElement("div",{className:"text-center"},e.createElement(r,{shape:"rounded",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}),e.createElement(a,{variant:"caption2",className:"mt-1"},"Rounded")),e.createElement("div",{className:"text-center"},e.createElement(r,{shape:"square",src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"}),e.createElement(a,{variant:"caption2",className:"mt-1"},"Square"))),parameters:{docs:{description:{story:"All avatar shapes displayed together for comparison."}}}},N={render:()=>e.createElement("div",{className:"max-w-sm space-y-3"},[{name:"John Doe",initials:"JD",online:!0},{name:"Jane Smith",initials:"JS",online:!1},{name:"Bob Wilson",initials:"BW",online:!0},{name:"Alice Brown",initials:"AB",online:!1}].map((s,o)=>e.createElement("div",{key:o,className:"flex items-center gap-3 rounded-ios p-2 hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"},e.createElement(r,{initials:s.initials,online:s.online,backgroundColor:`hsl(${o*90}, 60%, 50%)`}),e.createElement("div",null,e.createElement(a,{variant:"body"},s.name),e.createElement(a,{variant:"caption1",color:"secondary"},s.online?"Online":"Offline"))))),parameters:{docs:{description:{story:"Example user list with avatars and online status."}}}},E={render:()=>e.createElement("div",{className:"flex -space-x-2"},e.createElement(r,{src:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",className:"border-2 border-background-primary dark:border-background-primary-dark"}),e.createElement(r,{initials:"JS",backgroundColor:"#34C759",className:"border-2 border-background-primary dark:border-background-primary-dark"}),e.createElement(r,{initials:"BW",backgroundColor:"#FF9500",className:"border-2 border-background-primary dark:border-background-primary-dark"}),e.createElement(r,{initials:"AB",backgroundColor:"#AF52DE",className:"border-2 border-background-primary dark:border-background-primary-dark"}),e.createElement("div",{className:"flex h-10 w-10 items-center justify-center rounded-full border-2 border-background-primary bg-fill-secondary dark:border-background-primary-dark dark:bg-fill-secondary-dark"},e.createElement(a,{variant:"caption1",color:"secondary"},"+5"))),parameters:{docs:{description:{story:"Group of overlapping avatars with overflow indicator."}}}},w={render:()=>{const[s,o]=e.useState(null),A=[{name:"John Doe",initials:"JD",color:"#007AFF"},{name:"Jane Smith",initials:"JS",color:"#34C759"},{name:"Bob Wilson",initials:"BW",color:"#FF9500"}];return e.createElement("div",{className:"space-y-4"},e.createElement(a,{variant:"headline"},"Select a user:"),e.createElement("div",{className:"flex gap-4"},A.map((F,t)=>e.createElement("div",{key:t,className:`cursor-pointer rounded-ios p-2 text-center transition-colors ${s===t?"bg-systemBlue-50 dark:bg-systemBlue-900/20":"hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"}`,onClick:()=>o(t)},e.createElement(r,{initials:F.initials,backgroundColor:F.color,online:s===t,className:s===t?"ring-2 ring-systemBlue-500":""}),e.createElement(a,{variant:"caption1",className:"mt-1"},F.name)))),s!==null&&e.createElement(a,{variant:"body",color:"system"},"Selected: ",A[s].name))},parameters:{docs:{description:{story:"Interactive example showing user selection with visual feedback."}}}};var C,B,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    alt: "User profile picture"
  }
}`,...(j=(B=n.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var T,z,J;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    initials: "JD"
  }
}`,...(J=(z=i.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var W,q,U;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {}
}`,...(U=(q=c.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var L,D,I;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "small",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,R,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: "medium",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var X,G,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: "large",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
}`,...($=(G=m.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var _,H,K;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: "xlarge",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
}`,...(K=(H=d.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var P,Q,V;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    shape: "circle",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
}`,...(V=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    shape: "rounded",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    shape: "square",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,oe,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    online: true
  }
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,le;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    initials: "AB",
    online: true
  }
}`,...(le=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,me,de;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    initials: "AB",
    backgroundColor: "#FF6B35",
    textColor: "#FFFFFF"
  }
}`,...(de=(me=v.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,ue,he;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    initials: "SB",
    backgroundColor: "#34C759",
    textColor: "#FFFFFF"
  }
}`,...(he=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ye,be,ve;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    src: "https://broken-url.com/image.jpg",
    initials: "FB",
    alt: "Fallback avatar"
  },
  parameters: {
    docs: {
      description: {
        story: "When image fails to load, shows initials as fallback."
      }
    }
  }
}`,...(ve=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var xe,ke,fe;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <div className="text-center">\r
        <Avatar size="small" initials="S" />\r
        <Typography variant="caption2" className="mt-1">\r
          Small\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Avatar size="medium" initials="M" />\r
        <Typography variant="caption2" className="mt-1">\r
          Medium\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Avatar size="large" initials="L" />\r
        <Typography variant="caption2" className="mt-1">\r
          Large\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Avatar size="xlarge" initials="XL" />\r
        <Typography variant="caption2" className="mt-1">\r
          XLarge\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All avatar sizes displayed together for comparison."
      }
    }
  }
}`,...(fe=(ke=f.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var Se,Ne,Ee;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <div className="text-center">\r
        <Avatar shape="circle" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" />\r
        <Typography variant="caption2" className="mt-1">\r
          Circle\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Avatar shape="rounded" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" />\r
        <Typography variant="caption2" className="mt-1">\r
          Rounded\r
        </Typography>\r
      </div>\r
      <div className="text-center">\r
        <Avatar shape="square" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" />\r
        <Typography variant="caption2" className="mt-1">\r
          Square\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All avatar shapes displayed together for comparison."
      }
    }
  }
}`,...(Ee=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var we,Fe,Ae;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-3">\r
      {[{
      name: "John Doe",
      initials: "JD",
      online: true
    }, {
      name: "Jane Smith",
      initials: "JS",
      online: false
    }, {
      name: "Bob Wilson",
      initials: "BW",
      online: true
    }, {
      name: "Alice Brown",
      initials: "AB",
      online: false
    }].map((user, index) => <div key={index} className="flex items-center gap-3 rounded-ios p-2 hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark">\r
          <Avatar initials={user.initials} online={user.online} backgroundColor={\`hsl(\${index * 90}, 60%, 50%)\`} />\r
          <div>\r
            <Typography variant="body">{user.name}</Typography>\r
            <Typography variant="caption1" color="secondary">\r
              {user.online ? "Online" : "Offline"}\r
            </Typography>\r
          </div>\r
        </div>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example user list with avatars and online status."
      }
    }
  }
}`,...(Ae=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var Ce,Be,je;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">\r
      <Avatar src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" className="border-2 border-background-primary dark:border-background-primary-dark" />\r
      <Avatar initials="JS" backgroundColor="#34C759" className="border-2 border-background-primary dark:border-background-primary-dark" />\r
      <Avatar initials="BW" backgroundColor="#FF9500" className="border-2 border-background-primary dark:border-background-primary-dark" />\r
      <Avatar initials="AB" backgroundColor="#AF52DE" className="border-2 border-background-primary dark:border-background-primary-dark" />\r
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background-primary bg-fill-secondary dark:border-background-primary-dark dark:bg-fill-secondary-dark">\r
        <Typography variant="caption1" color="secondary">\r
          +5\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Group of overlapping avatars with overflow indicator."
      }
    }
  }
}`,...(je=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:je.source}}};var Te,ze,Je;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [selectedUser, setSelectedUser] = React.useState<number | null>(null);
    const users = [{
      name: "John Doe",
      initials: "JD",
      color: "#007AFF"
    }, {
      name: "Jane Smith",
      initials: "JS",
      color: "#34C759"
    }, {
      name: "Bob Wilson",
      initials: "BW",
      color: "#FF9500"
    }];
    return <div className="space-y-4">\r
        <Typography variant="headline">Select a user:</Typography>\r
        <div className="flex gap-4">\r
          {users.map((user, index) => <div key={index} className={\`cursor-pointer rounded-ios p-2 text-center transition-colors \${selectedUser === index ? "bg-systemBlue-50 dark:bg-systemBlue-900/20" : "hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark"}\`} onClick={() => setSelectedUser(index)}>\r
              <Avatar initials={user.initials} backgroundColor={user.color} online={selectedUser === index} className={selectedUser === index ? "ring-2 ring-systemBlue-500" : ""} />\r
              <Typography variant="caption1" className="mt-1">\r
                {user.name}\r
              </Typography>\r
            </div>)}\r
        </div>\r
        {selectedUser !== null && <Typography variant="body" color="system">\r
            Selected: {users[selectedUser].name}\r
          </Typography>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing user selection with visual feedback."
      }
    }
  }
}`,...(Je=(ze=w.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};const De=["WithImage","WithInitials","Default","Small","Medium","Large","XLarge","Circle","Rounded","Square","Online","OnlineWithInitials","CustomColors","SystemColors","BrokenImage","AllSizes","AllShapes","UserList","AvatarGroup","InteractiveExample"];export{S as AllShapes,f as AllSizes,E as AvatarGroup,k as BrokenImage,g as Circle,v as CustomColors,c as Default,w as InteractiveExample,m as Large,p as Medium,y as Online,b as OnlineWithInitials,u as Rounded,l as Small,h as Square,x as SystemColors,N as UserList,n as WithImage,i as WithInitials,d as XLarge,De as __namedExportsOrder,Le as default};
