const LANG = document.documentElement.lang;
const DAY = document.getElementById('main_text-days');
const DATE = document.getElementsByClassName('main_date')[0];
//Short dates are written with an "MM/DD/YYYY" syntax
const START = '02/23/2022'; //-1 day to include 24th
let TODAY = new Date().toLocaleString('en-US', { timeZone: 'Europe/Kiev' });
TODAY = TODAY.slice(0,TODAY.indexOf(','));

const DIFFMS = new Date(TODAY) - new Date(START);

DATE.textContent = LANG === 'en' 
  ? new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(TODAY)) 
  : new Intl.DateTimeFormat('uk-UA', { dateStyle: 'full' }).format(new Date(TODAY));
DAY.textContent = Math.round(DIFFMS / (1000 * 60 * 60 * 24));
