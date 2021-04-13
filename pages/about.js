import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";

export default function About() {
    let { t } = useTranslation();
    return(
        <MainLayout title={"About Page"}>

            <div className="container">
                <h1>{t("about:title")}</h1>
            </div>
        </MainLayout>
    )
}