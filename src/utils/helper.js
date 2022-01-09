export function getUsersUrl(page = 1, nat = '', gender = '', canExport = false, count = 12) {
    const url = `https://randomuser.me/api?exc=cell,id,login&seed=users&results=${count}&page=${page}&nat=${nat}&gender=${gender}&format=${canExport ? 'csv' : ''
        }`;
    console.log(url);
    return url;
}