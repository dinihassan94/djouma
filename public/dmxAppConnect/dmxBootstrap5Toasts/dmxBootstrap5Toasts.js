/*!
 App Connect Bootstrap 5 Toasts
 Version: 2.0.4
 (c) 2024 Wappler.io
 @build 2024-06-07 11:22:56
 */
dmx.bs5toast={defaults:{iconType:"image",position:"top",align:"right",offsetX:15,offsetY:15,minWidth:240,maxWidth:350,animation:!0,autohide:!0,closable:!0,delay:5e3,headerClass:"",bodyClass:"",color:""},container:null,setup(t){t=Object.assign(dmx.bs5toast.defaults,t),dmx.bs5toast.container||(dmx.bs5toast.container=document.createElement("div"),document.body.appendChild(dmx.bs5toast.container));const e=dmx.bs5toast.container;e.className="toast-container",e.removeAttribute("style"),e.style.setProperty("position","fixed"),e.style.setProperty(t.align,t.offsetX+"px"),e.style.setProperty(t.position,t.offsetY+"px"),t.maxWidth&&e.style.setProperty("max-width",t.maxWidth+"px")},clear(){dmx.bs5toast.container&&(dmx.bs5toast.container.textContent="")},show(t){t=Object.assign({},dmx.bs5toast.defaults,t),dmx.bs5toast.container||dmx.bs5toast.setup();const e=dmx.bs5toast.create(t);dmx.bs5toast.container.appendChild(e);const s=new bootstrap.Toast(e,t);e.addEventListener("hidden.bs.toast",(()=>dmx.bs5toast.container.removeChild(e)),{once:!0}),s.show()},showSimple(t){t=Object.assign({},dmx.bs5toast.defaults,t),dmx.bs5toast.container||dmx.bs5toast.setup();const e=dmx.bs5toast.createSimple(t);dmx.bs5toast.container.appendChild(e);const s=new bootstrap.Toast(e,t);e.addEventListener("hidden.bs.toast",(()=>dmx.bs5toast.container.removeChild(e)),{once:!0}),s.show()},create(t){const e=document.createElement("div");if(e.className="toast",e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.setAttribute("data-delay",t.delay),t.minWidth&&e.style.setProperty("min-width",t.minWidth+"px"),t.icon||t.title||t.subtitle||t.closable){const s=document.createElement("div");if(s.className="toast-header "+t.headerClass,t.icon){(t=>/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(t))(t.icon)?s.innerHTML=`<img src="${t.icon}" height="20" class="rounded me-2" alt="${t.alt||""}">`:s.innerHTML=`<i class="${t.icon} me-2"></i>`}if(t.title||t.subtitle||t.closable){const e=document.createElement("strong");e.className="me-auto",e.textContent=t.title||"",s.appendChild(e)}if(t.subtitle){const e=document.createElement("small");e.textContent=t.subtitle,s.appendChild(e)}if(t.closable){const t=document.createElement("button");t.type="button",t.className="btn-close",t.setAttribute("data-bs-dismiss","toast"),t.setAttribute("aria-label","Close"),s.appendChild(t)}e.appendChild(s)}if(t.message){const s=document.createElement("div");s.className="toast-body "+t.bodyClass,t.useHTML?s.innerHTML=t.message:s.textContent=t.message,e.appendChild(s)}return e},createSimple(t){const e=document.createElement("div");e.className="toast align-items-center",e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.setAttribute("data-delay",t.delay),t.minWidth&&e.style.setProperty("min-width",t.minWidth+"px"),t.type&&e.classList.add("border-0",`bg-${t.type}-subtle`,`text-${t.type}-emphasis`);const s=document.createElement("div");s.className="d-flex";const a=document.createElement("div");if(a.className="toast-body "+t.bodyClass,t.useHTML?a.innerHTML=t.message:a.textContent=t.message,s.appendChild(a),t.closable){const t=document.createElement("button");t.type="button",t.className="btn-close me-2 m-auto",t.setAttribute("data-bs-dismiss","toast"),t.setAttribute("aria-label","Close"),s.appendChild(t)}return e.appendChild(s),e}},dmx.Actions({"toast.setup"(t){dmx.bs5toast.setup(this.parse(t))},"toast.show"(t){dmx.bs5toast.show(this.parse(t))},"toast.showSimple"(t){dmx.bs5toast.showSimple(this.parse(t))},"toast.clear"(){dmx.bs5toast.clear()}}),dmx.Component("bs5-toasts",{attributes:{position:{type:String,default:"top",enum:["top","bottom"]},align:{type:String,default:"right",enum:["left","right"]},offsetX:{type:Number,default:15},offsetY:{type:Number,default:15},minWidth:{type:Number,default:240},maxWidth:{type:Number,default:350},zIndex:{type:Number,default:1e4},delay:{type:Number,default:5e3}},methods:{clear(){this._clear()},show(t){this._show(t)},showSimple(t){this._showSimple(t)}},init(t){dmx.bs5toast.setup(this.props)},performUpdate(t){dmx.bs5toast.setup(this.props)},_clear(){dmx.bs5toast.clear()},_show(t){dmx.bs5toast.show(t)},_showSimple(t){dmx.bs5toast.showSimple(t)}});
//# sourceMappingURL=dmxBootstrap5Toasts.js.map
