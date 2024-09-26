// import { useYaPay } from "~/composables/useYaPay";

// export default defineNuxtPlugin((nuxtApp) => {
//   const yaPayService = useYaPay();

//   window.addEventListener("load", () => {
//     if (typeof window.YaPay === "undefined") {
//       console.error("YaPay не загружен");
//       return;
//     }

//     window.onYaPayLoad = () => {
//       yaPayService.createPaymentSession({
//         env: window.YaPay.PaymentEnv.Sandbox,
//         version: 4,
//         currencyCode: window.YaPay.CurrencyCode.Rub,
//         merchantId: "4d715c56-1ac9-49bc-9330-889e3487b2c1",
//         totalAmount: "15980.00",
//         availablePaymentMethods: ["CARD", "SPLIT"],
//       });
//     };
//   });

//   nuxtApp.provide("YaPayService", yaPayService);
// });
