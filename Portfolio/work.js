import apps from "./data/appdata.js";

var useImagesAsIcons = true;

const appsContainer = document.getElementById("apps");
apps.forEach((app) => {
  var actioncontent = "";
  app.actions.forEach((action) => {
    var actiondata = `
  <a href="${action.link}"target="_blank" class="actionIcon">
  ${getActionData(action)}
 </a>
  `;

    actioncontent += actiondata;
  });

  var carouselContent = "";
  app.images.forEach((image, index) => {
    var ss = `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
    <img src="${image}" alt="" id="wimg" class=${app.isLs ? "projectImageLs" : "projectImage"
      } />
</div>`;
    carouselContent += ss;
  });

  var content = `
  <div class="workblock" >
    <div class="workdetails"id=${app.isGame ? "game" : "app"}>
      <h1 id="wtitle">${app.title}</h1>
      <p id="wdescription">
      ${app.description}
      </p>
      <hr id=${app.isGame ? "game" : "app"}/>
      <p id="used">STACK USED</p>
      <p id="wstackused">${app.stack}</p>
      <div id="wicons">
    ${actioncontent}
      </div>
    </div>
    <div class="workimage">
   
    ${`
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <div class="carousel-inner">
        ${carouselContent}
         
        </div>
      </div>

      `}
    </div>
  </div>

  `;

  appsContainer.innerHTML += content;
});

function getActionData(action) {
  return useImagesAsIcons
    ? `<img src="./icons/actionIcons/${action.image}.png">`
    : `<i class="${action.icon}"></i>`;
}
//  app.isGame
//? `<img src="${app.images[0]}" alt="" id="wgameimg"/>`
//:
