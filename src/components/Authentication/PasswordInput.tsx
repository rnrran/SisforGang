import React from 'react';
import { IonInput, IonInputPasswordToggle } from '@ionic/react';

type Props ={
    field: string;
}

function PasswordInput(props:Props) {
  return (
    <>
      <IonInput className='ion-margin' type='password' label={props.field} labelPlacement="floating" fill="solid" placeholder="●●●●●●●●"/>
    </>
  );
}
export default PasswordInput;