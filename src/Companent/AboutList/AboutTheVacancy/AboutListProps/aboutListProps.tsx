import React from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';


type AboutListProps = {
  companyName: string;
  type: string;
  salary: string;
  description: string;
  telegramm: string;
  email: string;
};

const AboutList: React.FC<AboutListProps> = ({ companyName, type, salary, description, telegramm, email }) => {
  return (
    <>
      <Header />
      <div className="container">
            <div className="aboutVacancy">
                <div className="aboutVacancy__content">
                    <h1 className="aboutVacancy-title">
                        title
                    </h1>
                </div>

                <div className="jobs-item-field company">
                    <span className="label"
                
                    >
                    
                        Компания
                    </span>    
                    <h4>
                        {companyName}
                    </h4>
                </div>
                
                <div className="jobs-item-field company">
                    <span className="label">
                        тип
                    </span>    
                    <h4>
                        {type}
                    </h4>
                </div>

                <div className="jobs-item-field company">
                    <span className="label">
                        оклад
                    </span>    
                    <h4>
                        {salary}
                    </h4>
                </div>

                <div className="jobs-item-field company">
                    <span className="label">
                        описания
                    </span>    
                    <h4>
                        {description}
                    </h4>
                </div>

                <div className="jobs-item-field company">
                    <span className="label">
                        телеграм
                    </span>    
                    <h4>
                        {telegramm}
                    </h4>
                </div>

                <div className="jobs-item-field company">
                    <span className="label">
                        эмайл
                    </span>    
                    <h4>
                        {email}
                    </h4>
                </div>
            </div>
        </div>
      <Footer />
    </>
  );
};

export default AboutList;
