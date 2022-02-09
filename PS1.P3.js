const problem3 = (str, fun) => fun(str)

const problem3a = problem3('supercalifragilisticexpialidocious', str => str.replace(/c/g, "*c").split('*'));

console.log(problem3a)


const problem3b = str => {
    return {
        originalString: str,
        modifiedString: str.replace(/a/g, "A"),
        numberReplaced: str.match(/a/g).length,
        length: str.length
    };
}

console.log(problem3b('supercalifragilisticexpialidocious'))