import React from 'react';
import { IonInput } from '@ionic/react';

function UsernameInput() {
  return (
    <>
      <IonInput className='ion-margin' label="Username" labelPlacement="floating" fill="outline" placeholder="Masukan Username"></IonInput>
    </>
  );
}
export default UsernameInput;