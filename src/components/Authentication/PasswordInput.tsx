import React from 'react';
import { IonInput, IonInputPasswordToggle } from '@ionic/react';

function PasswordInput() {
  return (
    <>
      <IonInput className='ion-margin' type='password' label="Password" labelPlacement="floating" fill="solid" placeholder="●●●●●●●●"/>
    </>
  );
}
export default PasswordInput;