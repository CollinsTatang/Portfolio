const arr = [
  {
    id: 1,
    imageDesk: 'img/propelond.png',
    imageMob: 'img/propelond.png',
    title: 'Propelond Social Media',
    description: "This application helps to connect users around different communities to socialize together.",
    live: 'https://propelond.com',
    source: 'https://github.com/Propelond-Team/propelond-backend',
    tech: ['GitHub','Heroku', 'Cloudinary', 'Postman', 'APIs', 'PHP Laravel', ' MYSQL', 'Backend Developer'],
  },
  {
    id: 2,
    imageDesk: 'img/hellep.png',
    imageMob: 'img/hellep.png',
    title: 'Help The Less Privileged (HELLEP)',
    description: "HELP THE LESS PRIVILEGE (HELLEP) ASSOCIATION, is a non-profit humanitarian organisation that is optimistic in targeting and assisting less privileged persons to live sustainably by improving their living standards, through empowerment and community development programs.",
    live: 'https://hellep.org/',
    source: 'https://github.com/CollinsTatang/Hellep',
    tech: [ 'GitHub','cPanel-Hosting','CSS','HTML5','Bootstrap', 'JavaScript', 'PHP Laravel', 'MYSQL', 'Full Stack Developer'],
  },
  {
    id: 3,
    imageDesk: 'img/ruby_bot.png',
    imageMob: 'img/ruby_bot.png',
    title: 'Ruby Twitter Bot',
    description: "This is a Twitter Bot built with Ruby that tweets some information about the user and sends a random retweet and quote.",
    live: 'https://twitter.com/BotCollins',
    source: 'https://github.com/CollinsTatang/RubyCapstoneBot',
    tech: ['Twitter Developer Tool', 'Twitter APIs', 'Github','Ruby', 'Backend Developer'],
  },
  {
    id: 4,
    imageDesk: 'img/book.png',
    imageMob: 'img/book.png',
    title: 'Bookstore Web Application',
    description: "Bookstore websites enable users to perform CRUD on books in the store. This project is built using React and Redux connecting to an external Bookstore API",
    live: 'https://celadon-croquembouche-384ba6.netlify.app/',
    source: 'https://github.com/CollinsTatang/Bookstore-App.git',
    tech: ['React', 'Redux', 'netlify', 'Github','Frontend Developer'],
  },
  {
    id: 5,
    imageDesk: 'img/loarder.png',
    imageMob: 'img/loarder.png',
    title: 'LeaderBoard',
    description: "This app takes in user name and scores, process it with an API and displays user with the highest scores",
    live: 'https://google.com',
    source: 'https://github.com/CollinsTatang/LeaderBoard.git',
    tech: ['GitHub','HTML5', 'CSS3', 'JavaScript ES6', 'Bootstrap', 'Frontend Developer'],
  },
];
let htmlstring = '';
arr.forEach((item) => {
  let string = `
    <div class="work-item">
      <div class="div-wrapper"></div>
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
