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

import { glasses, logInOutline } from 'ionicons/icons';

// const Header: React.FC
function Header() {
    return(
    <>
        <IonHeader>
            <IonToolbar className='ion-padding'>
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
                    <IonCol>
                        <div className='navbar ion-text-right' >
                                <IonSearchbar className='rounded-rectangle' color='primary' animated={true} placeholder="cari apa?"></IonSearchbar>
                        </div>
                    </IonCol>

                    <IonCol size='auto'>
                        <div className='navbar ion-text-right' >
                            <IonButton fill="solid" className='rounded-rectangle' color={"success"} routerLink='#'>
                                <IonIcon icon={logInOutline}/>
                                Login
                            </IonButton>
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

  