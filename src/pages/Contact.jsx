function Contact() {
    return (<div className="h-screen w-full px-24 py-28">
        <div className="w-full h-full border border-secondary rounded-2xl flex flex-col items-center justify-center p-12">
            <h1 className="text-6xl text-primary uppercase font-lalezar leading-relaxed text-center">Contact Me</h1>
            <form className="flex flex-col space-y-6 w-full max-w-2xl">
                <input className="w-full p-4 border border-secondary rounded-xl text-2xl leading-none outline-primary" type="text" placeholder="Name" />
                <input className="w-full p-4 border border-secondary rounded-xl text-2xl leading-none outline-primary" type="text" placeholder="E-mail" />
                <textarea className="w-full p-4 border border-secondary rounded-xl text-2xl leading-none outline-primary" cols="30" rows="10" placeholder="Message"></textarea>
            </form>
        </div>
    </div>)
}

export default Contact;