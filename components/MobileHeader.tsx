import styles from "../styles/MobileHeader.module.scss";
import Image from "next/image";


export default function MobileHeader({label}) {
    return <div className={styles.mobileHeader}>
        <button className={styles.hamburger}>
            <Image src="/hamburger.svg" alt="hamburger" width={12} height={8}/>
        </button>
        <h1 className={styles.mobileTitle}>
            {label}

        </h1>
    </div>
}