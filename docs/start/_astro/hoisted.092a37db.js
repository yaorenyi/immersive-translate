import"./hoisted.cdc2cd3b.js";document.addEventListener("immersiveTranslateDocumentMessageTellThirdParty",n=>{const{detail:r}=n;if(r)try{const t=JSON.parse(r);if(t.type==="paragraphTranslated"){const{ok:o}=t.payload,e=document.getElementById("next"),s=e?.getAttribute("data-href");if(o&&e&&s){e.href=s,e.innerText="🎉 翻译成功！点击开始使用",e.removeAttribute("disabled"),e.classList.remove("disabled");const a=document.getElementById("skip");a&&a.remove()}}}catch(t){console.error(t)}});
