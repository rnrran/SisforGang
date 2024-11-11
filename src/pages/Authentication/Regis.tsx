import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonNavLink, IonPage, IonRouterLink, IonRow } from '@ionic/react';
import Header from '../../components/Navbar/Header';
import EmailInput from '../../components/Authentication/EmailInput';
import PasswordInput from '../../components/Authentication/PasswordInput';
import UsernameInput from '../../components/Authentication/UsernmaeInput';
import { NavLink } from 'react-router-dom';

function Regis() {
  return (
    <IonPage>
        <Header/>
        <IonContent>
        <IonCard >
            <IonGrid className='ion-margin-top'>
                <IonRow className='navbar ion-text-center'>
                    <IonCol>
                        <img src='../../../resources/images/buatregis.gif'></img>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonCardHeader className='ion-margin'>
                <IonCardTitle className='ion-text-center ion-padding'>Register</IonCardTitle>
                <UsernameInput/>

                <EmailInput/>

                <PasswordInput/>

                {/* buat verif password */}
                <PasswordInput/>
                <h1><IonButton expand='block' className='ion-margin' color={'success'}>Regis</IonButton></h1>
            <IonCardContent class='ion-text-center'>sudah punya akun ? <span> </span>
                     <NavLink to='/login'>Login</NavLink>
            </IonCardContent>
            </IonCardHeader>

        </IonCard>
        </IonContent>
  </IonPage>
  );
}
export default Regis;