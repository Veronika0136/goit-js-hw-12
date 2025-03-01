import{a as y,i as g,S as f}from"./assets/vendor-D_Kruy52.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(t,s,o){const i="https://pixabay.com/api/",e={key:"49074776-667ebd81d42a28579e0443e2e",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:o};return(await y.get(i,{params:e})).data}function b(t){const{webformatURL:s,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:h}=t;return`<li class="gallery-item">
          <a class="gallery-link" href="${o}" onclick="return false;">
            <img
              class="gallery-image"
              src="${s}"
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
                <p class="gallery-txt">${r}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Comments</h2>
                <p class="gallery-txt">${n}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Downloads</h2>
                <p class="gallery-txt">${h}</p>
              </li>
            </ul>
          </div>
        </li>`}function d(t){return t.map(b).join("")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};let c;const a={message:null,page:null,total:null,perPage:40};u();l.form.addEventListener("submit",L);async function L(t){t.preventDefault(),l.gallery.innerHTML="";const s=t.target.elements.search.value.trim();a.message=s,a.page=1;try{const o=await m(a.message,a.page,a.perPage);if(o.hits.length===0)g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const i=d(o.hits);l.gallery.innerHTML=i,a.total=o.totalHits,c?c.refresh():c=new f(".gallery a")}}catch(o){l.gallery.innerHTML="",g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}p(),t.target.reset()}l.btnNext.addEventListener("click",async()=>{u(),x(),a.page+=1;const t=await m(a.message,a.page,a.perPage),s=d(t.hits);l.gallery.insertAdjacentHTML("beforeend",s),c.refresh(),v(),p(),F()});function x(){l.loader.classList.remove("hidden"),l.gallery.classList.add("hidden")}function v(){l.loader.classList.add("hidden"),l.gallery.classList.remove("hidden")}function w(){l.btnNext.style.display=""}function u(){l.btnNext.style.display="none"}function p(){const t=a.perPage,s=Math.ceil(a.total/t);a.page>=s?(u(),g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):w()}function F(){const s=l.gallery.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:s*2})}
//# sourceMappingURL=index.js.map
