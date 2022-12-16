import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonPage, IonRow, IonSearchbar, IonSkeletonText, IonTitle } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { isEmptyObject } from "jquery";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import RoomSlide from "./RoomSlide";
import './SearchAppart.css';



const SearchAppart = () => {
    const [width, setWindowWidth] = useState(window.innerWidth);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

    const house = useSelector((state) => state.house.house);
    const [house1, sethouse1] = useState(useSelector((state) => state.house.house));
    // let house1 = useSelector((state) => state.house.house);
    const [showCards, setshowCards] = useState(16);
    const router = useHistory();

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    const loadData = (ev) => {
        setTimeout(() => {
            sethouse1(house.slice(0, showCards));
            // lists = Tableau1.slice(0, showcards);
            // console.log(Tableau1.slice(0, showcards));
            // pushData();
            // console.log('Loaded data');
            // console.log(Tableau1.length);
            ev.target.complete();
            if (house1.length === house.length) {
                setInfiniteDisabled(true);
            }
        }, 500);
        setshowCards(showCards + 8);
    };


    window.addEventListener("resize", updateDimensions);
    useEffect(() => {
        if (!isEmptyObject(house)) {
            sethouse1(house.slice(0, 8));
            // setshowCards(showCards + 8);
        }
    }, [house])

    /*------------------------------------------------------------------------------------------------------------ Rechercher chambre --------------------------------------------------------------------------------------------------------------------------- */
    const recherch = (e) => {
        // setSearch(e.target.value);
        sethouse1(house.filter(t => t.quartier.toLowerCase().includes(e.toLowerCase())));
        // house1 = house.filter(t => t.quartier.toLowerCase().includes(e.toLowerCase()));
    }
    /*------------------------------------------------------------------------------------------------------------ Phone affichage --------------------------------------------------------------------------------------------------------------------------- */
    if (width < 800) {
        return (
            <IonPage>
                <IonHeader className='header_searchAppart'>
                    {/* <div> */}
                    {/* <IonRouterLink color="dark"> */}
                    <IonButtons>
                        <IonButton onClick={() => router.goBack()}>
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    {/* </IonRouterLink> */}
                    <IonTitle className="title_c ion-text-center">House</IonTitle>

                    {/* </div> */}
                </IonHeader>
                <IonContent fullscreen>
                    <div className="search_Appart">
                        <IonSearchbar placeholder='Destination' color="warning" onIonChange={(e) => recherch(e.detail.value)} />
                    </div>

                    {house[0] && (
                        // <div className='houseList_searchAppart'>
                        <IonGrid>
                            {house1[0] ? (
                                // <IonRow>

                                <div className="row_appartCard_searchAppart">
                                    {house1.map((val, index) => {
                                        return (
                                            <div className="appartCard_searchAppart" key={index}>
                                                {/* <IonCol key={index} size='6'> */}
                                                <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} picture2={val.picture2} picture3={val.picture3} picture4={val.picture4} picture5={val.picture5} daily_price={val.daily_price} />
                                                {/* </IonCol> */}

                                            </div>
                                        )
                                    })}
                                </div>
                                // </IonRow>

                            ) : (
                                <div>Aucun résultat</div>
                            )}
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
                        </IonGrid>
                    )}
                    {!house[0] && (
                        <>
                            <IonRow>
                                <IonCol size="6">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: '150px' }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                </IonContent>
            </IonPage>
        )
    }/*------------------------------------------------------------------------------------------------------------ Tablette affichage --------------------------------------------------------------------------------------------------------------------------- */
    else if ((width >= 800) && (width <= 1024)) {
        return (
            <IonPage>
                <IonHeader className='header_searchAppart'>
                    {/* <div> */}
                    {/* <IonRouterLink color="dark"> */}
                    <IonButtons>
                        <IonButton onClick={() => router.goBack()}>
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    {/* </IonRouterLink> */}
                    <IonTitle className="title_searchAppart ion-text-center">House</IonTitle>

                    {/* </div> */}
                </IonHeader>
                <IonContent fullscreen>
                    <div className="search_Appart">
                        <IonSearchbar placeholder='Destination' color="warning" onIonChange={(e) => recherch(e.detail.value)} />
                    </div>

                    {house[0] && (
                        // <div className='houseList_searchAppart'>
                        <IonGrid>
                            {house1[0] ? (
                                <IonRow>
                                    {house1.map((val, index) => {
                                        return (
                                            <IonCol key={index} size='4'>
                                                <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} picture2={val.picture2} picture3={val.picture3} picture4={val.picture4} picture5={val.picture5} daily_price={val.daily_price} />
                                            </IonCol>
                                        )
                                    })}
                                </IonRow>

                            ) : (
                                <div>Aucun résultat</div>
                            )}
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
                        </IonGrid>
                    )}
                    {!house[0] && (
                        <>
                            <IonRow>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: '150px' }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="4">
                                    <IonCard style={{ height: "250px" }}>
                                        <IonSkeletonText animated style={{ height: "150px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                </IonContent>
            </IonPage>
        )
    }/*------------------------------------------------------------------------------------------------------------ PC affichage --------------------------------------------------------------------------------------------------------------------------- */
    else if (width > 1024) {
        return (
            <IonPage>
                <IonHeader className='header_searchAppart'>
                    {/* <div> */}
                    {/* <IonRouterLink color="dark"> */}
                    <IonButtons>
                        <IonButton onClick={() => router.goBack()}>
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    {/* </IonRouterLink> */}
                    <IonTitle className="title_searchAppart ion-text-center">House</IonTitle>

                    {/* </div> */}
                </IonHeader>
                <IonContent fullscreen>
                    <div className="search_Appart">
                        <IonSearchbar placeholder='Destination' color="warning" onIonChange={(e) => recherch(e.detail.value)} />
                    </div>

                    {house[0] && (
                        // <div className='houseList_searchAppart'>
                        <IonGrid>
                            {house1[0] ? (
                                <IonRow>
                                    {house1.map((val, index) => {
                                        return (
                                            <IonCol key={index} size='3'>
                                                <RoomSlide id={val.id} name={val.name} city={val.city} picture1={val.picture1} picture2={val.picture2} picture3={val.picture3} picture4={val.picture4} picture5={val.picture5} daily_price={val.daily_price} />
                                            </IonCol>
                                        )
                                    })}
                                </IonRow>

                            ) : (
                                <div>Aucun résultat</div>
                            )}
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
                        </IonGrid>
                    )}
                    {!house[0] && (
                        <>
                            <IonRow>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: '300px' }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: "300px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: "300px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: "300px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: "300px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: "300px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: "300px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="3">
                                    <IonCard style={{ height: "400px" }}>
                                        <IonSkeletonText animated style={{ height: "300px" }} />
                                        <IonCardContent style={{ height: "100px" }}>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '50%' }} /></h5>
                                            <h5> <IonSkeletonText animated style={{ width: '70%' }} /></h5>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                </IonContent>
            </IonPage>
        )
    }
};

export default SearchAppart;
