import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonButton, IonInput } from "@ionic/react";
import "./Header.css";
import { DateRange} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns";

const Header = ({type}) => { 
    const [showDate, setShowDate] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    //option de choix du nombre de personne compris dans la réservation
    const [options, setOptions] = useState({
        adulte: 1,
        enfants: 0,
        chambre: 1 
    });
    //date d'arrivée et de départ initialisation
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]); 

    //décrémentation ou incrémentation des options de réservation 
    const modifOption = (nom, operation)=> {
        setOptions( (prev) => {
            return{
                ...prev, [nom]: operation === "i" ? options[nom] + 1 : (options[nom] > 0 ? options[nom] - 1 : options[nom]),
            }
        })
    };
    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !== "list" &&
                    <>
                        <h1 className="headerTitle">Trouvez votre prochain séjour.</h1>
                        <p className="headerDesc">
                            Recherchez des offres sur des hôtels, des hébergements indépendants et plus encore
                        </p>
                        <button className="headerBtn">Connexion / Inscription</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="Où allez-vous?" className="headerSearchInput" />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={()=> setShowDate(!showDate) } className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} au ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {showDate && <DateRange editableDateInputs={true} onChange={e => setDate([e.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />
                                }
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={()=> setShowOptions(!showOptions) } className="headerSearchText">{`${options.adulte} adulte -  ${options.enfants} enfants - ${options.chambre} chambre`}</span>
                                {showOptions && 
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adulte</span>
                                            <div className="optionCounter">
                                                
                                                <button className="optionCounterButton" onClick={ ()=> modifOption("adulte", 'd')} >-</button>
                                                <span className="optionCounterNumber">{options.adulte}</span>
                                                <button className="optionCounterButton" onClick={ ()=> modifOption("adulte", 'i')}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Enfants</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={ ()=> modifOption("enfants", 'd')}>-</button>
                                                <span className="optionCounterNumber">{options.enfants}</span>
                                                <button className="optionCounterButton" onClick={ ()=> modifOption("enfants", 'i')}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Chambre</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={ ()=> modifOption("chambre", 'd')}>-</button>
                                                <span className="optionCounterNumber">{options.chambre}</span>
                                                <button className="optionCounterButton" onClick={ ()=> modifOption("chambre", 'i')}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div> 
                            <div className="headerSearchItem">
                                <button className="headerBtn">Rechercher</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
};

export default Header;