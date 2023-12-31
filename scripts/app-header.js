import { setDate, setUrlSearchParams } from '../utils/helpers.js';

function appHeaderInstall() {
  const wrapperId = document.getElementById('wrapper');
  const appHeader = document.createElement('div');
  const actionTitle = document.createElement('h2');

  appHeader.className = 'app-header';
  actionTitle.className = 'action-title';

  actionTitle.innerText = 'Виберіть дату народження';

  const dateTime = document.createElement('form');
  const startDateContainer = document.createElement('div');
  const endDateContainer = document.createElement('div');
  const startDateSign = document.createElement('span');
  const endDateSign = document.createElement('span');
  const startDateLabel = document.createElement('label');
  const endDateLabel = document.createElement('label');
  const startDate = document.createElement('input');
  const endDate = document.createElement('input');
  const startDateBtnForImg = document.createElement('button');
  const endDateBtnForImg = document.createElement('button');
  const startDateImg = document.createElement('img');
  const endDateImg = document.createElement('img');
  const button = document.createElement('button');

  /* adding class */
  dateTime.className = 'date-time';
  dateTime.id = 'date-time';

  startDateContainer.className = 'date-container';
  endDateContainer.className = 'date-container';
  startDateSign.className = 'date-sign';
  endDateSign.className = 'date-sign';
  startDateLabel.className = 'date-label';
  endDateLabel.className = 'date-label';
  startDate.className = 'date';
  endDate.className = 'date';
  startDateImg.className = 'calendar-img';
  endDateImg.className = 'calendar-img';
  startDateBtnForImg.className = 'btn-img';
  endDateBtnForImg.className = 'btn-img';
  button.className = 'button-sub';

  /* date input set-up */
  startDate.name = 'startDate';
  endDate.name = 'endDate';
  startDate.type = 'date';
  endDate.type = 'date';
  startDate.id = 'dateFrom';
  endDate.id = 'dateTo';
  startDateLabel.htmlFor = 'startDate';
  endDateLabel.htmlFor = 'endDate';

  const dateValue = setDate(new Date());
  setUrlSearchParams(startDate.name, dateValue);
  setUrlSearchParams(endDate.name, dateValue);
  startDate.value = dateValue;
  startDate.max = dateValue;
  endDate.value = dateValue;
  endDate.min = dateValue;

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'startDate') {
      const endDate = document.getElementById('dateTo');
      endDate.min = value;
    } else if (name === 'endDate') {
      const startDate = document.getElementById('dateFrom');
      startDate.max = value;
    }

    setUrlSearchParams(name, value);
  };

  startDate.addEventListener('change', changeHandler);
  endDate.addEventListener('change', changeHandler);

  /* img set-up */
  startDateImg.src = './assets/calendar.svg';
  endDateImg.src = './assets/calendar.svg';

  /* span set-up */
  startDateSign.innerText = 'Від:';
  endDateSign.innerText = 'До:';

  /* button input set-up */
  button.type = 'submit';
  button.innerText = 'Оновити';
  startDateBtnForImg.type = 'button';
  endDateBtnForImg.type = 'button';

  /* appending */
  startDateBtnForImg.appendChild(startDateImg);
  startDateLabel.appendChild(startDate);
  startDateLabel.appendChild(startDateBtnForImg);
  startDateContainer.appendChild(startDateSign);
  startDateContainer.appendChild(startDateLabel);

  endDateBtnForImg.appendChild(endDateImg);
  endDateLabel.appendChild(endDate);
  endDateLabel.appendChild(endDateBtnForImg);
  endDateContainer.appendChild(endDateSign);
  endDateContainer.appendChild(endDateLabel);

  dateTime.appendChild(startDateContainer);
  dateTime.appendChild(endDateContainer);
  dateTime.appendChild(button);

  appHeader.append(actionTitle);
  appHeader.append(dateTime);

  wrapperId.appendChild(appHeader);
}

appHeaderInstall();
