
import { Button } from "@/components/ui/button.jsx";

const styles = {
    button: "bg-[#242424] text-white px-4 py-2 rounded hover:bg-[#838383] w-auto",
}

const DashBoard = () => {
    return (
        <>
            <Button className={styles.button}>Works</Button>
        </>
    );
}

export default DashBoard;