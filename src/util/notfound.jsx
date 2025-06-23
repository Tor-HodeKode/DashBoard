import { useNavigate } from "react-router-dom";
import { Button, tints, btTypes } from "@/components/ui/button";

const styles = {
    notfound: "flex flex-col justify-center items-center h-screen text-center relative bg-[#242424]",
    container: "absolute top-[30%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]",
    headText: "text-red-500 text-3xl font-bold mb-3",
    standardText: "text-[#c5c5c3] text-base font-medium",
    button: tints.purple + btTypes.standard + " mt-5",
}
const texts = {
    head: "404 - Page Not Found",
    details: "The page you are looking for does not exist.",
    button: "Go to Home"
}

const NotFound = ({ des }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (des) {
            navigate(`${des}`);
        }
    }
    
    return (
        <div className={styles.notfound}>
            <div className={styles.container}>
                <h1 className={styles.headText}>{texts.head}</h1>
                <p className={styles.standardText}>{texts.details}</p>
                <div>
                    <Button className={styles.button} onClick={handleClick} >{texts.button}</Button>
                </div>
            </div>
            
        </div>
    );
}

export default NotFound;