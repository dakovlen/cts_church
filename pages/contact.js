import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

export default function Contact() {
    let {t} = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setBody('')
            }
        })
    }

    return (
        <MainLayout title={"Contact Page"}>
            <div className="container">
                <h1>{t("contact:title")}</h1>
                <form>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="email"
                            name="email"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="message"
                            onChange={(e)=>{setMessage(e.target.value)}}
                        ></textarea>
                    </div>
                    <button
                        className="btn-main"
                        onClick={(e)=>{handleSubmit(e)}}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </MainLayout>
    )
}