// DIFFERENT SYNCHRONOUS AND ASYNCHRONOUS

// SYNCHRONOUS

// const second = () => {
//     console.log('How are you doing');
// }

// const first = () => {
//     console.log('Hey There');
//     second();
//     console.log('The end');
// }
// first();

// ASYNCHRONOUS

const second = () => {
    setTimeout (() => {
        console.log('Async Hey There');
    }, 2000)
};

const first = () => {
    console.log('Hey There');
    second();
    console.log('The End');
}
first();


