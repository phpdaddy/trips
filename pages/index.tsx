import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Trip} from '../types'
import Link from 'next/link'
import LeftNavBar from '../components/LeftNavbar'
import MobileHeader from '../components/MobileHeader'

const token = 'eGFBGlRBZB5ics8E2WzZ';

type Props = {
    trips: Trip[]
}

export default function Home({trips}: Props) {

    const tripsList = trips.map((t, index) => <div className={styles.trip} key={index}>
        <div className={styles.tripDetails}>
            <div className={styles.countryLogo}>
                <Image src="/austria.svg" alt="austria" width={48} height={48}/>
            </div>
            <div>
                <div className={styles.firstRow}>
                    <div className={styles.country}>
                        {t.address.country}
                    </div>
                    <div className={styles.date}>
                        {t.start_date} - {t.end_date}
                    </div>
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.company}>
                        {t.company_name}
                    </div>

                    <div className={styles.address}>
                        {t.address.street}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.buttons}>
            <button className={styles.removeBtn}>
                <Image src="/remove.svg" alt="remove" width={10} height={16}/>
            </button>
            <Link href={`/trips/trip-edit/${t.id}`}>
                <button className={styles.okBtn}>
                    <Image src="/arrowRight.svg" alt="arrowRight" width={10} height={16}/>
                </button>
            </Link>
        </div>
    </div>);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <LeftNavBar/>
                <div className={styles.content}>
                    <MobileHeader label="Your trips"/>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            Your trips

                        </h1>
                    </div>
                    <div className={styles.tripsList}>
                        {tripsList}
                    </div>
                </div>
                <div className={styles.tipsAndTricks}>
                    <h1 className={styles.title}>
                        Tips & tricks
                    </h1>
                    <div className={styles.text}>
                        Fusce consectetuer risus a nunc. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec vitae arcu. Maecenas aliquet accumsan leo. Pellentesque sapien.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed convallis magna eu sem.
                        Vivamus ac leo pretium faucibus. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed,
                        est.
                        <br/><br/>
                        Nam sed tellus id magna elementum tincidunt. Etiam dui sem, fermentum vitae, sagittis id,
                        malesuada in, quam. Maecenas aliquet accumsan leo. Curabitur vitae diam non enim vestibulum
                        interdum. Nunc auctor. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in
                        neque elementum ultrices. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel
                        imperdiet sapien wisi sed libero. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
                        orci. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi
                        quis velit.
                    </div>

                </div>
            </main>

        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://task-devel.cleevio-vercel.vercel.app/api/trip', {
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
        }),
    })
    const trips = await res.json()

    return {
        props: {
            trips,
        },
    }
}