import { Link } from "react-router-dom"

export const JobList = ({
    url,
    componyName,
    companyRole,
    salary,
    type,
    // currency

}: 
{
    
    url: any,
    componyName: string,
    companyRole: string,
    salary: string,
    type: string
    // currency: string

}) => {
    return(
        <>
            <div className="jobs-list" data-v-3fc4231a>
            <Link to ={"/aboutVacancy"}>
                <div className="jobs-item content"data-v-6dc437e8data-v-0cfa5cf6>
                    <div className="jobs-item-field icon" data-v-6dc437e8>
                        <picture>
                            <img className="joblistsvg" src={url} alt="" />
                        </picture>

                        <div className="information" data-v-6dc437e8>
                            <div className="jobs-item-field company" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Компания
                                </span>    
                                    <h4>
                                        {componyName}
                                    </h4>
                            </div>

                            <div className="jobs-item-field position" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Должность
                                </span>   
                                    <h4>
                                        {companyRole}
                                    </h4>
                            </div>

                            <div className="jobs-item-field price" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Оклад
                                </span>     
                                    <h4>
                                        {salary}
                                    </h4>
                            </div>
                            <div className="jobs-item-field type" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Тип
                                </span>
                                    <h4>
                                        {type}
                                    </h4>
                            </div>
                        </div> 
                    </div>
                </div>
            </Link>
            </div>     
        </>      
    )
}