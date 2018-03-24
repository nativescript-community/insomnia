declare module "nativescript-insomnia" {

  /**
   * Make the screen not dim (and eventually lock the device).
   */
  export function keepAwake(): Promise<any>;

  /**
   * Be a good citizen and allow the device some sleep when you're done.
   */
  export function allowSleepAgain(): Promise<any>;
}
