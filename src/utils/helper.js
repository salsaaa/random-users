export function getUsersUrl(page = 1, nat = '', gender = '', canExport = false, count = 12, include = 'gender,name,nat,dob,registered,location,email,phone,picture') {
    const url = `https://randomuser.me/api?inc=${include}&seed=users&results=${count}&page=${page}&nat=${nat}&gender=${gender}&format=${canExport ? 'csv' : ''
        }`;
    return url;
}