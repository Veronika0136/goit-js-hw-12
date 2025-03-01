import{a as f,i as c,S as b}from"./assets/vendor-D_Kruy52.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(t,a,o){const i="https://pixabay.com/api/",e={key:"49074776-667ebd81d42a28579e0443e2e",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o};return(await f.get(i,{params:e})).data}function L(t){const{webformatURL:a,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:y}=t;return`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
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
                <p class="gallery-txt">${r}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Comments</h2>
                <p class="gallery-txt">${n}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Downloads</h2>
                <p class="gallery-txt">${y}</p>
              </li>
            </ul>
          </div>
        </li>`}function p(t){return t.map(L).join("")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};let d;const s={message:"",page:null,total:1,perPage:40};g();l.form.addEventListener("submit",x);async function x(t){t.preventDefault(),l.gallery.innerHTML="";const a=t.target.elements.search.value.trim();s.message=a,s.page=1;try{const o=await m(s.message,s.page,s.perPage);if(o.hits.length===0)g(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const i=p(o.hits);l.gallery.innerHTML=i,s.total=o.totalHits,h(),d=new b(".gallery a")}}catch(o){l.gallery.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}t.target.reset()}l.btnNext.addEventListener("click",async()=>{g(),w(),s.page+=1;try{const t=await m(s.message,s.page,s.perPage),a=p(t.hits);l.gallery.insertAdjacentHTML("beforeend",a),d.refresh(),u(),h(),v()}catch{c.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),u()}});function w(){l.loader.classList.remove("hidden"),l.gallery.classList.add("hidden")}function u(){l.loader.classList.add("hidden"),l.gallery.classList.remove("hidden")}function P(){l.btnNext.style.display=""}function g(){l.btnNext.style.display="none"}function h(){const t=Math.ceil(s.total/s.perPage);s.page>=t||s.total<s.perPage?(g(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):P()}function v(){const a=l.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:a*2})}
//# sourceMappingURL=index.js.map
