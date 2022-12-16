import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonPage, IonRow, IonSkeletonText } from '@ionic/react';
import './Accueil.css';
import { Capacitor, Plugins } from '@capacitor/core';
import { useEffect, useState, } from 'react';
import ReactPaginate from 'react-paginate';
import Toolbar from '../components/accueil/Toolbar';
import "swiper/css/free-mode";
import "swiper/css";
import RoomSlide from '../components/accueil/RoomSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import MailList from '../components/accueil/MailList';
import Footer from '../components/accueil/Footer';
import { arrowBack, arrowForward, searchOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import Foot from '../components/Foot';
// import Axios from 'axios';
// import Header from '../components/accueil/Header';
// import Ville from '../components/accueil/Ville';





const Accueil = () => {
  // : React.FC
  // const [dateArriver, setdateArriver] = useState("Arrivée");
  // const [dateDepart, setdateDepart] = useState("Départ");
  const [width, setWindowWidth] = useState(window.innerWidth);
  //pagination pc
  const [pageNumber, setpageNumber] = useState(0);
  const appartperpagepc = 16;
  const pageinVisitepc = pageNumber * appartperpagepc;
  //pagination tablette
  const appartperpagetab = 15;
  const pageinVisitetab = pageNumber * appartperpagetab
  // const pageCounttab = Math.ceil(Tableau1.length / appartperpagetab);
  //chargement de plus de contenu, phone
  const [showcards, setshowcards] = useState(16);
  // const house = useSelector((state) => state.house.house);
  const house1 = useSelector((state) => state.house.house);
  const house3 = useSelector((state) => state.house.house).slice(0, 8);
  const [house2, sethouse2] = useState([]);
  const city = useSelector((t) => t.house.city);
  // const [house1, sethouse1] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  // compter les pages pc
  const pageCountpc = Math.ceil(house1.length / appartperpagepc);
  //compter les pages tablette
  const pageCounttab = Math.ceil(house1.length / appartperpagetab);
  //changement de page pc et tab
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };

  // const [showmodal, setshowmodal] = useState(false);

  // const appartperpagephone = 6;
  // const pageinVisitephone = pageNumber * appartperpagephone;
  // const pageCountphone = Math.ceil(Tableau1.length / appartperpagephone);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  window.addEventListener("resize", updateDimensions);

  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener("backButton", () => {
        if (window.location.pathname === "/") {
          Plugins.App.exitApp();
        } else if (window.location.pathname === "/accueil") {
          Plugins.App.exitApp();
        }
      })
    };
  });

  // useEffect(()=>{
  //   gethousephone();
  // }, []);
  // const gethousephone = ()=>{
  //   // sethouse2(house1.slice(0, 8));
  //   Axios.get(`https://backend-guesthouse.benindigital.com/pagination/${offset}`).then((res)=> {
  //     console.log(res);
  //   });
  // };

  // const getHouse = ()=>{
  //   fetch('https://backend-guesthouse.benindigital.com/gethouse').then((res) => {
  //     const data = res.json()
  //     return data
  //   }).then((data) => {
  //     sethouse1(data);
  //     sethouse2(data.slice(0, 8))
  //     // console.log(data);
  //     // dispatch(recupCategory(data));
  //     // setProducts(data);
  //     // dispatch(setProductPan(data));
  //   })
  // };

  // const pushData = () => {
  //   const max = Tableau1.length + 20;
  //   const min = max - 20;
  //   const newData = [];
  //   for (let i = min; i < max; i++) {
  //     newData.push('Item' + i);
  //   }

  //   setData([
  //     ...data,
  //     ...newData
  //   ]);
  // };
  const loadData = (ev) => {
    setTimeout(() => {
      sethouse2(house1.slice(0, showcards));
      // lists = Tableau1.slice(0, showcards);
      // console.log(Tableau1.slice(0, showcards));
      // pushData();
      // console.log('Loaded data');
      // console.log(Tableau1.length);
      ev.target.complete();
      if (house2.length === house1.length) {
        setInfiniteDisabled(true);
      }
    }, 500);
    setshowcards(showcards + 8);
  };
  /* ----------------------------------------------------------   rechercher   -----------------------------------------------------------------------------*/
  // const recherch = (e)=>{
  //   // setSearch(e.target.value);
  //   sethouse2(house.filter( t => t.quartier.toLowerCase().includes(e.toLowerCase())));
  //   house1 = house.filter( t => t.quartier.toLowerCase().includes(e.toLowerCase()));
  // }
  // useIonViewWillEnter(() => {
  //   pushData();
  // }); 

  /*------------------------------------------------------------------------------------------------------------ Phone affichage --------------------------------------------------------------------------------------------------------------------------- */
  if (width < 800) {
    return (
      <IonPage className='boddaccueil'>
        <IonHeader className='headerAccueil'>
          <Toolbar />

        </IonHeader>
        {/* <div className='boddaccueil'> */}
        <IonContent fullscreen>
          {/* <IonSearchbar />          */}
          <div id='search_acc'>
            {/* <IonRouterLink routerLink='/searchappart'>
              <IonTitle className='ion-text-center'>Destination</IonTitle>
            </IonRouterLink> */}
            <IonButton mode="ios" className='searchBtn_acc' routerLink='/searchappart' color='violet2' >
              <IonIcon slot="start" icon={searchOutline} />
              Destination
            </IonButton>
            {/* <div className='search_sec'>
                <IonLabel className='search_icon'><IonIcon icon={bedOutline} /></IonLabel>
                <IonInput placeholder='Destination'/>
              </div> */}
            {/* <div className='search_sec'>
                <IonLabel className='search_icon'><IonIcon icon={calendarClearOutline} /></IonLabel>
                <h6>{dateArriver}  -  {dateDepart}</h6>
              </div>
              <div className='search_sec'>
                <IonLabel className='search_icon'><IonIcon icon={personOutline} /></IonLabel>
                <IonInput placeholder='Destination'/>
              </div> */}

          </div>

          {/* <Swiper spaceBetween={0} slidesPerView={1} freeMode={true} modules={[FreeMode]} className="swiper" > */}
          {/* partie Découvrir */}
          <div className='decouverte'>
            <h2 className='decouverteTitre'>Découvrir</h2>
            {city[0] && (
              <Swiper effect={"creative"} creativeEffect={{ prev: { shadow: true, translate: [0, 0, -400], }, next: { translate: ["100%", 0, 0], }, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, EffectCreative]} >
                {city.map((val, index) => {
                  return (
                    <SwiperSlide key={`slide_${index}`}>
                      {/* <IonCard className='card_accueil'> */}
                      <div className='villeContainer'>
                        < img src={`https://backend-guesthouse.benindigital.com/${val.picture}`} loading="lazy" alt='Ville' className='imgville_accueil' />
                        <h3 className='villename_accueil'>{val.city_name}</h3>

                      </div>
                      {/* <IonCardContent className='cardcontent_accueil'> */}
                      {/* </IonCardContent> */}
                      {/* </IonCard>  */}
                    </SwiperSlide>

                  )
                })}
              </Swiper>
            )}

            {!city[0] && (
              <div className='villeContainer'>
                <IonSkeletonText animated className='imgville_accueil' />
              </div>
            )}
          </div>
          {/* <IonRow></IonRow> */}
          {house1[0] && (
            <div className='appartAccueil'>
              <h2 className='appartTitre'>Appartements</h2>
              {/* {Tableau1.map((val, index)=>{
                return(
                //   <SwiperSlide key={`slide_${index}`}>
                //     <RoomSlide name={val.name} city={val.city} picture1={val.picture1} />
                // </SwiperSlide>
                <IonCol key={index} >
                    <RoomSlide  id={val.id} name={val.name} city={val.city} picture1={val.picture1} pic2={val.pic2} pic3={val.pic3} pic4={val.pic4} type={val.type} tarif={val.tarif} />
                </IonCol>
                )
              })} */}
              {/* <IonGrid>
                <IonRow> */}
              {/* {Tableau1.slice(pageinVisitephone, pageinVisitephone + appartperpagephone).map((val, index) =>{
                  return(
                    <IonCol key={index} size='6'>
                    <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} pic2={val.pic2} pic3={val.pic3} pic4={val.pic4} type={val.type} tarif={val.tarif} />
                    </IonCol> 
                    )
                  })} */}
              <div className="row_appartCard_accueil">

                {house2[0] ? (
                  (house2.map((val, index) => {
                    return (
                      <div className="appartCard_accueil" key={index}>

                        {/* <IonCol key={index} size='6'> */}
                        <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} picture2={val.picture2} picture3={val.picture3} picture4={val.picture4} picture5={val.picture5} daily_price={val.daily_price} />
                        {/* </IonCol> */}
                      </div>
                    )
                  }))
                ) : (
                  (house3.map((val, index) => {
                    return (
                      <div className="appartCard_accueil" key={index}>

                        {/* <IonCol key={index} size='6'> */}
                        <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} picture2={val.picture2} picture3={val.picture3} picture4={val.picture4} picture5={val.picture5} daily_price={val.daily_price} />
                        {/* </IonCol> */}
                      </div>
                    )
                  }))
                )}
              </div>

              {/* </IonRow>
              </IonGrid> */}
              <IonInfiniteScroll
                onIonInfinite={loadData}
                threshold="100px"
                disabled={isInfiniteDisabled}

              >
                <IonInfiniteScrollContent
                  loadingSpinner="bubbles"
                  loadingText="Chargement..."
                ></IonInfiniteScrollContent>
              </IonInfiniteScroll>
              {/* <ReactPaginate 
                  breakLabel="..."
                  previousLabel={<IonIcon icon={arrowBack} />}
                  nextLabel={<IonIcon icon={arrowForward} />}
                  pageCount={pageCountphone}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={changePage}
                  containerClassName={"paginationBtns"}
                  previousLinkClassName={"previousBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                  renderOnZeroPageCount={null}
                /> */}
            </div>
          )}
          {!house1[0] && (
            <>
              <h2 className='appartTitre'>Appartements</h2>
              <IonRow>
                <IonCol size="6">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: '125px' }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </>
          )}

          <MailList />
          {/* <Footer /> */}
          <Foot />
          {/* </Swiper> */}
        </IonContent>
        {/* </div> */}
      </IonPage>
    );
  }/*------------------------------------------------------------------------------------------------------------ Tablette affichage --------------------------------------------------------------------------------------------------------------------------- */
  else if ((width >= 800) && (width <= 1024)) {
    return (
      <IonPage className='boddaccueil'>
        <IonHeader className='headerAccueil'>
          <Toolbar />
        </IonHeader>
        {/* <div className='boddaccueil'> */}
        <IonContent fullscreen>
          <div id='search_acc'>
            <IonButton mode="ios" className='searchBtn_acc' routerLink='/searchappart' color='violet2'>
              <IonIcon slot="start" icon={searchOutline} />
              Destination
            </IonButton>
            {/* <IonRouterLink routerLink='/searchappart'>
              <IonSearchbar placeholder='Destination' />
            </IonRouterLink> */}
            {/* <div className='search_sec'>
                <IonLabel className='search_icon'><IonIcon icon={bedOutline} /></IonLabel>
                <IonInput placeholder='Destination'/>
              </div> */}
            {/* <div className='search_sec'>
                <IonLabel className='search_icon'><IonIcon icon={calendarClearOutline} /></IonLabel>
                <h6>{dateArriver}  -  {dateDepart}</h6>
              </div>
              <div className='search_sec'>
                <IonLabel className='search_icon'><IonIcon icon={personOutline} /></IonLabel>
                <IonInput placeholder='Destination'/>
              </div> */}
          </div>
          {/* <Swiper spaceBetween={0} slidesPerView={3} freeMode={true} modules={[FreeMode]} className="swiper" > */}
          {/* partie Découvrir */}
          <div className='decouverte'>
            <h2 className='decouverteTitre'>Découvrir</h2>
            {city[0] && (
              <Swiper effect={"creative"} creativeEffect={{ prev: { shadow: true, translate: [0, 0, -400], }, next: { translate: ["100%", 0, 0], }, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, EffectCreative]} >
                {city.map((val, index) => {
                  return (
                    <SwiperSlide key={`slide_${index}`}>
                      {/* <IonCard className='card_accueil'> */}
                      <div className='villeContainer'>
                        < img src={`https://backend-guesthouse.benindigital.com/${val.picture}`} loading="lazy" alt='Ville' className='imgville_accueil' />
                        <h3 className='villename_accueil'>{val.city_name}</h3>

                      </div>
                      {/* <IonCardContent className='cardcontent_accueil'> */}
                      {/* </IonCardContent> */}
                      {/* </IonCard>  */}
                    </SwiperSlide>

                  )
                })}
              </Swiper>
            )}

            {!city[0] && (
              <div className='villeContainer'>
                <IonSkeletonText animated className='imgville_accueil' />
              </div>
            )}
          </div>
          {house1[0] && (
            <div className='appartAccueil'>
              <h2 className='appartTitre'>Appartements</h2>
              {/* <IonRow className='row'>
                {Tableau1.map((val, index)=>{
                  return(
                    *<SwiperSlide key={`slide_${index}`}>
                      <IonCard className='card_accueil'>
                        <img  src={val.picture1} alt='' className='imgroom_accueil'/>
                        <IonCardContent className='cardcontent_accueil'>
                          <h3>{val.name}</h3>
                          <h3>{val.city}</h3>
                        </IonCardContent>
                      </IonCard> 
                      </SwiperSlide>*
                    <IonCol key={index} size='6'>
                      <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} pic2={val.pic2} pic3={val.pic3} pic4={val.pic4} type={val.type} tarif={val.tarif} />
                    </IonCol>

                  )
                })}
              </IonRow> */}
              <IonGrid>
                <IonRow>
                  {house1.slice(pageinVisitetab, pageinVisitetab + appartperpagetab).map((val, index) => {
                    return (
                      <IonCol key={index} size='4'>
                        <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} picture2={val.picture2} picture3={val.picture3} picture4={val.picture4} picture5={val.picture5} daily_price={val.daily_price} />
                      </IonCol>
                    )
                  })}

                </IonRow>
              </IonGrid>

              <ReactPaginate
                previousLabel={<IonIcon icon={arrowBack} />}
                nextLabel={<IonIcon icon={arrowForward} />}
                pageCount={pageCounttab}
                breakLabel={"..."}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          )}
          {!house1[0] && (
            <>
              <h2 className='appartTitre'>Appartements</h2>
              <IonRow>
                <IonCol size="4">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: '125px' }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="4">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="4">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="4">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="4">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="4">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </>
          )}
          <MailList />
          <Foot />
          {/* <Footer /> */}
          {/* </Swiper> */}

        </IonContent>
        {/* </div> */}
      </IonPage>
    );
  }/*------------------------------------------------------------------------------------------------------------ PC affichage --------------------------------------------------------------------------------------------------------------------------- */
  else if (width > 1024) {
    return (
      <IonPage className='boddaccueil'>
        <IonHeader className='headerAccueil'>
          <Toolbar />
          {/* <Header /> */}
        </IonHeader>
        {/* <div className='boddaccueil'> */}
        <IonContent>
          {/* <Toolbar />
          <Header />
          <div className='homeContainer'>
            <Ville />

          </div> */}
          <div id='search_acc'>
            <IonButton mode="ios" className='searchBtn_acc' routerLink='/searchappart' color='violet2' >
              <IonIcon slot="start" icon={searchOutline} />
              Destination
            </IonButton>
            {/* <IonRouterLink routerLink='/searchappart'>
              <IonSearchbar placeholder='Destination' />
            </IonRouterLink> */}

            {/* </div>   */}
          </div>
          {/* <Swiper spaceBetween={0} slidesPerView={3} freeMode={true} modules={[FreeMode]} className="swiper" > */}
          {/* partie Découvrir */}
          <div className='decouverte'>
            <h2 className='decouverteTitre'>Découvrir</h2>
            {city[0] && (
              <Swiper effect={"creative"} creativeEffect={{ prev: { shadow: true, translate: [0, 0, -400], }, next: { translate: ["100%", 0, 0], }, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, EffectCreative]} >
                {city.map((val, index) => {
                  return (
                    <SwiperSlide key={`slide_${index}`}>
                      {/* <IonCard className='card_accueil'> */}
                      <div className='villeContainer'>
                        < img src={`https://backend-guesthouse.benindigital.com/${val.picture}`} loading="lazy" alt='Ville' className='imgville_accueil' />
                        <h3 className='villename_accueil'>{val.city_name}</h3>

                      </div>
                      {/* <IonCardContent className='cardcontent_accueil'> */}
                      {/* </IonCardContent> */}
                      {/* </IonCard>  */}
                    </SwiperSlide>

                  )
                })}
              </Swiper>
            )}

            {!city[0] && (
              <div className='villeContainer'>
                <IonSkeletonText animated className='imgville_accueil' />
              </div>
            )}

          </div>
          {house1[0] && (
            <div className='appartAccueil'>
              <h2 className='appartTitre'>Appartements</h2>
              {/* <IonRow className='row'>
                {Tableau1.map((val, index)=>{
                  return(
                    // *<SwiperSlide key={`slide_${index}`}>
                    //    <IonCard className='card_accueil'>
                    //     <img  src={val.picture1} alt='' className='imgroom_accueil'/>
                    //     <IonCardContent className='cardcontent_accueil'>
                    //       <h3>{val.name}</h3>
                    //       <h3>{val.city}</h3>
                    //     </IonCardContent>
                    //   </IonCard> 
                    //   </SwiperSlide>*
                    <IonCol key={index} size='3'>
                      <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} pic2={val.pic2} pic3={val.pic3} pic4={val.pic4} type={val.type} tarif={val.tarif} />
                    </IonCol>

                  )
                })}
              </IonRow> */}
              <IonGrid>
                <IonRow>
                  {house1.slice(pageinVisitepc, pageinVisitepc + appartperpagepc).map((val, index) => {
                    return (
                      <IonCol key={index} size='3'>
                        <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} picture2={val.picture2} picture3={val.picture3} picture4={val.picture4} picture5={val.picture5} daily_price={val.daily_price} />
                      </IonCol>
                    )
                  })}

                </IonRow>
              </IonGrid>

              <ReactPaginate
                previousLabel={"Précédent"}
                nextLabel={"Suivant"}
                pageCount={pageCountpc}
                breakLabel={"..."}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
              {/* <IonModal isOpen={showmodal} onDidDismiss={() => setshowmodal(false)}  >
                <IonHeader className='modalheadall'>
                  <h6 className='titremodall'>Recher</h6>
                  <h6 onClick={() => setshowmodal(false)} className="fermermodall" >Close</h6>
                </IonHeader>
                <IonContent className="modtoolbarc">
                  {house1.map((val, i) => {
                    return (
                      <IonCard>
                        <h1>{val.name}</h1>
                      </IonCard>
                    )
                  })}
                </IonContent>
              </IonModal> */}
            </div>
          )}
          {!house1[0] && (
            <>
              <h2 className='appartTitre'>Appartements</h2>
              <IonRow>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: '125px' }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="3">
                  <IonCard style={{ height: "200px" }}>
                    <IonSkeletonText animated style={{ height: "125px" }} />
                    <IonCardContent style={{ height: "75px" }}>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                      <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </>
          )}
          {/* </Swiper> */}
          <MailList />
          <Foot />
          {/* <Footer /> */}

        </IonContent>
        {/* </div> */}
      </IonPage>
    );
  }
};

export default Accueil;
