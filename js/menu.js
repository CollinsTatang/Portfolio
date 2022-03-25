let formData = {
  name: '',
  email: '',
  message: '',
};

const menu = document.querySelector('#sandwich');
const crossElement = document.querySelector('#bar img');
const mobileMenu = document.querySelector('#mobile-menu');
const works = document.querySelector('.works');
const popupWindow = document.querySelector('.popup-window');
let content = '';
const email = document.querySelector('input[type="email"]');
const nom = document.querySelector('input[id="name"]');
const message = document.querySelector('textarea');
const errorTag = document.querySelector('#error');
const form = document.querySelector('form');
const projets = [
  {
    key: 0,
    name: 'School Directory',
    description: 'Online school directory web application.',
    textDescription: `This project is a supposed School Directory web application use to display the school content.
    It consists of three pages and is responsive to mobile and desktop screens.`,
    featuredImage: './images/html-cap.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://collinstatang.github.io/Directory_of_Schools/',
    linkToSource: 'https://github.com/CollinsTatang/Directory_of_Schools.git',
  },
  {
    key: 1,
    name: 'Bookstore Website',
    description: 'The Bookstore is a website that allows you to display a list of books, add a book, remove a selected book.',
    textDescription: `The Bookstore is a website that allows you to display a list of books, 
    add a book, remove a selected book. 
    Categories page is coming soon`,
    featuredImage: './images/react-bookstore.png',
    technologies: ['html', 'css', 'React', 'Redux','API', 'netlify'],
    linkToLiveVersion: 'https://m0rrighan.github.io/bookstore-react-redux/',
    linkToSource: 'https://github.com/CollinsTatang/Bookstore-App.git',
  },
  {
    key: 2,
    name: 'LeaderBoard',
    description: 'This app takes in user name and scores, process it with an API and displays user with the highest scores',
    textDescription: `This app takes in user name and scores, 
  process it with an API and displays user with the highest scores`,
    featuredImage: './images/JSloarder.png',
    technologies: ['html', 'css', 'javascript', 'API'],
    linkToLiveVersion: 'https://unruffled-morse-c5ad81.netlify.app/',
    linkToSource: 'https://github.com/CollinsTatang/LeaderBoard.git',
  },
  {
    key: 3,
    name: 'Twitter Bot',
    description: 'This is a Twitter Bot built with Ruby that tweets some information about the user and sends a random retweet and quote.',
    textDescription: `This is a twitter bot, it tweet and retweet on twitter.
    I made this bot cause I use twitter a lot, so it was only logical. 
    Also the Twitter API is very well documented and made it easy to implement on the project. 
    It has been made using ruby with some classes to take the load from the main script.
    I corrected the errors using Rubocop and used RSpec to do the testing.`, 
    featuredImage: './images/ruby-bot.png',
    technologies: ['Ruby', 'twitter API'],
    linkToLiveVersion: 'https://twitter.com/BotCollins',
    linkToSource: 'https://github.com/CollinsTatang/RubyCapstoneBot.git',
  },
];
const getLink = (tab = []) => {
  if (tab.length === 0) return '';
  let link = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tab.length; i++) {
    link += `<li><a href="#" class="cat m-l-5">${tab[i]}</a></li>`;
  }
  return link;
};
const giveOrder = (index) => {
  if ((index % 2) !== 0) return 'order';
  return '';
};
const addCard = ({
  key, name, description, featuredImage, technologies,
}) => {
  const card = `
  <div class="card w-90 bg-white b-rounded ">
  <div class="card-group">
      <div class="card-img w-90 p-t-10 ">
          <img src="${featuredImage}" alt="image_card" class="block w-100" />
      </div>
      <div class="${giveOrder(key)}">
          <div class="card-title w-90">
              <h2 class="m-0 p-0">${name}</h2>
          </div>
          <div class="card-sub-title w-90">
              <b>CANOPY</b>
              <span class="counter">
                  <img src="./images/Counter.png" alt="counter">
                  Front End Dev
              </span>
              <span class="counter">
                  <img src="./images/Counter.png" alt="counter">
                  2021
              </span>
          </div>
          <div class="card-content w-90">
              ${description}
          </div>
          <div class="card-link w-90 ">
              <ul class="card-link-group">
              ${getLink(technologies)}
              </ul>
          </div>
          <div class="card-sup w-90">
              <a class="underline-none popup-click" href="#">
                  See Project
              </a>
          </div>
      </div>
  </div>
</div>
  `;
  return card;
};
const addProjects = () => {
  projets.forEach((projet) => {
    content += addCard(projet);
  });
  works.innerHTML = content;
};
const displayMenu = () => {
  menu.addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.add('show');
  });
};
const hideMenu = () => {
  crossElement.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
};
const menuItemsClicked = () => {
  const anchors = document.querySelectorAll('.options li a');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
    });
  });
};

