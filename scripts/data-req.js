import userCard from "./user-card.js";

export default function dataRequest(event) {
  event.preventDefault();
  const main = document.getElementById('app')
  const dataContainer = document.getElementById('data-container');
  const searchParams = new URLSearchParams(window.location.search);

  const startDateValue = searchParams.get('startDate');
  const endDateValue = searchParams.get('endDate');
  const api = `https://fakerapi.it/api/v1/persons?_quantity=6&_birthday_start=${startDateValue}&_birthday_end=${endDateValue}`;

  const personsRequest = new Promise(async (resolve, reject) => {
    const response = await fetch(api);
    const result = await response.json();
    if (result.status && result?.status !== 'OK') reject(response?.message ?? 'Wrong API usage!');
    else resolve(result.data);
  })

  let userCardsArray = [];

  personsRequest.then((data) => {
    userCardsArray = data.map((item) => {
      const username = `${item.firstname} ${item.lastname}`;
      const email = item.email;
      const tel = item.phone;
      const birthday = item.birthday;
      const sex = item.gender;
      const site = item.website;
      return userCard(username, email, tel, birthday, sex, site)
    })
    main.style.height = 'auto';
    dataContainer.append(...userCardsArray);
  }).catch((error) => console.log(error))
}
