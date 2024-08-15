import "./Events.css"
import useFetch from "../../hooks/useFetch"
import Header from "../../Companent/Header/Header";
import { EventsList } from "../../Companent/EventsList/eventsList";
import Footer from "../../Companent/Footer/Footer";


function Events() {
  const{ data, isLoading } = useFetch({
    url: "http://3.38.98.134/events"
  })
    console.log("data: ", data);

    if(isLoading) {
        return <div>Loading...</div>
    }
  
  return (
    <>
      <Header/>
        <div id="events">
          <div className="container">
                <div className="events">
                  <div className="events__button">
                    <a href="/addEvent">
                    <button >Добавить мероприятие</button>
                    </a>
                  </div>
                
                  {
                    data && data.map((item: any) => 
                      <EventsList
                          imgUrl={item?.cover}
                          date={item?.date}
                          eventsName={item?.name}
                          organizationName ={item?.organization_name}
                          locations = {item?.location}
                      />      
                    )
                  }    
              </div>
          </div>
            <div className="btns">
              <button className="btn previous">Предыдующая страница</button>
              <button className="btn next">Cледующая страница</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Events