
import "./Main.scss"
import {data} from "../../helper/data"
import {Card} from "./Card";

export const Main = () => {


  return (

    <div className="card-container">



        {
            data.map((item) => (

                <Card key={item.id} {...item}/>
            ))
        }



    </div>


  )
}
