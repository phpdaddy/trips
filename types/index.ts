export type Trip = {
    id: string | null,
    start_date: string,
    end_date: string,
    company_name: string,
    address: {
        country: string,
        zip: string,
        street: string | null,
        street_num: string | null,
        city: string | null,
    },
    covid: boolean,
    covid_test_date: string | null,
}