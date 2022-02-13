const profileDataArgs = process.argv.slice(2, process.argv.lenght);

const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

