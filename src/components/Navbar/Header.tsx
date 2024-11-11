import {
    IonHeader,
    IonIcon,
    IonButton,
    IonTitle,
    IonToolbar,
    IonRow,
    IonSearchbar,
    IonCol
  } from '@ionic/react';

import './Header.css';

import { glasses, logInOutline } from 'ionicons/icons';

// const Header: React.FC
function Header() {
    return(
    <>
        <IonHeader>
            <IonToolbar>
                <IonRow class='ion-allign-items-center'>
                    <IonCol size='auto'>
                        <IonTitle>
                            <div className='navbar'>
                                <IonButton fill="clear" routerLink='/home'>
                                    <IonIcon icon={glasses}/>
                                </IonButton>
                            </div>
                        </IonTitle>
                    </IonCol>
                    <IonCol size='8'>
                        <div className='navbar ion-text-left' >
                            <IonButton fill="clear" routerLink='/kontributor'>Kontributor</IonButton>
                            <IonButton fill="clear" routerLink='/blog'>Blog</IonButton>
                            <IonButton fill="clear" routerLink='/catatan'>Catatan</IonButton>
                            <IonButton fill="clear" routerLink='/sumber-belajar-gratis'>Sumber Belajar</IonButton>
                            <IonButton fill="clear" routerLink='/support-us'>Apakah Ini Membantu ?</IonButton>
                        </div>
                    </IonCol>
                    <IonCol>
                        <div className='navbar ion-text-right' >
                            <div>
                                <IonSearchbar color='primary' animated={true} placeholder="Cari Konten Disini !"></IonSearchbar>
                            </div>
                        </div>
                    </IonCol>

                    <IonCol size='auto'>
                        <div className='navbar ion-text-right' >
                            <IonButton fill="solid" color={"success"} routerLink='#'>
                                <IonIcon icon={logInOutline}/>
                                Login
                            </IonButton>
                        </div>
                    </IonCol>

                </IonRow>

            </IonToolbar>
        </IonHeader>

    </>
    )
}
export default Header;

  