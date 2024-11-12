import React from 'react';
import { IonInput, IonInputPasswordToggle } from '@ionic/react';

type Props ={
  onPasswordChange: (email: string) => void
  field: string
}


function PasswordInput({onPasswordChange, field}:Props) {

  const handleEventChange = (e: any) => {
    onPasswordChange(e.target.value)
  }

  return (
    <>
      <IonInput 
      className='ion-margin' 
      type='password' 
      label={field} 
      labelPlacement="floating" 
      fill="solid" 
      placeholder="minimal 6 karakter !"
      onIonChange={handleEventChange}/>
    </>
  );
}
export default PasswordInput;