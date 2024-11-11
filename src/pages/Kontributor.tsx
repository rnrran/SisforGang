import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import '../components/Navbar/Header'
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonText,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import Header from '../components/Navbar/Header';

const Kontributor: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      
      <Header/>

      <IonContent fullscreen>
            <IonText color="primary">
                <h1>H1: The quick brown fox jumps over the lazy dog</h1>
            </IonText>
      </IonContent>

    </IonPage>
  );
};

export default Kontributor;
