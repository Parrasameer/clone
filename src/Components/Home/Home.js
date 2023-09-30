import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.main}>
                <div className={styles.text}> CLONES OF SOME POPULAR SITES</div>
                <div className={styles.clones}>
                    <a href="/playstation">  <div className={styles.playstation}>
                        <div className={styles.playstationText}> PlayStation5  </div>
                        <div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOHqw6eGybTgC1_j5uGFK_R1ifL_O2oem6w&usqp=CAU" /></div></div></a>
                    <a href="/twitter">  <div className={styles.playstation}>
                        <div className={styles.playstationText}> Twitter </div>
                        <div> <img src="https://pbs.twimg.com/media/F0VmDs-WwAAzHJ0?format=jpg&name=4096x4096" /></div></div></a>
                    <a href="/bookmyshow">  <div className={styles.playstation}>
                        <div className={styles.playstationText}> BookMyShow  </div>
                        <div> <img src="https://thealgoristsblob.blob.core.windows.net/thealgoristsimages/bookmyshow-image.jpeg" /></div></div></a>

                </div>
            </div>
        </div>
    )
}


export default Home