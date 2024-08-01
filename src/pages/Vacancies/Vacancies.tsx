import { Link } from "react-router-dom";
import "./Vacancies.css";
import useFetch from "../../hooks/useFetch";
import Header from "../../Component/Header/Header";
import { JobList } from "../../Component/JobList/jobList";
import Footer from "../../Component/Footer/Footer";

function Vacancies() {
    const{ data, isLoading } = useFetch({
      url: "http://3.38.98.134/jobs"
    })
    
    console.log("data: ", data);
    
    if(isLoading) {
      return <div>Loading...</div>
    }
    
  return (
    <>
      <Header />      
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter" data-v-6a5c720c>
                <Link to={"/addVacancy"}>
                  <button className="add-vacancies create-list green"data-v-3fc4231adata-v-6a5c720c>
                    Добавить вакансию
                  </button>
                </Link>
              </div>
                  {
                    data && data.map((item: any) => 
                      <JobList
                          url={item?.organization_icon}
                          componyName={item?.organization_name}
                          companyRole={item?.position}
                          salary ={`${item?.price_from} - ${item?.price_to} ${item?.currency
                          } ${item?.salary}`}
                          type = {`${item?.type} / ${item?.city}`}                          
                      />
                    )
                  }    
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Vacancies;
