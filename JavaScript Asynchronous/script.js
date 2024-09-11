//! callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log("Recieved data: ", data);
}

fetchData(handleData);

//! Promises
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 4000);
  });
}

getData()
  .then((data) => {
    console.log("Recieved data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

//! Promise chaining
function chainingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 8000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.processed = true;
      resolve(data);
    }, 8000);
  });
}

chainingData()
  .then(processData)
  .then((data) => {
    console.log("Processed data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });


//! Async/Await
async function asyncData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = { id: 1, name: "John Doe" };
          resolve(data);
        }, 4000);
      });
}

async function main() {
    try {
        const data = await asyncData();
        console.log('Recieved data: ', data);
    }catch(error) {
        console.log('Error: ', error);
    }
}
main();


//! Sequential Execution
async function gettingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      resolve(data);
    }, 9000);
  });
}

async function processingData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.processed = true;
      resolve(data);
    }, 9000);
  });
}

async function Main() {
  try {
    const data = await gettingData();
    const processedData = await processingData(data);
    console.log("Processed data: ", processedData);
  }catch(error) {
    console.log("Error: ", error);
  }
}
Main();


//! Parallel Execution
async function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from fetchData1');
    }, 1000);
  });
}

async function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from fetchData2');
    }, 1000);
  });
}

async function mainData() {
  try {
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log(data1); // Data from fetchData1
    console.log(data2); // Data from fetchData2
  } catch (error) {
    console.error('Error:', error);
  }
}

mainData();


//! Microtasks and Macrotasks
console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');

//! Example Combining Asynchronous Concepts
function fetchData3(callback1) {
  setTimeout(() => {
    const data = { id: 1, name: 'Kaushik' };
    callback1(null, data);
  }, 1000);
}

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    fetchData3((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

async function MainData() {
  try {
    const data = await fetchDataPromise();
    console.log('Received data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

MainData(); // Received data: { id: 1, name: 'John Doe' }