import styles from "../styles/LeftNavbar.module.scss";
import Image from "next/image";

export default function LeftNavbar() {
    return <div className={styles.leftNavBar}>
        <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="logo" width={120} height={50}/>
        </div>
        <button className={styles.button}>
            <span>New Trip</span>

            <Image src="/newTrip.svg" alt="newTrip" width={16} height={16}/>

        </button>

        <div className={styles.sections}>
            <div className={styles.section}>
                <div className={styles.sectionImage}><Image src="/yourTrips.svg" alt="yourTrips" width={16}
                                                            height={16}/></div>
                Your trips
            </div>
            <div className={`${styles.section} ${styles.disabledSection}`}>
                <div className={styles.sectionImage}><Image src="/futureFeature.svg" alt="futureFeature"
                                                            width={16} height={16}/></div>
                Future feature
            </div>
            <div className={`${styles.section} ${styles.disabledSection}`}>
                <div className={styles.sectionImage}><Image src="/futureSection.svg" alt="futureSection"
                                                            width={16} height={16}/></div>
                Future section
            </div>
        </div>

    </div>
}