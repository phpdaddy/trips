export type Trip = {
    id: string,
    start_date: string,
    end_date: string,
    company_name: string,
    address: {
        country: string,
        zip: string,
        street: string,
        street_num: string,
        city: string,
    },
    covid: boolean,
    covid_test_date: string,
}