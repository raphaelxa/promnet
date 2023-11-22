function About() {
    return (<div className="container h-screen px-12 mx-auto flex justify-center items-center space-x-28">
        <div className=" max-w-sm">
            <img src="/images/profile.png" alt="" />
        </div>
        <div className="max-w-2xl">
            <h1 className="text-primary text-4xl font-lalezar leading-relaxed">About Me</h1>
            <p className="text-xl leading-relaxed">Hello! My name is Pasha Raphaela. I’m 19 years old. I graduated from Santa Maria Senior High School, and now I have entered Indonesian University of Education with a major in Computer Science Education. My hobbies are watching movies or anime, cosplaying, writing, and dancing.</p>
            
            <h1 className="text-primary text-4xl font-lalezar leading-relaxed mt-8">Educational Background</h1>
            <div>
                <table className="border-separate border-primary border-spacing-2 text-xl">
                    <tbody>
                        <tr>
                            <td className="py-2 px-3 text-center border border-primary">TK</td>
                            <td className="py-2 px-3 text-center border border-primary">TK Santa Maria Cirebon</td>
                            <td className="py-2 px-3 text-center border border-primary">2006 - 2010</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 text-center border border-primary">SD</td>
                            <td className="py-2 px-3 text-center border border-primary">SD Santa Maria Cirebon</td>
                            <td className="py-2 px-3 text-center border border-primary">2010 - 2016</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 text-center border border-primary">SMP</td>
                            <td className="py-2 px-3 text-center border border-primary">SMP Santa Maria Cirebon</td>
                            <td className="py-2 px-3 text-center border border-primary">2016 - 2019</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 text-center border border-primary">SMA</td>
                            <td className="py-2 px-3 text-center border border-primary">SMA Santa Maria Cirebon</td>
                            <td className="py-2 px-3 text-center border border-primary">2019 - 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>)
}

export default About;