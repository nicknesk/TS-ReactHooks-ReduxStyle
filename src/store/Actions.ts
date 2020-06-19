export const fetchDataAction = async ( url: string) => {
    const data = await fetch(url);
    const dataJSON = await data.json();
    return dataJSON;
}

export default fetchDataAction;