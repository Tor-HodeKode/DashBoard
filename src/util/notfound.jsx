
const styles = {
    notfound: "flex justify-center items-center h-screen text-center",
    headText: "text-red-500",
    standardText: "text-gray-500",
}

const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <h1 className={styles.headText}>404 - Page Not Found</h1>
            <p className={styles.standardText}>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;