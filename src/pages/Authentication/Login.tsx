import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonNavLink, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react';
import Header from '../../components/Navbar/Header';
import EmailInput from '../../components/Authentication/EmailInput';
import PasswordInput from '../../components/Authentication/PasswordInput';
import UsernameInput from '../../components/Authentication/UsernmaeInput';
import { Link, NavLink } from 'react-router-dom';
import './Login.css'

function Form() {
  return (
    <IonPage>
        <Header/>
        <IonContent>
        <IonCard color={'primary'}>
            <IonGrid className='ion-margin-top'>
                <IonRow className='navbar ion-text-center'>
                    <IonCol>
                        <img src='../../../resources/images/buatlogin.gif'></img>
                        <IonCardSubtitle className='ion-text-center'>login untuk berbagi catatan</IonCardSubtitle>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonCardHeader className='ion-margin'>
                <IonCardTitle className='ion-text-center ion-padding'>Login</IonCardTitle>

                <EmailInput/>

                <PasswordInput field='Password'/>

                <h1><IonButton expand='block' className='ion-margin' color={'success'}>Login</IonButton></h1>
            <IonCardContent class='ion-text-center'>belum mendaftar ? <span> </span>
                     <NavLink style={{color:'#2196F3'}} to='/regis'>
                          Daftar
                      </NavLink>
            </IonCardContent>
            </IonCardHeader>

        </IonCard>
        </IonContent>
  </IonPage>
  );
}
export default Form;