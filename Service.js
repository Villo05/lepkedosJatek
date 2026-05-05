export default class Services {
    constructor() {}

    getAdat(VEGPONT, callback) {
        fetch(VEGPONT)
        .then((response) => response.json())
        .then((data) => {
            callback(data)
        })
        .catch((error) => console.log(error));
    }
}