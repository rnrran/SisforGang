import {
    IonHeader,
    IonIcon,
    IonButton,
    IonTitle,
    IonToolbar,
    IonRow,
    IonSearchbar,
    IonCol,
    IonGrid
  } from '@ionic/react';

import './Header.css';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { glasses, logInOutline, logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

// const Header: React.FC
function Header() {
    const history = useHistory()
    const logOut = async () => {
        await signOut(auth);
        alert('Logout berhasil !')
        return history.push('/')
    }
    
    // bikin header kalo udah login sama belum
    // if (!auth.currentUser?.email){console.log('current user : ' + auth.currentUser?.email)}

    const [user, setUser] = useState<any>();
    
    useEffect(() => {
        // Set up an observer for changes to the user's sign-in state
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);
    return(
    <>
        <IonHeader>
            <IonToolbar className='ion-padding' color={'dark'}>
                <IonGrid>
                <IonRow class='ion-allign-items-center'>
                    <IonCol size='auto'>
                        <IonTitle>
                                <IonButton fill="clear" routerLink='/home'>
                                    <IonIcon icon={glasses}/>
                                </IonButton>
                        </IonTitle>
                    </IonCol>

                    <IonButton fill='clear'>/</IonButton>

                    <IonCol size='8'>
                        <div className='navbar ion-text-left' >
                            <IonButton fill="clear" routerLink='/kontributor'>Kontributor</IonButton>
                            <IonButton fill="clear" routerLink='/blog'>Blog</IonButton>
                            <IonButton fill="clear" routerLink='/catatan'>Catatan</IonButton>
                            <IonButton fill="clear" routerLink='/sumber-belajar-gratis'>Sumber Belajar</IonButton>
                            <IonButton fill="clear" routerLink='/support-us'>Apakah Ini Membantu ?</IonButton>
                        </div>
                    </IonCol>
                    <IonCol sizeLg='1.5' sizeMd='10'>
                        <div className='navbar ion-text-right' >
                            <IonSearchbar className='rounded-rectangle' color='primary' placeholder="cari"></IonSearchbar>
                        </div>
                    </IonCol>

                    <IonCol size='auto'>
                        <div className='navbar ion-text-right' >
                        {user ? (
                                <IonButton fill="solid" className='rounded-rectangle' color={"danger"} onClick={logOut}>
                                    <IonIcon icon={logOutOutline} />
                                    Logout
                                </IonButton>
                            ) : (
                                <IonButton fill="solid" className='rounded-rectangle' color={"success"} routerLink='/login'>
                                    <IonIcon icon={logInOutline} />
                                    Login
                                </IonButton>
                        )}
                        </div>
                    </IonCol>

                </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    </>
    )
}
export default Header;

  