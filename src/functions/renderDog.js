export const renderDogs = (dogName, setDogImages, setDogs) => {
    const randomDogs = Math.floor((Math.random() * 80) + 1);
    
    const onlyFiveDogs = Object.entries(dogName).slice(randomDogs, randomDogs + 5);
    
    onlyFiveDogs.map(el => {
        const getImageDog = async () => {
        const imageDog = `https://dog.ceo/api/breed/${el[0]}/images`;
        const data = await fetch(imageDog);
        const json = await data.json();
        setDogImages(currentImages => [...currentImages, json.message[0]]);
    };

    getImageDog();
    return setDogs(currentList => [...currentList, el[0]]);
})};

export const renderOneDog = (dogName, setDogImages, setDogs) => {
    const randomDogs = Math.floor((Math.random() * 80) + 1);
    const onlyOneDog = Object.entries(dogName)[randomDogs];

    const getImageDog = async () => {
        const imageDog = `https://dog.ceo/api/breed/${onlyOneDog[0]}/images`;
        const data = await fetch(imageDog);
        const json = await data.json();
        setDogImages(currentImages => [...currentImages, json.message[0]]);
        setDogs(currentList => [...currentList, json.message[0]]);
    };
    getImageDog();
};