import useFetch from "../../hooks/useFetch";
import "../Organizations/Organizations.css";
import { OrganizationsList } from "../../Component/OrganizationsList/organizationsList";
import Header from "../../Component/Header/Header";
import { Footer } from "antd/es/layout/layout";

function Organizations() {
    const{ data, isLoading } = useFetch({
        url: "http://3.38.98.134/organizations"
      })
      
      console.log("data: ", data);
      
      if(isLoading) {
        return <div>Loading...</div>
      }
    return (
        <>
            <Header />
            <div id="organizations">
                <div className="container">
                    {
                        data && data.map((item: any) => 
                        <OrganizationsList 
                          imgUrl={item?.icon}
                          componyName={item?.name}
                          vacancies={item?.jobs_count}
                          events={item?.events_count}
                          video={item?.meetups_count}
                          
                          />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Organizations;
