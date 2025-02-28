import{a as p,i as g,S as d}from"./assets/vendor-D_Kruy52.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function y(s,a,r){const i="https://pixabay.com/api/",e={key:"49074776-667ebd81d42a28579e0443e2e",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:r};return(await p.get(i,{params:e})).data}function h(s){const{webformatURL:a,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:m}=s;return`<li class="gallery-item">
          <a class="gallery-link" href="${r}" onclick="return false;">
            <img
              class="gallery-image"
              src="${a}"
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
                <p class="gallery-txt">${t}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Comments</h2>
                <p class="gallery-txt">${n}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Downloads</h2>
                <p class="gallery-txt">${m}</p>
              </li>
            </ul>
          </div>
        </li>`}function f(s){return s.map(h).join("")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};console.dir(l.btnNext);let c;const o={massege:null,page:null,total:null,perPage:40};u();l.form.addEventListener("submit",b);async function b(s){s.preventDefault(),l.gallery.innerHTML="",x();const a=s.target.elements.search.value.trim();o.massege=a,o.page=1;try{const r=await y(o.massege,o.page,o.perPage);if(r.hits.length===0)g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const i=f(r.hits);l.gallery.innerHTML=i,o.total=r.totalHits,c?c.refresh():c=new d(".gallery a")}}catch(r){l.gallery.innerHTML="",g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(r)}L(),w(),s.target.reset()}function x(){l.loader.classList.remove("hidden"),l.gallery.classList.add("hidden")}function L(){l.loader.classList.add("hidden"),l.gallery.classList.remove("hidden")}function F(){l.btnNext.style.display=""}function u(){l.btnNext.style.display="none"}function w(){const s=o.perPage,a=Math.ceil(o.total/s);o.page>=a?(u(),g.info("This is last page")):F()}
//# sourceMappingURL=index.js.map
