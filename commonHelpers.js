import{S as d,i as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="16437496-6d56e114a2cb1088922bcb1d6",f="https://pixabay.com/api/";function m(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21});return fetch(`${f}?${o}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})}function h(s,o){const t=s.hits.map(e=>`
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
      </li>`).join("");o.insertAdjacentHTML("beforeend",t),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const c=document.querySelector(".form"),y=document.querySelector(".input"),l=document.querySelector(".gallery"),n=document.querySelector(".loader");function g(s){s.preventDefault(),l.innerHTML="",n.classList.remove("visually-hidden");const o=y.value.trim();if(o===""){n.classList.add("visually-hidden");return}m(o).then(t=>{n.classList.add("visually-hidden"),t.hits.length===0?u.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"}):(n.classList.add("visually-hidden"),h(t,l))}).catch(t=>{console.error(t)}),c.reset()}c.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
