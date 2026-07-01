(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
<main id="center" style="display: flex; flex-direction: column; align-items: center; width: 100%; padding-bottom: 50px;">
  
  <section class="hero-text" style="text-align: center; max-width: 800px; padding: 20px;">
    <img src="https://avatars.githubusercontent.com/u/167657885?v=4" 
         alt="Santi Sánchez (Santy28-Bv)" 
         style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid var(--accent); margin: 0 auto 20px auto; display: block;">
    
    <h1 style="margin: 10px 0;">Santiago Alameda Sánchez</h1>
    <h1 style="margin: 0; font-size: 1.5rem; color: var(--text);">(Santy28-Bv)</h1>

    <p style="font-size: 1.25rem; color: var(--accent); margin: 15px 0;">
      Tecnico Superior Universitario en Desarrollo de Software
    </p>
    <p style="max-width: 600px; margin: 0 auto; line-height: 1.6;">
      Actualmente tengo 20 años, me gusta el software y el hardware, los videojuegos y más.
    </p>
  </section>

  <section id="projects" style="width: 100%; max-width: 900px; margin-top: 40px; padding: 0 20px;">
    <h2 style="margin-bottom: 40px; text-align: center;">Repositorios Destacados</h2>
    
    <!-- Contenedor Flex para controlar mejor el espacio -->
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px;">
      
      <!-- Proyecto 1 -->
      <a href="https://github.com/Santy28-Bv/usutlax" target="_blank" class="project-card" style="width: 350px; text-decoration: none; padding: 25px; border: 1px solid var(--border); border-radius: 12px; background: var(--code-bg); transition: transform 0.2s; display: block;">
        <h3 style="margin-top: 0; color: var(--accent);">App Urbanos Tlaxcala</h3>
        <p style="color: var(--text); line-height: 1.5;">Aplicación para la gestión y seguimiento de transporte público en Tlaxcala.</p>
      </a>

      <!-- Proyecto 2 -->
      <a href="https://github.com/Santy28-Bv/Proyecto-CNC" target="_blank" class="project-card" style="width: 350px; text-decoration: none; padding: 25px; border: 1px solid var(--border); border-radius: 12px; background: var(--code-bg); transition: transform 0.2s; display: block;">
        <h3 style="margin-top: 0; color: var(--accent);">Proyecto CNC</h3>
        <p style="color: var(--text); line-height: 1.5;">Desarrollo de un sistema de control para máquina herramienta CNC.</p>
      </a>

      <!-- Proyecto 3 -->
      <a href="https://santy28-bv.github.io/DOM/" target="_blank" class="project-card" style="width: 350px; text-decoration: none; padding: 25px; border: 1px solid var(--border); border-radius: 12px; background: var(--code-bg); transition: transform 0.2s; display: block;">
        <h3 style="margin-top: 0; color: var(--accent);">Juegos y DOM</h3>
        <p style="color: var(--text); line-height: 1.5;">Demostración de manipulación interactiva del DOM mediante juegos.</p>
      </a>
      
      
      <!-- Proyecto 4 -->
      <a href="https://github.com/Santy28-Bv/Integradora-Lonas" target="_blank" class="project-card" style="width: 350px; text-decoration: none; padding: 25px; border: 1px solid var(--border); border-radius: 12px; background: var(--code-bg); transition: transform 0.2s; display: block;">
        <h3 style="margin-top: 0; color: var(--accent);">Integradora Lonas</h3>
        <p style="color: var(--text); line-height: 1.5;">Proyecto de integración para un negocio de Lonas.</p>
      </a>

            <!-- Proyecto 5 -->
      <a href="https://github.com/Santy28-Bv/Plants-vs-Zombies-Touch-ANDROID-VERSION--PSVITA-" target="_blank" class="project-card" style="width: 350px; text-decoration: none; padding: 25px; border: 1px solid var(--border); border-radius: 12px; background: var(--code-bg); transition: transform 0.2s; display: block;">
        <h4 style="margin-top: 0; color: var(--accent);">Plants vs. Zombies Touch 🌻🧟 (ANDROID VERSION -PORT PSVITA )</h4>
        <p style="color: var(--text); line-height: 1.5;">Proyecto Personal sobre un port y algo que quiero aprender</p>
      </a>
    </div>
  </section>
</main>

<section id="next-steps" style="margin-top: 20px; padding-bottom: 60px; text-align: center;">
  <div id="docs">
    <h2>Conectemos</h2>
    <p>¿Quieres ver mas acerca de mi codigo pasate por mi repositorio? :)</p>
    <ul style="list-style: none; padding: 0;">
      <li>
        <a href="https://github.com/Santy28-Bv" target="_blank" style="font-weight: bold; color: var(--accent); text-decoration: none;">
          Visita mi perfil @Santy28-Bv
        </a>
            <p>Numero: 276 112 3914</p>
            <p>Correo: santiagoalamedasanchez@gmail.com</p>

      </li>
    </ul>
  </div>
</section>
`;