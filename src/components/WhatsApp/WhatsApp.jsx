import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
// import { ReactComponent as CompanyIcon } from "../../assets/logo.jpg";

const WhatsApp = () => {
  return (
    <WhatsAppWidget phoneNumber="+2348182041899" companyName="Imageplus" />
  );
};

export default WhatsApp;
