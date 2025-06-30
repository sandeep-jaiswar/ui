import{R as e}from"./iframe-DPTEoTx4.js";import{A as c}from"./Avatar-Cx76YF3E.js";import{B as l}from"./Badge-B74naS4j.js";import{I as n}from"./Icon-eIzZENis.js";import{L as r,a as t}from"./List-D2cxUMrs.js";import"./accessibility-Ckp-g_ze.js";import"./animations-DDGOJxN6.js";const G={title:"Layout/List",component:r,parameters:{layout:"padded",docs:{description:{component:"iOS-inspired list components for displaying structured content."}}},tags:["autodocs"]},a={render:()=>e.createElement(r,null,e.createElement(t,null,"First item"),e.createElement(t,null,"Second item"),e.createElement(t,null,"Third item"))},s={render:()=>e.createElement(r,null,e.createElement(t,{leftContent:e.createElement(n,{name:"home",color:"system"})},"Home"),e.createElement(t,{leftContent:e.createElement(n,{name:"search",color:"system"})},"Search"),e.createElement(t,{leftContent:e.createElement(n,{name:"settings",color:"system"})},"Settings"))},i={render:()=>e.createElement(r,null,e.createElement(t,{leftContent:e.createElement(c,{initials:"JD",size:"medium"}),rightContent:e.createElement(l,{variant:"primary"},"3")},e.createElement("div",null,e.createElement("div",{className:"font-medium"},"John Doe"),e.createElement("div",{className:"text-sm text-label-secondary"},"Hey, how are you?"))),e.createElement(t,{leftContent:e.createElement(c,{initials:"JS",size:"medium",backgroundColor:"#34C759"}),rightContent:e.createElement(l,{variant:"success",dot:!0})},e.createElement("div",null,e.createElement("div",{className:"font-medium"},"Jane Smith"),e.createElement("div",{className:"text-sm text-label-secondary"},"See you tomorrow!"))))},o={render:()=>e.createElement(r,null,e.createElement(t,{onClick:()=>console.log("Notifications clicked"),leftContent:e.createElement(n,{name:"settings",color:"system"}),rightContent:e.createElement(n,{name:"chevron",color:"tertiary"})},"Notifications"),e.createElement(t,{onClick:()=>console.log("Privacy clicked"),leftContent:e.createElement(n,{name:"settings",color:"system"}),rightContent:e.createElement(n,{name:"chevron",color:"tertiary"})},"Privacy & Security"),e.createElement(t,{disabled:!0,leftContent:e.createElement(n,{name:"settings",color:"tertiary"}),rightContent:e.createElement(n,{name:"chevron",color:"tertiary"})},"Disabled Item"))},m={render:()=>e.createElement("div",{className:"space-y-6"},e.createElement("div",null,e.createElement("h3",{className:"mb-2 font-semibold"},"Grouped"),e.createElement(r,{variant:"grouped"},e.createElement(t,null,"Grouped item 1"),e.createElement(t,null,"Grouped item 2"))),e.createElement("div",null,e.createElement("h3",{className:"mb-2 font-semibold"},"Inset"),e.createElement(r,{variant:"inset"},e.createElement(t,null,"Inset item 1"),e.createElement(t,null,"Inset item 2"))),e.createElement("div",null,e.createElement("h3",{className:"mb-2 font-semibold"},"Plain"),e.createElement(r,{variant:"plain"},e.createElement(t,null,"Plain item 1"),e.createElement(t,null,"Plain item 2"))))};var d,u,I;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <List>\r
      <ListItem>First item</ListItem>\r
      <ListItem>Second item</ListItem>\r
      <ListItem>Third item</ListItem>\r
    </List>
}`,...(I=(u=a.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var v,L,p;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <List>\r
      <ListItem leftContent={<Icon name="home" color="system" />}>Home</ListItem>\r
      <ListItem leftContent={<Icon name="search" color="system" />}>Search</ListItem>\r
      <ListItem leftContent={<Icon name="settings" color="system" />}>Settings</ListItem>\r
    </List>
}`,...(p=(L=s.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};var E,h,y;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <List>\r
      <ListItem leftContent={<Avatar initials="JD" size="medium" />} rightContent={<Badge variant="primary">3</Badge>}>\r
        <div>\r
          <div className="font-medium">John Doe</div>\r
          <div className="text-sm text-label-secondary">Hey, how are you?</div>\r
        </div>\r
      </ListItem>\r
      <ListItem leftContent={<Avatar initials="JS" size="medium" backgroundColor="#34C759" />} rightContent={<Badge variant="success" dot />}>\r
        <div>\r
          <div className="font-medium">Jane Smith</div>\r
          <div className="text-sm text-label-secondary">See you tomorrow!</div>\r
        </div>\r
      </ListItem>\r
    </List>
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,f,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <List>\r
      <ListItem onClick={() => console.log("Notifications clicked")} leftContent={<Icon name="settings" color="system" />} rightContent={<Icon name="chevron" color="tertiary" />}>\r
        Notifications\r
      </ListItem>\r
      <ListItem onClick={() => console.log("Privacy clicked")} leftContent={<Icon name="settings" color="system" />} rightContent={<Icon name="chevron" color="tertiary" />}>\r
        Privacy & Security\r
      </ListItem>\r
      <ListItem disabled leftContent={<Icon name="settings" color="tertiary" />} rightContent={<Icon name="chevron" color="tertiary" />}>\r
        Disabled Item\r
      </ListItem>\r
    </List>
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,N,S;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div>\r
        <h3 className="mb-2 font-semibold">Grouped</h3>\r
        <List variant="grouped">\r
          <ListItem>Grouped item 1</ListItem>\r
          <ListItem>Grouped item 2</ListItem>\r
        </List>\r
      </div>\r
\r
      <div>\r
        <h3 className="mb-2 font-semibold">Inset</h3>\r
        <List variant="inset">\r
          <ListItem>Inset item 1</ListItem>\r
          <ListItem>Inset item 2</ListItem>\r
        </List>\r
      </div>\r
\r
      <div>\r
        <h3 className="mb-2 font-semibold">Plain</h3>\r
        <List variant="plain">\r
          <ListItem>Plain item 1</ListItem>\r
          <ListItem>Plain item 2</ListItem>\r
        </List>\r
      </div>\r
    </div>
}`,...(S=(N=m.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const w=["Basic","WithIcons","WithAvatars","Interactive","Variants"];export{a as Basic,o as Interactive,m as Variants,i as WithAvatars,s as WithIcons,w as __namedExportsOrder,G as default};
