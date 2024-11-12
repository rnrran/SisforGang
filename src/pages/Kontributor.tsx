import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import '../components/Navbar/Header';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonText,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import Header from '../components/Navbar/Header';
import { logoGithub } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Kontributor: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const teamMembers = [
    { name: 'Randy Kamal Husein', github: 'https://github.com/rnrran' },
    { name: 'Lizza Mirizza', github: 'https://github.com/Lizzamirizza' },
    { name: 'Denzel Samuel Noah Simatupang', github: 'https://github.com/mknayam16' },
    { name: 'Meisa Maharti', github: 'https://github.com/xxmeii' },
    { name: 'Dhiaz Wirayuda', github: 'https://github.com/Dayez000' }
  ];

  return (
    <IonPage id="home-page">
      <Header/>
      <IonContent fullscreen color={'dark'}>
        <IonText color="primary" className="team-title">
          <h1>Our Team</h1>
        </IonText>
        
        <IonGrid>
          {teamMembers.map((member, index) => (
            <IonRow key={index} className="team-member-row">
              <IonCol size="12">
                <IonText color="primary">
                  <h2>{member.name}</h2>
                </IonText>
                <IonRow className="social-links">
                  <IonCol>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <IonIcon icon={logoGithub} size="large" />
                    </a>
                  </IonCol>
                  {/* Additional social media icons and links can go here */}
                </IonRow>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Kontributor;