function secountsToMinutes(time){
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}`
}

const path = function(file){
  return `files/${file}`;
};

export { path, secountsToMinutes };