const handleForDesktop = () => {
  if (window.innerWidth > 800) return 'class="grid col-2-d"';
  return '';
};

const alertPopup = (
  {
    name, featuredImage, technologies,
    textDescription, linkToSource, linkToLiveVersion,
  },
) => {
  const popup = `
  <div class="popup-width bg-white h-90 m-auto b-rounded p-4 overflow-scroll">
  <div class="grid col-2">
      <div>
          <h3 class="popup-title text-blue-custom text-bold p-0 m-0">${name}</h3>
      </div>
      <div class="text-right center grid end">
          <img src="./images/close1.png" alt="image_cross" class="popup-close"  width="30px"/>
      </div>
  </div>
  <div>
      <div class="card-sub-title w-90">
          <b>CANOPY</b>
          <span class="counter">
              <img src="./images/Counter.png" alt="counter">
              Back End Dev
          </span>
          <span class="counter">
              <img src="./images/Counter.png" alt="counter">
              2015
          </span>
      </div>
  </div>
  <div class="popup-image w-100 align-left-center">
      <img src="${featuredImage}" alt="image_popup" class="d-block w-100 m-auto"/>
  </div>
  <div ${handleForDesktop()}>
    <div>
        <div class="overflow-scroll m-0 p-0">
            <p class="text-blue-text">
              ${textDescription}
            </p>
        </div>
    </div>
    <div class="m-0">
        <div class="card-link w-90 ">
            <ul class="card-link-group">
                ${getLink(technologies)}
            </ul>
        </div>
        <div class="card-sup m-0 w-100 grid col-2">
            <a class="underline-none w-80 p-8 align-center" href="${linkToLiveVersion}">
              See live<img src="./images/see-live.svg" alt="img_see_live" class="m-l-5" />
            </a>
            <a class="underline-none w-80 p-8 align-center" href="${linkToSource}">
              See Source<img src="./images/github.svg" alt="img_see_live" class="m-l-5"/>
            </a>
        </div>
    </div>
  </div>
</div>
  `;
  popupWindow.innerHTML = popup;
  popupWindow.classList.remove('hidden');
};

const removePopup = () => {
  popupWindow.innerHTML = '';
  popupWindow.classList.add('hidden');
};
const displayPopup = () => {
  const clickedProjets = document.querySelectorAll('.popup-click');
  clickedProjets.forEach((cardButton, key) => {
    cardButton.addEventListener('click', (e) => {
      alertPopup(projets[key]);
      document.querySelector('.popup-close').addEventListener('click', removePopup);
      e.preventDefault();
    });
  });
};

const showMessage = (tagElement, targetElement) => {
  tagElement.textContent = '';
  tagElement.textContent = targetElement.validationMessage;
  errorTag.appendChild(tagElement);
};
const validation = () => {
  const span = document.createElement('span');
  span.classList.add('text-red');
  span.classList.add('m-l-5');
  span.classList.add('text-small');
  span.classList.add('text-bold');
  span.classList.add('bg-white');
  email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
      showMessage(span, email);
    }
    if (email.validity.valid) {
      formData.email = email.value;
      localStorage.setItem('formData', JSON.stringify(formData));
      span.textContent = '';
    }
  });
  email.addEventListener('focus', () => {
    if (email.validity.valueMissing) {
      showMessage(span, email);
    }
    if (email.validity.valid) {
      span.textContent = '';
    }
  });
  form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
      showMessage(span, email);
      e.preventDefault();
    } else {
      form.submit();
    }
  });
};
const loadData = () => {
  if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    email.value = formData.email;
    nom.value = formData.name;
    message.value = formData.message;
  }
};
const saveData = () => {
  nom.addEventListener('input', () => {
    formData.name = nom.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });

  message.addEventListener('input', () => {
    formData.message = message.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
};

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 5 && window.innerWidth >= 805) {
    document.querySelector('header').classList.add('ombre');
  } else document.querySelector('header').classList.remove('ombre');
});
loadData();
addProjects();
hideMenu();
displayMenu();
menuItemsClicked();
displayPopup();
validation();
saveData();