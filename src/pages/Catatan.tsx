import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Header from '../components/Navbar/Header';

const Catatan: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Catatan;
