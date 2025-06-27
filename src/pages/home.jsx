
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { tints, tintsDark ,btTypes, cap } from "@/styles/globalStyle.jsx";

const styles = {
    button: tints.blue + tintsDark.white + btTypes.standard + " outline-none border-0",
}


const Home = () => {
  const { t } = useTranslation("other");
  const texts = { 
    button: cap(t("works")) + "!",
  };

  return (
    <>
      <Button className={styles.button}>{texts.button}</Button>
    </>
  );
};

export default Home;
