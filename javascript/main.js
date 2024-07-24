const arr = [
  {
    id: 1,
    imageDesk: 'img/afroeat.png',
    imageMob: 'img/afroeat.png',
    title: 'AfroEat eCommerce Platform',
    description: 'Afro Eat is an online restaurant app tailored to serve the diverse and vibrant African community.',
    live: 'https://www.afroeatfoods.com/',
    source: 'https://github.com/chrisafroeat/Afroeat_frontend.git',
    tech: [ 'React', 'Next','Node', 'PostgreSQL', 'Render'],
  },
  {
    id: 2,
    imageDesk: 'img/propelond.png',
    imageMob: 'img/propelond.png',
    title: 'Propelond Social Media',
    description: 'This application helps to connect users around different communities to socialize together.',
    live: 'https://propelond.com',
    source: 'https://github.com/Propelond-Team/propelond-backend',
    tech: [ 'PHP Laravel',' MYSQL','Cloudinary','Heroku'],
  },
  
  // {
  //   id: 3,
  //   imageDesk: 'img/hellep.png',
  //   imageMob: 'img/hellep.png',
  //   title: 'Help The Less Privileged (HELLEP)',
  //   description: 'HELP THE LESS PRIVILEGE (HELLEP) ASSOCIATION, is a non-profit humanitarian organisation that is optimistic in targeting and assisting less privileged persons to live sustainably by improving their living standards, through empowerment and community development programs.',
  //   live: 'https://hellep.org/',
  //   source: 'https://github.com/CollinsTatang/Hellep',
  //   tech: ['HTML5/CSS', 'JavaScript', 'Bootstrap', 'PHP Laravel', 'MYSQL', 'Full Stack Developer'],
  // },
  {
    id: 3,
    imageDesk: 'img/search.png',
    imageMob: 'img/search.png',
    title: 'Real Time Search',
    description: 'Permit users to perform a search on articles in real-time.',
    live: 'https://real-time-search-e2z4.onrender.com/',
    source: 'https://github.com/CollinsTatang/Real-Time-Search.git',
    tech: ['Ruby on Rails','JavaScript','PostgreSQL', 'Render'],
  },
  
];
let htmlstring = '';
arr.forEach((item) => {
  let string = `
    <div class="work-item">
      <div class="div-wrapper">
      <img src="${item.imageMob}" alt="" height="200">
      </div>
      
      <div class="bottom-part">
          <h4>${item.title}</h4>
          <ul>`;
  let string1 = '';
  item.tech.forEach((li) => {
    string1 += `<li><a>${li}</a></li>`;
  });
  string += `${string1}
          </ul>
          <a id="${item.id}" class="btn-green">See Project</a>
      </div>
    </div>
    `;
  htmlstring += string;
  string = '';
});
const getWrapper = document.querySelector('.wrapper');
getWrapper.innerHTML = htmlstring;
const getheader = document.querySelector('header');
const getmenu = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('nav ul .closeclass');
const getli = document.querySelectorAll('nav ul .linkclass');
const getprojbtn = document.querySelectorAll('.works .work-item .btn-green');
const getpopupclose = document.querySelector('.popup .closeclass');
getmenu.addEventListener('click', () => {
  getheader.classList.toggle('active');
});
getclose.addEventListener('click', () => {
  getheader.classList.remove('active');
});
getli.forEach((item) => {
  item.addEventListener('click', () => {
    getheader.classList.remove('active');
  });
});
getprojbtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    const getId = e.currentTarget.id;
    const result = arr.find((item1) => item1.id === Number(getId));
    let popupHtml = '';
    popupHtml = `
              <picture class="image-wrapper">
                  <source media="(min-width:768px)" srcset="${result.imageDesk}" alt="">
                  <img src="${result.imageMob}" alt="" >
              </picture>
              <div class="title-and-btn">
                  <h2>${result.title}</h2>
                  <div class="btn-wrapper">
                      <a href="${result.live}" class="btn-green" target="_blank" type="submit">See live <img src="img/popup-see.svg"></a>
                      <a href="${result.source}" class="btn-green" target="_blank" type="submit">See source<img src="img/popup-GitHub.svg"></a>
                  </div>
              </div>
              <div class="works">
                  <ul>`;
    let string1 = '';
    result.tech.forEach((li) => {
      string1 += `<li><a>${li}</a></li>`;
    });
    popupHtml += `${string1}
                  </ul>
              </div>
              <p>
                  ${result.description}
              </p>
              `;
    getpopupclose.insertAdjacentHTML('afterend', popupHtml);
    document.querySelector('body').classList.add('no-scroll');
  });
});
getpopupclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('no-scroll');
  while (getpopupclose.nextElementSibling) {
    getpopupclose.nextElementSibling.remove();
  }
});
const getformbtn = document.querySelector('.form form');
const geterror = document.querySelector('.errorclass');
getformbtn.addEventListener('submit', (e) => {
  if (getformbtn.useremail.value !== getformbtn.useremail.value.toLowerCase()) {
    geterror.style.display = 'block';
    e.preventDefault();
  } else {
    if (localStorage.getItem('localdata')) {
      localStorage.removeItem('localdata');
    }
    geterror.style.display = 'none';
  }
});

const data = {};

getformbtn.addEventListener('change', () => {
  data.username = getformbtn.username.value;
  data.useremail = getformbtn.useremail.value;
  data.usermessage = getformbtn.usermessage.value;
  const stringifieddata = JSON.stringify(data);
  localStorage.setItem('localdata', stringifieddata);
});

function formload() {
  const getjson = localStorage.getItem('localdata');
  if (getjson) {
    const datafromjson = JSON.parse(getjson);
    if (datafromjson.username) {
      getformbtn.username.value = datafromjson.username;
    }
    if (datafromjson.useremail) {
      getformbtn.useremail.value = datafromjson.useremail;
    }
    if (datafromjson.usermessage) {
      getformbtn.usermessage.value = datafromjson.usermessage;
    }
  }
}
window.addEventListener('load', formload);
