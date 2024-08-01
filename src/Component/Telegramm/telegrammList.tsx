import devkg from "../../assets/Images/devkg.jpg"

export const TelegrammList = ({
    data,
}: {
    data: any,
    
}) => {
    return(
    <>
    <section data-v-a2ede7f6 className="block devkg">
        <section data-v-a2ede7f6 className="block devkg">
            <h4 data-v-a2ede7f6 className="title">
                Наши ресурсы в Telegram                      
            </h4>
            {data && data.map((item: any, index: number) => (
            <a data-v-a2ede7f6 href="/" className="item">
                <img  className="icon icon-devkg" src={devkg}alt=""/>
                    {item.label}
            </a>
             ))}
        </section>
    </section>
    </>
    )
}