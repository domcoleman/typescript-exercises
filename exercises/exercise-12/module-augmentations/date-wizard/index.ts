// This enabled module augmentation mode.
import "date-wizard";

declare module "date-wizard" {
  export interface DateDetails {
    hours: number;
    minutes: number;
    seonds: number;
  }

  export function pad(s: number): string;
}
