export type Trip = {
    start_date: string,
    end_date: string,
    company_name: string,
    address: {
        country: string,
        zip: string,
        street: string
    },
    covid: boolean
}