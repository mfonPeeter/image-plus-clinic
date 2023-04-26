import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { ReactComponent as CompanyIcon } from "../../assets/logo.svg";

const WhatsApp = () => {
  return (
    <WhatsAppWidget
      CompanyIcon={CompanyIcon}
      phoneNumber="+2348037844253"
      companyName="Imageplus"
    />
  );
};

export default WhatsApp;
