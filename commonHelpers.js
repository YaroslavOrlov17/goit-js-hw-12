import{a as g,S as L,i as u}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const v="16437496-6d56e114a2cb1088922bcb1d6",b="https://pixabay.com/api/";async function m(o,r){const a=new URLSearchParams({key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:100,page:r});try{return(await g.get(`${b}?${a}`)).data}catch(e){console.log(e)}}const w=new L(".gallery a",{captionsData:"alt",captionDelay:250});function f(o,r){const a=o.hits.map(e=>`
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
      </li>`).join("");r.insertAdjacentHTML("beforeend",a),w.refresh()}const y=document.querySelector(".form"),S=document.querySelector(".input"),p=document.querySelector(".gallery"),i=document.querySelector(".loader"),c=document.querySelector(".btn");let l,n=1,P=100,h=0;function q(o){if(o.preventDefault(),c.classList.add("visually-hidden"),p.innerHTML="",i.classList.remove("visually-hidden"),l=S.value.trim(),l===""){i.classList.add("visually-hidden");return}n=1,m(l,n).then(r=>{h=Math.ceil(r.totalHits/P),i.classList.add("visually-hidden"),r.hits.length===0?u.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"}):(f(r,p),n<h&&c.classList.remove("visually-hidden"))}).catch(r=>{u.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Request feiled. Please try again"}),i.classList.add("visually-hidden")}),y.reset()}async function C(o){n+=1;const r=await m(l,n);f(r,p);const e=document.querySelector(".gallery li").getBoundingClientRect().height;if(window.scrollBy({top:e*2,behavior:"smooth"}),n>=h)return c.classList.add("visually-hidden"),u.error({position:"topRight",message:"We're sorry, there are no more posts to load"})}y.addEventListener("submit",q);c.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map