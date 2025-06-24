
import { Button } from "@/components/ui/button";
import { tints, btTypes } from "@/styles/globalStyle.jsx";

const styles = {
    button: tints.blue + btTypes.standard + " outline-none border-0",
}

const Home = () => {
  return (
    <>
      <Button className={styles.button}>Works</Button>
    </>
  );
};

export default Home;
