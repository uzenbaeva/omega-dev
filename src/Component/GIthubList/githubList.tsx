
export const GithubList = ({
    data,
}: {
    data: any,
    
}) => {
    return(
    <>
        <section data-v-a2ede7f6 className="block github">
            <section data-v-a2ede7f6 className="block devkg">
                <h4 data-v-a2ede7f6 className="title">
                      GitHub
                </h4>
                {data && data.map((item: any, index: number) => (

                    <a key={index}data-v-a2ede7f6 href={item.value} className="item">
                      <img
                        className="icon icon-devkg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7E3h_diZBMek08ynim3p2sh7ryfqU-VxOvdFEw4iwmFiky-J"alt=""
                      />
                      {item.label}
                    </a>
                ))}
            </section>
        </section>
    </>
    )
}