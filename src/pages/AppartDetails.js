import { IonButton, IonButtons, IonCol, IonContent, IonFabButton, IonHeader, IonIcon, IonLoading, IonPage, IonRow, IonSkeletonText, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import { arrowBack, caretBackSharp, caretForwardSharp, closeCircleSharp, heartOutline, heartSharp, informationCircle, warning } from "ionicons/icons";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AppartDetails.css";
import "swiper/css";
import { Pagination, Navigation, Zoom, EffectFade } from 'swiper';
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/zoom";
import MailList from "../components/accueil/MailList";
import Footer from "../components/accueil/Footer";
import Axios from 'axios';
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { isEmptyObject } from "jquery";


const AppartDetails = () => {
    const [appartId, setappartId] = useState(parseInt(window.location.pathname.split("/")[2]));
    const house = useSelector((state) => state.house.house);
    // const appartDetail = useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]));

    const [appartDetail, setappartDetail] = useState([]);
    const [like, setlike] = useState(false);
    const [width, setWindowWidth] = useState(window.innerWidth);
    // const router = useIonRouter();
    // const [showModal, setshowModal] = useState(false);
    // const [bookPCModal, setbookPCModal] = useState(false);
    const [openPic, setopenPic] = useState(false);
    const [picId, setpicId] = useState(0);
    // const photos = [useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]))[0].picture1, useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]))[0].picture2,
    // useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]))[0].picture3, useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]))[0].picture4, useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]))[0].picture5];
    const [photos, setphotos] = useState([]);
    const [showDate, setShowDate] = useState(false);
    // const [nightPrice, setnightPrice] = useState(useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]))[0].daily_price);
    const [nightPrice, setnightPrice] = useState(0);
    // const [totalPrice, settotalPrice] = useState(useSelector((state) => state.house.house).filter( (t) => t.id === parseInt(window.location.pathname.split("/")[2]))[0].daily_price);
    const [totalPrice, settotalPrice] = useState(0);

    const [chargement, setchargement] = useState(false);
    const [showtoast, setshowtoast] = useState(false);
    const [showtoast1, setshowtoast1] = useState(false);
    //mail
    const emailCustomer = "bailajessica001@gmail.com";
    const subject = "Appart Booking";



    const router = useHistory();



    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [price, setPrice] = useState(0);
    // const [stock, setstock] = useState(0);
    // const [pic1, setpic1] = useState('');
    // const [pic2, setpic2] = useState('');
    // const [pic3, setpic3] = useState('');
    // const [pic4, setpic4] = useState('');

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    };

    window.addEventListener("resize", updateDimensions);

    const getappart = () => { //retrouver le logement grâce à son id
        // try {
        if (!isEmptyObject(house)) {
            // console.log(house.filter((t) => t.id === appartId));
            setappartDetail(house.filter((t) => t.id === appartId));
            setphotos([house.filter((t) => t.id === appartId)[0].picture1, house.filter((t) => t.id === appartId)[0].picture2,
            house.filter((t) => t.id === appartId)[0].picture3, house.filter((t) => t.id === appartId)[0].picture4, house.filter((t) => t.id === appartId)[0].picture5]);
            setnightPrice(house.filter((t) => t.id === appartId)[0].daily_price);
            settotalPrice(house.filter((t) => t.id === appartId)[0].daily_price);
        }

        // } catch (error) {
        //     console.log(error);
        // }
        // Axios.post('https://backend-guesthouse.benindigital.com/detailHouse', { appartId: appartId }).then((response) => {
        //     // setName(response.data[0].name);
        //     // setDescription(response.data[0].description);
        //     // setPrice(response.data[0].price);
        //     // setpic1(response.data[0].picture1);
        //     // setpic2(response.data[0].picture2);
        //     // setpic3(response.data[0].picture3);
        //     // setpic4(response.data[0].picture4);
        //     // setstock(response.data[0].stock);
        //     setappartDetail(response.data);
        //     // setappartDetail1(response.data);
        //     setphotos([response.data[0].picture1, response.data[0].picture2, response.data[0].picture3, response.data[0].picture4, response.data[0].picture5]);
        //     setnightPrice(response.data[0].daily_price);
        //     settotalPrice(response.data[0].daily_price);
        //     // console.log(response.data);
        //     // setVideo(response.data[0].video);
        //     // console.log(response.data[0]);

        // });

        // try {

        // setappart(Tableau1.filter( (t) => t.id === appartId)[0]);
        // setphotos([Tableau1.filter( (t) => t.id === appartId)[0].picture1, Tableau1.filter( (t) => t.id === appartId)[0].pic2,
        // Tableau1.filter( (t) => t.id === appartId)[0].pic3, Tableau1.filter( (t) => t.id === appartId)[0].pic4]);
        // setnightPrice(Tableau1.filter( (t) => t.id === appartId)[0].tarif);
        // settotalPrice(Tableau1.filter( (t) => t.id === appartId)[0].tarif);
        // setphotos(...photos, Tableau1.filter( (t) => t.id === appartId)[0].pic2);
        // setphotos(...photos, Tableau1.filter( (t) => t.id === appartId)[0].pic3);
        // setphotos(...photos, Tableau1.filter( (t) => t.id === appartId)[0].pic4);

        // console.log(
        //     Tableau1.filter( (t) => t.id === appartId)[0]
        // );
        // } catch(e){};
    };

    //afficher la photo sous grand format
    const showPic = (i) => {
        setpicId(i);
        setopenPic(true);
    };
    //defilement
    const defile = (direction) => {
        if (direction === "l") {
            setpicId(picId === 0 ? photos.length - 1 : picId - 1);
        } else {
            setpicId(picId === (photos.length - 1) ? 0 : picId + 1);

        }
    };

    const dateChoice = (e) => {
        setDate([e]);
        const day = (Date.UTC(e.endDate.getFullYear(), e.endDate.getMonth(), e.endDate.getDate()) - Date.UTC(e.startDate.getFullYear(), e.startDate.getMonth(), e.startDate.getDate())) / (1000 * 3600 * 24);
        if (day === 0) {
            settotalPrice(nightPrice);
        } else if (day > 0) {
            settotalPrice(nightPrice * day);
        }
        // console.log(e);
        // console.log(day);
    };
    const bookNow = () => {
        // console.log(photos);
        // console.log(format(date[0].startDate, "dd/MM/yyyy"));
        // console.log(format(date[0].endDate, "dd/MM/yyyy"));
        const message = "Hi";
        setchargement(true);
        Axios.post('https://backend-guesthouse.benindigital.com/bookHouse', { guesthouse_id: appartId, user_id: 1, starting_date: format(date[0].startDate, "yyyy/MM/dd"), ending_date: format(date[0].endDate, "yyyy/MM/dd") }).then((response) => {
            console.log(response.data[0].phone_whatsapp);
            // Axios.get('https://backend-guesthouse.benindigital.com/sendmail/sendMail.php?email=' + emailCustomer + '&body=' + message + '&subject=' + subject); 
            Axios.get('https://backend-guesthouse.benindigital.com/sendmail/sendMail.php?emailCustomer=' + emailCustomer + '&emailOwner=' + response.data[0].email + '&body=' + message + '&subject=' + subject);
            setchargement(false);
            setshowtoast(true);

            /*utiliser l'id de la chmbre pour recupérer l'id du proprio, puis récupérer le numero du proprio grâce à son 
            id */
            // const waApi = `https://wa.me/${response.data[0].phone/whatsapp}?text=${command}`; //api whatsapp
            // window.location.href = waApi;
        }).catch((err) => {
            setchargement(false);
            setshowtoast1(true);
        });
        // console.log(format(date[0].endDate -date[0].startDate, "dd/MM/yyyy"));
        // console.log(format(date[0].endDate, "dd/MM/yyyy"));
        // console.log(((date[0].endDate).getTime() - (date[0].startDate).getTime())/(1000*3600*24))
        // console.log(Math.abs(date[0].endDate - date[0].startDate)/(1000*3600*24))
        // console.log((Date.UTC(date[0].endDate.getFullYear(), date[0].endDate.getMonth(), date[0].endDate.getDate()) - Date.UTC(date[0].startDate.getFullYear(), date[0].startDate.getMonth(), date[0].startDate.getDate()))/(1000*3600*24));
    };

    const placerLike = () => {
        // document.getElementById('heart1')?.classList.add('favory');
        if (like === false) {
            setlike(true);
        } else {
            setlike(false);
        }
    };

    useEffect(() => {
        if (!isEmptyObject(house)) {
            getappart();
        }
    }, [house]);
    /*------------------------------------------------------------------------------------------------------------ Phone affichage --------------------------------------------------------------------------------------------------------------------------- */
    if (width < 800) {
        return (
            <IonPage>

                <IonHeader className="detailHeader">
                    {/* <div className="entete"> */}
                    <IonToolbar color="violet2" className="detailToolbar">
                        <div className="detailToolbarContain">
                            {/* <IonRouterLink routerLink="/accueil" color="dark"> */}
                            {/* <IonButtons><IonBackButton /></IonButtons> */}
                            {/* </IonRouterLink> */}
                            <IonButtons>
                                <IonButton onClick={() => router.goBack()}>
                                    <IonIcon icon={arrowBack} />
                                </IonButton>
                            </IonButtons>
                            <IonTitle className="ion-text-center fw-bold display-6">
                                Détails
                            </IonTitle>
                            <div className="heartDetail">
                                <IonFabButton color="medium" size="small" onClick={placerLike}>
                                    {like === false ? (
                                        <IonIcon id="heart1" icon={heartOutline} />

                                    ) : (
                                        <IonIcon id="heart1" color="danger" icon={heartSharp} />

                                    )}
                                </IonFabButton>
                            </div>

                        </div>

                    </IonToolbar>
                    {/* </div> */}
                </IonHeader>
                <IonContent id="overlay">
                    {/* <div className="back">
                          <IonFabButton color="medium" size="small" routerLink="/accueil"><IonIcon icon={chevronBackSharp} /></IonFabButton>
                      </div>
                      <div className="heart">
                          <IonFabButton color="medium" size="small" onClick={placerLike}>
                              {like === false ? (
                                  <IonIcon id="heart1" icon={heartOutline} />
      
                              ) : (
                                  <IonIcon id="heart1" color="danger" icon={heartSharp} />
      
                              )}
                          </IonFabButton> 
                      </div> */}
                    <div className="swip">
                        {/* <div className="imgDetail"> */}
                        {appartDetail[0] && (
                            <>
                                <Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#f00", }} effect={"fade"} grabCursor={true} pagination={{ dynamicBullets: true }} navigation={true} zoom={true} modules={[Pagination, Navigation, Zoom, EffectFade]}>
                                    {/* {video && (
                                        )} */}
                                    <SwiperSlide>
                                        <video controls className="vidDetail">
                                            <source src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].videos}`} />
                                        </video>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <img src={Tableau1[productId].pic1} alt="" /> */}
                                        <img src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].picture1}`} loading="lazy" alt="Appart image" className="imgDetail" />
                                    </SwiperSlide>
                                    {appartDetail[0].picture2 && (
                                        <SwiperSlide>
                                            {/* <img src={Tableau1[productId].pic2} alt="" /> */}
                                            <img src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].picture2}`} loading="lazy" alt="Appart image" className="imgDetail" />
                                        </SwiperSlide>
                                    )}
                                    {appartDetail[0].picture3 && (
                                        <SwiperSlide>
                                            {/* <img src={Tableau1[productId].pic2} alt="" /> */}
                                            <img src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].picture3}`} loading="lazy" alt="Appart image" className="imgDetail" />
                                        </SwiperSlide>
                                    )}
                                    {appartDetail[0].picture4 && (
                                        <SwiperSlide>
                                            {/* <img src={Tableau1[productId].pic2} alt="" /> */}
                                            <img src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].picture4}`} loading="lazy" alt="Appart image" className="imgDetail" />
                                        </SwiperSlide>
                                    )}
                                    {appartDetail[0].picture5 && (
                                        <SwiperSlide>
                                            {/* <img src={Tableau1[productId].pic2} alt="" /> */}
                                            <img src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].picture5}`} loading="lazy" alt="Appart image" className="imgDetail" />
                                        </SwiperSlide>
                                    )}
                                </Swiper>

                                <div className="bod">
                                    {/* <div className="ion-text-center fw-bold display-6">{appart.name}</div>
                                      <div className="price fw-bold">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "XOF"}).format(appart.tarif)}/nuit</div>     
                                      
                                      <div className="descrip">
                                          <h5>Description de l'établissement</h5>
                                          <p>
                                              {appart.description}
                                          </p>
                                      </div> */}
                                    <div className="appartDetailsTexts">
                                        <h1 className="appartTitle">{appartDetail[0] && appartDetail[0].name}</h1>
                                        <p className="appartDesc">
                                            {appartDetail[0] && appartDetail[0].description}
                                        </p>
                                    </div>
                                    <div className="appartDetailsPrice">
                                        <h1>Parfait pour vos nuits</h1>
                                        <span>Localisé au coeur de la ville, cet appartement à un excellent score de location!</span>
                                        <h2 className="ion-text-center">
                                            {appartDetail[0] && new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(nightPrice)}/nuit
                                        </h2>
                                        <div className="bookDate ion-text-center">
                                            <FontAwesomeIcon icon={faCalendarDays} className="bookDateIcon" />
                                            <span className="bookDateText" onClick={() => setShowDate(!showDate)}>{`Du ${format(date[0].startDate, "dd/MM/yyyy")} au ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                            {showDate &&
                                                <div className="date">
                                                    <DateRange editableDateInputs={true} minDate={new Date()} onChange={e => dateChoice(e.selection)} moveRangeOnFirstSelection={false} ranges={date} />
                                                    <IonButton color="light" mode="ios" className="date_validate_appartDetails" onClick={() => setShowDate(!showDate)}>Valider</IonButton>
                                                </div>
                                            }

                                        </div>
                                        <h4>
                                            <b>Total: {appartDetail[0] && new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(totalPrice)}</b>
                                        </h4>
                                        <IonButton className="bookNow" color="bleunuit" mode="ios" onClick={bookNow} >Reservé</IonButton>

                                    </div>
                                    {/* <div className="descrip">{Tableau1[productId].description}</div>
                                      <div className="price fw-bold">{Tableau1[productId].price}$</div>                   */}
                                    {/* <div className="ion-text-center">
                                          <IonButton>Ajouter au panier<IonIcon icon={cartOutline} /></IonButton>
                                      </div> */}
                                </div>
                            </>
                        )}
                        {!appartDetail[0] && (
                            <>
                                <IonSkeletonText animated className='imgDetail' />
                                <div className="bod">
                                    <div className="ion-text-center fw-bold display-6"><IonSkeletonText animated style={{ width: '50%' }} /></div>
                                    <div className="price fw-bold"><IonSkeletonText animated style={{ width: '50%' }} /></div>
                                    <div className="descrip">
                                        <p>
                                            <IonSkeletonText animated style={{ width: '60%' }} />
                                            <IonSkeletonText animated />
                                            <IonSkeletonText animated style={{ width: '88%' }} />
                                            <IonSkeletonText animated style={{ width: '88%' }} />
                                            <IonSkeletonText animated style={{ width: '88%' }} />
                                        </p>
                                    </div>
                                    <div className="appartDetailsPrice">
                                        <IonSkeletonText animated />
                                        <IonSkeletonText animated />
                                        <IonSkeletonText animated />
                                        <IonSkeletonText animated />
                                        <div className="bookDate">
                                            <span className="bookDateText"><IonSkeletonText animated /></span>

                                        </div>
                                        <h4 style={{ display: 'flex' }}>
                                            Total: <IonSkeletonText animated style={{ width: '60%' }} />
                                        </h4>
                                        <IonButton style={{ height: '500px' }} color="bleunuit" mode="ios">Reservé</IonButton>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </IonContent>
                <IonLoading isOpen={chargement} onDidDismiss={() => setchargement(false)} message={"Patientez s'il vous plaît..."} />
                <IonToast
                    isOpen={showtoast}
                    onDidDismiss={() => setshowtoast(false)}
                    message="Réservation accompli!"
                    duration={5000}
                    icon={informationCircle}
                    position="bottom"
                    color="warning"
                    cssClass={"toast1AppartDetails"}
                />
                <IonToast
                    isOpen={showtoast1}
                    onDidDismiss={() => setshowtoast1(false)}
                    message="Erreur pendant la réservation, veuillez reéssayer!"
                    duration={5000}
                    icon={warning}
                    position="bottom"
                    color="warning"
                    cssClass={"toast1AppartDetails"}
                />
                {/* </div> */}

            </IonPage>
        );

    }/*------------------------------------------------------------------------------------------------------------ Tablette affichage --------------------------------------------------------------------------------------------------------------------------- */
    else if ((width >= 800) && (width <= 1024)) {
        return (
            <IonPage>

                <IonHeader className="detailHeader">
                    {/* <div className="entete"> */}
                    <IonToolbar color="violet2" className="detailToolbar">
                        <div className="detailToolbarContain">
                            <IonButtons>
                                <IonButton onClick={() => router.goBack()}>
                                    <IonIcon icon={arrowBack} />
                                </IonButton>
                            </IonButtons>
                            <IonTitle className="ion-text-center fw-bold display-6">
                                Détails
                            </IonTitle>
                            <div className="heartDetail">
                                <IonFabButton color="medium" size="small" onClick={placerLike}>
                                    {like === false ? (
                                        <IonIcon id="heart1" icon={heartOutline} />

                                    ) : (
                                        <IonIcon id="heart1" color="danger" icon={heartSharp} />

                                    )}
                                </IonFabButton>
                            </div>

                        </div>

                    </IonToolbar>
                    {/* </div> */}
                </IonHeader>
                <IonContent id="overlay">
                    <div className="appartContainer">
                        {openPic && (
                            <div className="slider">
                                <IonIcon icon={closeCircleSharp} className="close" onClick={() => setopenPic(false)} />
                                <IonIcon icon={caretBackSharp} className="arrow" onClick={() => defile("l")} />
                                <div className="sliderWrapper">
                                    <img src={`https://backend-guesthouse.benindigital.com/${photos[picId]}`} loading="lazy" alt="Appartement" className="sliderImg" />
                                </div>
                                <IonIcon icon={caretForwardSharp} className="arrow" onClick={() => defile("r")} />
                            </div>
                        )}
                        <div className="appartWrapper">
                            {/* <div className="imgDetail"> */}
                            {appartDetail[0] && (
                                <>
                                    {/* <Swiper style={{"--swiper-navigation-color": "#fff","--swiper-pagination-color": "#f00",}} effect={"fade"} grabCursor={true}  pagination={{ dynamicBullets: true }} navigation={true} zoom={true}  modules={[Pagination, Navigation, Zoom, EffectFade]} > */}
                                    {/* {video && (
                                        )} */}
                                    {/* <SwiperSlide>
                                            
                                            <video controls className="vidDetail">
                                                <source src="images/home/vid1.mp4" />
                                            
                                            </video>
                                        </SwiperSlide> 
                                        <SwiperSlide>
                                            * <img src={Tableau1[productId].pic1} alt="" /> *
                                            <img src={appart.picture1} alt="" className="imgDetail" />
                                        </SwiperSlide>
                                        {appart.pic2 ? (
                                            <SwiperSlide>
                                            * <img src={Tableau1[productId].pic2} alt="" /> *
                                            <img src={appart.pic2} alt="" className="imgDetail" />
                                            </SwiperSlide>
                                        ) : (null)}
                                        {appart.pic3 ? (
                                            <SwiperSlide>
                                            * <img src={Tableau1[productId].pic2} alt="" /> *
                                            <img src={appart.pic3} alt="" className="imgDetail" />
                                            </SwiperSlide>
                                        ) : (null)}
                                        {appart.pic4 ? (
                                            <SwiperSlide>
                                            * <img src={Tableau1[productId].pic2} alt="" /> *
                                            <img src={appart.pic4} alt="" className="imgDetail" />
                                            </SwiperSlide>
                                        ) : (null)}
                                    </Swiper> */}
                                    <div className="appartVideo">
                                        <video controls className="vidDetail">
                                            <source src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].videos}`} />
                                        </video>
                                    </div>
                                    <div className="appartImages">
                                        <IonRow>
                                            {/* <IonCol size="4">
                                                <video controls className="vidDetail">
                                                    <source src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].videos}`} />
                                                </video>
                                            </IonCol> */}
                                            {photos.map((val, i) => (
                                                <IonCol size="4" key={i}>
                                                    <img src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${val}`} loading="lazy" alt="Appartement" className="appartImg" onClick={() => showPic(i)} />
                                                </IonCol>

                                            ))}
                                            {/* {appart.pic2 && (
                                                    <IonCol size="4">
                                                        <img src={appart.pic2} alt="" className="appartImg" onClick={()=> showPic(appart.pic2)} />
                                                    </IonCol>
                                                )}
                                                {appart.pic3 && (
                                                    <IonCol size="4">
                                                        <img src={appart.pic3} alt="" className="appartImg" onClick={()=> showPic(appart.pic3)} />
                                                    </IonCol>
                                                )}
                                                {appart.pic4 && (
                                                    <IonCol size="4">
                                                        <img src={appart.pic4} alt="" className="appartImg" onClick={()=> showPic(appart.pic4)} />
                                                    </IonCol>
                                                )} */}
                                        </IonRow>
                                        {/* <div className="appartImgWrapper">
                                                <video controls className="vidDetail">
                                                    <source src="images/home/vid1.mp4" />
                                                </video>

                                            </div>
                                            <div className="appartImgWrapper">
                                                <img src={appart.picture1} alt="" className="appartImg" />
                                            </div>
                                            {appart.pic2 && (
                                                <div className="appartImgWrapper">
                                                    <img src={appart.pic2} alt="" className="appartImg" />
                                                </div>
                                            )}
                                            {appart.pic3 && (
                                                <div className="appartImgWrapper">
                                                    <img src={appart.pic3} alt="" className="appartImg" />
                                                </div>
                                            )}
                                            {appart.pic4 && (
                                                <div className="appartImgWrapper">
                                                    <img src={appart.pic4} alt="" className="appartImg" />
                                                </div>
                                            )} */}
                                    </div>

                                    <div className="appartDetails">
                                        <div className="appartDetailsTexts">
                                            <h1 className="appartTitle">{appartDetail[0] && appartDetail[0].name}</h1>
                                            <p className="appartDesc">
                                                {appartDetail[0] && appartDetail[0].description}
                                            </p>
                                        </div>
                                        <div className="appartDetailsPrice">
                                            <h1>Parfait pour vos nuits</h1>
                                            <span>Localisé au coeur de la ville, cet appartement à un excellent score de location!</span>
                                            <h2>
                                                <b>{appartDetail[0] && new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(nightPrice)}</b>/nuit
                                            </h2>
                                            <div className="bookDate">
                                                <FontAwesomeIcon icon={faCalendarDays} className="bookDateIcon" />
                                                <span className="bookDateText" onClick={() => setShowDate(!showDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} au ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                                {showDate &&
                                                    <div className="date">
                                                        <DateRange editableDateInputs={true} minDate={new Date()} onChange={e => dateChoice(e.selection)} moveRangeOnFirstSelection={false} ranges={date} />
                                                        <IonButton color="light" mode="ios" className="date_validate_appartDetails" onClick={() => setShowDate(!showDate)}>Valider</IonButton>
                                                    </div>
                                                }
                                            </div>
                                            <h4>
                                                <b>Total: {appartDetail[0] && new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(totalPrice)}</b>
                                            </h4>
                                            <IonButton className="bookNow" color="bleunuit" mode="ios" onClick={bookNow} >Reservé</IonButton>

                                        </div>



                                        {/* <div className="descrip">{Tableau1[productId].description}</div>
                                        <div className="price fw-bold">{Tableau1[productId].price}$</div>                   */}
                                        {/* <div className="ion-text-center">
                                            <IonButton>Ajouter au panier<IonIcon icon={cartOutline} /></IonButton>
                                        </div> */}
                                    </div>
                                    {/* <div className="bod"> 
                                        <div className="ion-text-center fw-bold display-6">{appart.name}</div>
                                        <div className="price fw-bold">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "XOF"}).format(appart.tarif)}/nuit</div>     
                                        
                                        <div className="descrip">
                                            <h5>Détails logement</h5>
                                            <p>
                                                {appart.description}
                                            </p>
                                        </div>
                                        
                                    </div> */}
                                </>
                            )}
                            {!appartDetail[0] && (
                                <>
                                    <IonSkeletonText animated className='appartVideo' />
                                    <IonRow>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                    </IonRow>
                                    <div className="appartDetails">
                                        <div className="appartDetailsTexts">
                                            <h1 className="appartTitle"><IonSkeletonText animated style={{ width: '60%' }} /></h1>
                                            <p className="appartDesc">
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                            </p>
                                        </div>
                                        <div className="appartDetailsPrice">
                                            <IonSkeletonText animated />
                                            <IonSkeletonText animated />
                                            <IonSkeletonText animated />
                                            <IonSkeletonText animated />
                                            <div className="bookDate">
                                                <span className="bookDateText"><IonSkeletonText animated /></span>

                                            </div>
                                            <h4 style={{ display: 'flex' }}>
                                                Total: <IonSkeletonText animated style={{ width: '60%' }} />
                                            </h4>
                                            <IonButton className="bookNow" color="bleunuit" mode="ios">Reservé</IonButton>

                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </IonContent>
                <IonLoading isOpen={chargement} onDidDismiss={() => setchargement(false)} message={"Patientez s'il vous plaît..."} />
                <IonToast
                    isOpen={showtoast}
                    onDidDismiss={() => setshowtoast(false)}
                    message="Réservation accompli!"
                    duration={5000}
                    icon={informationCircle}
                    position="bottom"
                    color="warning"
                    cssClass={"toast1AppartDetails"}
                />
                <IonToast
                    isOpen={showtoast1}
                    onDidDismiss={() => setshowtoast1(false)}
                    message="Erreur pendant la réservation, veuillez reéssayer!"
                    duration={5000}
                    icon={warning}
                    position="bottom"
                    color="warning"
                    cssClass={"toast1AppartDetails"}
                />
                {/* </div> */}

            </IonPage>
        );

    }/*------------------------------------------------------------------------------------------------------------ PC affichage --------------------------------------------------------------------------------------------------------------------------- */
    else if (width > 1024) {
        return (
            <IonPage>

                <IonHeader className="detailHeader">
                    {/* <div className="entete"> */}
                    <IonToolbar color="violet2" className="detailToolbar">
                        <div className="detailToolbarContain">
                            <IonButtons>
                                <IonButton onClick={() => router.goBack()}>
                                    <IonIcon icon={arrowBack} />
                                </IonButton>
                            </IonButtons>
                            <IonTitle className="ion-text-center fw-bold display-6">
                                Détails
                            </IonTitle>
                            <div className="heartDetail">
                                <IonFabButton color="medium" size="small" onClick={placerLike}>
                                    {like === false ? (
                                        <IonIcon id="heart1" icon={heartOutline} />

                                    ) : (
                                        <IonIcon id="heart1" color="danger" icon={heartSharp} />

                                    )}
                                </IonFabButton>
                            </div>

                        </div>

                    </IonToolbar>
                    {/* </div> */}
                </IonHeader>
                <IonContent id="overlay">
                    {/* <div className="back">
                          <IonFabButton color="medium" size="small" routerLink="/accueil"><IonIcon icon={chevronBackSharp} /></IonFabButton>
                      </div>
                      <div className="heart">
                          <IonFabButton color="medium" size="small" onClick={placerLike}>
                              {like === false ? (
                                  <IonIcon id="heart1" icon={heartOutline} />
      
                              ) : (
                                  <IonIcon id="heart1" color="danger" icon={heartSharp} />
      
                              )}
                          </IonFabButton> 
                      </div> */}
                    <div className="appartContainer">
                        {openPic && (
                            <div className="slider">
                                <IonIcon icon={closeCircleSharp} className="close" onClick={() => setopenPic(false)} />
                                <IonIcon icon={caretBackSharp} className="arrow" onClick={() => defile("l")} />
                                <div className="sliderWrapper">
                                    <img src={`https://backend-guesthouse.benindigital.com/${photos[picId]}`} loading="lazy" alt="Appartements" className="sliderImg" />
                                </div>
                                <IonIcon icon={caretForwardSharp} className="arrow" onClick={() => defile("r")} />
                            </div>
                        )}
                        <div className="appartWrapper">
                            {/* <div className="imgDetail"> */}
                            {appartDetail[0] && (
                                <>
                                    {/* <Swiper style={{"--swiper-navigation-color": "#fff","--swiper-pagination-color": "#f00",}} effect={"fade"} grabCursor={true}  pagination={{ dynamicBullets: true }} navigation={true} zoom={true}  modules={[Pagination, Navigation, Zoom, EffectFade]} > */}
                                    {/* {video && (
                                        )} */}
                                    {/* <SwiperSlide>
                                            
                                            <video controls className="vidDetail">
                                                <source src="images/home/vid1.mp4" />
                                            
                                            </video>
                                        </SwiperSlide> 
                                        <SwiperSlide>
                                            * <img src={Tableau1[productId].pic1} alt="" /> *
                                            <img src={appart.picture1} alt="" className="imgDetail" />
                                        </SwiperSlide>
                                        {appart.pic2 ? (
                                            <SwiperSlide>
                                            * <img src={Tableau1[productId].pic2} alt="" /> *
                                            <img src={appart.pic2} alt="" className="imgDetail" />
                                            </SwiperSlide>
                                        ) : (null)}
                                        {appart.pic3 ? (
                                            <SwiperSlide>
                                            * <img src={Tableau1[productId].pic2} alt="" /> *
                                            <img src={appart.pic3} alt="" className="imgDetail" />
                                            </SwiperSlide>
                                        ) : (null)}
                                        {appart.pic4 ? (
                                            <SwiperSlide>
                                            * <img src={Tableau1[productId].pic2} alt="" /> *
                                            <img src={appart.pic4} alt="" className="imgDetail" />
                                            </SwiperSlide>
                                        ) : (null)}
                                        </Swiper> */}
                                    <div className="appartVideo">
                                        <video controls className="vidDetail">
                                            <source src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].videos}`} />
                                        </video>
                                    </div>
                                    <div className="appartImages">
                                        <IonRow>
                                            {/* <IonCol size="4">
                                                <video controls className="vidDetail">
                                                    <source src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${appartDetail[0].videos}`} />
                                                </video>
                                            </IonCol> */}
                                            {photos.map((val, i) => (
                                                <IonCol size="4" key={i}>
                                                    <img src={appartDetail[0] && `https://backend-guesthouse.benindigital.com/${val}`} loading="lazy" alt="Appartement" className="appartImg" onClick={() => showPic(i)} />
                                                </IonCol>

                                            ))}
                                            {/* {appart.pic2 && (
                                                    <IonCol size="4">
                                                        <img src={appart.pic2} alt="" className="appartImg" onClick={()=> showPic(appart.pic2)} />
                                                    </IonCol>
                                                )}
                                                {appart.pic3 && (
                                                    <IonCol size="4">
                                                        <img src={appart.pic3} alt="" className="appartImg" onClick={()=> showPic(appart.pic3)} />
                                                    </IonCol>
                                                )}
                                                {appart.pic4 && (
                                                    <IonCol size="4">
                                                        <img src={appart.pic4} alt="" className="appartImg" onClick={()=> showPic(appart.pic4)} />
                                                    </IonCol>
                                                )} */}
                                        </IonRow>
                                        {/* <div className="appartImgWrapper">
                                                <video controls className="vidDetail">
                                                    <source src="images/home/vid1.mp4" />
                                                </video>

                                            </div>
                                            <div className="appartImgWrapper">
                                                <img src={appart.picture1} alt="" className="appartImg" />
                                            </div>
                                            {appart.pic2 && (
                                                <div className="appartImgWrapper">
                                                    <img src={appart.pic2} alt="" className="appartImg" />
                                                </div>
                                            )}
                                            {appart.pic3 && (
                                                <div className="appartImgWrapper">
                                                    <img src={appart.pic3} alt="" className="appartImg" />
                                                </div>
                                            )}
                                            {appart.pic4 && (
                                                <div className="appartImgWrapper">
                                                    <img src={appart.pic4} alt="" className="appartImg" />
                                                </div>
                                            )} */}
                                    </div>

                                    <div className="appartDetails">
                                        <div className="appartDetailsTexts">
                                            <h1 className="appartTitle">{appartDetail[0] && appartDetail[0].name}</h1>
                                            <p className="appartDesc">
                                                {appartDetail[0] && appartDetail[0].description}
                                            </p>
                                        </div>
                                        <div className="appartDetailsPrice">
                                            <h1>Parfait pour vos nuits</h1>
                                            <span>Localisé au coeur de la ville, cet appartement à un excellent score de location!</span>
                                            <h2>
                                                <b>{appartDetail[0] && new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(nightPrice)}</b>/nuit
                                            </h2>
                                            <div className="bookDate">
                                                <FontAwesomeIcon icon={faCalendarDays} className="bookDateIcon" />
                                                <span className="bookDateText" onClick={() => setShowDate(!showDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} au ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                                {showDate &&
                                                    <div className="date">
                                                        <DateRange editableDateInputs={true} minDate={new Date()} onChange={e => dateChoice(e.selection)} moveRangeOnFirstSelection={false} ranges={date} />
                                                        <IonButton color="light" mode="ios" className="date_validate_appartDetails" onClick={() => setShowDate(!showDate)}>Valider</IonButton>
                                                    </div>
                                                }
                                            </div>
                                            <h4>
                                                <b>Total: {appartDetail[0] && new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(totalPrice)}</b>
                                            </h4>
                                            <IonButton className="bookNow" color="bleunuit" mode="ios" onClick={bookNow} >Reservé</IonButton>

                                        </div>



                                        {/* <div className="descrip">{Tableau1[productId].description}</div>
                                        <div className="price fw-bold">{Tableau1[productId].price}$</div>                   */}
                                        {/* <div className="ion-text-center">
                                            <IonButton>Ajouter au panier<IonIcon icon={cartOutline} /></IonButton>
                                        </div> */}
                                    </div>
                                    {/* <div className="bod"> 
                                        <div className="ion-text-center fw-bold display-6">{appart.name}</div>
                                        <div className="price fw-bold">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "XOF"}).format(appart.tarif)}/nuit</div>     
                                        
                                        <div className="descrip">
                                            <h5>Détails logement</h5>
                                            <p>
                                                {appart.description}
                                            </p>
                                        </div>
                                        
                                    </div> */}
                                </>
                            )}
                            {!appartDetail[0] && (
                                <>
                                    <IonSkeletonText animated className='appartVideo' />
                                    <IonRow>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                        <IonCol size="4">
                                            <IonSkeletonText animated className='imgDetail' />
                                        </IonCol>
                                    </IonRow>
                                    <div className="appartDetails">
                                        <div className="appartDetailsTexts">
                                            <h1 className="appartTitle"><IonSkeletonText animated style={{ width: '60%' }} /></h1>
                                            <p className="appartDesc">
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                                <IonSkeletonText animated style={{ width: '90%' }} />
                                            </p>
                                        </div>
                                        <div className="appartDetailsPrice">
                                            <IonSkeletonText animated />
                                            <IonSkeletonText animated />
                                            <IonSkeletonText animated />
                                            <IonSkeletonText animated />
                                            <div className="bookDate">
                                                <span className="bookDateText"><IonSkeletonText animated /></span>

                                            </div>
                                            <h4 style={{ display: 'flex' }}>
                                                Total: <IonSkeletonText animated style={{ width: '60%' }} />
                                            </h4>
                                            <IonButton className="bookNow" color="bleunuit" mode="ios">Reservé</IonButton>

                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </IonContent>
                <IonLoading isOpen={chargement} onDidDismiss={() => setchargement(false)} message={"Patientez s'il vous plaît..."} />
                <IonToast
                    isOpen={showtoast}
                    onDidDismiss={() => setshowtoast(false)}
                    message="Réservation accompli!"
                    duration={5000}
                    icon={informationCircle}
                    position="bottom"
                    color="warning"
                    cssClass={"toast1AppartDetails"}
                />

                <IonToast
                    isOpen={showtoast1}
                    onDidDismiss={() => setshowtoast1(false)}
                    message="Erreur pendant la réservation, veuillez reéssayer!"
                    duration={5000}
                    icon={warning}
                    position="bottom"
                    color="warning"
                    cssClass={"toast1AppartDetails"}
                />
                {/* <IonModal isOpen={bookPCModal} onDidDismiss={()=> setbookPCModal(false)}>
                        <IonHeader>

                            <IonTitle>Date de réservation</IonTitle>
                        </IonHeader>
                        <IonContent>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} au ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                <DateRange editableDateInputs={true} onChange={e => setDate([e.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />
                            </div>

                        </IonContent>
                    </IonModal> */}
                {/* </div> */}
                {/* const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]); */}

            </IonPage>
        );

    }
};

export default AppartDetails;