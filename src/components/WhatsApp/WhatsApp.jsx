import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { ReactComponent as CompanyIcon } from "../../assets/logo.svg";

const WhatsApp = () => {
  return (
    <div className="relative z-40">
      <WhatsAppWidget
        CompanyIcon={CompanyIcon}
        phoneNumber="+2348037844253"
        companyName="Imageplus"
      />
    </div>
  );
};

export default WhatsApp;
