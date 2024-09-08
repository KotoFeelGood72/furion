// global.d.ts
export {};

declare global {
  interface Window {
    recaptchaVerifier: any; // Указываем тип any или можешь указать точный тип RecaptchaVerifier
  }
}
