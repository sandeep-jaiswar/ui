import{R as e}from"./iframe-DPTEoTx4.js";import{I as i}from"./Icon-eIzZENis.js";const b=e.forwardRef(({items:a,variant:n="default",orientation:r="vertical",className:l="",testId:o,...s},f)=>{const x={blue:"bg-systemBlue-500 border-systemBlue-500",green:"bg-systemGreen-500 border-systemGreen-500",orange:"bg-systemOrange-500 border-systemOrange-500",red:"bg-systemRed-500 border-systemRed-500",purple:"bg-systemPurple-500 border-systemPurple-500"};return r==="horizontal"?e.createElement("div",{ref:f,className:`flex items-center gap-4 overflow-x-auto pb-4 ${l}`,"data-testid":o,...s},a.map((t,g)=>e.createElement("div",{key:t.id,className:"flex min-w-0 items-center gap-4"},e.createElement("div",{className:"flex min-w-0 flex-col items-center gap-2"},e.createElement("div",{className:`flex h-8 w-8 items-center justify-center rounded-full border-2 ${t.completed?x[t.color||"blue"]:"border-separator-opaque bg-fill-tertiary dark:border-separator-opaque-dark dark:bg-fill-tertiary-dark"} `},t.icon?e.createElement(i,{name:t.icon,size:"small",className:t.completed?"text-white":"text-label-tertiary dark:text-label-tertiary-dark"}):t.completed?e.createElement(i,{name:"check",size:"small",className:"text-white"}):null),e.createElement("div",{className:"min-w-0 max-w-[120px] text-center"},e.createElement("h4",{className:"truncate font-medium text-label-primary text-ios-caption-1 dark:text-label-primary-dark"},t.title),e.createElement("p",{className:"text-label-tertiary text-ios-caption-2 dark:text-label-tertiary-dark"},t.timestamp))),g<a.length-1&&e.createElement("div",{className:"h-0.5 w-8 bg-separator-nonOpaque dark:bg-separator-nonOpaque-dark"})))):e.createElement("div",{ref:f,className:`space-y-0 ${l}`,"data-testid":o,...s},a.map((t,g)=>e.createElement("div",{key:t.id,className:"flex gap-4"},e.createElement("div",{className:"flex flex-col items-center"},e.createElement("div",{className:`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 ${t.completed?x[t.color||"blue"]:"border-separator-opaque bg-fill-tertiary dark:border-separator-opaque-dark dark:bg-fill-tertiary-dark"} `},t.icon?e.createElement(i,{name:t.icon,size:"small",className:t.completed?"text-white":"text-label-tertiary dark:text-label-tertiary-dark"}):t.completed?e.createElement(i,{name:"check",size:"small",className:"text-white"}):null),g<a.length-1&&e.createElement("div",{className:"mt-2 h-12 w-0.5 bg-separator-nonOpaque dark:bg-separator-nonOpaque-dark"})),e.createElement("div",{className:`flex-1 ${n==="compact"?"pb-4":"pb-8"}`},e.createElement("div",{className:"mb-1 flex items-start justify-between"},e.createElement("h4",{className:"font-medium text-label-primary text-ios-subhead dark:text-label-primary-dark"},t.title),e.createElement("span",{className:"ml-4 flex-shrink-0 text-label-tertiary text-ios-caption-1 dark:text-label-tertiary-dark"},t.timestamp)),t.description&&e.createElement("p",{className:"text-label-secondary text-ios-footnote dark:text-label-secondary-dark"},t.description)))))});b.displayName="Timeline";b.__docgenInfo={description:"iOS-inspired timeline component for chronological data",methods:[],displayName:"Timeline",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:"Timeline items"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "compact"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"compact"'}]},description:"Timeline variant",defaultValue:{value:'"default"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Timeline orientation",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const A=[{id:"1",title:"Order Placed",description:"Your order has been placed successfully",timestamp:"2:30 PM",completed:!0,color:"green"},{id:"2",title:"Processing",description:"Your order is being processed",timestamp:"3:15 PM",completed:!0,color:"blue"},{id:"3",title:"Shipped",description:"Your order has been shipped",timestamp:"4:00 PM",completed:!0,color:"orange"},{id:"4",title:"Delivered",timestamp:"Expected 6:00 PM",completed:!1,color:"purple"}],V={title:"Advanced/Timeline",component:b,parameters:{layout:"padded",docs:{description:{component:"iOS-inspired timeline component for chronological data."}}},tags:["autodocs"],args:{items:A}},c={},d={args:{variant:"compact"}},m={args:{orientation:"horizontal"}},p={args:{items:[{id:"1",title:"Created",description:"Project was created",timestamp:"9:00 AM",icon:"plus",completed:!0,color:"green"},{id:"2",title:"In Progress",description:"Development started",timestamp:"10:30 AM",icon:"settings",completed:!0,color:"blue"},{id:"3",title:"Review",description:"Code review in progress",timestamp:"2:00 PM",icon:"search",completed:!1,color:"orange"}]}},u={render:()=>{const[a,n]=e.useState(2),r=[{id:"1",title:"Account Setup",description:"Create your account"},{id:"2",title:"Profile Information",description:"Add your personal details"},{id:"3",title:"Verification",description:"Verify your email address"},{id:"4",title:"Complete",description:"You're all set!"}],l=r.map((o,s)=>({...o,timestamp:`Step ${s+1}`,completed:s<a,color:"blue"}));return e.createElement("div",{className:"max-w-md space-y-6"},e.createElement("div",{className:"flex gap-2"},e.createElement("button",{onClick:()=>n(Math.max(0,a-1)),className:"rounded bg-systemBlue-500 px-3 py-1 text-sm text-white",disabled:a===0},"Previous"),e.createElement("button",{onClick:()=>n(Math.min(r.length,a+1)),className:"rounded bg-systemBlue-500 px-3 py-1 text-sm text-white",disabled:a===r.length},"Next")),e.createElement(b,{items:l}))}};var y,v,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var k,N,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "compact"
  }
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var E,S,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  }
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,P,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "Created",
      description: "Project was created",
      timestamp: "9:00 AM",
      icon: "plus",
      completed: true,
      color: "green"
    }, {
      id: "2",
      title: "In Progress",
      description: "Development started",
      timestamp: "10:30 AM",
      icon: "settings",
      completed: true,
      color: "blue"
    }, {
      id: "3",
      title: "Review",
      description: "Code review in progress",
      timestamp: "2:00 PM",
      icon: "search",
      completed: false,
      color: "orange"
    }]
  }
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var M,q,z;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [completedSteps, setCompletedSteps] = React.useState(2);
    const steps = [{
      id: "1",
      title: "Account Setup",
      description: "Create your account"
    }, {
      id: "2",
      title: "Profile Information",
      description: "Add your personal details"
    }, {
      id: "3",
      title: "Verification",
      description: "Verify your email address"
    }, {
      id: "4",
      title: "Complete",
      description: "You're all set!"
    }];
    const timelineItems = steps.map((step, index) => ({
      ...step,
      timestamp: \`Step \${index + 1}\`,
      completed: index < completedSteps,
      color: "blue" as const
    }));
    return <div className="max-w-md space-y-6">\r
        <div className="flex gap-2">\r
          <button onClick={() => setCompletedSteps(Math.max(0, completedSteps - 1))} className="rounded bg-systemBlue-500 px-3 py-1 text-sm text-white" disabled={completedSteps === 0}>\r
            Previous\r
          </button>\r
          <button onClick={() => setCompletedSteps(Math.min(steps.length, completedSteps + 1))} className="rounded bg-systemBlue-500 px-3 py-1 text-sm text-white" disabled={completedSteps === steps.length}>\r
            Next\r
          </button>\r
        </div>\r
\r
        <Timeline items={timelineItems} />\r
      </div>;
  }
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const $=["Default","Compact","Horizontal","WithIcons","Interactive"];export{d as Compact,c as Default,m as Horizontal,u as Interactive,p as WithIcons,$ as __namedExportsOrder,V as default};
