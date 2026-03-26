


export default function ContactInfo(){

    const titleStyle = "font-medium text-[24px] leading-[100%] tracking-[0%] text-[#000000] text-center mt-[17.53%] md:mt-[25.63%] mb-[3.29%] md:mb-[4.80%]";
    const subStyle = "text-[13px] md:text-[16px] leading-[100%] tracking-[0%] text-[#000000] text-center"

    return(
        <section data-theme="dark" className="w-full bg-white px-[5.81%] md:px-[8.23%] py-[25.93%] md:py-[6.53%]">

            <div className="w-full flex flex-col md:flex-row px-0 md:px-[4.48%] md:mb-[2.99%]">

                <div className="flex flex-col justify-center items-center px-0 md:px-[4.38%] py-[6.58%] md:py-[2.19%] flex-grow">


                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 36H12V44.162L22.202 36H32C34.206 36 36 34.206 36 32V16C36 13.794 34.206 12 32 12H8C5.794 12 4 13.794 4 16V32C4 34.206 5.794 36 8 36Z" fill="#7C3C3C"/><path d="M40 4H16C13.794 4 12 5.794 12 8H36C38.206 8 40 9.794 40 12V28C42.206 28 44 26.206 44 24V8C44 5.794 42.206 4 40 4Z" fill="#7C3C3C"/></svg>
                    <a href="www.whatsapp.com"><h3 className={titleStyle}>Chat with Us</h3>
                    <p className={subStyle}>on WhatsApp</p></a>

                </div>

                <div className="flex flex-col justify-center items-center md:px-[4.38%] md:py-[2.19%] md:border-y-0 md:border-x-[2px] mt-[20.55%] md:mt-0 md:border-[#878787] flex-grow">
                    
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.9 42C35.7333 42 31.6167 41.092 27.55 39.276C23.4833 37.46 19.7833 34.8847 16.45 31.55C13.1167 28.2153 10.542 24.5153 8.726 20.45C6.91 16.3847 6.00133 12.268 6 8.1C6 7.5 6.2 7 6.6 6.6C7 6.2 7.5 6 8.1 6H16.2C16.6667 6 17.0833 6.15867 17.45 6.476C17.8167 6.79333 18.0333 7.168 18.1 7.6L19.4 14.6C19.4667 15.1333 19.45 15.5833 19.35 15.95C19.25 16.3167 19.0667 16.6333 18.8 16.9L13.95 21.8C14.6167 23.0333 15.408 24.2247 16.324 25.374C17.24 26.5233 18.2487 27.632 19.35 28.7C20.3833 29.7333 21.4667 30.692 22.6 31.576C23.7333 32.46 24.9333 33.268 26.2 34L30.9 29.3C31.2 29 31.592 28.7753 32.076 28.626C32.56 28.4767 33.0347 28.4347 33.5 28.5L40.4 29.9C40.8667 30.0333 41.25 30.2753 41.55 30.626C41.85 30.9767 42 31.368 42 31.8V39.9C42 40.5 41.8 41 41.4 41.4C41 41.8 40.5 42 39.9 42Z" fill="#7C3C3C"/></svg>
                    <h3 className={titleStyle}>Call Us At</h3>
                    <a href="tel:+91 98765 43021"><span className={subStyle}>+91 98765 43021</span></a>

                </div>

                <div className="flex flex-col justify-center items-center md:px-[4.38%] md:py-[2.19%] mt-[20.55%] md:mt-0 flex-grow">

                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 40C6.9 40 5.95867 39.6087 5.176 38.826C4.39333 38.0433 4.00133 37.1013 4 36V12C4 10.9 4.392 9.95867 5.176 9.176C5.96 8.39333 6.90133 8.00133 8 8H40C41.1 8 42.042 8.392 42.826 9.176C43.61 9.96 44.0013 10.9013 44 12V36C44 37.1 43.6087 38.042 42.826 38.826C42.0433 39.61 41.1013 40.0013 40 40H8ZM24 26L40 16V12L24 22L8 12V16L24 26Z" fill="#7C3C3C"/></svg>
                    <h3 className={titleStyle}>Write to Us</h3>
                    <a href="mailto:hello@diadiamonds.com"><span className={subStyle}>hello@diadiamonds.com</span></a>

                </div>

            </div>

            <div className="hidden md:block">
                <p className="font-grotesk md:text-[20px] md:leading-[120%] md:tracking-[0%] text-[#000000] text-center">The toll free number is only applicable for domestic orders within India. For international customers or deliveries please reach us out through WhatsApp, Live chat or email.</p>
            </div>

        </section>
    )
}