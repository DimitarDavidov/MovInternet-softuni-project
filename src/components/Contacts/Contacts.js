import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <p className={styles.contactinfo}>Email: MovInternet@gmail.com</p>
            <p className={styles.contactinfo}>Phone: 0884124122</p>
            <p className={styles.contactinfo}>Twitter: @MovInternetOfficial</p>
        </div>
    )
}