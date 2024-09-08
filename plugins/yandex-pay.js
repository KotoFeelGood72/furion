export default defineNuxtPlugin(() => {
  if (process.client) {
    window.onYaPayLoad = function () {
      const YaPay = window.YaPay;

      const paymentData = {
        env: YaPay.PaymentEnv.Sandbox,
        version: 4,
        currencyCode: YaPay.CurrencyCode.Rub,
        merchantId: "<YOUR_MERCHANT_ID>",
        totalAmount: "15980.00",
        availablePaymentMethods: ["CARD", "SPLIT"],
      };

      async function onPayButtonClick() {
        // Создание заказа и возврат URL на оплату
      }

      function onFormOpenError(reason) {
        console.error(`Payment error — ${reason}`);
      }

      YaPay.createSession(paymentData, {
        onPayButtonClick: onPayButtonClick,
        onFormOpenError: onFormOpenError,
      })
        .then(function (paymentSession) {
          paymentSession.mountButton(
            document.querySelector("#button_container"),
            {
              type: YaPay.ButtonType.Pay,
              theme: YaPay.ButtonTheme.Black,
              width: YaPay.ButtonWidth.Auto,
            }
          );
        })
        .catch(function (err) {
          console.error("Failed to create payment session:", err);
        });
    };
  }
});
