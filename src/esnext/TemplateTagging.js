const tag = (str, ...args) => {
    console.log(str, args);
}

const name = 'Gaurav';
const age = 60;
const tagged = tag`
    Hello Mr ${name}, age ${age}
`;
const staticTagged = tag`Hello Paji`;