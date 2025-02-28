import{a as L,i as g,S as m}from"./assets/vendor-D_Kruy52.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function p(t,r,o){const i="https://pixabay.com/api/",e={key:"49074776-667ebd81d42a28579e0443e2e",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:o};return(await L.get(i,{params:e})).data}function x(t){const{webformatURL:r,largeImageURL:o,tags:i,likes:e,views:s,comments:c,downloads:b}=t;return`<li class="gallery-item">
          <a class="gallery-link" href="${o}" onclick="return false;">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
            />
          </a>
          <div class="gallery-wrapper">
            <ul class="gallery-group">
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Likes</h2>
                <p class="gallery-txt">${e}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Views</h2>
                <p class="gallery-txt">${s}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Comments</h2>
                <p class="gallery-txt">${c}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Downloads</h2>
                <p class="gallery-txt">${b}</p>
              </li>
            </ul>
          </div>
        </li>`}function d(t){return t.map(x).join("")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};let n;const a={message:null,page:null,total:null,perPage:40};u();l.form.addEventListener("submit",w);async function w(t){t.preventDefault(),l.gallery.innerHTML="",y();const r=t.target.elements.search.value.trim();a.message=r,a.page=1;try{const o=await p(a.message,a.page,a.perPage);if(o.hits.length===0)g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const i=d(o.hits);l.gallery.innerHTML=i,a.total=o.totalHits,n?n.refresh():n=new m(".gallery a")}}catch(o){l.gallery.innerHTML="",g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}h(),f(),t.target.reset()}l.btnNext.addEventListener("click",async()=>{a.page+=1,y(),u();const t=await p(a.message,a.page,a.perPage),r=d(t.hits);l.gallery.insertAdjacentHTML("beforeend",r),n?n.refresh():n=new m(".gallery a"),h(),f()});function y(){l.loader.classList.remove("hidden"),l.gallery.classList.add("hidden")}function h(){l.loader.classList.add("hidden"),l.gallery.classList.remove("hidden")}function F(){l.btnNext.style.display=""}function u(){l.btnNext.style.display="none"}function f(){const t=a.perPage,r=Math.ceil(a.total/t);a.page>=r?(u(),g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):F()}
//# sourceMappingURL=index.js.map
