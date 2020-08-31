const serverApiUrl = 'https://pizza-serverv2.herokuapp.com';

export const endpoints = {
    getTopping: id => `${serverApiUrl}/toppings/${id}`,
    getToppings: () => `${serverApiUrl}/toppings`,
}