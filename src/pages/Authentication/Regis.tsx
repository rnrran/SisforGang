import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonNavLink, IonPage, IonRouterLink, IonRow } from '@ionic/react';
import Header from '../../components/Navbar/Header';
import EmailInput from '../../components/Authentication/EmailInput';
import PasswordInput from '../../components/Authentication/PasswordInput';
import UsernameInput from '../../components/Authentication/UsernmaeInput';
import { NavLink } from 'react-router-dom';
import { colorFill } from 'ionicons/icons';

function Regis() {
  return (
    <IonPage>
        <Header/>
        <IonContent color={'primary'}>
        <IonCard color={'primary'}>
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

                <PasswordInput field='Password'/>

                {/* buat verif password */}
                <PasswordInput field='Verify Password'/>
                <h1><IonButton expand='block' className='ion-margin' color={'success'}>Regis</IonButton></h1>
            <IonCardContent class='ion-text-center'>sudah punya akun ? <span> </span>
                <NavLink style={{color:'#2196F3'}} to='/login'>
                    Login
                </NavLink>
            </IonCardContent>
            </IonCardHeader>

        </IonCard>
        </IonContent>
  </IonPage>
  );
}
export default Regis;