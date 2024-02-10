import valuesData from '../../db/values.json'
import Bus from "../../assets/images/Bus.png"
import Jip from "../../assets/images/Jip.png"
import Yaxta from "../../assets/images/Yaxta.png"
import Kanon from "../../assets/images/Kanon.png"
import ValuesItem from "./ValuesItem.jsx"

function Values(props) {
    const images = [Bus, Jip, Yaxta, Kanon]

    return (
        <div className="values-wrapper">
            {
                valuesData && valuesData.map((item, index) => {
                    return (
                        <ValuesItem 
                            key={index}
                            image={images[index]}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Values;