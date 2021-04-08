// const tasks = [
//   //      Val Time    Eff
//   new Task(10, 3),//  3.3   №1  0.3
//   new Task(6, 2), //  3.0   №2  0.333
//   new Task(5, 2), //  2.5   №3  0.4
//   new Task(3, 1), //  3.0   №4  0.3333
//   new Task(2, 1)  //  2.0   №5  0.5
// ]


class Task {
  constructor(value, time) {
    this.value = value
    this.time = time
  }

  get efficiency() {
    return this.value / this.time
  }

  toString() {
    return `Value[${this.value.toFixed(2)}] Time[${this.time.toFixed(2)}] Eff[${this.efficiency.toFixed(2)}]`
  }

  static createRandomTask(maxvalue, maxtime) {
    maxvalue = maxvalue || 10
    maxtime = maxtime || 10
    return new Task(
      Math.random() * maxvalue + 1 >> 0,
      Math.random() * maxtime + 1 >> 0
    )
  }

}



const createRandomTasks = n => {
  const tasks = []
  while (n--) tasks.push(Task.createRandomTask())
  return tasks
}

const getSortedTasks = tasks => {
  return [...tasks].sort((a, b) => b.efficiency - a.efficiency)
}

const limitByTime = (tasks, time) => {
  const result = []
  tasks.forEach(task => {
    if (task.time < time) {
      time -= task.time
      result.push(task)
    }
  })
  return result
}

const calcValue = tasks => {
  let result = 0
  tasks.forEach(task => result += task.value)
  return result
}

const printTasks = tasks => {
  for (task of tasks) {
    console.log(task.toString())
  }
}





// Anton variant
const getMaxEfficiencyByTime1 = (tasks, time) => {
  const allCombinations = permut8(tasks)

  const limitedCombinations = []
  allCombinations.forEach(comb => limitedCombinations.push(limitByTime(comb, time)))

  limitedCombinations.sort((a, b) => {
    // console.log(calcValue(b), calcValue(a));
    calcValue(b) - calcValue(a)
  })

  // best combination
  return limitedCombinations[0]
}



// Andey variant
const getMaxEfficiencyByTime2 = (tasks, time) => {
  return limitByTime(getSortedTasks(tasks), time)
}









// get all combinations. found at gooooooogle
function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

function permut8(arr, prepend) {
  var i, version, el, result = [];
  prepend = prepend || [];
  if (arr.length === 1) return [arr];
  for (i = 0; i < arr.length; i++) {
    if (arr.length === 2) {
      result.push(prepend.concat([arr[i], arr[(i + 1) % 2]]));
    } else {
      version = arr.slice();
      el = version.splice(i, 1);
      result = result.concat(permut8(version, prepend.concat(el)));
    }
  }
  return result;
}



//=======================================================
//=======================================================
//=============== молимся богу-машине ===================
//=======================================================
//=======================================================

// const time = 10
// const tasks = createRandomTasks(3)

const time = 4
const tasks = [
  //      Val Time    Eff
  new Task(10, 3),//  3.3   №1  0.3
  new Task(6, 2), //  3.0   №2  0.333
  new Task(5, 2), //  2.5   №3  0.4
  new Task(3, 1), //  3.0   №4  0.3333
  new Task(2, 1)  //  2.0   №5  0.5
]



console.log('start');
printTasks(tasks)

console.log('total value');
console.log(calcValue(tasks));

const tasksAnton = getMaxEfficiencyByTime1(tasks, time)
const tasksAndrey = getMaxEfficiencyByTime2(tasks, time)



console.log(calcValue(tasksAnton))
console.log(calcValue(tasksAndrey))