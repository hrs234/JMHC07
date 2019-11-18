let elevator = data => {
  let getFloorRequest = data.split(" ");
  let min_floor = 1;
  let max_floor = 100;
  let mov = 1;
  let result;

  for (let a = 0; a < getFloorRequest.length; a++) {
    if (getFloorRequest[a] == 0) {
      continue;
    }

    if (getFloorRequest[a] < min_floor) {
      mov = 0;
    } else {
      mov = 1;
    }

    if (getFloorRequest[a] > min_floor && mov == 1) {
      min_floor = getFloorRequest[a];
    } else if (getFloorRequest[a] < max_floor && mov == 0) {
      max_floor = getFloorRequest[a];
    }
  }

  if (mov === min_floor) {
    return mov;
  }
  return max_floor;

  //   return result;
};

console.log("#h1: ", elevator("0 1 0 0 0"));
console.log("#h2: ", elevator("2 5 0 0 4"));
console.log("#h3: ", elevator("0 0 0 0 0"));
