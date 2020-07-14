const createContent = (line = 1) => {
    const str = `Nam iaculis ultricies tristique. Phasellus eleifend elit mi, euhendrerit.`
    let arr = [];
    for (let index = 0; index <line; index++) {
        arr.push(str);
    }
    return arr;
}

export default createContent;