// @packages
import { useTranslation  } from "react-i18next";

// @own
import { Card } from "@components/card/card";
import QRImage from "@assets/qr-code.png";

export const App = () => {
  const { t } = useTranslation();

  const CARD_PROPS = {
    title: t("title"),
    description: t("description"),
    image: QRImage
  };

  return (
    <div className="App">
      <Card
        title={CARD_PROPS.title}
        description={CARD_PROPS.description}
        image={CARD_PROPS.image}
      />
    </div>
  );
};
