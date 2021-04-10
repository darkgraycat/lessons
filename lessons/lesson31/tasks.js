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

const getSortedTasks2 = (tasks, d) => {
  return [...tasks].sort((a, b) => {
    if (Math.abs(b.efficiency - a.efficiency) <= d) {
      return b.value - a.value
    }
    return b.efficiency - a.efficiency
  })
}

const getSortedTasks3 = (tasks, eff_d, val_d, time_d) => {
  return [...tasks].sort((a, b) => {
    if (Math.abs(b.efficiency - a.efficiency) <= eff_d) {
      if (Math.abs(b.value - a.value) <= val_d) {
        if (Math.abs(a.time - b.time) <= time_d) {
          return b.efficiency - a.efficiency
        }
        return a.time - b.time  // lower is better
      }
      return b.value - a.value
    }
    return b.efficiency - a.efficiency
  })
}

const getSortedTasks3b = (tasks, eff_d, val_d, time_d) => {
  return [...tasks].sort((a, b) => {
    const effDelta = b.efficiency - a.efficiency
    const valDelta = b.value - a.value
    const timeDelta = a.time - b.time
    return Math.abs(effDelta) <= eff_d ?
      Math.abs(valDelta) <= val_d ?
        Math.abs(timeDelta) <= time_d ?
          effDelta : timeDelta : valDelta : effDelta
  })
}



const limitByTime = (tasks, time) => {
  const result = []
  tasks.forEach(task => {
    if (task.time <= time) {
      time -= task.time
      result.push(task)
    }
  })
  return result
}

const calcValues = tasks => {
  let result = 0
  tasks.forEach(task => result += task.value)
  return result
}


const calcEfficiences = tasks => {
  let result = 0
  tasks.forEach(task => result += task.efficiency)
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
    return calcValues(b) - calcValues(a)
  })

  // best combination
  return limitedCombinations[0]
}



// Andey variant
const getMaxEfficiencyByTime2 = (tasks, time) => {
  return limitByTime(getSortedTasks(tasks), time)
}

// Another variant
const getMaxEfficiencyByTime3 = (tasks, time) => {
  return limitByTime(getSortedTasks2(tasks, 0.25), time)
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

const time = 12
const tasks = createRandomTasks(4)

// const time = 4
// const tasks = [
//   //      Val Time    Eff
//   new Task(10, 3),//  3.3   №1  0.3
//   new Task(6, 2), //  3.0   №2  0.333
//   new Task(5, 2), //  2.5   №3  0.4
//   new Task(3, 1), //  3.0   №4  0.3333
//   new Task(2, 1)  //  2.0   №5  0.5
// ]



// console.log('start');
printTasks(tasks)

console.log('total values:', calcValues(tasks));

const tasksAnton = getMaxEfficiencyByTime1(tasks, time)
const tasksAndrey = getMaxEfficiencyByTime2(tasks, time)
const tasksAnother = getMaxEfficiencyByTime3(tasks, time)

console.log('by Anton:', calcValues(tasksAnton))
console.log('by Andrey:', calcValues(tasksAndrey))
console.log('another:', calcValues(tasksAnother))
