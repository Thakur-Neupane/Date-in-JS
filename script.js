// const today = new Date();
// const data = today.getDate();
// const data = today.getDay();
// const data = today.getFullYear();
// const data = today.getFullYear();
// const data = today.getMonth();
// const data = today.toLocaleDateString();
// const data = today.toISOString();
// today.setDate(today.getDate() + 10);
// const data = today.getTime();
// const datee = new Date(1712708536744);



// console.log(data);

const milliSecPerDay = 24 * 60 * 60 * 1000;
const checkExp = ({ name, exp }) => {
    const today = Date.now();
    const expTs = new Date(exp).getTime();
    const diffDay = Math.floor((expTs - today) / milliSecPerDay);
    if (diffDay < 1) {
        return ` ${name} is expired ${Math.abs(diffDay)} days ago`;
    } else {
        return `You have ${Math.abs(diffDay)} days to use this ${name}.`;
    }
    
};
const foods = [
    {
        name: "Tuna",
        exp: "2024-3-25",
    },
    {
        name: "Milk",
        exp: "2024-4-15",

    },
];

foods.map((food) => {
    const result = checkExp(food);
    console.log(result);

});
