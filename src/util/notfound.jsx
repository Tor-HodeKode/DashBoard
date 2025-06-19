
const styles = {
    notfound: "flex flex-col justify-center items-center h-screen text-center relative",
    container: "absolute top-[30%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]",
    headText: "text-red-700 text-3xl font-bold mb-3",
    standardText: "text-[#61615f] text-base font-medium",
}

const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <div className={styles.container}>
                <h1 className={styles.headText}>404 - Page Not Found</h1>
                <p className={styles.standardText}>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;