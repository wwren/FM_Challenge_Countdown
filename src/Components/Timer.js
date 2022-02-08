export const timeLeft = () => {
  let date1 = new Date(2022, 1, 22);
  let date2 = new Date();

  var diff_in_time = +date1.getTime() - +date2.getTime();

  let day = Math.floor(diff_in_time / (1000 * 24 * 60 * 60));
  let hours = Math.floor((diff_in_time / (1000 * 60 * 60)) % 24);
  let min = Math.floor((diff_in_time / 1000 / 60) % 60);
  let seconds = Math.floor(diff_in_time / 1000) % 60;
  return { day, hours, min, seconds };
};
