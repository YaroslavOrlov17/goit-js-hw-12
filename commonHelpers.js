import{a as g,S as L,i as u}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const v="16437496-6d56e114a2cb1088922bcb1d6",b="https://pixabay.com/api/";async function h(o,t){const a=new URLSearchParams({key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});try{return(await g.get(`${b}?${a}`)).data}catch(s){console.log(s)}}function m(o,t){const a=o.hits.map(e=>`
      <li>
        <a class="gallery-link" href=${e.largeImageURL}>
          <img src="${e.webformatURL}" alt="${e.tags}">
          <div>
            <p><span>Likes</span>${e.likes}</p>
            <p><span>Views</span>${e.views}</p>
            <p><span>Comments</span>${e.comments}</p>
            <p><span>Downloads</span>${e.downloads}</p>
          </div>
        </a>
      </li>`).join("");t.insertAdjacentHTML("beforeend",a),new L(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const f=document.querySelector(".form"),w=document.querySelector(".input"),p=document.querySelector(".gallery"),i=document.querySelector(".loader"),c=document.querySelector(".btn");let l,n=1,S=15,y=0;function P(o){if(c.classList.add("visually-hidden"),o.preventDefault(),p.innerHTML="",i.classList.remove("visually-hidden"),l=w.value.trim(),l===""){i.classList.add("visually-hidden");return}n=1,h(l,n).then(t=>{y=Math.ceil(t.totalHits/S),i.classList.add("visually-hidden"),t.hits.length===0?u.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"}):(i.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),m(t,p))}).catch(t=>{u.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Request feiled. Please try again"}),i.classList.add("visually-hidden")}),f.reset()}async function q(o){if(n+=1,n>y)return c.classList.add("visually-hidden"),u.error({position:"topRight",message:"We're sorry, there are no more posts to load"});const t=await h(l,n);m(t,p);const s=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}f.addEventListener("submit",P);c.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
