const LANG = document.documentElement.lang;
const DAY = document.getElementById('main_text-days');
const DATE = document.getElementsByClassName('main_date')[0];
const START = '2022/02/23';
const TODAY = new Date().toJSON().slice(0,10).replace(/-/g,'/');
const DIFFMS   = new Date(TODAY) - new Date(START);

DAY.textContent = Math.round(DIFFMS / (1000 * 60 * 60 * 24));

(function showDate() {
  const now = new Date();
  const dd = now.getDate();
  const monthsEN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const monthsUA = ["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
  const mm = LANG === 'en' ? monthsEN[now.getMonth()] : monthsUA[now.getMonth()];
  const yyyy = now.getFullYear();
  DATE.textContent = `${dd < 10 ? '0' + dd : dd} ${mm} ${yyyy}`;
})()