export const answers = {
  0: {
    cos: "w/v",
    sin: "u/v",
    tg: "w/u",
    ctg: "u/w",
  },
  1: {
    cos: "h/f",
    sin: "f/h",
    tg: "f/g",
    ctg: "g/f",
  },
  2: {
    cos: "i/l",
    sin: "k/l",
    tg: "k/i",
    ctg: "i/k",
  },
  3: {
    cos: "m/p",
    sin: "n/p",
    tg: "n/m",
    ctg: "m/n",
  },
};

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const getOptions = (trian, opt) => {
  let char_set;
  switch (trian) {
    case 0:
      char_set = ["u/v", "v/u", "w/v", "v/w", "u/w", "w/u"];
      break;
    case 1:
      char_set = ["f/h", "h/f", "g/h", "h/g", "g/f", "f/g"];
      break;
    case 2:
      char_set = ["k/l", "l/k", "k/i", "i/k", "l/i", "i/l"];
      break;
    case 3:
      char_set = ["n/p", "p/n", "p/m", "m/p", "m/n", "n/m"];
      break;
  }

  let options = [];

  let right_answer = answers[trian][opt];
  options.push(right_answer);

  while (options.length < 4) {
    let e = char_set[~~(char_set.length * Math.random())];
    if (e === right_answer || options.includes(e)) continue;

    options.push(e);
  }

  shuffleArray(options);

  return options;
};

export const getQuestions = () => {
  let questions = [];

  let opts = ["sin", "cos", "tg", "ctg"];

  while (questions.length < 10) {
    let trian = Math.floor(Math.random() * 4);
    let opt = opts[~~(opts.length * Math.random())];
    let data = {
      trian: trian,
      opt: opt,
    };

    if (questions.includes(data)) continue;
    questions.push(data);
  }

  return questions;
};

export const isCorrect = (trian, opt, select) => {
  let right_answer = answers[trian][opt];

  if (select !== right_answer) return false;
  return true;
};
