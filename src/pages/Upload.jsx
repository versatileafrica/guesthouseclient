import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonList, IonLoading, IonPage, IonRow, IonTextarea } from '@ionic/react';
import { useState } from 'react';
import Axios from "axios";
import './Upload.css';


const Upload = ()=>{
    // const [imgArray, setimgArray] = useState([]);
    // let imagesArray = [];
    const [showLoading, setShowLoading] = useState(false);
    const [houseName, sethouseName] = useState("");
    const [description, setdescription] = useState("");
    const [pays, setpays] = useState("");
    const [ville, setville] = useState("");
    const [quartier, setquartier] = useState("");
    const [dailyPrice, setdailyPrice] = useState(0);
    const [monthlyPrice, setmonthlyPrice] = useState(0);
    const [weeklyPrice, setweeklyPrice] = useState(0);
    /*picture */
    const [pic1, setpic1] = useState("");
    const [pic1File, setpic1File] = useState("");
    const [pic2, setpic2] = useState("");
    const [pic2File, setpic2File] = useState("");
    const [pic3, setpic3] = useState("");
    const [pic3File, setpic3File] = useState("");
    const [pic4, setpic4] = useState("");
    const [pic4File, setpic4File] = useState("");
    const [pic5, setpic5] = useState("");
    const [pic5File, setpic5File] = useState("");
    const [video, setvideo] = useState("");
    const [videoFile, setvideoFile] = useState("");

    // const [userInfo, setuserInfo] = useState({
    //     file: [],
    // });
    const ern = ()=>{
        sethouseName('');
            setdescription('');
            setpic1('');
            setpic1File('');
            setpic2('');
            setpic2File('');
            setpic3('');
            setpic3File('');
            setpic4('');
            setpic4File('');
            setpic5('');
            setpic5File('');
            setvideo('');
            setvideoFile('');
            setquartier("");
            setville('');
            setpays('');
            setdailyPrice(0);
            setmonthlyPrice(0);
            setweeklyPrice(0);
    };
    const enregistrer = ()=>{
        // imagesArray = imgArray.map((file) =>{
        //     return URL.createObjectURL(file);
        // });
        
        // imagesArray = [pic1];
        // const formdata = new FormData();
        setShowLoading(true);
        Axios.post("https://backend-guesthouse.benindigital.com/newhouse", {name: houseName, description, pays, ville, quartier, dailyPrice, monthlyPrice, weeklyPrice}).then((res)=>{
            // console.log(res.data[0].id);
            ajoutImg(res.data[0].id,pic1File,1);
            ajoutImg(res.data[0].id,pic2File,2);
            ajoutImg(res.data[0].id,pic3File,3);
            ajoutImg(res.data[0].id,pic4File,4);
            ajoutImg(res.data[0].id,pic5File,5);
            ajoutImg(res.data[0].id,videoFile,6);
            sethouseName('');
            setdescription('');
            setpic1('');
            setpic1File('');
            setpic2('');
            setpic2File('');
            setpic3('');
            setpic3File('');
            setpic4('');
            setpic4File('');
            setpic5('');
            setpic5File('');
            setvideo('');
            setvideoFile('');
            setquartier("");
            setville('');
            setpays('');
            setdailyPrice(0);
            setmonthlyPrice(0);
            setweeklyPrice(0);
            setShowLoading(false);
            // formdata.append('avatar', pic1File);
            // Axios.put(`http://localhost:3001/upload/${res.data[0].id}/${1}`, formdata, {
            //     headers: {"Content-Type": "multipart/form-data"}
            // }).then((res)=>{
            //     console.log(res);
            // });
        })
        // Axios.post("http://localhost:3001/newhouse", {name: houseName}).then((res)=>{
        //     console.log(res.data[0].id);
        //     ajoutImg(res.data[0].id,pic1File,1);
        //     ajoutImg(res.data[0].id,pic2File,2);
        //     ajoutImg(res.data[0].id,pic3File,3);
        //     ajoutImg(res.data[0].id,pic4File,4);
        //     ajoutImg(res.data[0].id,pic5File,5);
        //     ajoutImg(res.data[0].id,videoFile,6);
        //     // formdata.append('avatar', pic1File);
        //     // Axios.put(`http://localhost:3001/upload/${res.data[0].id}/${1}`, formdata, {
        //     //     headers: {"Content-Type": "multipart/form-data"}
        //     // }).then((res)=>{
        //     //     console.log(res);
        //     // });
        // })
        // console.log(userInfo);
        
    };
    const ajoutImg = (i,imgFile,picnbr)=>{
        const formdata = new FormData();
        formdata.append('avatar', imgFile);
        Axios.put(`https://backend-guesthouse.benindigital.com/upload/${i}/${picnbr}`, formdata, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then((res)=>{
            console.log(res);
        });
        // Axios.put(`http://localhost:3001/upload/${i}/${picnbr}`, formdata, {
        //     headers: {"Content-Type": "multipart/form-data"}
        // }).then((res)=>{
        //     console.log(res);
        // });
    };

    const recupImg = (e)=> {
        // console.log(e.target.files[0].type)
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        // console.log(selectedFile);
        setpic1File(e.target.files[0]);
        setpic1(selectedFile);
        // setuserInfo({
        //     ...userInfo,
        //     file: e.target.files[0],
        // });
        // setimgArray([...imgArray, selectedFile]);
    };
    const recupImg2 = (e)=> {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        // console.log(selectedFile);
        setpic2File(e.target.files[0]);
        setpic2(selectedFile);
        // setimgArray([...imgArray, selectedFile])
    };
    const recupImg3 = (e)=> {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        // console.log(selectedFile);
        setpic3File(e.target.files[0]);
        setpic3(selectedFile);
        // setimgArray([...imgArray, selectedFile])
    };
    const recupImg4 = (e)=> {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        // console.log(selectedFile);
        setpic4File(e.target.files[0]);
        setpic4(selectedFile);
        // setimgArray([...imgArray, selectedFile])
    };
    const recupImg5 = (e)=> {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        // console.log(selectedFile);
        setpic5File(e.target.files[0]);
        setpic5(selectedFile);
        // setimgArray([...imgArray, selectedFile])
    };
    const recupVideo = (e)=> {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        // console.log(selectedFile);
        setvideoFile(e.target.files[0]);
        setvideo(selectedFile);
        // setimgArray([...imgArray, selectedFile])
    };

    return(
        <IonPage>
            <IonContent>
                <h1>Upload Image</h1>
                {/* <div className="ion-padding-top ion-text-center imgContainer">
                    <label htmlFor="pic1">
                        {pic1 ? (
                            <img src={pic1} alt="Image1" />
                        ):(
                            <IonIcon icon={personCircle} style={{ fontSize: '150px'}} color="medium" />
                        )}
                    </label>
                    <input type="file" id='pic1' style={{display: "none"}} onChange={recupImg} accept="image/png, image/jpeg, image/webp"/>
                </div> */}
                <IonRow>
                    <IonCol size='6'>
                        <label className='imgLabel'>
                            <h4>
                                Image1
                            </h4>
                            <input type="file" name='image' onChange={recupImg} accept="image/png, image/jpeg, image/webp" className='gImg'/>
                            <img src={pic1} alt="pic1" />
                        </label>
                    </IonCol>
                    <IonCol size='6'>
                        <label className='imgLabel'>
                            <h4>
                                Image2
                            </h4>
                            <input type="file" name='image' onChange={recupImg2} accept="image/png, image/jpeg, image/webp" className='gImg' />
                            <img src={pic2} alt="pic2" />
                        </label>
                    </IonCol>
                    <IonCol size='6'>
                        <label className='imgLabel'>
                            <h4>
                                Image3
                            </h4>
                            <input type="file" name='image' onChange={recupImg3} accept="image/png, image/jpeg, image/webp" className='gImg' />
                            <img src={pic3} alt="pic3" />
                        </label>
                    </IonCol>
                    <IonCol size='6'>
                        <label className='imgLabel'>
                            <h4>
                                Image4
                            </h4>
                            <input type="file" name='image' onChange={recupImg4} accept="image/png, image/jpeg, image/webp" className='gImg'/>
                            <img src={pic4} alt="pic4" />
                        </label>
                    </IonCol>
                    <IonCol size='6'>
                        <label className='imgLabel'>
                            <h4>
                                Image5
                            </h4>
                            <input type="file" name='image' onChange={recupImg5} accept="image/png, image/jpeg, image/webp" className='gImg' />
                            <img src={pic5} alt="pic5" />
                        </label>
                    </IonCol>
                    <IonCol size='6'>
                        <label className='imgLabel'>
                            <h4>
                                Vidéo
                            </h4>
                            <input type="file" name='image' onChange={recupVideo} accept="video/*" className='gImg' />
                            {/* <video controls >
                                <source src={video} />
                            </video> */}
                        </label>
                    </IonCol>
                </IonRow>
                <IonList>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Nom</IonLabel>
                        <IonInput value={houseName} onIonChange={(e) =>{ sethouseName(e.detail.value)}} clearInput='true' mode='ios' />
                    </IonItem>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Description</IonLabel>
                        <IonTextarea value={description} onIonChange={(e) =>{ setdescription(e.detail.value)}} mode='ios'/>
                    </IonItem>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Pays</IonLabel>
                        <IonInput value={pays} onIonChange={(e) =>{ setpays(e.detail.value)}} clearInput='true' mode='ios' />
                    </IonItem>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Ville</IonLabel>
                        <IonInput value={ville} onIonChange={(e) =>{ setville(e.detail.value)}} clearInput='true' mode='ios'/>
                    </IonItem>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Quartier</IonLabel>
                        <IonInput value={quartier} onIonChange={(e) =>{ setquartier(e.detail.value)}} clearInput='true' mode='ios'/>
                    </IonItem>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Prix/Jour</IonLabel>
                        <IonInput type='number' value={dailyPrice} onIonChange={(e) =>{ setdailyPrice(parseInt(e.detail.value))}} clearInput='true' mode='ios'/>
                    </IonItem>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Prix/Semaine</IonLabel>
                        <IonInput type='number' value={weeklyPrice} onIonChange={(e) =>{ setweeklyPrice(parseInt(e.detail.value))}} clearInput='true' mode='ios'/>
                    </IonItem>
                    <IonItem lines='inset'>
                        <IonLabel position="floating">Prix/Mois</IonLabel>
                        <IonInput type='number' value={monthlyPrice} onIonChange={(e) =>{ setmonthlyPrice(parseInt(e.detail.value))}} clearInput='true' mode='ios'/>
                    </IonItem>
                </IonList>
                <IonItem lines='none'>
                    <IonButton mode='ios' onClick={enregistrer}>Enregistrer</IonButton>
                </IonItem>
                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Patientez...'}
                    // duration={5000}
                />
                {/* <form method='POST' action="/upload" encType='multipart/form-data'>
                    <input type="file" name='image' />
                    <input type="submit" />
                </form> */}

            </IonContent>
        </IonPage>
    )
}

export default Upload;