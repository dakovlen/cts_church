import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
    let { t } = useTranslation();

    return(
        <MainLayout title={"Contact Page"}>
           <div className="container">
               <h1>{t("contact:title")}</h1>
           </div>
        </MainLayout>
    )
}