
import { Button, tints, btTypes } from "@/components/ui/button";

const styles = {
    button: tints.blue + btTypes.standard + " outline-none border-0",
}

const DashBoard = () => {
    return (
        <>
            <Button className={styles.button}>Works</Button>
        </>
    );
}

export default DashBoard;