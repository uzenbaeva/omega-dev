import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"


export const AboutList = ({
    componyName,
    type,
    salary,
    description,
    telegramm,
    email,

}: 
{
    
    componyName: string,
    type: string
    salary: string,
    description: string,
    telegramm: string,
    email:string,

}) => {
  
  return (
    <>
      <Header/>
        {/* <div className="container">
            <div className="aboutVacancy">
                <div className="aboutVacancy__content">
                    <h1 className="aboutVacancy-title">
                        title
                    </h1>
                </div>

                <div className="jobs-item-field company" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                        Компания
                    </span>    
                    <h4>
                        {componyName}
                    </h4>
                </div>
                
                <div className="jobs-item-field company" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                        тип
                    </span>    
                    <h4>
                        {type}
                    </h4>
                </div>

                <div className="jobs-item-field company" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                        оклад
                    </span>    
                    <h4>
                        {salary}
                    </h4>
                </div>

                <div className="jobs-item-field company" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                        описания
                    </span>    
                    <h4>
                        {description}
                    </h4>
                </div>

                <div className="jobs-item-field company" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                        телеграм
                    </span>    
                    <h4>
                        {telegramm}
                    </h4>
                </div>

                <div className="jobs-item-field company" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                        эмайл
                    </span>    
                    <h4>
                        {email}
                    </h4>
                </div>
            </div>
        </div> */}
        <Footer/>
    </>
  )
}

export default AboutList