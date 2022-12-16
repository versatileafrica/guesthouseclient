import { IonCard, IonCardContent, IonRouterLink } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import  "./RoomSlide.css";
import { Pagination, Zoom, EffectFade} from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
// import "swiper/css/thumbs";
// import "swiper/modules/scrollbar/css";
// import "swiper/modules/effect-coverflow/css";
// import "swiper/css/effect-cube";





const RoomSlide = props => { 
  // : React.FC
  // const [like, setlike] = useState(false);
  // const [dateArriver, setdateArriver] = useState("Arrivée");
  // const [dateDepart, setdateDepart] = useState("Départ");
  // const swiper = new Swiper('.swiper', {
  //   // configure Swiper to use modules
  //   modules: [FreeMode, Pagination],
    
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
    
  //   // If we need pagination
  //   pagination: {
  //     clickable: true,
  //   },
    
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     freeMode: true,
  //   });
  
  

  // const placerLike = () => {
  //   // document.getElementById('heart1')?.classList.add('favory');
  //   if(like === false){
  //       setlike(true);
  //   }else {
  //       setlike(false);
  //   }
  // }

    return (
      // <>
        <IonCard className='card_accueil' color="vertclair1" mode="md">
                    {/* <div className="heart">
                      <IonFabButton color="medium" size="small" onClick={placerLike}>
                          {like === false ? (
                            <IonIcon id="heart1" icon={heartOutline} />
              
                            ) : (
                              <IonIcon id="heart1" color="danger" icon={heartSharp} />
                
                          )}
                      </IonFabButton> 
                    </div> */}
                    {/* onClick={()=> {window.location.href = `/appartDetail/${props.id}`}} */}
                    <>
                      <IonRouterLink routerLink={`/appartDetail/${props.id}`}>
                      {/* "--swiper-navigation-color": "#fff", navigation={true}*/}
                        <Swiper style={{"--swiper-pagination-color": "#f00",}} spaceBetween={30} grabCursor={true} pagination={{ dynamicBullets: true }}  zoom={true} effect={"fade"} modules={[Pagination, Zoom, EffectFade]} >
                          <SwiperSlide>
                            <img src={`https://backend-guesthouse.benindigital.com/${props.picture1}`} loading="lazy" alt='Appart image 1' className='imgroom_accueil'/>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img  src={`https://backend-guesthouse.benindigital.com/${props.picture2}`} loading="lazy" alt='Appart image 2' className='imgroom_accueil'/>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img  src={`https://backend-guesthouse.benindigital.com/${props.picture3}`} loading="lazy" alt='Appart image 3' className='imgroom_accueil'/>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img  src={`https://backend-guesthouse.benindigital.com/${props.picture4}`} loading="lazy" alt='Appart image 4' className='imgroom_accueil'/>
                          </SwiperSlide>
                          <SwiperSlide>
                            <img  src={`https://backend-guesthouse.benindigital.com/${props.picture5}`} loading="lazy" alt='Appart image 5' className='imgroom_accueil'/>
                          </SwiperSlide>
                        </Swiper>

                      </IonRouterLink>
                    </>
                    <IonCardContent className='cardcontent_accueil'>
                      <h2 className="fw-bold appartName_RoomSlide">{props.name}</h2>
                      <h2 className="fw-bold appartName_RoomSlide">{props.city}</h2>
                      {/* <h3>{props.type}</h3> */}
                      <h2 className="appartPrice_RoomSlide"><span className="fw-bold">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "XOF"}).format(props.daily_price)}</span>/nuit</h2> 
                    </IonCardContent>
                  </IonCard>
      // </>
    );
  
};

export default RoomSlide;
