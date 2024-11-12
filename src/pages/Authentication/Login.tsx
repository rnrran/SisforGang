import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonNavLink, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react';
import Header from '../../components/Navbar/Header';
import EmailInput from '../../components/Authentication/EmailInput';
import PasswordInput from '../../components/Authentication/PasswordInput';
import UsernameInput from '../../components/Authentication/UsernmaeInput';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './Login.css'
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../../firebaseConfig'

function Login() {
    console.log("current user : "+auth?.currentUser?.email)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const history = useHistory();
    
    const [user, setUser] = useState<any>();
    
    useEffect(() => {
        // Set up an observer for changes to the user's sign-in state
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);


    if (user){
        history.push('/')
    }


    const handleEmailChange = (email: string) => {
        setEmail(email)
    } 

    const handlePasswordChange = (password: string)  => {
        setPassword(password)
    }

    const loginGoogle = async () => {
        try {
         await signInWithPopup(auth, googleProvider)
         alert('Login berhasil')
         return history.push('/')
        } catch(e: any) {
            console.log(e)
        }
    }

    const login = async () => {
        try {
         await signInWithEmailAndPassword(auth, email, password)
         alert('Login berhasil')
         return history.push('/')
        } catch(e: any) {
            alert("password / email salah")
        }
    }  


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

                <EmailInput onEmailChange={handleEmailChange}/>

                <PasswordInput field='Password' onPasswordChange={handlePasswordChange}/>

                <IonButton expand='block' className='ion-margin' color={'warning'} onClick={login}>Login</IonButton>
                <IonButton expand='block' className='ion-margin' color={'success'} onClick={loginGoogle}>Login Dengan Google</IonButton>

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
export default Login;