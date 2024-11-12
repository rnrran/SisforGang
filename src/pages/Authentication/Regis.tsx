import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonNavLink, IonPage, IonRouterLink, IonRow } from '@ionic/react';
import Header from '../../components/Navbar/Header';
import EmailInput from '../../components/Authentication/EmailInput';
import PasswordInput from '../../components/Authentication/PasswordInput';
import UsernameInput from '../../components/Authentication/UsernmaeInput';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { colorFill } from 'ionicons/icons';
import {auth} from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Regis() {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [passwordValidator, setPasswordValidator] = useState<string>()
    const history = useHistory();

    // const buttonTriggered = () => {
    //     if(email){
    //     console.log(email, password)
    //     }
    // }

    const handleEmailChange = (email: string) => {
        setEmail(email)
    } 

    const handlePasswordChange = (password: string)  => {
        setPassword(password)
    }

    const handlePasswordValidator = (password: string) => {
        setPasswordValidator(password)
    }

    const checkAll = async () => {
        console.log(password, passwordValidator, email)
        if (!email) {
            alert("Email belum diisi");
            return;
        }
        if (!password) {
            alert("Password belum diisi");
            return;
        }

        if (!passwordValidator) {
            alert("Verifikasi password anda !");
            return;
        }

        if (password != passwordValidator){
            alert("Kedua password tidak sama !")
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert("Registrasi sukses !");
            history.push('/')
        } catch(e: any){
            alert('Gagal Membuat Akun !')
        }
    }

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
                <EmailInput onEmailChange={handleEmailChange}/>
                <PasswordInput field='Password' onPasswordChange={handlePasswordChange}/>

                {/* buat verif password */}
                <PasswordInput field='Verify Password' onPasswordChange={handlePasswordValidator}/>
                <h1><IonButton expand='block' className='ion-margin' color={'success'} onClick={checkAll}>Regis</IonButton></h1>
            <IonCardContent class='ion-text-center'>sudah punya akun ? <span> </span>
                <NavLink style={{color:'#2196F3'}} to='/login'>
                    Login
                </NavLink>
            </IonCardContent>
            {/* <IonButton onClick={buttonTriggered}>Click me</IonButton> */}
            </IonCardHeader>

        </IonCard>
        </IonContent>
  </IonPage>
  );
}
export default Regis;