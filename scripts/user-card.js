export default function userCard (username, mail, phone, birthday, gender, website) {
  const userCard = document.createElement('address');
  userCard.className = 'user-info';

  const userName = document.createElement('h3');
  userName.className = 'username';
  userName.innerText = username;
  /* email */
  const emailContainer = document.createElement('div');
  const emailImg = document.createElement('img');
  const email = document.createElement('p');

  emailContainer.className = 'option-container';
  emailImg.className = 'option-img';
  email.className = 'option';

  emailImg.src = './assets/mail.svg';
  email.innerText = mail;

  emailContainer.appendChild(emailImg);
  emailContainer.appendChild(email);
  /* tel */
  const telContainer = document.createElement('div');
  const telImg = document.createElement('img');
  const tel = document.createElement('p');

  telContainer.className = 'option-container';
  telImg.className = 'option-img';
  tel.className = 'option';

  telImg.src = './assets/tel.svg';
  tel.innerText = phone;

  telContainer.appendChild(telImg);
  telContainer.appendChild(tel);
  /* birth_date */
  const birthDateContainer = document.createElement('div');
  const birthDateImg = document.createElement('img');
  const birthDate = document.createElement('p');

  birthDateContainer.className = 'option-container';
  birthDateImg.className = 'option-img';
  birthDate.className = 'option';

  birthDateImg.src = './assets/cake.svg';
  birthDate.innerText = birthday;

  birthDateContainer.appendChild(birthDateImg);
  birthDateContainer.appendChild(birthDate);
  /* sex */
  const sexContainer = document.createElement('div');
  const sexImg = document.createElement('img');
  const sex = document.createElement('p');

  sexContainer.className = 'option-container';
  sexImg.className = 'option-img';
  sex.className = 'option';

  sexImg.src = gender === 'female' ? './assets/female.svg' : './assets/male.svg'
  sex.innerText = gender;

  sexContainer.appendChild(sexImg);
  sexContainer.appendChild(sex);
  /* web-site */
  const siteContainer = document.createElement('div');
  const siteImg = document.createElement('img');
  const site = document.createElement('p');

  siteContainer.className = 'option-container';
  siteImg.className = 'option-img';
  site.className = 'option';

  siteImg.src = './assets/www.svg';
  site.innerText = website;

  siteContainer.appendChild(siteImg);
  siteContainer.appendChild(site);

  // appending all
  userCard.appendChild(userName);
  userCard.appendChild(emailContainer);
  userCard.appendChild(telContainer);
  userCard.appendChild(birthDateContainer);
  userCard.appendChild(sexContainer);
  userCard.appendChild(siteContainer);

  return userCard;
}
