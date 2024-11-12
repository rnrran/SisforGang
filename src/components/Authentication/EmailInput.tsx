import React, { useState } from 'react';
import { IonInput } from '@ionic/react';


type Props = {
  onEmailChange : (email: string) => void
}

function EmailInput({onEmailChange}: Props) {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  const triggerEventEmail = (e: any) => {
    const mail = e.target.value
    if(validateEmail(mail)){
      onEmailChange(e.target.value)
    }
  }

  return (
    <IonInput 
      className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'} ion-margin`}
      type="email"
      placeholder="Masukan Email"
      fill="solid"
      label="Email"
      labelPlacement="floating"
      helperText="email kamu bagus yah"
      errorText="masukan email yang valid !😡"
      onIonInput={(event) => validate(event)}
      onIonBlur={() => markTouched()}
      onIonChange={triggerEventEmail}
    ></IonInput>
  );
}
export default EmailInput;