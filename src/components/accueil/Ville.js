import { VilleTable } from "../../pages/VilleTable";
import "./Ville.css";

const Ville = ()=> {

    return(
        <div className="ville">
            {/* {VilleTable.map((val,index)=> {
                return(
                    <div className="villeItem" key={index}>
                        <img src={val.pic} alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>{val.city}</h1>
                            <h2>{val.appart} appartements</h2>
                        </div>
                    </div>
                )
            })} */}
            <div className="villeItem">
                        <img src="images/home/ville/bohicon.jpg" alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>Bohicon</h1>
                            <h2>564 appartements</h2>
                        </div>
            </div>
            <div className="villeItem">
                        <img src="images/home/ville/bohicon.jpg" alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>Bohicon</h1>
                            <h2>564 appartements</h2>
                        </div>
            </div>
            <div className="villeItem">
                        <img src="images/home/ville/bohicon.jpg" alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>Bohicon</h1>
                            <h2>564 appartements</h2>
                        </div>
            </div>
            <div className="villeItem">
                        <img src="images/home/ville/bohicon.jpg" alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>Bohicon</h1>
                            <h2>564 appartements</h2>
                        </div>
            </div>
            <div className="villeItem">
                        <img src="images/home/ville/bohicon.jpg" alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>Bohicon</h1>
                            <h2>564 appartements</h2>
                        </div>
            </div>
            <div className="villeItem">
                        <img src="images/home/ville/bohicon.jpg" alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>Bohicon</h1>
                            <h2>564 appartements</h2>
                        </div>
            </div>
            <div className="villeItem">
                        <img src="images/home/ville/bohicon.jpg" alt="" className="villeImg"/>
                        <div className="villeTitle">
                            <h1>Bohicon</h1>
                            <h2>564 appartements</h2>
                        </div>
            </div>
            
        </div>
    )
};

export default Ville;