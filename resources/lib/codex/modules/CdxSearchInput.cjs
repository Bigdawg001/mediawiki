"use strict";const t=require("vue"),m=require("./Icon.js"),b=require("./CdxButton.cjs"),f=require("./CdxTextInput.cjs"),h=require("./useModelWrapper.cjs"),S=require("./useSplitAttributes.cjs"),y=require("./useFieldData.cjs"),C=require("./useI18nWithOverride.js"),i=require("./constants.js"),B=require("./_plugin-vue_export-helper.js"),V=i.makeStringTypeValidator(i.ValidationStatusTypes),I=t.defineComponent({name:"CdxSearchInput",components:{CdxButton:b,CdxTextInput:f},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},useButton:{type:Boolean,default:!1},buttonLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},status:{type:String,default:"default",validator:V}},emits:["update:modelValue","submit-click","input","change","focus","blur"],setup(e,{emit:n,attrs:r}){const s=h(t.toRef(e,"modelValue"),n),{computedDisabled:l}=y(t.toRef(e,"disabled")),d=t.computed(()=>({"cdx-search-input--has-end-button":!!e.buttonLabel||e.useButton})),{rootClasses:u,rootStyle:a,otherAttrs:o}=S(r,d),c=C.useI18nWithOverride(t.toRef(e,"buttonLabel"),"cdx-search-input-search-button-label","Search"),p=t.computed(()=>e.useButton||e.buttonLabel.length>0);return{wrappedModel:s,computedDisabled:l,rootClasses:u,rootStyle:a,otherAttrs:o,handleSubmit:()=>{n("submit-click",s.value)},searchIcon:m.y7,translatedSearchButtonLabel:c,useButtonOrLabel:p}},methods:{focus(){this.$refs.textInput.focus()}}}),g={class:"cdx-search-input__input-wrapper"};function x(e,n,r,s,l,d){const u=t.resolveComponent("cdx-text-input"),a=t.resolveComponent("cdx-button");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-search-input",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.createElementVNode("div",g,[t.createVNode(u,t.mergeProps({ref:"textInput",modelValue:e.wrappedModel,"onUpdate:modelValue":n[0]||(n[0]=o=>e.wrappedModel=o),class:"cdx-search-input__text-input","input-type":"search","start-icon":e.searchIcon,disabled:e.computedDisabled,status:e.status},e.otherAttrs,{onKeydown:t.withKeys(e.handleSubmit,["enter"]),onInput:n[1]||(n[1]=o=>e.$emit("input",o)),onChange:n[2]||(n[2]=o=>e.$emit("change",o)),onFocus:n[3]||(n[3]=o=>e.$emit("focus",o)),onBlur:n[4]||(n[4]=o=>e.$emit("blur",o))}),null,16,["modelValue","start-icon","disabled","status","onKeydown"]),t.renderSlot(e.$slots,"default")]),e.useButtonOrLabel?(t.openBlock(),t.createBlock(a,{key:0,class:"cdx-search-input__end-button",disabled:e.computedDisabled,onClick:e.handleSubmit},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(e.translatedSearchButtonLabel),1)]),_:1},8,["disabled","onClick"])):t.createCommentVNode("v-if",!0)],6)}const k=B._export_sfc(I,[["render",x]]);module.exports=k;
