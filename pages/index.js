import '../styles/Home.module.css';
import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    let { t } = useTranslation();
  return (
    <MainLayout title={'Home Page'}>
      <div className="container">
          <h1>{t('common:greeting')}</h1>
      </div>
    </MainLayout>
  )
}
